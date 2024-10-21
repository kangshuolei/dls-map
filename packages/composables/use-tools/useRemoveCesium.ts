/**
 * 用于判断它是不是dom元素
 * @param obj dom元素
 * @returns
 */
function isDOMElement(obj: any) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    obj.nodeType &&
    obj.nodeType === 1
  );
}
/**
 * 删除不同类型的图层信息
 * @param type 传不同的type，删除不同的图层，默认是删除所有（['all']）
 */
export function useRemoveCesium(type = ['all'], viewer: Cesium.Viewer) {
  if (!viewer) {
    console.error('viewer is undefined');
    return false;
  }
  if (!type) type = ['all'];
  if (viewer) {
    type.forEach((item) => {
      if (item === 'all' || item === 'entities') {
        //清除所有的 entities 实体
        viewer.entities.removeAll();
      }
      if (item === 'all' || item === 'echarts') {
        //清除绑定的echarts元素
        const children = viewer.container.childNodes;
        const keyword = 'echarts';
        children.forEach((item: any) => {
          if (isDOMElement(item)) {
            if (item.id.includes(keyword)) {
              viewer.container.removeChild(item);
            }
          }
        });
      }
      if (item === 'all' || item === 'divLabel') {
        //清除所有的div元素
        const domDiv = document.querySelectorAll('.cesium-divLabel');
        if (domDiv && domDiv.length) {
          document
            .querySelectorAll('.cesium-divLabel')
            .forEach((A) => A.remove());
        }
      }
      if (item === 'all' || item === 'dataSources') {
        //清除缓冲区的面
        viewer.dataSources.removeAll();
      }
      //清空 geo server 图层
      if (item === 'all' || item === 'imageryLayers') {
        const imageryLayers = viewer.imageryLayers;
        let obj = imageryLayers._layers;
        for (let i = obj.length - 1; i > 0; i--) {
          if (imageryLayers.indexOf(obj[i]) > 0) {
            imageryLayers.remove(obj[i], false);
          }
        }
      }
      //清空 primitive
      if (item === 'all' || item === 'primitives') {
        const primitives = viewer.scene.primitives._primitives;
        if (primitives && primitives.length) {
          primitives.forEach((item: any) => {
            if (!item.destroyPrimitives) {
              viewer.scene.primitives.remove(item);
            }
          });
        }
      }
      //清空 PostProcessStage
      if (item === 'all' || item === 'PostProcessStage') {
        //清除所有的 entities 实体
        viewer.scene.postProcessStages.removeAll();
      }
    });
  }
}

/**
 * 根据name删除entity
 * @param {String} name entity 的 name
 */
export function clearEntityByname(name: string, viewer: Cesium.Viewer) {
  if (!viewer) {
    console.error('viewer is undefined');
    return false;
  }
  let entityArr = viewer.entities.values;
  let CentityArr = entityArr.filter((v: any) => {
    if (v.name === name) {
      return v;
    }
  });
  let len = CentityArr.length;
  while (len--) {
    viewer.entities.remove(CentityArr[len]);
  }
}
