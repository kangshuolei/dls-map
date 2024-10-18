// @ts-ignore
import * as Cesium from 'cesium';
import {
  State,
  GeometryStyle,
  PolygonStyle,
  LineStyle,
  PointStyle,
  EventType,
  EventListener,
  VisibleAnimationOpts,
  GrowthAnimationOpts,
} from './interface';
import EventDispatcher from './events';
import cloneDeep from 'lodash.clonedeep';
// import merge from 'lodash.merge';
import * as Utils from './utils';

export default class Base {
  cesium: typeof Cesium;
  viewer: Cesium.Viewer;
  eventHandler: Cesium.ScreenSpaceEventHandler;
  polygonEntity: Cesium.Entity;
  geometryPoints: Cesium.Cartesian3[] = [];
  state: State = 'drawing';
  controlPoints: Cesium.EntityCollection = [];
  controlPointsEventHandler: Cesium.ScreenSpaceEventHandler;
  lineEntity: Cesium.Entity;
  pointEntity: Cesium.Entity;
  type!: 'polygon' | 'line' | 'point';
  freehand!: boolean;
  style: GeometryStyle | undefined;
  outlineEntity: Cesium.Entity;
  eventDispatcher: EventDispatcher;
  dragEventHandler: Cesium.ScreenSpaceEventHandler;
  entityId: string = '';
  points: Cesium.Cartesian3[] = [];
  styleCache: GeometryStyle | undefined;
  minPointsForShape: number = 0;
  tempLineEntity: Cesium.Entity;

  constructor(cesium: Cesium, viewer: Cesium.Viewer, style?: GeometryStyle) {
    this.cesium = cesium;
    this.viewer = viewer;
    this.type = this.getType();

    this.mergeStyle(style);
    this.cartesianToLnglat = this.cartesianToLnglat.bind(this);
    this.pixelToCartesian = this.pixelToCartesian.bind(this);
    this.eventDispatcher = new EventDispatcher();
    // 禁用双击实体的默认行为。
    viewer.trackedEntity = undefined;
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    );

    this.onClick();
  }

  mergeStyle(style: GeometryStyle | undefined) {
    if (this.type === 'polygon') {
      this.style = Object.assign(
        {
          material: new this.cesium.Color(),
          outlineMaterial: new this.cesium.Color(),
          outlineWidth: 2,
        },
        style
      );
    } else if (this.type === 'line') {
      this.style = Object.assign(
        {
          material: new this.cesium.Color(),
          lineWidth: 2,
        },
        style
      );
    } else if (this.type === 'point') {
      this.style = Object.assign(
        {
          pixelSize: 10,
          heightReference: this.cesium.HeightReference.CLAMP_TO_GROUND,
          color: this.cesium.Color.RED,
        },
        style
      );
    }
    //缓存初始设置以避免由于引用类型分配而修改属性。.
    this.styleCache = cloneDeep(this.style);
  }

  /**
   * Base Class提供了更改状态的方法，并根据状态实现不同的逻辑。
   * 状态由各个子组件根据实际情况进行控制。
   * @param State
   */
  setState(state: State) {
    this.state = state;
  }

  getState(): State {
    return this.state;
  }

  /**
   * 绑定根据状态而做出不同响应的全局单击事件。当处于绘图状态时，
   * 单击即可为几何形状添加点。在编辑过程中，选择绘制的形状将其置于
   * 可编辑状态。单击空白将其设置为静态状态。
   */
  onClick() {
    this.eventHandler = new this.cesium.ScreenSpaceEventHandler(
      this.viewer.canvas
    );
    this.eventHandler.setInputAction((evt: any) => {
      const pickedObject = this.viewer.scene.pick(evt.position);
      const hitEntities =
        this.cesium.defined(pickedObject) &&
        pickedObject.id instanceof this.cesium.Entity;
      let activeEntity = this.polygonEntity;
      if (this.type === 'line') {
        activeEntity = this.lineEntity;
      }
      if (this.type === 'point') {
        activeEntity = this.pointEntity;
      }

      if (this.state === 'drawing') {
        // 在绘制状态下，单击的点是形状的关键节点，并保存在this.points中。
        const cartesian = this.pixelToCartesian(evt.position);
        const points = this.getPoints();
        // 如果单击位于球体外部，则无法获取位置信息。
        if (!cartesian) {
          return;
        }

        // “对于非手绘形状，请验证两次连续点击之间的距离是否大于10米
        if (
          !this.freehand &&
          points.length > 0 &&
          !this.checkDistance(cartesian, points[points.length - 1])
        ) {
          return;
        }
        this.addPoint(cartesian);

        // 当绘制第一个点时触发“drawStart”。
        if (this.getPoints().length === 1) {
          this.eventDispatcher.dispatchEvent('drawStart');
        }
        this.eventDispatcher.dispatchEvent('drawUpdate', cartesian);
      } else if (this.state === 'edit') {
        // 在编辑模式下，单击当前编辑的形状外部时退出编辑状态并删除控制点。
        if (!hitEntities || activeEntity.id !== pickedObject.id.id) {
          this.setState('static');
          this.type !== 'point' ? this.removeControlPoints() : null;
          this.disableDrag();
          // 退出编辑模式时触发“drawEnd”并返回几何形状点。
          this.eventDispatcher.dispatchEvent('editEnd', this.getPoints());
        }
      } else if (this.state === 'static') {
        //绘制多个形状时，会触发所有形状的单击事件。只有当击中完成的形状时，它才能进入编辑模式。
        try {
          if (hitEntities && activeEntity.id === pickedObject.id.id) {
            const pickedGraphics =
              this.type === 'line'
                ? pickedObject.id.polyline
                : this.type === 'polygon'
                  ? pickedObject.id.polygon
                  : pickedObject.id.point;
            if (this.cesium.defined(pickedGraphics)) {
              // 点击几何形状。
              this.setState('edit');
              this.type !== 'point' ? this.addControlPoints() : null;
              this.draggable();
              this.eventDispatcher.dispatchEvent('editStart', this);
            }
          }
        } catch (e) {
          console.log('eeee', e);
        }
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_CLICK);
  }

  onMouseMove() {
    this.eventHandler.setInputAction((evt: any) => {
      const points = this.getPoints();
      const cartesian = this.pixelToCartesian(evt.endPosition);
      if (!cartesian) {
        return;
      }
      if (this.checkDistance(cartesian, points[points.length - 1])) {
        // 将数据复制到子类。如果距离小于10米，请不要继续
        this.updateMovingPoint(cartesian, points.length);
      }
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }

  onDoubleClick() {
    this.eventHandler.setInputAction((evt: any) => {
      if (this.state === 'drawing') {
        this.finishDrawing();
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
  }

  /**
   * 检查两点之间的距离是否大于10米。
   */
  checkDistance(cartesian1: Cesium.Cartesian3, cartesian2: Cesium.Cartesian3) {
    const distance = this.cesium.Cartesian3.distance(cartesian1, cartesian2);
    return distance > 10;
  }

  finishDrawing() {
    //有些多边形在绘制完整形状之前会在前两个点之间画一条单独的线;
    //绘制完成后应删除这条线。
    this.type === 'polygon' &&
      this.lineEntity &&
      this.viewer.entities.remove(this.lineEntity);

    this.removeMoveListener();
    // 可在初始绘图完成后编辑。
    this.setState('edit');
    this.type !== 'point' ? this.addControlPoints() : null;
    this.draggable();
    const entity = this.polygonEntity || this.lineEntity || this.pointEntity;
    this.entityId = entity.id;
    /**
     * “我注意到CallbackProperty可能会导致严重的性能问题。
     * 绘制多个形状后，地图变得明显滞后。使用方法
     * 像请求AnimationFrame或setInterval不提供平滑的显示方式
     * 绘制过程中的形状。作为临时解决方案，我设置了层次结构
     * 或绘制完成后位置为静态。这解决了性能
     * 问题，但引入了一个新问题：将数据设置为静态后，形状
     * 重新绘制，导致闪烁。不过，这似乎是一个相对合理的
     * 考虑到当前情况，采取的做法。"
     */
    // TODO...
    // if (this.type === 'polygon') {
    //   this.polygonEntity.polygon.hierarchy = new this.cesium.PolygonHierarchy(this.geometryPoints);
    //   this.outlineEntity.polyline.positions = [...this.geometryPoints, this.geometryPoints[0]];
    // } else if (this.type === 'line') {
    //   this.lineEntity.polyline.positions = this.geometryPoints;
    // }

    this.eventDispatcher.dispatchEvent('drawEnd', this.getPoints());
  }

  removeClickListener() {
    this.eventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_CLICK
    );
  }

  removeMoveListener() {
    this.eventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.MOUSE_MOVE
    );
  }

  removeDoubleClickListener() {
    this.eventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    );
  }

  setGeometryPoints(geometryPoints: Cesium.Cartesian3[]) {
    this.geometryPoints = geometryPoints;
  }

  getGeometryPoints(): Cesium.Cartesian3[] {
    return this.geometryPoints;
  }

  drawPolygon() {
    const callback = () => {
      return new this.cesium.PolygonHierarchy(this.geometryPoints);
    };
    if (!this.polygonEntity) {
      const style = this.style as PolygonStyle;
      this.polygonEntity = this.viewer.entities.add({
        polygon: new this.cesium.PolygonGraphics({
          hierarchy: new this.cesium.CallbackProperty(callback, false),
          show: true,
          material: style.material,
        }),
      });

      // 由于多边图形轮廓的限制，将绘制单独的线样式。
      this.outlineEntity = this.viewer.entities.add({
        polyline: {
          positions: new this.cesium.CallbackProperty(() => {
            return [...this.geometryPoints, this.geometryPoints[0]];
          }, false),
          width: style.outlineWidth,
          material: style.outlineMaterial,
          clampToGround: true,
        },
      });
    }
  }

  drawLine() {
    if (!this.lineEntity) {
      const style = this.style as LineStyle;
      this.lineEntity = this.addLineEntity(style);
    }
  }

  drawPoint() {
    if (!this.pointEntity) {
      const points = this.getPoints();
      const style = this.style as PointStyle;
      this.pointEntity = this.viewer.entities.add({
        position: points[0],
        point: {
          pixelSize: style.pixelSize,
          heightReference: style.heightReference,
          color: style.color,
        },
      });
    }
  }
  addTempLine() {
    if (!this.tempLineEntity) {
      //前两点之间的线样式与轮廓样式匹配。
      const style = this.style as PolygonStyle;
      const lineStyle = {
        material: style.outlineMaterial,
        lineWidth: style.outlineWidth,
      };
      this.tempLineEntity = this.addLineEntity(lineStyle);
    }
  }

  removeTempLine() {
    if (this.tempLineEntity) {
      this.viewer.entities.remove(this.tempLineEntity);
    }
  }

  addLineEntity(style: LineStyle) {
    const entity = this.viewer.entities.add({
      polyline: {
        positions: new this.cesium.CallbackProperty(
          () => this.geometryPoints,
          false
        ),
        width: style.lineWidth,
        material: style.material,
        clampToGround: true,
      },
    });
    return entity;
  }

  cartesianToLnglat(cartesian: Cesium.Cartesian3): [number, number] {
    const lnglat =
      this.viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
    const lat = this.cesium.Math.toDegrees(lnglat.latitude);
    const lng = this.cesium.Math.toDegrees(lnglat.longitude);
    return [lng, lat];
  }

  pixelToCartesian(position: Cesium.Cartesian2): Cesium.Cartesian3 | undefined {
    const ray = this.viewer.camera.getPickRay(position);
    const cartesian = this.viewer.scene.globe.pick(ray, this.viewer.scene);
    return cartesian;
  }

  /**
   *  创建形状时显示关键点，允许拖动这些点来编辑和生成新形状。
   */
  addControlPoints() {
    const points = this.getPoints();
    this.controlPoints = points.map((position) => {
      // return this.viewer.entities.add({
      //   position,
      //   billboard: {
      //     image: './src/assets/circle_red.png',
      //   },
      // });

      return this.viewer.entities.add({
        position,
        point: {
          pixelSize: 10,
          heightReference: this.cesium.HeightReference.CLAMP_TO_GROUND,
          color: this.cesium.Color.RED,
        },
      });
    });

    let isDragging = false;
    let draggedIcon: Cesium.Entity = null;
    let dragStartPosition: Cesium.Cartesian3;

    this.controlPointsEventHandler = new this.cesium.ScreenSpaceEventHandler(
      this.viewer.canvas
    );

    // 收听鼠标左按钮按下事件
    this.controlPointsEventHandler.setInputAction((clickEvent: any) => {
      const pickedObject = this.viewer.scene.pick(clickEvent.position);
      if (this.cesium.defined(pickedObject)) {
        for (let i = 0; i < this.controlPoints.length; i++) {
          if (pickedObject.id._id === this.controlPoints[i]._id) {
            isDragging = true;
            draggedIcon = this.controlPoints[i];
            dragStartPosition = draggedIcon.position._value;
            //保存拖曳点的索引，以便在移动期间动态更新
            draggedIcon.index = i;
            break;
          }
        }
        // 禁用默认相机交互。
        this.viewer.scene.screenSpaceCameraController.enableRotate = false;
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOWN);

    // 监听鼠标移动事件
    this.controlPointsEventHandler.setInputAction((moveEvent: any) => {
      if (isDragging && draggedIcon) {
        const cartesian = this.viewer.camera.pickEllipsoid(
          moveEvent.endPosition,
          this.viewer.scene.globe.ellipsoid
        );
        if (cartesian) {
          draggedIcon.position.setValue(cartesian);
          this.updateDraggingPoint(cartesian, draggedIcon.index);
        }
      }
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE);

    // 监听鼠标左按钮释放事件
    this.controlPointsEventHandler.setInputAction(() => {
      // 当拖动前后坐标发生变化时，触发“drawUpdate”。
      if (
        draggedIcon &&
        !this.cesium.Cartesian3.equals(
          dragStartPosition,
          draggedIcon.position._value
        )
      ) {
        this.eventDispatcher.dispatchEvent(
          'drawUpdate',
          draggedIcon.position._value
        );
      }
      isDragging = false;
      draggedIcon = null;
      this.viewer.scene.screenSpaceCameraController.enableRotate = true;
    }, this.cesium.ScreenSpaceEventType.LEFT_UP);
  }

  removeControlPoints() {
    if (this.controlPoints.length > 0) {
      this.controlPoints.forEach((entity: Cesium.Entity) => {
        this.viewer.entities.remove(entity);
      });
      this.controlPointsEventHandler.removeInputAction(
        this.cesium.ScreenSpaceEventType.LEFT_DOWN
      );
      this.controlPointsEventHandler.removeInputAction(
        this.cesium.ScreenSpaceEventType.MOUSE_MOVE
      );
      this.controlPointsEventHandler.removeInputAction(
        this.cesium.ScreenSpaceEventType.LEFT_UP
      );
    }
  }

  /**
   *  在编辑模式下允许拖动整个形状。
   */
  draggable() {
    let dragging = false;
    let startPosition: Cesium.Cartesian3 | undefined;
    this.dragEventHandler = new this.cesium.ScreenSpaceEventHandler(
      this.viewer.canvas
    );
    // console.log('this.dragEventHandler', this.dragEventHandler);
    this.dragEventHandler.setInputAction((event: any) => {
      const pickRay = this.viewer.scene.camera.getPickRay(event.position);
      if (pickRay) {
        // console.log('按下');
        const cartesian = this.viewer.scene.globe.pick(
          pickRay,
          this.viewer.scene
        );
        const pickedObject = this.viewer.scene.pick(event.position);
        if (
          this.cesium.defined(pickedObject) &&
          pickedObject.id instanceof this.cesium.Entity
        ) {
          const clickedEntity = pickedObject.id;
          if (this.isCurrentEntity(clickedEntity.id)) {
            //单击当前实例的实体会启动拖动逻辑。
            dragging = true;
            startPosition = cartesian;
            this.viewer.scene.screenSpaceCameraController.enableRotate = false;
          }
        }
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOWN);

    this.dragEventHandler.setInputAction((event: any) => {
      // console.log('dragging', dragging, startPosition);
      if (dragging && startPosition) {
        // 指定当前鼠标位置的世界坐标。
        const newPosition = this.pixelToCartesian(event.endPosition);
        if (newPosition) {
          // 计算位移量。
          const translation = this.cesium.Cartesian3.subtract(
            newPosition,
            startPosition,
            new this.cesium.Cartesian3()
          );
          if (this.type === 'point') {
            const position = this.pointEntity.position?.getValue(
              this.cesium.JulianDate.now()
            );
            const newPosition = this.cesium.Cartesian3.add(
              position,
              translation,
              new this.cesium.Cartesian3()
            );
            this.pointEntity.position?.setValue(newPosition);
          }
          const newPoints = this.geometryPoints.map((p) => {
            return this.cesium.Cartesian3.add(
              p,
              translation,
              new this.cesium.Cartesian3()
            );
          });

          //根据一个载体移动所有关键点。
          this.points = this.points.map((p) => {
            return this.cesium.Cartesian3.add(
              p,
              translation,
              new this.cesium.Cartesian3()
            );
          });

          // 以相同的方式移动控制点。
          this.controlPoints.map((p: Cesium.Entity) => {
            const position = p.position?.getValue(this.cesium.JulianDate.now());
            const newPosition = this.cesium.Cartesian3.add(
              position,
              translation,
              new this.cesium.Cartesian3()
            );
            p.position?.setValue(newPosition);
          });

          this.setGeometryPoints(newPoints);
          if (this.minPointsForShape === 4) {
            // 双箭头在整体被拖拽时，需要同步更新生长动画的插值点
            this.curveControlPointLeft = this.cesium.Cartesian3.add(
              this.curveControlPointLeft,
              translation,
              new this.cesium.Cartesian3()
            );
            this.curveControlPointRight = this.cesium.Cartesian3.add(
              this.curveControlPointRight,
              translation,
              new this.cesium.Cartesian3()
            );
          }
          startPosition = newPosition;
        }
      } else {
        const pickRay = this.viewer.scene.camera.getPickRay(event.endPosition);
        // console.log('pickRay', pickRay);
        if (pickRay) {
          const pickedObject = this.viewer.scene.pick(event.endPosition);
          if (
            this.cesium.defined(pickedObject) &&
            pickedObject.id instanceof this.cesium.Entity
          ) {
            const clickedEntity = pickedObject.id;
            // TODO 绘制的图形，需要特殊id标识，可在创建entity时指定id
            if (this.isCurrentEntity(clickedEntity.id)) {
              this.viewer.scene.canvas.style.cursor = 'move';
            } else {
              this.viewer.scene.canvas.style.cursor = 'default';
            }
          } else {
            this.viewer.scene.canvas.style.cursor = 'default';
          }
        }
      }
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE);

    // 监听鼠标释放事件以结束拖动。
    this.dragEventHandler.setInputAction(() => {
      dragging = false;
      startPosition = undefined;
      this.viewer.scene.screenSpaceCameraController.enableRotate = true;
    }, this.cesium.ScreenSpaceEventType.LEFT_UP);
  }

  // 完成编辑，禁用拖动。
  disableDrag() {
    this.dragEventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_DOWN
    );
    this.dragEventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.MOUSE_MOVE
    );
    this.dragEventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_UP
    );
  }

  show(opts: VisibleAnimationOpts) {
    if (opts) {
      const { duration, delay, callback } = opts;
      this.showWithAnimation(duration, delay, callback);
      return;
    } else {
      this.showWithAnimation(0, 0);
    }
  }

  hide(opts: VisibleAnimationOpts) {
    if (opts) {
      const { duration, delay, callback } = opts;
      this.hideWithAnimation(duration, delay, callback);
      return;
    } else {
      this.hideWithAnimation(0, 0);
    }
  }

  showWithAnimation(
    duration: number = 2000,
    delay: number = 0,
    callback?: () => void
  ) {
    if (this.state !== 'hidden') {
      // 如果不是处于静态状态或已显示，不做处理。
      return;
    }
    this.setState('static');
    if (this.type === 'polygon') {
      let alpha = 0.3;
      const material = this.styleCache.material;
      if (material.image) {
        // 纹理
        alpha = material.color.getValue().alpha;
      } else {
        alpha = material.alpha;
      }

      this.animateOpacity(
        this.polygonEntity,
        alpha,
        duration,
        delay,
        callback,
        this.state
      );
      const outlineAlpha = this.styleCache?.outlineMaterial?.alpha;
      this.animateOpacity(
        this.outlineEntity,
        outlineAlpha || 1.0,
        duration,
        delay,
        undefined,
        this.state
      );
    } else if (this.type === 'line') {
      const material = this.styleCache.material;
      let alpha = 1.0;
      if (material.image) {
        // 纹理
        alpha = material.color.alpha;
      } else if (material.dashLength) {
        // 虚线
        const color = material.color.getValue();
        alpha = color.alpha;
      } else {
        // 纯色
        alpha = this.styleCache?.material?.alpha;
      }
      this.animateOpacity(
        this.lineEntity,
        alpha,
        duration,
        delay,
        callback,
        this.state
      );
    }
    if (duration != 0) {
      this.setState('animating');
    }
  }

  hideWithAnimation(
    duration: number = 2000,
    delay: number = 0,
    callback?: () => void
  ) {
    if (this.state === 'hidden' || this.state != 'static') {
      return;
    }
    this.setState('hidden');
    if (this.type === 'polygon') {
      this.animateOpacity(
        this.polygonEntity,
        0.0,
        duration,
        delay,
        callback,
        this.state
      );
      this.animateOpacity(
        this.outlineEntity,
        0.0,
        duration,
        delay,
        undefined,
        this.state
      );
    } else if (this.type === 'line') {
      this.animateOpacity(
        this.lineEntity,
        0.0,
        duration,
        delay,
        callback,
        this.state
      );
    }
    // if (this.state == 'edit') {
    // 	this.controlPoints.forEach(p => {
    // 		this.animateOpacity(p, 0.0, duration, delay, undefined, this.state);
    // 	});
    // }
    if (duration != 0) {
      this.setState('animating');
    }
  }

  animateOpacity(
    entity: Cesium.Entity,
    targetAlpha: number,
    duration: number,
    delay: number,
    callback?: () => void,
    state?: State
  ): void {
    setTimeout(() => {
      const graphics = entity.polygon || entity.polyline || entity.billboard;
      let startAlpha: number;
      let material = graphics.material;
      if (material) {
        if (material.image && material.color.alpha !== undefined) {
          // 纹理材质，将Alpha通道设置为自定义IMAgleFlowMaterialProperty的颜色。
          startAlpha = material.color.alpha;
        } else {
          startAlpha = material.color.getValue().alpha;
        }
      } else {
        // billbord
        const color = graphics.color.getValue();
        startAlpha = color.alpha;
      }

      let startTime = 0;

      const animate = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < duration) {
          const deltalpha =
            (elapsedTime / duration) * (targetAlpha - startAlpha);
          const newAlpha = startAlpha + deltalpha;

          if (material) {
            if (material.image && material.color.alpha !== undefined) {
              // 纹理材料
              material.color.alpha = newAlpha;
            } else {
              // 纯色
              const newColor = material.color.getValue().withAlpha(newAlpha);
              material.color.setValue(newColor);
            }
          } else {
            // billbord
            const color = graphics.color.getValue();
            const newColor = color.withAlpha(newAlpha);
            graphics.color.setValue(newColor);
          }

          requestAnimationFrame(animate);
        } else {
          //  动画结束
          callback && callback();
          const restoredState = state ? state : 'static';

          // if (targetAlpha === 0) {
          //   this.setState('hidden');
          // }

          // if (duration == 0) {
          // this.setState('drawing');
          if (material) {
            if (material.image && material.color.alpha !== undefined) {
              // 纹理材料
              material.color.alpha = targetAlpha;
            } else {
              // 纯色
              const newColor = material.color.getValue().withAlpha(targetAlpha);
              material.color.setValue(newColor);
            }
          } else {
            // billbord
            const color = graphics.color.getValue();
            const newColor = color.withAlpha(targetAlpha);
            graphics.color.setValue(newColor);
          }
          requestAnimationFrame(() => {
            this.setState(restoredState);
          });
          // } else {
          // 	this.setState(restoredState);
          // }
        }
      };

      requestAnimationFrame(animate);
    }, delay);
  }

  startGrowthAnimation(opts: GrowthAnimationOpts) {
    const { duration = 2000, delay = 0, callback } = opts || {};
    if (this.state === 'hidden' || this.state != 'static') {
      return;
    }
    if (!this.minPointsForShape) {
      //这种形状不支持生长动画
      console.warn('Growth animation is not supported for this type of shape');
      return;
    }
    this.setState('animating');
    if (this.minPointsForShape === 4) {
      // 对于双箭头，需要特殊处理。
      this.doubleArrowGrowthAnimation(duration, delay, callback);
      return;
    }
    setTimeout(() => {
      this.hideWithAnimation(0, 0, undefined);
      const points = this.getPoints();

      let segmentDuration = 0;
      if (this.minPointsForShape === 2) {
        segmentDuration = duration / (points.length - 1);
      } else {
        segmentDuration = duration / (points.length - 2);
      }

      let startTime = Date.now();
      let movingPointIndex = 0;
      this.viewer.clock.shouldAnimate = true;

      const frameListener = (clock) => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
          // 动画结束
          callback && callback();
          startTime = 0;
          this.viewer.clock.shouldAnimate = false;
          this.viewer.clock.onTick.removeEventListener(frameListener);
          this.setState('static');
          return;
        }

        const currentSegment = Math.floor(elapsedTime / segmentDuration);
        let startPoint;

        if (this.minPointsForShape === 2) {
          movingPointIndex = currentSegment + 1;
        } else {
          movingPointIndex = currentSegment + 2;
        }
        startPoint = points[movingPointIndex - 1];
        if (currentSegment == 0 && this.minPointsForShape === 3) {
          // 面箭头由三个点确定，动画从连接前两个点的线的中点开始。
          startPoint = this.cesium.Cartesian3.midpoint(
            points[0],
            points[1],
            new this.cesium.Cartesian3()
          );
        }
        let endPoint = points[movingPointIndex];
        //要在startPoint和endPoint之间动态添加点，与初始绘制逻辑一致，
        //用newStatus更新points数组中index上的点movingPointIndex，
        //生成箭头，并执行动画。
        const t =
          (elapsedTime - currentSegment * segmentDuration) / segmentDuration;
        const newPosition = this.cesium.Cartesian3.lerp(
          startPoint,
          endPoint,
          t,
          new this.cesium.Cartesian3()
        );
        const tempPoints = points.slice(0, movingPointIndex + 1);
        tempPoints[tempPoints.length - 1] = newPosition;
        const geometryPoints = this.createGraphic(tempPoints);
        this.setGeometryPoints(geometryPoints);
        this.showWithAnimation(0, 0, undefined);
      };
      this.viewer.clock.onTick.addEventListener(frameListener);
    }, delay);
  }

  private doubleArrowGrowthAnimation(
    duration: number = 2000,
    delay: number = 0,
    callback?: Function
  ) {
    setTimeout(() => {
      this.hideWithAnimation(0, 0, undefined);
      const points = this.getPoints();
      let startTime = Date.now();
      this.viewer.clock.shouldAnimate = true;

      const frameListener = (clock) => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
          // 动画结束
          callback && callback();
          startTime = 0;
          this.viewer.clock.shouldAnimate = false;
          this.viewer.clock.onTick.removeEventListener(frameListener);
          this.setState('static');
          return;
        }

        // Utils.isClockWise(pnt1, pnt2, pnt3)
        const midPoint = this.cesium.Cartesian3.midpoint(
          points[0],
          points[1],
          new this.cesium.Cartesian3()
        );

        const startPointLeft = this.cesium.Cartesian3.midpoint(
          points[0],
          midPoint,
          new this.cesium.Cartesian3()
        );

        const startPointRight = this.cesium.Cartesian3.midpoint(
          midPoint,
          points[1],
          new this.cesium.Cartesian3()
        );
        let endPointLeft = points[3];
        let endPointRight = points[2];
        const t = elapsedTime / duration;
        const controlPoint = this.getBezierControlPointforGrowthAnimation();
        let curveControlPointsLeft = [
          startPointLeft,
          controlPoint.left,
          endPointLeft,
        ];
        let curveControlPointsRight = [
          startPointRight,
          controlPoint.right,
          endPointRight,
        ];
        const newPositionLeft = this.getNewPosition(curveControlPointsLeft, t);
        const newPositionRight = this.getNewPosition(
          curveControlPointsRight,
          t
        );

        // Assist in viewing exercise routes
        // this.viewer.entities.add({
        // 	position: newPositionLeft,
        // 	point: {
        // 		pixelSize: 4,
        // 		heightReference: this.cesium.HeightReference.CLAMP_TO_GROUND,
        // 		color: this.cesium.Color.RED,
        // 	},
        // });
        // this.viewer.entities.add({
        // 	position: newPositionRight,
        // 	point: {
        // 		pixelSize: 4,
        // 		heightReference: this.cesium.HeightReference.CLAMP_TO_GROUND,
        // 		color: this.cesium.Color.RED,
        // 	},
        // });
        const tempPoints = [...points];
        tempPoints[2] = newPositionRight;
        tempPoints[3] = newPositionLeft;
        const geometryPoints = this.createGraphic(tempPoints);
        this.setGeometryPoints(geometryPoints);
        this.showWithAnimation(0, 0, undefined);
      };
      this.viewer.clock.onTick.addEventListener(frameListener);
    }, delay);
  }

  private getNewPosition(curveControlPoints, t) {
    curveControlPoints = curveControlPoints.map((item) => {
      return this.cartesianToLnglat(item);
    });
    let curvePoints = Utils.getCurvePoints(0.3, curveControlPoints);
    curvePoints = curvePoints.map((p) => {
      return this.cesium.Cartesian3.fromDegrees(p[0], p[1]);
    });

    let newPosition = this.interpolateAlongCurve(curvePoints, t);
    return newPosition;
  }

  private interpolateAlongCurve(curvePoints, t) {
    const numPoints = curvePoints.length - 1;
    const index = Math.floor(t * numPoints);
    const tSegment = t * numPoints - index;
    const startPoint = curvePoints[index];
    const endPoint = curvePoints[index + 1];
    const x = startPoint.x + (endPoint.x - startPoint.x) * tSegment;
    const y = startPoint.y + (endPoint.y - startPoint.y) * tSegment;
    const z = startPoint.z + (endPoint.z - startPoint.z) * tSegment;

    return new this.cesium.Cartesian3(x, y, z);
  }

  remove() {
    if (this.type === 'polygon') {
      this.viewer.entities.remove(this.polygonEntity);
      this.viewer.entities.remove(this.outlineEntity);
      this.polygonEntity = null;
      this.outlineEntity = null;
      this.lineEntity = null;
    } else if (this.type === 'line') {
      this.viewer.entities.remove(this.lineEntity);
    } else if (this.type === 'point') {
      this.viewer.entities.remove(this.pointEntity);
    }
    this.removeClickListener();
    this.removeMoveListener();
    this.removeDoubleClickListener();
    this.removeControlPoints();
  }

  on(eventType: EventType, listener: EventListener) {
    this.eventDispatcher.on(eventType, listener);
  }

  off(eventType: EventType, listener: EventListener) {
    this.eventDispatcher.off(eventType, listener);
  }

  isCurrentEntity(id: string) {
    // return this.entityId === `CesiumPlot-${id}`;
    return this.entityId === id;
  }

  addPoint(cartesian: Cesium.Cartesian3) {
    //Abstract method that must be implemented by subclasses.
  }

  getPoints(): Cesium.Cartesian3[] {
    //Abstract method that must be implemented by subclasses.
    return [new this.cesium.Cartesian3()];
  }

  updateMovingPoint(cartesian: Cesium.Cartesian3, index?: number) {
    //Abstract method that must be implemented by subclasses.
  }

  updateDraggingPoint(cartesian: Cesium.Cartesian3, index: number) {
    //Abstract method that must be implemented by subclasses.
  }

  getType(): 'polygon' | 'line' | 'point' {
    return 'polygon';
    //Abstract method that must be implemented by subclasses.
  }

  createGraphic(points: Cesium.Cartesian3[]): Cesium.Cartesian3[] {
    //Abstract method that must be implemented by subclasses.
    return points;
  }
}
