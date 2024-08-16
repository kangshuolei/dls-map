/**
 * 根据经纬度和高度回到指定位置
 * @param {*} viewer
 * @param {*} target [lon,lat,height]
 */

export function useCesiumFlyTo(viewer: any, target: [number, number, number]) {
  if (!target[2]) target[2] = 1000000;
  if (viewer) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        target[0],
        target[1],
        target[2]
      ),
    });
  }
}

/**
 * 设置俯仰角
 * @param {*} viewer
 * @param {*} value 角度
 * @returns 1代表需要切换三维  2代表获取地图失败
 */
export function handlePitchDegrees(viewer: any, value: number) {
  if (viewer) {
    if (viewer.scene.mode === Cesium.SceneMode.SCENE3D) {
      let scene = viewer.scene;
      let camera = viewer.camera;
      let position = camera.position.clone();
      let heading = camera.heading;
      let roll = camera.roll;
      scene.camera.setView({
        destination: position,
        orientation: {
          heading: heading,
          roll,
          pitch: Cesium.Math.toRadians(value),
        },
      });
    } else {
      console.error('请先切换到三维地球模式！');
      return 1;
    }
  } else {
    console.error('获取地图失败，请刷新重试！');
    return 2;
  }
}
