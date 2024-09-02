import { Shaders } from '../../utils/Shader/Shaders';
/**
 * 私有api（底层api），不对外暴露
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
 * @param {String} pointHeight 点的高度 可选
 * @param {String} doubleClickPitch 双击pitch 可选
 * @return entity
 */
function addBillboard(
  lon: number,
  lat: number,
  imgUrl: any,
  {
    name = 'Point',
    width,
    height,
    scale,
    click = true,
    shengClick = false,
    doubleClickHeight = 5000,
    attribute = {},
    popContent,
    pointHeight,
    doubleClickPitch = -90,
  }: any,
  viewer: any
) {
  let h = pointHeight ? pointHeight : 0;
  if (!viewer) {
    console.error('viewer is undefined');
    return false;
  }
  let entity = viewer.entities.add({
    name: name,
    position: Cesium.Cartesian3.fromDegrees(lon, lat, h),
    billboard: {
      image: imgUrl,
      width: width,
      height: height,
      scale: scale,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      HorizontalOrigin: Cesium.HorizontalOrigin.CENTER,
    },
    attribute: attribute,
    click: click,
    shengClick: shengClick,
    doubleClickHeight: doubleClickHeight,
    lon: lon,
    lat: lat,
    popContent: popContent,
    doubleClickPitch: doubleClickPitch,
  });
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
  positions: any,
  material: any,
  viewer: any,
  { name = 'Line', width = 3 }
) {
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
  viewer: any,
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

function addWall(viewer: any, image: any) {
  // 1. 创建 WallGeometry 和 WallGeometryInstance
  const wallGeometry = new Cesium.WallGeometry({
    positions: Cesium.Cartesian3.fromDegreesArrayHeights([
      -115.0, 37.0, 100000, -115.0, 32.0, 100000, -107.0, 33.0, 100000, -115.0,
      37.0, 100000,
    ]),
    maximumHeights: [100000, 100000, 100000, 100000],
    minimumHeights: [0, 0, 0, 0],
  });

  const wallGeometryInstance = new Cesium.GeometryInstance({
    geometry: wallGeometry,
    attributes: {
      color: Cesium.ColorGeometryInstanceAttribute.fromColor(
        Cesium.Color.WHITE
      ),
    },
  });

  // 2. 创建自定义材质
  const areaFabric = {
    type: '111111',
    uniforms: {
      color: Cesium.Color.RED.withAlpha(0.1),
      image: image,
      time: 0,
    },
    source: _initWallCustomMaterialProperty({
      get: true,
      count: 5,
      direction: '+',
      freely: 'cross',
      duration: 3000,
    }),
  };
  console.log('areaFabric', areaFabric);
  // const areaFabric = {
  //   type: 'Wave',
  //   uniforms: {
  //     color: Cesium.Color.CYAN.withAlpha(0.7), // 波动颜色
  //     time: 0.0, // 初始时间
  //   },
  //   source: `
  //       czm_material czm_getMaterial(czm_materialInput materialInput) {
  //           czm_material material = czm_getDefaultMaterial(materialInput);
  //           vec2 st = materialInput.st;
  //           float time = czm_frameNumber / 60.0; // 动态时间
  //           float wave = sin((st.s + st.t) * 10.0 + time * 4.0); // 波动公式
  //           material.diffuse = color.rgb;
  //           material.alpha = color.a * abs(wave);
  //           return material;
  //       }`,
  // };

  // 3. 创建 WallPrimitive，并应用自定义材质
  const wallPrimitive = new Cesium.Primitive({
    geometryInstances: wallGeometryInstance,
    appearance: new Cesium.MaterialAppearance({
      areaFabric,
    }),
    asynchronous: false,
  });

  viewer.entities.add({
    name: 'aaaaa',
    wall: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        104.07263175401185, 30.647622150198725, 100000.0, 104.06369117158526,
        30.648834374000277, 100000.0, 104.06437182811021, 30.62274533905387,
        100000.0, 104.07463538167119, 30.62285687644371, 100000.0,
        104.07263175401185, 30.647622150198725, 100000.0,
      ]),
      material: _initWallCustomMaterialProperty({
        image: image,
        freely: 'cross',
        color: Cesium.Color.BLUE,
        get: true,
        count: 5,
        direction: '+',
        duration: 3000,
      }),
    },
  });

  console.log(
    '_initWallCustomMaterialProperty',
    _initWallCustomMaterialProperty({
      image: image,
      freely: 'cross',
      color: Cesium.Color.BLUE,
      get: true,
      count: 5,
      direction: '+',
      duration: 3000,
    })
  );

  // 4. 将 WallPrimitive 添加到场景中
  // viewer.scene.primitives.add(wallPrimitive);
  // 5. 调整视角以便看到墙
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(
      104.07263175401185,
      30.647622150198725,
      2000000.0
    ),
  });
}

/**
 * 动态墙材质
 * @private
 * @param {object} options
 * @param {string} options.image - 图片url
 * @param {number} options.duration - 持续时长
 * @param {Color} options.color - 颜色
 * @param {number} options.count - 频率
 * @param {string} options.freely - 方向，可选["vertical"|"cross"]
 * @param {string} options.direction - 方向,可选["-"|"+"]
 */
function _initWallCustomMaterialProperty(options: any) {
  const shaders = new Shaders();
  var Color = Cesium.Color,
    defaultValue = Cesium.defaultValue,
    defined = Cesium.defined,
    defineProperties = Object.defineProperties,
    Event = Cesium.Event,
    createPropertyDescriptor = Cesium.createPropertyDescriptor,
    Property = Cesium.Property,
    Material = Cesium.Material,
    MaterialType =
      options.MaterialType || 'wallType' + parseInt(Math.random() * 1000);
  const WallLinkCustomMaterialProperty = function (options) {
    options = defaultValue(options, defaultValue.EMPTY_OBJECT);
    this._definitionChanged = new Event();
    this._color = undefined;
    this._colorSubscription = undefined;
    this.color = options.color || Color.BLUE;
    this.duration = options.duration || 3000;
    this._time = new Date().getTime();
  };

  defineProperties(WallLinkCustomMaterialProperty.prototype, {
    isvarant: {
      get: function () {
        return false;
      },
    },
    definitionChanged: {
      get: function () {
        return this._definitionChanged;
      },
    },
    color: createPropertyDescriptor('color'),
  });
  WallLinkCustomMaterialProperty.prototype.getType = function () {
    return MaterialType;
  };
  WallLinkCustomMaterialProperty.prototype.getValue = function (time, result) {
    if (!defined(result)) {
      result = {};
    }
    result.color = Property.getValueOrClonedDefault(
      this._color,
      time,
      Color.WHITE,
      result.color
    );
    result.image = options.image;

    result.time =
      ((new Date().getTime() - this._time) % this.duration) / this.duration;
    return result;
  };
  WallLinkCustomMaterialProperty.prototype.equals = function (other) {
    return (
      this === other ||
      (other instanceof WallLinkCustomMaterialProperty &&
        Property.equals(this._color, other._color))
    );
  };
  //动态墙
  Material._materialCache.addMaterial(MaterialType, {
    fabric: {
      type: MaterialType,
      uniforms: {
        color: new Color(1.0, 1.0, 1.0, 0.5),
        image: options.image,
        time: 0,
      },
      source: shaders._getDirectionWallShader({
        get: true,
        count: options.count,
        freely: options.freely,
        direction: options.direction,
      }),
    },
    translucent: function () {
      return true;
    },
  });
  return new WallLinkCustomMaterialProperty(options);
}
export { addBillboard, addLine, addCircle, addWall };
