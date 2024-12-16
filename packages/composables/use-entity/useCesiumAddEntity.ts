import { ref, onMounted, onBeforeUnmount } from 'vue';
interface BillboardTypes extends Cesium.Entity.ConstructorOptions {
  attribute: { [key: string]: any };
}
type EntityType = 'billboard' | 'model' | 'point';

type otherOptions = {
  [key: string]: any;
};

interface billboardOptionTypes {
  type: EntityType; // 新增的字段，表示实体的类型
  name?: string;
  width?: number;
  height?: number;
  scale?: number;
  click?: boolean;
  shengClick?: boolean;
  doubleClickHeight?: number;
  attribute?: Record<string, any>;
  popContent?: string;
  pointHeight?: number;
  doubleClickPitch?: number;
  modelUrl?: string; // 模型URL
  modelScale?: number; // 模型缩放
  modelMinimumPixelSize?: number; // 模型的最小像素尺寸
  imgUrl?: string; // 图片URL
  pointColor?: Cesium.Color;
  pointOutLineColor?: Cesium.Color;
  pointSize?: number;
  pointOutlineWidth?: number;
  otherOptions?: otherOptions;
}
type LineOptionType = {
  name?: string;
  width?: number;
};
type wallOptionTypes = {
  maximumHeights?: number[];
  minimumHeights?: number[];
  alpha?: number;
  MaterialIndex?: 1 | 2 | 3 | 4;
};
export function useCesiumEntities() {
  const entities = ref<Cesium.Entity[]>([]);
  /**
   * viewer 代表 window.viewer , 所以只能在viewer挂在完后使用
   */
  /**
   * 打点billboard私有方法
   * @param {Number} lon 经度 必填
   * @param {Number} lat 纬度 必填
   * @param {String} imgUrl 图片路径 必填
   * @param {String} name 名称 可选
   * @param {Number} width 用于指定图片的宽度（以像素为单位），并覆盖原始尺寸 可选
   * @param {Number} height 用于指定图片的高度（以像素为单位），并覆盖原始尺寸 可选
   * @param {Number| Property} scale 图片缩放比例 可选
   * @param {Boolean} click 是否可点击 可选
   * @param {Number} doubleClickHeight 双击高度 可选
   * @param {Object} attribute 点属性 可选
   * @param {String} popContent 单击弹框内容 可选
   * @param {Number} pointHeight 点的高度 可选
   * @param {String} doubleClickPitch 双击pitch 可选
   * @return entity
   */
  function addPointEntity(
    lon: number,
    lat: number,
    viewer: Cesium.Viewer,
    {
      type, // 根据类型来确定是点、图片还是模型
      name = 'Point',
      width,
      height,
      scale,
      click = true,
      doubleClickHeight = 5000,
      attribute = {},
      popContent,
      pointHeight,
      doubleClickPitch = -90,
      modelUrl,
      modelScale = 1,
      modelMinimumPixelSize = 64,
      imgUrl, // 图片 URL
      pointColor = Cesium.Color.RED,
      pointOutLineColor = Cesium.Color.BLACK,
      pointSize = 10,
      pointOutlineWidth = 2,
      otherOptions,
    }: billboardOptionTypes
  ): Cesium.Entity | boolean {
    let h = pointHeight ? pointHeight : 0;
    if (!viewer) {
      console.error('viewer is undefined');
      return false;
    }

    let entityConfig: any = {
      name: name,
      position: Cesium.Cartesian3.fromDegrees(lon, lat, h),
      attribute: attribute,
      click: click,
      doubleClickHeight: doubleClickHeight,
      lon: lon,
      lat: lat,
      popContent: popContent,
      doubleClickPitch: doubleClickPitch,
    };

    // 根据type来判断实体类型，选择不同的配置
    switch (type) {
      case 'model': // 如果是模型
        if (modelUrl) {
          entityConfig.model = {
            uri: modelUrl,
            scale: modelScale,
            minimumPixelSize: modelMinimumPixelSize,
          };
          otherOptions
            ? Object.assign(entityConfig.model, { ...otherOptions })
            : null;
        } else {
          console.error('Model URL is required for model type');
          return false;
        }
        break;

      case 'billboard': // 如果是图片
        if (imgUrl) {
          entityConfig.billboard = {
            image: imgUrl,
            width: width,
            height: height,
            scale: scale,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
          };
          otherOptions
            ? Object.assign(entityConfig.billboard, { ...otherOptions })
            : null;
        } else {
          console.error('Image URL is required for billboard type');
          return false;
        }
        break;

      case 'point': // 如果是点
        entityConfig.point = {
          color: pointColor,
          pixelSize: pointSize,
          outlineColor: pointOutLineColor,
          outlineWidth: pointOutlineWidth,
        };
        otherOptions
          ? Object.assign(entityConfig.point, { ...otherOptions })
          : null;
        break;

      default:
        console.error('Unknown entity type');
        return false;
    }

    let entity = viewer.entities.add(entityConfig);
    return entity;
  }
  /**
   * 添加飞线
   * @param {*} positions 设置指定 Cartesian3 数组的属性定义线条的位置
   * @param {MaterialProperty} material 获取或设置指定用于绘制折线的材料的属性
   * @param {String} name 名称
   * @param {Number} width 宽度
   */
  function addLine(
    positions: number[],
    material: Cesium.MaterialProperty | Cesium.Color,
    viewer: Cesium.Viewer,
    { name = 'Line', width = 3 }: LineOptionType
  ): Cesium.Entity | boolean {
    if (!viewer) {
      console.error('viewer is undefined');
      return false;
    }
    let entity = viewer.entities.add({
      name: name,
      polyline: {
        positions: Cesium.Cartesian3.fromDegreesArray(positions),
        width: width,
        material: material,
      },
    });
    return entity;
  }

  /**
   *
   * @param latitude 纬度 必填
   * @param longitude 经度 必填
   * @param radius  半径 必填
   * @param color 颜色 必填
   */
  function addCircle(
    longitude: number,
    latitude: number,
    radius: number,
    color: string,
    viewer: Cesium.Viewer,
    name = 'Circle'
  ) {
    if (!viewer) {
      console.error('viewer is undefined');
      return false;
    }
    let entity = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
      ellipse: {
        semiMinorAxis: radius,
        semiMajorAxis: radius,
        material: new Cesium.ColorMaterialProperty(
          Cesium.Color.fromCssColorString(color)
        ),
      },
    });
    return entity;
  }

  /**
   * 创建动态墙
   * @param viewer
   * @param positions 墙体的经纬度组合
   * @param hexColor 墙体的颜色
   * @param alpha 墙体透明度
   * @param maximumHeights 定义了墙体顶部的高度（沿路径的每个点的高度）,墙体的顶部高度
   * @param minimumHeights 定义了墙体底部的高度。
   * @param MaterialIndex 1：上下移动条纹材质 2：闪烁材质  3：顶部到底部渐变效果  4：左右移动条纹
   */
  function addWall(
    viewer: Cesium.Viewer,
    positions: number[],
    hexColor: string,
    {
      maximumHeights = [],
      minimumHeights = [],
      alpha = 0.5,
      MaterialIndex = 1,
    }: wallOptionTypes
  ): Cesium.Primitive | boolean {
    if (!viewer) {
      console.error('viewer is undefined');
      return false;
    }
    let wallGeometry = null;
    if (
      maximumHeights &&
      minimumHeights &&
      maximumHeights.length &&
      minimumHeights.length
    ) {
      // 1. 创建 WallGeometry 和 WallGeometryInstance
      wallGeometry = new Cesium.WallGeometry({
        positions: Cesium.Cartesian3.fromDegreesArrayHeights(positions),
        maximumHeights,
        minimumHeights,
      });
    } else {
      // 1. 创建 WallGeometry 和 WallGeometryInstance
      wallGeometry = new Cesium.WallGeometry({
        positions: Cesium.Cartesian3.fromDegreesArrayHeights(positions),
      });
    }

    const wallGeometryInstance = new Cesium.GeometryInstance({
      geometry: wallGeometry,
      attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(
          Cesium.Color.WHITE
        ),
      },
    });
    let areaFabric = null;
    if (MaterialIndex === 1) {
      // 2. 创建自定义材质
      areaFabric = {
        type: 'Wave',
        uniforms: {
          color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha), // 波动颜色
          time: 0.0, // 初始时间
        },
        source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = materialInput.st;
            float time = czm_frameNumber / 60.0; // 动态时间
            float wave = sin((st.s + st.t) * 10.0 + time * 4.0); // 波动公式
            material.diffuse = color.rgb;
            material.alpha = color.a * abs(wave);
            return material;
        }`,
      };
    } else if (MaterialIndex === 2) {
      areaFabric = {
        type: 'Blinking',
        uniforms: {
          color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha), // 基础颜色
          time: 0.0, // 动态时间
        },
        source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
            czm_material material = czm_getDefaultMaterial(materialInput);
            float alpha = abs(sin(czm_frameNumber / 60.0)); // 闪烁效果
            material.diffuse = color.rgb;
            material.alpha = color.a * alpha;
            return material;
        }`,
      };
    } else if (MaterialIndex === 3) {
      areaFabric = {
        type: 'Gradient',
        uniforms: {
          color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha), // 渐变颜色
        },
        source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = materialInput.st;
            material.diffuse = color.rgb * st.t; // 渐变效果
            material.alpha = color.a;
            return material;
        }`,
      };
    } else if (MaterialIndex === 4) {
      areaFabric = {
        type: 'MovingStripe',
        uniforms: {
          color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha),
          repeat: 10.0, // 条纹重复次数
          speed: 2.0, // 条纹移动速度
          time: 0.0, // 动态时间
        },
        source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = materialInput.st;
            float time = czm_frameNumber / 60.0 * speed;
            float stripe = abs(sin(st.s * repeat + time));
            material.diffuse = color.rgb * stripe;
            material.alpha = color.a * stripe;
            return material;
        }`,
      };
    }

    // 3. 创建 WallPrimitive，并应用自定义材质
    const wallPrimitive = new Cesium.Primitive({
      geometryInstances: wallGeometryInstance,
      appearance: new Cesium.MaterialAppearance({
        material: new Cesium.Material({
          fabric: areaFabric,
        }),
        translucent: true,
      }),
      asynchronous: false,
    });

    // 4. 将 WallPrimitive 添加到场景中
    viewer.scene.primitives.add(wallPrimitive);
    // 5. 调整视角以便看到墙
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(-115.0, 37.0, 2000000.0),
    });
    return wallPrimitive;
  }
  // 移除所有实体
  const removeAllEntities = (viewer: Cesium.Viewer) => {
    entities.value.forEach((entity) => viewer.entities.remove(entity));
    entities.value = [];
  };

  //根据entity删除指定的entity
  const removeSpecifyEntity = (
    entitys: Cesium.Entity[],
    viewer: Cesium.Viewer
  ) => {
    entitys.forEach((entity: Cesium.Entity) => viewer.entities.remove(entity));
  };

  //根据指定的 Primitive删除指定的 Primitive
  const removeSpecifyPrimitive = (
    primitives: Cesium.Primitive[],
    viewer: Cesium.Viewer
  ) => {
    primitives.forEach((primitive: Cesium.Primitive) =>
      viewer.scene.primitives.remove(primitive)
    );
  };

  // 生命周期钩子：在组件挂载时执行
  onMounted(() => {
    console.log('Cesium entities initialized.');
  });

  // 生命周期钩子：在组件销毁之前执行，移除所有实体
  onBeforeUnmount(() => {
    // removeAllEntities();
    console.log('Cesium entities removed.');
  });
  return {
    addPointEntity,
    addLine,
    addCircle,
    addWall,
    removeSpecifyEntity,
    removeSpecifyPrimitive,
  };
}
