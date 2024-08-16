/**
 * @name: div.ts
 * @author: K
 * @description: div.ts
 */

interface ViewerOptions {
  viewer: any;
  height: number;
  position: [number, number];
  dom: HTMLElement | string;
  id?: string;
  className?: string;
  offset?: [number, number];
  type?: string;
}

class DlsDivLabel {
  viewer: any;
  height!: number;
  position: any;
  dom!: HTMLElement;
  id?: string;
  className?: string;
  offset?: [number, number];
  layerData!: ViewerOptions;
  vmInstance!: HTMLElement;
  dId?: string;
  show!: boolean;
  _render!: () => void;
  type?: string;

  constructor(val?: ViewerOptions) {
    if (val) {
      this.viewer = val.viewer;
      this.height = val.height;
      this.position = Cesium.Cartesian3.fromDegrees(
        val.position[0],
        val.position[1],
        val.height
      );
      this.layerData = val;
      this.vmInstance =
        typeof val.dom === 'string' ? this.createDom(val.dom) : val.dom;
      this.dId = val.id ? val.id : undefined;
      this.className = val.className ? val.className : undefined;
      this.offset = val.offset;
      this.type = val.type;

      if (!this.vmInstance || !this.vmInstance.style) {
        throw new Error('Not passing available Dom');
      }

      this.initDom();
      this.show = true;
      val.viewer.cesiumWidget.container.appendChild(this.vmInstance);
      this.addPostRender();
    }
  }

  private createDom(html: string): HTMLElement {
    const el = document.createElement('div');
    el.innerHTML = html;
    return el;
  }

  private initDom() {
    if (this.className) {
      this.vmInstance.classList.add(this.className);
    }
    if (this.dId) this.vmInstance.id = 'divLabel' + this.dId;
    this.vmInstance.style.position = 'absolute';
    this.vmInstance.style.zIndex = '5';
    this.vmInstance.addEventListener('click', () => {});
    if (!this.vmInstance.classList.contains('cesium-divLabel')) {
      this.vmInstance.classList.add('cesium-divLabel');
    }
  }

  setDom(dom: HTMLElement | string) {
    if (dom instanceof HTMLElement) {
      this.vmInstance.remove();
      this.vmInstance = dom;
      this.initDom();
    } else {
      this.vmInstance.innerHTML = dom;
    }
  }

  private addPostRender() {
    this.viewer.scene.postRender.addEventListener(this.postRender.bind(this));
    this._render = this.postRender.bind(this);
  }

  private postRender() {
    if (!this.vmInstance || !this.vmInstance.style) return;
    if (this.vmInstance.style.zIndex === '-1') return;

    const is3D = this.viewer.scene.mode === Cesium.SceneMode.SCENE3D;
    const is2D = this.viewer.scene.mode === Cesium.SceneMode.SCENE2D;

    let p_2d: any | undefined;
    if (is3D) {
      p_2d = this.viewer.scene.cartesianToCanvasCoordinates(this.position);
    } else if (is2D) {
      p_2d = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
        this.viewer.scene,
        this.position
      );
    }

    if (p_2d) {
      if (this.offset) {
        if (this.type && this.type === 'LayerPointTime') {
          this.vmInstance.style.top = p_2d.y + 'px';
          this.vmInstance.style.left = p_2d.x + this.offset[0] + 'px';
        } else {
          this.vmInstance.style.top = p_2d.y + this.offset[1] + 'px';
          const elWidth = this.vmInstance.offsetWidth;
          this.vmInstance.style.left =
            p_2d.x - elWidth / 2 + this.offset[0] + 'px';
        }
      } else {
        this.vmInstance.style.top = p_2d.y + 'px';
        const elWidth = this.vmInstance.offsetWidth;
        this.vmInstance.style.left = p_2d.x - elWidth / 2 + 'px';
      }

      const camerPosition = this.viewer.camera.position;
      let height =
        this.viewer.scene.globe.ellipsoid.cartesianToCartographic(
          camerPosition
        ).height;
      height += this.viewer.scene.globe.ellipsoid.maximumRadius;

      if (
        !(Cesium.Cartesian3.distance(camerPosition, this.position) > height) &&
        this.viewer.camera.positionCartographic.height < 50000000
      ) {
        this.vmInstance.style.display = 'block';
      } else {
        this.vmInstance.style.display = 'none';
      }
    }
  }

  changePosition(position: [number, number]) {
    if (position.length === 2) {
      this.position = Cesium.Cartesian3.fromDegrees(
        position[0],
        position[1],
        this.height
      );
    }
    return this;
  }

  removeAllDiv(id: string) {
    document.querySelectorAll(id).forEach((A) => A.remove());
  }
}

export default DlsDivLabel;
