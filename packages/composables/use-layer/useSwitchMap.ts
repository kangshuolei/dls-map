/**
 *
 * @param {*} index   //根据地图数组指定切换
 * @param {*} viewerMap //指定的viewer，默认为null
 */

type mapInfo = {
  name: string;
  url: string;
  style: string;
  format: string;
  [key: string]: any;
};

export function useSwitchMap(data: mapInfo, viewer: Cesium.Viewer) {
  if (!viewer) {
    console.error('viewer is undefined');
    return false;
  }
  //不能全部删除，因为会影响其他图层
  // viewer.imageryLayers.removeAll();
  let imageryLayer = viewer.scene.imageryLayers;
  try {
    if (imageryLayer._layers && imageryLayer._layers.length) {
      imageryLayer._layers.forEach((itemImgery: any) => {
        if (itemImgery._imageryProvider && itemImgery._imageryProvider.url) {
          imageryLayer.remove(itemImgery);
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
  if (data) {
    viewer.imageryLayers.addImageryProvider(data);
  }
}
