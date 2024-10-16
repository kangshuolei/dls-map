/*
 * @Author: Kang
 * @Date: 2024-07-22 09:02:25
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-16 15:29:16
 */
/**
 * 根据经纬度和高度回到指定位置
 * @param {*} viewer
 * @param {*} target [lon,lat,height]
 */

interface otherOption {
  heading?: number;
  pitch?: number;
  roll?: number;
  duration?: number;
}

export function useCesiumFlyTo(
  viewer: Cesium.Viewer,
  target: [number, number, number],
  options: otherOption = {}
) {
  console.log('options', options);
  if (!target[2]) target[2] = 1000000;
  if (viewer) {
    // 合并默认值和传入的选项
    const finalOptions = Object.assign(
      {
        heading: 0,
        pitch: -90,
        roll: 0,
        duration: 3,
      },
      options
    );
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        target[0],
        target[1],
        target[2]
      ),
      orientation: {
        heading: Cesium.Math.toRadians(finalOptions.heading), // 方向角，东向（以弧度表示，90度为东）
        pitch: Cesium.Math.toRadians(finalOptions.pitch), // 俯仰角，向下看30度
        roll: finalOptions.roll, // 滚转角，一般设置为0
      },
      duration: finalOptions.duration,
    });
  }
}

/**
 * 设置俯仰角
 * @param {*} viewer
 * @param {*} value 角度
 * @returns 1代表需要切换三维  2代表获取地图失败
 */
export function handlePitchDegrees(viewer: Cesium.Viewer, value: number) {
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
