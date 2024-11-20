import Particle from './Particle'; // 确保正确导入 Particle 类
import WindField from './WindField'; // 确保正确导入 WindField 类

// 常量定义
const SPEED_RATE = 0.15;
const PARTICLES_NUMBER = 2000; // 默认2000
const MAX_AGE = 10;
const BRIGHTEN = 1.5;

// Windy 的构造函数参数类型
interface WindyParams {
  json: any[]; // 风场数据
  cesiumViewer: Cesium.Viewer; // Cesium Viewer 对象
  speed: number; //风场的更新频率
}

class Windy {
  private windData: any[]; // 原始风场数据
  private windField: WindField | null = null; // 风场对象
  private particles: Particle[] = []; // 粒子数组
  private lines: Cesium.Primitive | null = null; // 当前渲染的线条
  private primitives: Cesium.PrimitiveCollection; // Cesium 场景中的 primitives
  private timerId: NodeJS.Timeout | null = null; //定时器ID，根据频率渲染风场
  private speed: number | null = 300; //风场更新频率
  public isVisible: boolean = true; //风场是否显示
  public isPaused: boolean = false; //风场移动是否暂停

  constructor({ json, cesiumViewer, speed }: WindyParams) {
    this.windData = json;
    this.primitives = cesiumViewer.scene.primitives;
    this.speed = speed;
    this._init();
  }

  private _init(): void {
    // 创建风场网格
    this.windField = this.createField();

    // 创建风场粒子
    for (let i = 0; i < PARTICLES_NUMBER; i++) {
      const particle = new Particle();
      this.particles.push(this.randomParticle(particle));
    }
  }

  private createField(): WindField {
    const data = this._parseWindJson();
    return new WindField(data);
  }

  private _parseWindJson(): {
    header: any;
    uComponent: number[];
    vComponent: number[];
  } {
    let uComponent: number[] = [];
    let vComponent: number[] = [];
    let header: any = null;

    this.windData.forEach((record) => {
      const type = `${record.header.parameterCategory},${record.header.parameterNumber}`;
      switch (type) {
        case '2,2':
          uComponent = record['data'];
          header = record['header'];
          break;
        case '2,3':
          vComponent = record['data'];
          break;
        default:
          break;
      }
    });

    return {
      header,
      uComponent,
      vComponent,
    };
  }

  animate(): void {
    if (!this.windField) return;

    const field = this.windField;
    const instances: Cesium.GeometryInstance[] = [];

    this.particles.forEach((particle) => {
      if (particle.age <= 0) {
        this.randomParticle(particle);
      }

      if (particle.age > 0) {
        const { x, y } = particle;

        if (!field.isInBound(x, y)) {
          particle.age = 0;
        } else {
          const uv = field.getIn(x, y);
          if (!uv) return;

          const nextX = x + SPEED_RATE * uv[0];
          const nextY = y + SPEED_RATE * uv[1];

          particle.path.push(nextX, nextY);
          particle.x = nextX;
          particle.y = nextY;

          instances.push(
            this._createLineInstance(
              this._map(particle.path),
              particle.age / particle.birthAge
            )
          );

          particle.age--;
        }
      }
    });

    if (instances.length <= 0) {
      this.removeLines();
    } else {
      this._drawLines(instances);
    }
  }

  // 暂停定时器
  pauseWindy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      this.isPaused = true;
    }
  }

  // 恢复定时器
  resumeWindy(): void {
    if (!this.timerId && this.isPaused) {
      this.loadWindy(); // 重新启动
    }
  }
  // 停止定时器
  stop(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      this.isPaused = false;
      console.log('定时器已停止');
    }
  }

  loadWindy(): void {
    if (this.timerId) return;
    let _selt = this;
    this.timerId = setInterval(function () {
      // _selt.callback();
      _selt.animate();
    }, this.speed);
  }

  destroyWindy() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      this.isPaused = false;
    }
    this.removeLines();
  }

  // 隐藏线条（不销毁）
  hideWindy(): void {
    if (this.lines) {
      //暂停
      this.pauseWindy();
      this.lines.show = false; // 仅隐藏
      this.isVisible = false;
    }
  }

  // 显示线条
  showWindy(): void {
    if (this.lines) {
      this.resumeWindy();
      this.lines.show = true; // 显示
      this.isVisible = true;
    }
  }

  private _map(arr: number[]): number[] {
    if (!this.windField) return [];

    const { dx, dy, west, north } = this.windField;
    const newArr: number[] = [];

    for (let i = 0; i <= arr.length - 2; i += 2) {
      newArr.push(west! + arr[i] * dx!, north! - arr[i + 1] * dy!);
    }

    return newArr;
  }

  private _createLineInstance(
    positions: number[],
    ageRate: number
  ): Cesium.GeometryInstance {
    const colors: Cesium.Color[] = [];
    const length = positions.length / 2;

    for (let i = 0; i < length; i++) {
      colors.push(
        Cesium.Color.WHITE.withAlpha((i / length) * ageRate * BRIGHTEN)
      );
    }

    return new Cesium.GeometryInstance({
      geometry: new Cesium.PolylineGeometry({
        positions: Cesium.Cartesian3.fromDegreesArray(positions),
        colors: colors,
        width: 1.5,
        colorsPerVertex: true,
      }),
    });
  }

  private _drawLines(lineInstances: Cesium.GeometryInstance[]): void {
    this.removeLines();

    const linePrimitive = new Cesium.Primitive({
      appearance: new Cesium.PolylineColorAppearance({ translucent: true }),
      geometryInstances: lineInstances,
      asynchronous: false,
    });

    this.lines = this.primitives.add(linePrimitive);
  }

  removeLines(): void {
    if (this.lines) {
      this.primitives.remove(this.lines);
      this.lines.destroy();
      this.lines = null;
    }
  }

  randomParticle(particle: Particle): Particle {
    if (!this.windField) return particle;

    let safe = 30;
    let x: number;
    let y: number;

    do {
      x = Math.floor(Math.random() * (this.windField.cols! - 2));
      y = Math.floor(Math.random() * (this.windField.rows! - 2));
    } while (this.windField.getIn(x, y)?.[2] <= 0 && safe++ < 30);

    particle.x = x;
    particle.y = y;
    particle.age = Math.round(Math.random() * MAX_AGE);
    particle.birthAge = particle.age;
    particle.path = [x, y];

    return particle;
  }
}

export default Windy;
