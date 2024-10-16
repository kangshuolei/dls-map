/*
 * @Author: Kang
 * @Date: 2024-07-04 11:39:36
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-16 10:24:04
 */
/**
 *
 * @param {*} viewType   //地图的场景类型
 * @param {*} viewerMap //指定的viewer，默认为null
 */
export function useSwitchViewPoint(
  viewType: '3d' | '2d' | '2.5d',
  viewer: Cesium.Viewer
) {
  if (!viewer) {
    console.error('viewer is undefined');
    return false;
  }
  var scene = viewer.scene;
  switch (viewType) {
    case '3d':
      scene.morphTo3D(0);
      break;
    case '2d':
      scene.morphTo2D(0);
      break;
    case '2.5d':
      scene.morphToColumbusView(0);
      break;
    default:
      break;
  }
}
