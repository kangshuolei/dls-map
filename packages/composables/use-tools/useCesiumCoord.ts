//实时获取经纬度信息
import { ref, reactive } from 'vue';

export function useCesiumCoord() {
  const coords = reactive({
    longitude: '0', //经度
    latitude: '0', //纬度
    height: '0', //视高
    altitude: '0', //海拔
    cameraHeading: '0', //方向
    pitchDegrees: '0', //俯仰角
    zoomLevel: 0, //级别
  });

  function listenToMouseMovement(viewer: any = null) {
    if (!viewer) {
      console.error('viewer is undefined');
      return false;
    }
    if (viewer) {
      let debounceTimeout: any = null;
      const camera: any = viewer.camera;
      const hander = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
      //鼠标移动实时获取经纬度
      hander.setInputAction(function (movement: any) {
        const cartesian = viewer.camera.pickEllipsoid(
          movement.endPosition,
          viewer.scene.globe.ellipsoid
        );
        if (cartesian) {
          if (debounceTimeout) {
            clearTimeout(debounceTimeout);
          }
          debounceTimeout = setTimeout(() => {
            const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            coords.longitude = Cesium.Math.toDegrees(
              cartographic.longitude
            ).toFixed(6);
            coords.latitude = Cesium.Math.toDegrees(
              cartographic.latitude
            ).toFixed(6);
          }, 300);
        }
      }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
      //鼠标点击获取海拔高度
      hander.setInputAction(function (movement: any) {
        let pick = movement.position;
        if (pick) {
          let sceneMode = viewer.scene.mode;
          //如果是在三维模式下
          if (sceneMode === Cesium.SceneMode.SCENE3D) {
            let cartesianNew = viewer.scene.globe.pick(
              viewer.camera.getPickRay(pick),
              viewer.scene
            );
            if (cartesianNew) {
              let cartographicPosition =
                Cesium.Cartographic.fromCartesian(cartesianNew);
              coords.longitude = Cesium.Math.toDegrees(
                cartographicPosition.longitude
              ).toFixed(6);
              coords.latitude = Cesium.Math.toDegrees(
                cartographicPosition.latitude
              ).toFixed(6);
              //世界坐标转地理坐标（弧度）
              let cartographic =
                viewer.scene.globe.ellipsoid.cartesianToCartographic(
                  cartesianNew
                );
              if (cartographic) {
                //海拔
                coords.altitude = viewer.scene.globe
                  .getHeight(cartographic)
                  .toFixed(2);
              }
            }
          } else {
            //如果是在二维情况下
            let cartesian = viewer.camera.pickEllipsoid(
              pick,
              viewer.scene.globe.ellipsoid
            );
            if (cartesian !== undefined) {
              let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
              let longitude_num = Cesium.Math.toDegrees(cartographic.longitude);
              let latitude_num = Cesium.Math.toDegrees(cartographic.latitude);
              coords.longitude = longitude_num.toFixed(6);
              coords.latitude = latitude_num.toFixed(6);
            }
          }
        }
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
      //鼠标缩放获取相机的高度
      hander.setInputAction(function (wheelment: any) {
        coords.height = viewer.camera.positionCartographic.height.toFixed(1);
        let zoom = heightToZoom(
          Math.ceil(viewer.camera.positionCartographic.height)
        );
        coords.zoomLevel = zoom;
      }, Cesium.ScreenSpaceEventType.WHEEL);
      //倾斜地球时获取倾斜角度和方向
      viewer.scene.camera.moveEnd.addEventListener(function () {
        //获取相机方向向量
        let cameraDirection = camera.direction;
        //计算相机方向的方位角（以度为单位）
        let cameraHeadingData = Cesium.Math.toDegrees(
          Math.atan2(cameraDirection.y, cameraDirection.x)
        );
        //将角度限制在 0 到 360 之间
        coords.cameraHeading = ((cameraHeadingData + 360) % 360).toFixed(0);
        //获取相机俯仰角
        let pitch = camera.pitch;
        //将俯仰角转换为度数
        coords.pitchDegrees = Cesium.Math.toDegrees(pitch).toFixed(0);
      });
    }
  }
  function heightToZoom(height: any) {
    let A = 40487.57;
    let B = 0.00007096758;
    let C = 91610.74;
    let D = -40467.74;
    return Math.round(D + (A - D) / (1 + Math.pow(height / C, B)));
  }
  return {
    listenToMouseMovement,
    coords,
  };
}
