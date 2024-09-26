import {
  buffer,
  polygon,
  rhumbBearing
} from "./chunk-ZUHWOTBE.js";
import {
  require_lodash
} from "./chunk-KNYEOAKQ.js";
import {
  computed,
  createBlock,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  nextTick,
  normalizeClass,
  onMounted,
  openBlock,
  reactive,
  ref,
  renderSlot
} from "./chunk-IYJFJSQY.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/dls-map/es/components/src/dlsButton/dlsButton.vue2.mjs
import "/Users/kangshuolei/Desktop/code/dls-map/site/node_modules/dls-map/es/components/src/dlsButton/style/index.css";

// node_modules/dls-map/es/components/src/dlsButton/types.mjs
var ButtonType = [
  "primary",
  "success",
  "info",
  "warning",
  "danger",
  "text"
];
var ButtonSize = ["midium", "small", "mini"];
var buttonProps = {
  type: {
    type: String,
    validator(value) {
      return ButtonType.includes(value);
    }
  },
  size: {
    type: String,
    validator(value) {
      return ButtonSize.includes(value);
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean
};
var buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};

// node_modules/dls-map/es/components/src/dlsButton/dlsButton.vue2.mjs
var _sfc_main = defineComponent({
  name: "dls-button",
  props: buttonProps,
  emits: buttonEmits,
  setup(props, ctx) {
    const { emit } = ctx;
    const handleButtonClick = (evt) => {
      emit("click", evt);
    };
    const styleClass = computed(() => {
      return {
        [`k-button--${props.type}`]: props.type,
        "is-plain": props.plain,
        "is-round": props.round,
        "is-disabled": props.disabled,
        [`k-button--${props.size}`]: props.size
      };
    });
    return {
      styleClass,
      handleButtonClick
    };
  }
});

// node_modules/dls-map/es/_virtual/_plugin-vue_export-helper.mjs
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

// node_modules/dls-map/es/components/src/dlsButton/dlsButton.vue.mjs
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleButtonClick && _ctx.handleButtonClick(...args)),
    class: normalizeClass(["k-button", _ctx.styleClass])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var _Button = _export_sfc(_sfc_main, [["render", _sfc_render]]);

// node_modules/dls-map/es/utils/Shader/Shaders.mjs
function Shaders() {
}
Shaders.prototype = {
  // 流动线
  _getFlowLineShader: function() {
    return "uniform vec4 color;\n              uniform float duration;\n              \n              czm_material czm_getMaterial(czm_materialInput materialInput){\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  vec2 st = materialInput.st;\n                  float t =fract(czm_frameNumber / duration);\n                  t *= 1.03;\n                  float alpha = smoothstep(t- 0.03, t, st.s) * step(-t, -st.s);\n                  alpha += 0.1;\n                  vec4 fragColor;\n                  fragColor.rgb = (color.rgb) / 0.5;\n                  fragColor = czm_gammaCorrect(fragColor);\n                  material.diffuse = fragColor.rgb;\n                  material.alpha = alpha;\n                  material.emission = fragColor.rgb;\n                  return material;\n              }\n              ";
  },
  // 动态线
  _getDynamicLineShader: function(options) {
    if (options && options.get) {
      return "czm_material czm_getMaterial(czm_materialInput materialInput)\n              {\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  vec2 st = materialInput.st;\n                  \n                  if(texture(image, vec2(0.0, 0.0)).a == 1.0){\n                      discard;\n                  }else{\n                      material.alpha = texture(image, vec2(1.0 - fract(time - st.s), st.t)).a * color.a;\n                  }\n                  \n                  material.diffuse = max(color.rgb * material.alpha * 3.0, color.rgb);\n                  \n                  return material;\n              }\n              ";
    }
  },
  // 动态泛光线
  _getDynamicLightLineShader: function(options) {
    if (options && options.get) {
      return "czm_material czm_getMaterial(czm_materialInput materialInput)\n              {\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  vec2 st = materialInput.st;\n                  \n                  vec4 colorImage = texture(image, vec2(fract(1.0 *st.s - time), fract(st.t)));\n                  \n                  vec4 fragColor;\n                  fragColor.rgb = (colorImage.rgb+color.rgb) / 1.0;\n                  fragColor = czm_gammaCorrect(fragColor);\n                  material.diffuse = colorImage.rgb;\n                  material.alpha = colorImage.a;\n                  material.emission = fragColor.rgb;\n                  \n                  return material;\n              }\n              ";
    }
  },
  //带方向的墙体
  _getDirectionWallShader: function(options) {
    if (options && options.get) {
      var materail = "czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  vec2 st = materialInput.st;\n                  \n ";
      if (options.freely == "vertical") {
        materail += "vec4 colorImage = texture(image, vec2(fract(float(" + options.count + ")*st.t " + options.direction + " time), fract(st.s)));\n ";
      } else {
        materail += "vec4 colorImage = texture(image, vec2(fract(float(" + options.count + ")*st.s " + options.direction + " time), fract(st.t)));\n ";
      }
      materail += "vec4 fragColor;\n                  fragColor.rgb = (colorImage.rgb+color.rgb) / 1.0;\n                  fragColor = czm_gammaCorrect(fragColor);\n ";
      materail += " material.diffuse = colorImage.rgb;\n                  material.alpha = colorImage.a;\n                  material.emission = fragColor.rgb;\n                  \n                  return material;\n                  }\n                  ";
      return materail;
    }
  },
  _getCircleFadeShader: function(options) {
    if (options && options.get) {
      return `czm_material czm_getMaterial(czm_materialInput materialInput)
                
                  {
                    
                      czm_material material = czm_getDefaultMaterial(materialInput);
                    
                      material.diffuse = 1.5 * color.rgb;
                    
                      vec2 st = materialInput.st;
                    
                      float dis = distance(st, vec2(0.5, 0.5));
                    
                      float per = fract(time);
                    
                      if(dis > per * 0.5){
                        
                          //material.alpha = 0.0;
                        
                          discard;
                    
                      }else {
                            
                          material.alpha = color.a  * dis / per / 2.0;
                    
                      }
                    
                      return material;
                
                  }`;
    }
  },
  // 波动圆
  _getDynamicCircleShader: function(options) {
    if (options && options.get) {
      return "uniform vec4 color;\n              uniform float duration;\n              uniform float count;\n              uniform float gradient;\n              \n              czm_material czm_getMaterial(czm_materialInput materialInput)\n              {\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  material.diffuse = 1.5 * color.rgb;\n                  vec2 st = materialInput.st;\n                  vec3 str = materialInput.str;\n                  float dis = distance(st, vec2(0.5, 0.5));\n                  float per = fract(czm_frameNumber / duration);\n                  if(abs(str.z) > 0.001){\n                      discard;\n                  }\n                  if(dis > 0.5){\n                      discard;\n                  } else {\n                      float perDis = 0.5 / count;\n                      float disNum;\n                      float bl = .0;\n                      for (int i = 0; i <= 10; i++) {\n                          if (float(i) <= count) {\n                              disNum = perDis * float(i) - dis + per / count;\n                              if (disNum > 0.0) {\n                                  if (disNum < perDis) {\n                                      bl = 1.0 - disNum / perDis;\n                                  } else if (disNum - perDis < perDis) {\n                                      bl = 1.0 - abs(1.0 - disNum / perDis);\n                                  }\n                                  material.alpha = pow(bl, gradient);\n                              }\n                          }\n                      }\n                  }\n                  return material;\n              }\n              ";
    }
  },
  // 雷达扫描
  _getRadarScanShader: function(options) {
    if (options && options.get) {
      return "uniform sampler2D colorTexture;\n              uniform sampler2D depthTexture;\n              in vec2 v_textureCoordinates;\n              uniform vec4 u_scanCenterEC;\n              uniform vec3 u_scanPlaneNormalEC;\n              uniform vec3 u_scanLineNormalEC;\n              out vec4 myOutputColor;\n              uniform float u_radius;\n              uniform vec4 u_scanColor;\n              \n              vec4 toEye(in vec2 uv, in float depth){\n              vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n              vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);\n              posInCamera =posInCamera / posInCamera.w;\n              return posInCamera;\n              }\n              \n              bool isPointOnLineRight(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt){\n              vec3 v01 = testPt - ptOnLine;\n              normalize(v01);\n              vec3 temp = cross(v01, lineNormal);\n              float d = dot(temp, u_scanPlaneNormalEC);\n              return d > 0.5;\n              }\n              \n              vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point){\n              vec3 v01 = point -planeOrigin;\n              float d = dot(planeNormal, v01) ;\n              return (point - planeNormal * d);\n              }\n              \n              float distancePointToLine(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt){\n              vec3 tempPt = pointProjectOnPlane(lineNormal, ptOnLine, testPt);\n              return length(tempPt - ptOnLine);\n              }\n              \n              float getDepth(in vec4 depth){\n              float z_window = czm_unpackDepth(depth);\n              z_window = czm_reverseLogDepth(z_window);\n              float n_range = czm_depthRange.near;\n              float f_range = czm_depthRange.far;\n              return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n              }\n              \n              void main(){\n              myOutputColor = texture(colorTexture, v_textureCoordinates);\n              float depth = getDepth( texture(depthTexture, v_textureCoordinates));\n              vec4 viewPos = toEye(v_textureCoordinates, depth);\n              vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n              float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n              float twou_radius = u_radius * 2.0;\n              if(dis < u_radius){\n                  float f0 = 1.0 -abs(u_radius - dis) / u_radius;\n                  f0 = pow(f0, 64.0);\n                  vec3 lineEndPt = vec3(u_scanCenterEC.xyz) + u_scanLineNormalEC * u_radius;\n                  float f = 0.0;\n                  if(isPointOnLineRight(u_scanCenterEC.xyz, u_scanLineNormalEC.xyz, prjOnPlane.xyz)){\n                      float dis1= length(prjOnPlane.xyz - lineEndPt);\n                      f = abs(twou_radius -dis1) / twou_radius;\n                      f = pow(f, float(" + options.width + "));\n                  }\n                  if(float(" + options.border + ") > 0.0){\n                    myOutputColor = mix(myOutputColor, u_scanColor, f + f0);\n                  } else {\n                    myOutputColor = mix(myOutputColor, u_scanColor, f);\n                  }\n                  }\n              }\n              ";
    }
  },
  // 圆形扫描
  _getCircleScanShader: function(options) {
    if (options && options.get) {
      return "uniform sampler2D colorTexture;\n              uniform sampler2D depthTexture;\n              in vec2 v_textureCoordinates;\n              uniform vec4 u_scanCenterEC;\n              uniform vec3 u_scanPlaneNormalEC;\n              uniform float u_radius;\n              out vec4 myOutputColor;\n              uniform vec4 u_scanColor;\n              \n              vec4 toEye(in vec2 uv, in float depth){\n                vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n                vec4 posInCamera = czm_inverseProjection * vec4(xy, depth, 1.0);\n                posInCamera =posInCamera / posInCamera.w;\n                return posInCamera;\n              }\n              \n              vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point){\n                  vec3 v01 = point - planeOrigin;\n                  float d = dot(planeNormal, v01) ;\n                  return (point - planeNormal * d);\n              }\n              \n              float getDepth(in vec4 depth){\n                  float z_window = czm_unpackDepth(depth);\n                  z_window = czm_reverseLogDepth(z_window);\n                  float n_range = czm_depthRange.near;\n                  float f_range = czm_depthRange.far;\n                  return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n              }\n              \n              void main(){\n                myOutputColor = texture(colorTexture, v_textureCoordinates);\n                  float depth = getDepth(texture(depthTexture, v_textureCoordinates));\n                  vec4 viewPos = toEye(v_textureCoordinates, depth);\n                  vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n                  float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n                  if(dis < u_radius){\n                    float f = 1.0 - abs(u_radius - dis) / u_radius;\n                    f = pow(f, float(" + options.border + "));\n                    myOutputColor = mix(myOutputColor, u_scanColor, f);\n                  }\n                }\n                ";
    }
  }
};

// node_modules/dls-map/es/utils/withinstall/index.mjs
var withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
var withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};

// node_modules/dls-map/es/components/src/dlsButton/index.mjs
var DlsButton = withInstall(_Button);

// node_modules/dls-map/es/components/src/dlsMap/dlsMap.vue.mjs
import "/Users/kangshuolei/Desktop/code/dls-map/site/node_modules/dls-map/es/components/src/dlsMap/style/index.css";

// node_modules/dls-map/es/components/src/dlsMap/types.mjs
var mapProps = {
  mapConfig: {
    type: Object
    // required: true,
  },
  viewerConfig: {
    type: Object
    // required: false,
  },
  viewerWidth: {
    type: String,
    require: false
  },
  viewerHeight: {
    type: String,
    require: false
  }
};
var mapEmits = {
  cesiumReady: (payload) => true
};

// node_modules/dls-map/es/components/src/dlsMap/LoadingSpinner.vue.mjs
var _sfc_main2 = {
  name: "LoadingSpinner"
};
var _hoisted_1 = { class: "loading-spinner" };
function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, "Loading...");
}
var LoadingSpinner = _export_sfc(_sfc_main2, [["render", _sfc_render2], ["__scopeId", "data-v-1b657085"]]);

// node_modules/dls-map/es/components/src/dlsMap/dlsMap.vue.mjs
var _hoisted_12 = { key: 0 };
var _hoisted_2 = ["id"];
var __default__ = defineComponent({ name: "dls-map" });
var _sfc_main3 = defineComponent({
  ...__default__,
  props: mapProps,
  emits: mapEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const mapConfig = props.mapConfig;
    const viewer = ref(null);
    const dataM = reactive({
      isCesiumLoaded: false,
      isClient: false
    });
    const containerId = computed(() => {
      return (mapConfig == null ? void 0 : mapConfig.id) || "cesiumContainer";
    });
    const checkCesium = () => {
      const checkInterval = setInterval(() => {
        try {
          if (Cesium) {
            dataM.isCesiumLoaded = true;
            nextTick(() => {
              clearInterval(checkInterval);
              initializeCesium();
            });
          }
        } catch (error) {
        }
      }, 100);
    };
    const initializeCesium = () => {
      if (mapConfig == null ? void 0 : mapConfig.defaultAccessToken) {
        Cesium.Ion.defaultAccessToken = mapConfig.defaultAccessToken;
      }
      let viewerMap = new Cesium.Viewer(containerId.value, {
        // 不显示基础图层选择器
        baseLayerPicker: false,
        // 不显示地址搜索栏
        geocoder: false,
        // 不显示动画控件（如播放、暂停按钮）
        animation: false,
        // 启用或禁用场景动画
        shouldAnimate: true,
        // 不显示返回主页按钮
        homeButton: false,
        // 场景模式设置为2D或3D，根据 `mapConfig.sceneMode` 来决定
        sceneMode: (mapConfig == null ? void 0 : mapConfig.sceneModeNum) === 2 ? Cesium.SceneMode.SCENE2D : Cesium.SceneMode.SCENE3D,
        // 不显示时间轴
        timeline: false,
        // 不显示全屏按钮
        fullscreenButton: false,
        // 允许切换2D/3D模式
        scene3DOnly: false,
        // 不显示2D/3D视图模式切换按钮
        sceneModePicker: false,
        // 不显示导航帮助信息
        navigationInstructionsInitiallyVisible: false,
        // 不显示导航帮助按钮
        navigationHelpButton: false,
        // 不显示选择指示器
        selectionIndicator: false,
        // 不显示信息窗口
        infoBox: false,
        // 不使用默认影像提供者
        imageryProvider: false,
        ...props.viewerConfig
      });
      var canvas = viewerMap.scene.canvas;
      canvas.style.width = props.viewerWidth || "100%";
      canvas.style.height = props.viewerHeight || "100%";
      if ((mapConfig == null ? void 0 : mapConfig.defaultAccessToken) || (mapConfig == null ? void 0 : mapConfig.imageryProvider)) {
        viewerMap.imageryLayers.addImageryProvider(
          new Cesium.UrlTemplateImageryProvider(mapConfig == null ? void 0 : mapConfig.imageryProvider)
        );
      }
      viewerMap.cesiumWidget.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );
      viewer.value = viewerMap;
      emits("cesiumReady", viewer.value);
    };
    onMounted(() => {
      dataM.isClient = true;
      checkCesium();
    });
    __expose({
      dataM,
      viewer
    });
    return (_ctx, _cache) => {
      return dataM.isClient ? (openBlock(), createElementBlock("div", _hoisted_12, [
        dataM.isCesiumLoaded ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: containerId.value,
          style: { "position": "absolute", "width": "100%", "height": "100%" },
          class: "dlsMapContainer"
        }, null, 8, _hoisted_2)) : (openBlock(), createBlock(LoadingSpinner, { key: 1 }))
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/dls-map/es/components/src/dlsMap/index.mjs
var DlsMap = withInstall(_sfc_main3);

// node_modules/dls-map/es/composables/use-layer/useSwitchMap.mjs
function useSwitchMap(data, viewer) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let imageryLayer = viewer.scene.imageryLayers;
  try {
    if (imageryLayer._layers && imageryLayer._layers.length) {
      imageryLayer._layers.forEach((itemImgery) => {
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

// node_modules/dls-map/es/composables/use-tools/useCesiumCoord.mjs
function useCesiumCoord() {
  const coords = reactive({
    longitude: "0",
    //经度
    latitude: "0",
    //纬度
    height: "0",
    //视高
    altitude: "0",
    //海拔
    cameraHeading: "0",
    //方向
    pitchDegrees: "0",
    //俯仰角
    zoomLevel: 0
    //级别
  });
  function listenToMouseMovement(viewer = null) {
    if (!viewer) {
      console.error("viewer is undefined");
      return false;
    }
    if (viewer) {
      let debounceTimeout = null;
      const camera = viewer.camera;
      const hander = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
      hander.setInputAction(function(movement) {
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
      hander.setInputAction(function(movement) {
        let pick = movement.position;
        if (pick) {
          let sceneMode = viewer.scene.mode;
          if (sceneMode === Cesium.SceneMode.SCENE3D) {
            let cartesianNew = viewer.scene.globe.pick(
              viewer.camera.getPickRay(pick),
              viewer.scene
            );
            if (cartesianNew) {
              let cartographicPosition = Cesium.Cartographic.fromCartesian(cartesianNew);
              coords.longitude = Cesium.Math.toDegrees(
                cartographicPosition.longitude
              ).toFixed(6);
              coords.latitude = Cesium.Math.toDegrees(
                cartographicPosition.latitude
              ).toFixed(6);
              let cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(
                cartesianNew
              );
              if (cartographic) {
                coords.altitude = viewer.scene.globe.getHeight(cartographic).toFixed(2);
              }
            }
          } else {
            let cartesian = viewer.camera.pickEllipsoid(
              pick,
              viewer.scene.globe.ellipsoid
            );
            if (cartesian !== void 0) {
              let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
              let longitude_num = Cesium.Math.toDegrees(cartographic.longitude);
              let latitude_num = Cesium.Math.toDegrees(cartographic.latitude);
              coords.longitude = longitude_num.toFixed(6);
              coords.latitude = latitude_num.toFixed(6);
            }
          }
        }
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
      hander.setInputAction(function(wheelment) {
        coords.height = viewer.camera.positionCartographic.height.toFixed(1);
        let zoom = heightToZoom(
          Math.ceil(viewer.camera.positionCartographic.height)
        );
        coords.zoomLevel = zoom;
      }, Cesium.ScreenSpaceEventType.WHEEL);
      viewer.scene.camera.moveEnd.addEventListener(function() {
        let cameraDirection = camera.direction;
        let cameraHeadingData = Cesium.Math.toDegrees(
          Math.atan2(cameraDirection.y, cameraDirection.x)
        );
        coords.cameraHeading = ((cameraHeadingData + 360) % 360).toFixed(0);
        let pitch = camera.pitch;
        coords.pitchDegrees = Cesium.Math.toDegrees(pitch).toFixed(0);
      });
    }
  }
  function heightToZoom(height) {
    let A = 40487.57;
    let B = 7096758e-11;
    let C = 91610.74;
    let D = -40467.74;
    return Math.round(D + (A - D) / (1 + Math.pow(height / C, B)));
  }
  return {
    listenToMouseMovement,
    coords
  };
}

// node_modules/dls-map/es/composables/use-tools/useCesiumUtils.mjs
function useCesiumFlyTo(viewer, target) {
  if (!target[2]) target[2] = 1e6;
  if (viewer) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        target[0],
        target[1],
        target[2]
      )
    });
  }
}
function handlePitchDegrees(viewer, value) {
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
          heading,
          roll,
          pitch: Cesium.Math.toRadians(value)
        }
      });
    } else {
      console.error("请先切换到三维地球模式！");
      return 1;
    }
  } else {
    console.error("获取地图失败，请刷新重试！");
    return 2;
  }
}

// node_modules/dls-map/es/composables/use-tools/useRemoveCesium.mjs
function isDOMElement(obj) {
  return typeof obj === "object" && obj !== null && obj.nodeType && obj.nodeType === 1;
}
function useRemoveCesium(type = ["all"], viewer) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  if (!type) type = ["all"];
  if (viewer) {
    type.forEach((item) => {
      if (item === "all" || item === "entities") {
        viewer.entities.removeAll();
      }
      if (item === "all" || item === "echarts") {
        const children = viewer.container.childNodes;
        const keyword = "echarts";
        children.forEach((item2) => {
          if (isDOMElement(item2)) {
            if (item2.id.includes(keyword)) {
              viewer.container.removeChild(item2);
            }
          }
        });
      }
      if (item === "all" || item === "divLabel") {
        const domDiv = document.querySelectorAll(".cesium-divLabel");
        if (domDiv && domDiv.length) {
          document.querySelectorAll(".cesium-divLabel").forEach((A) => A.remove());
        }
      }
      if (item === "all" || item === "dataSources") {
        viewer.dataSources.removeAll();
      }
      if (item === "all" || item === "imageryLayers") {
        const imageryLayers = viewer.imageryLayers;
        let obj = imageryLayers._layers;
        for (let i = obj.length - 1; i > 0; i--) {
          if (imageryLayers.indexOf(obj[i]) > 0) {
            imageryLayers.remove(obj[i], false);
          }
        }
      }
      if (item === "all" || item === "primitives") {
        const primitives = viewer.scene.primitives._primitives;
        if (primitives && primitives.length) {
          primitives.forEach((item2) => {
            if (!item2.destroyPrimitives) {
              viewer.scene.primitives.remove(item2);
            }
          });
        }
      }
      if (item === "all" || item === "PostProcessStage") {
        viewer.scene.postProcessStages.removeAll(true);
      }
    });
  }
}
function clearEntityByname(name, viewer) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let entityArr = viewer.entities.values;
  let CentityArr = entityArr.filter((v) => {
    if (v.name === name) {
      return v;
    }
  });
  let len = CentityArr.length;
  while (len--) {
    viewer.entities.remove(CentityArr[len]);
  }
}

// node_modules/dls-map/es/composables/use-tools/useSwitchViewPoint.mjs
function useSwitchViewPoint(viewType, viewer) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  var scene = viewer.scene;
  switch (viewType) {
    case "3d":
      scene.morphTo3D(0);
      break;
    case "2d":
      scene.morphTo2D(0);
      break;
    case "2.5d":
      scene.morphToColumbusView(0);
      break;
  }
}

// node_modules/dls-map/es/composables/use-layer/useLoadTerrain.mjs
function isInRange(lon, lat, range) {
  const [minLon, maxLon, minLat, maxLat] = range;
  return lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat;
}
function findRange(lon, lat, ranges) {
  for (const rangeObj of ranges) {
    if (isInRange(lon, lat, rangeObj.range)) {
      return rangeObj;
    }
  }
  return null;
}
function useLoadTerrain(terrainAry, height = 1e6, viewer) {
  if (!terrainAry.length) return false;
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  if (viewer.scene.mode === Cesium.SceneMode.SCENE3D) {
    let globalTerrain = terrainAry.filter((item) => item.type === "global");
    if (globalTerrain && globalTerrain.length) {
      const terrainProvider = new Cesium.CesiumTerrainProvider({
        url: globalTerrain[0].url
      });
      viewer.terrainProvider = terrainProvider;
    }
    let hasReturneRange = false;
    let hasExecutedOtherMethod = false;
    let regionTerrain = terrainAry.filter((item) => item.type === "region");
    if (regionTerrain && regionTerrain.length) {
      viewer.camera.changed.addEventListener(function() {
        let cameraPosition = viewer.camera.positionCartographic;
        let latitude = Cesium.Math.toDegrees(cameraPosition.latitude);
        let longitude = Cesium.Math.toDegrees(cameraPosition.longitude);
        let heightCam = cameraPosition.height;
        if (!hasReturneRange) {
          let matcheRange = findRange(longitude, latitude, regionTerrain);
          if (matcheRange && heightCam < height) {
            hasReturneRange = true;
            hasExecutedOtherMethod = false;
            const terrainProvider = new Cesium.CesiumTerrainProvider({
              url: matcheRange.url
            });
            viewer.terrainProvider = terrainProvider;
          }
        } else if (!hasExecutedOtherMethod && heightCam > height) {
          if (globalTerrain && globalTerrain.length) {
            const terrainProvider = new Cesium.CesiumTerrainProvider({
              url: globalTerrain[0].url
            });
            viewer.terrainProvider = terrainProvider;
          }
          hasExecutedOtherMethod = true;
          hasReturneRange = false;
        }
      });
    }
  }
}

// node_modules/dls-map/es/composables/use-analysis/useDrawGraph.mjs
function DrawSoildLine(viewer, names, color, width) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let distance = 0;
  var layerLine = void 0;
  let lineEntityCollection = new Cesium.CustomDataSource("measureLine");
  viewer.dataSources.add(lineEntityCollection);
  document.body.style.cursor = "crosshair";
  var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  let option = {
    name: names,
    color: color ? Cesium.Color.fromBytes(...color) : Cesium.Color.RED,
    width
  };
  var layer = new Cesium.CustomDataSource("MyLines");
  viewer.dataSources.add(layer);
  var activeShapePoints = [], activeShape = void 0;
  handler.setInputAction((click) => {
    const earthPosition = getPosition(viewer, click.position);
    if (Cesium.defined(earthPosition)) {
      if (activeShapePoints.length === 0) {
        activeShapePoints.push(earthPosition);
        const dynamicPositions = new Cesium.CallbackProperty(() => {
          return activeShapePoints;
        }, false);
        activeShape = drawLine(layer, dynamicPositions, option);
      }
      activeShapePoints.push(earthPosition);
      try {
        if (lineEntityCollection) {
          let textDisance = distance + "米";
          lineEntityCollection.entities.add({
            name: "空间直线距离",
            position: activeShapePoints[activeShapePoints.length - 1],
            point: {
              pixelSize: 5,
              color: Cesium.Color.RED,
              outlineColor: Cesium.Color.WHITE,
              outlineWidth: 2
            },
            label: {
              text: textDisance,
              font: "18px sans-serif",
              fillColor: Cesium.Color.GOLD,
              style: Cesium.LabelStyle.FILL_AND_OUTLINE,
              outlineWidth: 2,
              verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
              pixelOffset: new Cesium.Cartesian2(20, -20)
            }
          });
        }
      } catch (error) {
        console.log(`errorerror`, error);
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  handler.setInputAction((move) => {
    if (activeShapePoints.length >= 2) {
      const earthPosition = getPosition(viewer, move.endPosition);
      if (Cesium.defined(earthPosition)) {
        activeShapePoints.pop();
        activeShapePoints.push(earthPosition);
      }
      distance = getSpaceDistance(activeShapePoints);
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  handler.setInputAction((click) => {
    handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    activeShapePoints.pop();
    layer.entities.remove(activeShape);
    layerLine = drawLine(layer, activeShapePoints, option);
    document.body.style.cursor = "default";
    setTimeout(() => {
      activeShapePoints = [];
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
      handler = handler && handler.destroy();
    }, 500);
  }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
  return layerLine;
}
function getPosition(viewer, position) {
  let earthPosition = void 0;
  if (viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider) {
    earthPosition = viewer.scene.camera.pickEllipsoid(position);
  } else {
    const ray = viewer.camera.getPickRay(position);
    earthPosition = viewer.scene.globe.pick(ray, viewer.scene);
  }
  return earthPosition;
}
function drawLine(layer, positionData, option) {
  return layer.entities.add({
    name: option.name,
    polyline: {
      positions: positionData,
      clampToGround: true,
      width: option.width,
      material: option.color
    }
  });
}
function removeDrawLine(viewer) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  viewer.dataSources.removeAll();
}
function getSpaceDistance(positions) {
  let distance = 0;
  for (let i = 0; i < positions.length - 1; i++) {
    let point1cartographic = Cesium.Cartographic.fromCartesian(positions[i]);
    let point2cartographic = Cesium.Cartographic.fromCartesian(
      positions[i + 1]
    );
    let geodesic = new Cesium.EllipsoidGeodesic();
    geodesic.setEndPoints(point1cartographic, point2cartographic);
    let s = geodesic.surfaceDistance;
    s = Math.sqrt(
      Math.pow(s, 2) + Math.pow(point2cartographic.height - point1cartographic.height, 2)
    );
    distance = distance + s;
  }
  return distance.toFixed(2);
}

// node_modules/dls-map/es/composables/use-entity/useCesiumAddEntity.mjs
function addBillboard(lon, lat, imgUrl, {
  name = "Point",
  width,
  height,
  scale,
  click = true,
  shengClick = false,
  doubleClickHeight = 5e3,
  attribute = {},
  popContent,
  pointHeight,
  doubleClickPitch = -90
}, viewer) {
  let h = pointHeight ? pointHeight : 0;
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let entity = viewer.entities.add({
    name,
    position: Cesium.Cartesian3.fromDegrees(lon, lat, h),
    billboard: {
      image: imgUrl,
      width,
      height,
      scale,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      HorizontalOrigin: Cesium.HorizontalOrigin.CENTER
    },
    attribute,
    click,
    shengClick,
    doubleClickHeight,
    lon,
    lat,
    popContent,
    doubleClickPitch
  });
  return entity;
}
function addLine(positions, material, viewer, { name = "Line", width = 3 }) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let entity = viewer.entities.add({
    name,
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray(positions),
      width,
      material
    }
  });
  return entity;
}
function addCircle(longitude, latitude, radius, color, viewer, name = "Circle") {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
    ellipse: {
      semiMinorAxis: radius,
      semiMajorAxis: radius,
      material: new Cesium.ColorMaterialProperty(
        Cesium.Color.fromCssColorString(color)
      )
    }
  });
  return entity;
}
function addWall(viewer, positions, hexColor, alpha, MaterialIndex, maximumHeights = [], minimumHeights = []) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let wallGeometry = null;
  if (maximumHeights.length && minimumHeights.length) {
    wallGeometry = new Cesium.WallGeometry({
      positions: Cesium.Cartesian3.fromDegreesArrayHeights(positions),
      maximumHeights,
      minimumHeights
    });
  } else {
    wallGeometry = new Cesium.WallGeometry({
      positions: Cesium.Cartesian3.fromDegreesArrayHeights(positions)
    });
  }
  const wallGeometryInstance = new Cesium.GeometryInstance({
    geometry: wallGeometry,
    attributes: {
      color: Cesium.ColorGeometryInstanceAttribute.fromColor(
        Cesium.Color.WHITE
      )
    }
  });
  let areaFabric = null;
  if (MaterialIndex === 1) {
    areaFabric = {
      type: "Wave",
      uniforms: {
        color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha),
        // 波动颜色
        time: 0
        // 初始时间
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
        }`
    };
  } else if (MaterialIndex === 2) {
    areaFabric = {
      type: "Blinking",
      uniforms: {
        color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha),
        // 基础颜色
        time: 0
        // 动态时间
      },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
            czm_material material = czm_getDefaultMaterial(materialInput);
            float alpha = abs(sin(czm_frameNumber / 60.0)); // 闪烁效果
            material.diffuse = color.rgb;
            material.alpha = color.a * alpha;
            return material;
        }`
    };
  } else if (MaterialIndex === 3) {
    areaFabric = {
      type: "Gradient",
      uniforms: {
        color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha)
        // 渐变颜色
      },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = materialInput.st;
            material.diffuse = color.rgb * st.t; // 渐变效果
            material.alpha = color.a;
            return material;
        }`
    };
  } else if (MaterialIndex === 4) {
    areaFabric = {
      type: "MovingStripe",
      uniforms: {
        color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha),
        repeat: 10,
        // 条纹重复次数
        speed: 2,
        // 条纹移动速度
        time: 0
        // 动态时间
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
        }`
    };
  }
  const wallPrimitive = new Cesium.Primitive({
    geometryInstances: wallGeometryInstance,
    appearance: new Cesium.MaterialAppearance({
      material: new Cesium.Material({
        fabric: areaFabric
      }),
      translucent: true
    }),
    asynchronous: false
  });
  viewer.scene.primitives.add(wallPrimitive);
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(-115, 37, 2e6)
  });
}

// node_modules/dls-map/es/composables/use-coverage/CesiumSetDiv.mjs
var DlsDivLabel = class {
  constructor(val) {
    if (val) {
      this.viewer = val.viewer;
      this.height = val.height;
      this.position = Cesium.Cartesian3.fromDegrees(
        val.position[0],
        val.position[1],
        val.height
      );
      this.layerData = val;
      this.vmInstance = typeof val.dom === "string" ? this.createDom(val.dom) : val.dom;
      this.dId = val.id ? val.id : void 0;
      this.className = val.className ? val.className : void 0;
      this.offset = val.offset;
      this.type = val.type;
      if (!this.vmInstance || !this.vmInstance.style) {
        throw new Error("Not passing available Dom");
      }
      this.initDom();
      this.show = true;
      val.viewer.cesiumWidget.container.appendChild(this.vmInstance);
      this.addPostRender();
    }
  }
  createDom(html) {
    const el = document.createElement("div");
    el.innerHTML = html;
    return el;
  }
  initDom() {
    if (this.className) {
      this.vmInstance.classList.add(this.className);
    }
    if (this.dId) this.vmInstance.id = "divLabel" + this.dId;
    this.vmInstance.style.position = "absolute";
    this.vmInstance.style.zIndex = "5";
    this.vmInstance.addEventListener("click", () => {
    });
    if (!this.vmInstance.classList.contains("cesium-divLabel")) {
      this.vmInstance.classList.add("cesium-divLabel");
    }
  }
  setDom(dom) {
    if (dom instanceof HTMLElement) {
      this.vmInstance.remove();
      this.vmInstance = dom;
      this.initDom();
    } else {
      this.vmInstance.innerHTML = dom;
    }
  }
  addPostRender() {
    this.viewer.scene.postRender.addEventListener(this.postRender.bind(this));
    this._render = this.postRender.bind(this);
  }
  postRender() {
    if (!this.vmInstance || !this.vmInstance.style) return;
    if (this.vmInstance.style.zIndex === "-1") return;
    const is3D = this.viewer.scene.mode === Cesium.SceneMode.SCENE3D;
    const is2D = this.viewer.scene.mode === Cesium.SceneMode.SCENE2D;
    let p_2d;
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
        if (this.type && this.type === "LayerPointTime") {
          this.vmInstance.style.top = p_2d.y + "px";
          this.vmInstance.style.left = p_2d.x + this.offset[0] + "px";
        } else {
          this.vmInstance.style.top = p_2d.y + this.offset[1] + "px";
          const elWidth = this.vmInstance.offsetWidth;
          this.vmInstance.style.left = p_2d.x - elWidth / 2 + this.offset[0] + "px";
        }
      } else {
        this.vmInstance.style.top = p_2d.y + "px";
        const elWidth = this.vmInstance.offsetWidth;
        this.vmInstance.style.left = p_2d.x - elWidth / 2 + "px";
      }
      const camerPosition = this.viewer.camera.position;
      let height = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(
        camerPosition
      ).height;
      height += this.viewer.scene.globe.ellipsoid.maximumRadius;
      if (!(Cesium.Cartesian3.distance(camerPosition, this.position) > height) && this.viewer.camera.positionCartographic.height < 5e7) {
        this.vmInstance.style.display = "block";
      } else {
        this.vmInstance.style.display = "none";
      }
    }
  }
  changePosition(position) {
    if (position.length === 2) {
      this.position = Cesium.Cartesian3.fromDegrees(
        position[0],
        position[1],
        this.height
      );
    }
    return this;
  }
  removeAllDiv(id) {
    document.querySelectorAll(id).forEach((A) => A.remove());
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/events.mjs
var EventDispatcher = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map([
      ["drawStart", /* @__PURE__ */ new Set()],
      ["drawUpdate", /* @__PURE__ */ new Set()],
      ["drawEnd", /* @__PURE__ */ new Set()],
      ["editStart", /* @__PURE__ */ new Set()],
      ["editEnd", /* @__PURE__ */ new Set()]
    ]);
  }
  on(event, listener) {
    if (!this.listeners.has(event)) {
      console.warn("Event binding must be one of 'drawStart', 'drawUpdate', or 'drawEnd'.");
      return;
    }
    this.listeners.get(event).add(listener);
  }
  off(event, listener) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(listener);
    }
  }
  dispatchEvent(event, eventData) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach((listener) => {
        listener(eventData);
      });
    }
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/base.mjs
var import_lodash = __toESM(require_lodash(), 1);

// node_modules/dls-map/es/composables/use-analysis/plot/utils.mjs
var FITTING_COUNT = 100;
var ZERO_TOLERANCE = 1e-4;
var MathDistance = (pnt1, pnt2) => Math.sqrt((pnt1[0] - pnt2[0]) ** 2 + (pnt1[1] - pnt2[1]) ** 2);
var wholeDistance = (points) => {
  let distance = 0;
  if (points && Array.isArray(points) && points.length > 0) {
    points.forEach((item, index) => {
      if (index < points.length - 1) {
        distance += MathDistance(item, points[index + 1]);
      }
    });
  }
  return distance;
};
var getBaseLength = (points) => wholeDistance(points) ** 0.99;
var Mid = (point1, point2) => [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
var getCircleCenterOfThreePoints = (point1, point2, point3) => {
  const pntA = [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
  const pntB = [pntA[0] - point1[1] + point2[1], pntA[1] + point1[0] - point2[0]];
  const pntC = [(point1[0] + point3[0]) / 2, (point1[1] + point3[1]) / 2];
  const pntD = [pntC[0] - point1[1] + point3[1], pntC[1] + point1[0] - point3[0]];
  return getIntersectPoint(pntA, pntB, pntC, pntD);
};
var getIntersectPoint = (pntA, pntB, pntC, pntD) => {
  if (pntA[1] === pntB[1]) {
    const f2 = (pntD[0] - pntC[0]) / (pntD[1] - pntC[1]);
    const x2 = f2 * (pntA[1] - pntC[1]) + pntC[0];
    const y2 = pntA[1];
    return [x2, y2];
  }
  if (pntC[1] === pntD[1]) {
    const e2 = (pntB[0] - pntA[0]) / (pntB[1] - pntA[1]);
    const x2 = e2 * (pntC[1] - pntA[1]) + pntA[0];
    const y2 = pntC[1];
    return [x2, y2];
  }
  const e = (pntB[0] - pntA[0]) / (pntB[1] - pntA[1]);
  const f = (pntD[0] - pntC[0]) / (pntD[1] - pntC[1]);
  const y = (e * pntA[1] - pntA[0] - f * pntC[1] + pntC[0]) / (e - f);
  const x = e * y - e * pntA[1] + pntA[0];
  return [x, y];
};
var getAzimuth = (startPoint, endPoint) => {
  let azimuth;
  const angle = Math.asin(Math.abs(endPoint[1] - startPoint[1]) / MathDistance(startPoint, endPoint));
  if (endPoint[1] >= startPoint[1] && endPoint[0] >= startPoint[0]) {
    azimuth = angle + Math.PI;
  } else if (endPoint[1] >= startPoint[1] && endPoint[0] < startPoint[0]) {
    azimuth = Math.PI * 2 - angle;
  } else if (endPoint[1] < startPoint[1] && endPoint[0] < startPoint[0]) {
    azimuth = angle;
  } else if (endPoint[1] < startPoint[1] && endPoint[0] >= startPoint[0]) {
    azimuth = Math.PI - angle;
  }
  return azimuth;
};
var getAngleOfThreePoints = (pntA, pntB, pntC) => {
  const angle = getAzimuth(pntB, pntA) - getAzimuth(pntB, pntC);
  return angle < 0 ? angle + Math.PI * 2 : angle;
};
var isClockWise = (pnt1, pnt2, pnt3) => (pnt3[1] - pnt1[1]) * (pnt2[0] - pnt1[0]) > (pnt2[1] - pnt1[1]) * (pnt3[0] - pnt1[0]);
var getCubicValue = (t, startPnt, cPnt1, cPnt2, endPnt) => {
  t = Math.max(Math.min(t, 1), 0);
  const [tp, t2] = [1 - t, t * t];
  const t3 = t2 * t;
  const tp2 = tp * tp;
  const tp3 = tp2 * tp;
  const x = tp3 * startPnt[0] + 3 * tp2 * t * cPnt1[0] + 3 * tp * t2 * cPnt2[0] + t3 * endPnt[0];
  const y = tp3 * startPnt[1] + 3 * tp2 * t * cPnt1[1] + 3 * tp * t2 * cPnt2[1] + t3 * endPnt[1];
  return [x, y];
};
var getThirdPoint = (startPnt, endPnt, angle, distance, clockWise) => {
  const azimuth = getAzimuth(startPnt, endPnt);
  const alpha = clockWise ? azimuth + angle : azimuth - angle;
  const dx = distance * Math.cos(alpha);
  const dy = distance * Math.sin(alpha);
  return [endPnt[0] + dx, endPnt[1] + dy];
};
var getArcPoints = (center, radius, startAngle, endAngle) => {
  let [x, y, pnts, angleDiff] = [null, null, [], endAngle - startAngle];
  angleDiff = angleDiff < 0 ? angleDiff + Math.PI * 2 : angleDiff;
  for (let i = 0; i <= 100; i++) {
    const angle = startAngle + angleDiff * i / 100;
    x = center[0] + radius * Math.cos(angle);
    y = center[1] + radius * Math.sin(angle);
    pnts.push([x, y]);
  }
  return pnts;
};
var getBisectorNormals = (t, pnt1, pnt2, pnt3) => {
  const normal = getNormal(pnt1, pnt2, pnt3);
  let [bisectorNormalRight, bisectorNormalLeft, dt, x, y] = [null, null, null, null, null];
  const dist = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1]);
  const uX = normal[0] / dist;
  const uY = normal[1] / dist;
  const d1 = MathDistance(pnt1, pnt2);
  const d2 = MathDistance(pnt2, pnt3);
  if (dist > ZERO_TOLERANCE) {
    if (isClockWise(pnt1, pnt2, pnt3)) {
      dt = t * d1;
      x = pnt2[0] - dt * uY;
      y = pnt2[1] + dt * uX;
      bisectorNormalRight = [x, y];
      dt = t * d2;
      x = pnt2[0] + dt * uY;
      y = pnt2[1] - dt * uX;
      bisectorNormalLeft = [x, y];
    } else {
      dt = t * d1;
      x = pnt2[0] + dt * uY;
      y = pnt2[1] - dt * uX;
      bisectorNormalRight = [x, y];
      dt = t * d2;
      x = pnt2[0] - dt * uY;
      y = pnt2[1] + dt * uX;
      bisectorNormalLeft = [x, y];
    }
  } else {
    x = pnt2[0] + t * (pnt1[0] - pnt2[0]);
    y = pnt2[1] + t * (pnt1[1] - pnt2[1]);
    bisectorNormalRight = [x, y];
    x = pnt2[0] + t * (pnt3[0] - pnt2[0]);
    y = pnt2[1] + t * (pnt3[1] - pnt2[1]);
    bisectorNormalLeft = [x, y];
  }
  return [bisectorNormalRight, bisectorNormalLeft];
};
var getNormal = (pnt1, pnt2, pnt3) => {
  let dX1 = pnt1[0] - pnt2[0];
  let dY1 = pnt1[1] - pnt2[1];
  const d1 = Math.sqrt(dX1 * dX1 + dY1 * dY1);
  dX1 /= d1;
  dY1 /= d1;
  let dX2 = pnt3[0] - pnt2[0];
  let dY2 = pnt3[1] - pnt2[1];
  const d2 = Math.sqrt(dX2 * dX2 + dY2 * dY2);
  dX2 /= d2;
  dY2 /= d2;
  const uX = dX1 + dX2;
  const uY = dY1 + dY2;
  return [uX, uY];
};
var getLeftMostControlPoint = (controlPoints, t) => {
  let [pnt1, pnt2, pnt3, controlX, controlY] = [controlPoints[0], controlPoints[1], controlPoints[2], null, null];
  const pnts = getBisectorNormals(0, pnt1, pnt2, pnt3);
  const normalRight = pnts[0];
  const normal = getNormal(pnt1, pnt2, pnt3);
  const dist = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1]);
  if (dist > ZERO_TOLERANCE) {
    const mid = Mid(pnt1, pnt2);
    const pX = pnt1[0] - mid[0];
    const pY = pnt1[1] - mid[1];
    const d1 = MathDistance(pnt1, pnt2);
    const n = 2 / d1;
    const nX = -n * pY;
    const nY = n * pX;
    const a11 = nX * nX - nY * nY;
    const a12 = 2 * nX * nY;
    const a22 = nY * nY - nX * nX;
    const dX = normalRight[0] - mid[0];
    const dY = normalRight[1] - mid[1];
    controlX = mid[0] + a11 * dX + a12 * dY;
    controlY = mid[1] + a12 * dX + a22 * dY;
  } else {
    controlX = pnt1[0] + t * (pnt2[0] - pnt1[0]);
    controlY = pnt1[1] + t * (pnt2[1] - pnt1[1]);
  }
  return [controlX, controlY];
};
var getRightMostControlPoint = (controlPoints, t) => {
  const count = controlPoints.length;
  const pnt1 = controlPoints[count - 3];
  const pnt2 = controlPoints[count - 2];
  const pnt3 = controlPoints[count - 1];
  const pnts = getBisectorNormals(0, pnt1, pnt2, pnt3);
  const normalLeft = pnts[1];
  const normal = getNormal(pnt1, pnt2, pnt3);
  const dist = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1]);
  let [controlX, controlY] = [null, null];
  if (dist > ZERO_TOLERANCE) {
    const mid = Mid(pnt2, pnt3);
    const pX = pnt3[0] - mid[0];
    const pY = pnt3[1] - mid[1];
    const d1 = MathDistance(pnt2, pnt3);
    const n = 2 / d1;
    const nX = -n * pY;
    const nY = n * pX;
    const a11 = nX * nX - nY * nY;
    const a12 = 2 * nX * nY;
    const a22 = nY * nY - nX * nX;
    const dX = normalLeft[0] - mid[0];
    const dY = normalLeft[1] - mid[1];
    controlX = mid[0] + a11 * dX + a12 * dY;
    controlY = mid[1] + a12 * dX + a22 * dY;
  } else {
    controlX = pnt3[0] + t * (pnt2[0] - pnt3[0]);
    controlY = pnt3[1] + t * (pnt2[1] - pnt3[1]);
  }
  return [controlX, controlY];
};
var getCurvePoints = (t, controlPoints) => {
  const leftControl = getLeftMostControlPoint(controlPoints, t);
  let [pnt1, pnt2, pnt3, normals, points] = [null, null, null, [leftControl], []];
  for (let i = 0; i < controlPoints.length - 2; i++) {
    [pnt1, pnt2, pnt3] = [controlPoints[i], controlPoints[i + 1], controlPoints[i + 2]];
    const normalPoints = getBisectorNormals(t, pnt1, pnt2, pnt3);
    normals = normals.concat(normalPoints);
  }
  const rightControl = getRightMostControlPoint(controlPoints, t);
  if (rightControl) {
    normals.push(rightControl);
  }
  for (let i = 0; i < controlPoints.length - 1; i++) {
    pnt1 = controlPoints[i];
    pnt2 = controlPoints[i + 1];
    points.push(pnt1);
    for (let j = 0; j < FITTING_COUNT; j++) {
      const pnt = getCubicValue(j / FITTING_COUNT, pnt1, normals[i * 2], normals[i * 2 + 1], pnt2);
      points.push(pnt);
    }
    points.push(pnt2);
  }
  return points;
};
var getBezierPoints = function(points) {
  if (points.length <= 2) {
    return points;
  }
  const bezierPoints = [];
  const n = points.length - 1;
  for (let t = 0; t <= 1; t += 0.01) {
    let [x, y] = [0, 0];
    for (let index = 0; index <= n; index++) {
      const factor = getBinomialFactor(n, index);
      const a = t ** index;
      const b = (1 - t) ** (n - index);
      x += factor * a * b * points[index][0];
      y += factor * a * b * points[index][1];
    }
    bezierPoints.push([x, y]);
  }
  bezierPoints.push(points[n]);
  return bezierPoints;
};
var getFactorial = (n) => {
  let result = 1;
  switch (n) {
    case n <= 1:
      result = 1;
      break;
    case n === 2:
      result = 2;
      break;
    case n === 3:
      result = 6;
      break;
    case n === 24:
      result = 24;
      break;
    case n === 5:
      result = 120;
      break;
    default:
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      break;
  }
  return result;
};
var getBinomialFactor = (n, index) => getFactorial(n) / (getFactorial(index) * getFactorial(n - index));
var getQBSplinePoints = (points) => {
  if (points.length <= 2) {
    return points;
  }
  const [n, bSplinePoints] = [2, []];
  const m = points.length - n - 1;
  bSplinePoints.push(points[0]);
  for (let i = 0; i <= m; i++) {
    for (let t = 0; t <= 1; t += 0.05) {
      let [x, y] = [0, 0];
      for (let k = 0; k <= n; k++) {
        const factor = getQuadricBSplineFactor(k, t);
        x += factor * points[i + k][0];
        y += factor * points[i + k][1];
      }
      bSplinePoints.push([x, y]);
    }
  }
  bSplinePoints.push(points[points.length - 1]);
  return bSplinePoints;
};
var getQuadricBSplineFactor = (k, t) => {
  let res = 0;
  if (k === 0) {
    res = (t - 1) ** 2 / 2;
  } else if (k === 1) {
    res = (-2 * t ** 2 + 2 * t + 1) / 2;
  } else if (k === 2) {
    res = t ** 2 / 2;
  }
  return res;
};

// node_modules/dls-map/es/composables/use-analysis/plot/base.mjs
var Base = class {
  constructor(cesium, viewer, style) {
    this.geometryPoints = [];
    this.state = "drawing";
    this.controlPoints = [];
    this.entityId = "";
    this.points = [];
    this.minPointsForShape = 0;
    this.cesium = cesium;
    this.viewer = viewer;
    this.type = this.getType();
    this.mergeStyle(style);
    this.cartesianToLnglat = this.cartesianToLnglat.bind(this);
    this.pixelToCartesian = this.pixelToCartesian.bind(this);
    this.eventDispatcher = new EventDispatcher();
    viewer.trackedEntity = void 0;
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    );
    this.onClick();
  }
  mergeStyle(style) {
    if (this.type === "polygon") {
      this.style = Object.assign(
        {
          material: new this.cesium.Color(),
          outlineMaterial: new this.cesium.Color(),
          outlineWidth: 2
        },
        style
      );
    } else if (this.type === "line") {
      this.style = Object.assign(
        {
          material: new this.cesium.Color(),
          lineWidth: 2
        },
        style
      );
    } else if (this.type === "point") {
      this.style = Object.assign(
        {
          pixelSize: 10,
          heightReference: this.cesium.HeightReference.CLAMP_TO_GROUND,
          color: this.cesium.Color.RED
        },
        style
      );
    }
    this.styleCache = (0, import_lodash.default)(this.style);
  }
  /**
   * Base Class提供了更改状态的方法，并根据状态实现不同的逻辑。
   * 状态由各个子组件根据实际情况进行控制。
   * @param State
   */
  setState(state) {
    this.state = state;
  }
  getState() {
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
    this.eventHandler.setInputAction((evt) => {
      const pickedObject = this.viewer.scene.pick(evt.position);
      const hitEntities = this.cesium.defined(pickedObject) && pickedObject.id instanceof this.cesium.Entity;
      let activeEntity = this.polygonEntity;
      if (this.type === "line") {
        activeEntity = this.lineEntity;
      }
      if (this.type === "point") {
        activeEntity = this.pointEntity;
      }
      if (this.state === "drawing") {
        const cartesian = this.pixelToCartesian(evt.position);
        const points = this.getPoints();
        if (!cartesian) {
          return;
        }
        if (!this.freehand && points.length > 0 && !this.checkDistance(cartesian, points[points.length - 1])) {
          return;
        }
        this.addPoint(cartesian);
        if (this.getPoints().length === 1) {
          this.eventDispatcher.dispatchEvent("drawStart");
        }
        this.eventDispatcher.dispatchEvent("drawUpdate", cartesian);
      } else if (this.state === "edit") {
        if (!hitEntities || activeEntity.id !== pickedObject.id.id) {
          this.setState("static");
          this.type !== "point" ? this.removeControlPoints() : null;
          this.disableDrag();
          this.eventDispatcher.dispatchEvent("editEnd", this.getPoints());
        }
      } else if (this.state === "static") {
        try {
          if (hitEntities && activeEntity.id === pickedObject.id.id) {
            const pickedGraphics = this.type === "line" ? pickedObject.id.polyline : this.type === "polygon" ? pickedObject.id.polygon : pickedObject.id.point;
            if (this.cesium.defined(pickedGraphics)) {
              this.setState("edit");
              this.type !== "point" ? this.addControlPoints() : null;
              this.draggable();
              this.eventDispatcher.dispatchEvent("editStart");
            }
          }
        } catch (e) {
          console.log("eeee", e);
        }
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
  onMouseMove() {
    this.eventHandler.setInputAction((evt) => {
      const points = this.getPoints();
      const cartesian = this.pixelToCartesian(evt.endPosition);
      if (!cartesian) {
        return;
      }
      if (this.checkDistance(cartesian, points[points.length - 1])) {
        this.updateMovingPoint(cartesian, points.length);
      }
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }
  onDoubleClick() {
    this.eventHandler.setInputAction((evt) => {
      if (this.state === "drawing") {
        this.finishDrawing();
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
  }
  /**
   * 检查两点之间的距离是否大于10米。
   */
  checkDistance(cartesian1, cartesian2) {
    const distance = this.cesium.Cartesian3.distance(cartesian1, cartesian2);
    return distance > 10;
  }
  finishDrawing() {
    this.type === "polygon" && this.lineEntity && this.viewer.entities.remove(this.lineEntity);
    this.removeMoveListener();
    this.setState("edit");
    this.type !== "point" ? this.addControlPoints() : null;
    this.draggable();
    const entity = this.polygonEntity || this.lineEntity || this.pointEntity;
    this.entityId = entity.id;
    this.eventDispatcher.dispatchEvent("drawEnd", this.getPoints());
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
  setGeometryPoints(geometryPoints) {
    this.geometryPoints = geometryPoints;
  }
  getGeometryPoints() {
    return this.geometryPoints;
  }
  drawPolygon() {
    const callback = () => {
      return new this.cesium.PolygonHierarchy(this.geometryPoints);
    };
    if (!this.polygonEntity) {
      const style = this.style;
      this.polygonEntity = this.viewer.entities.add({
        polygon: new this.cesium.PolygonGraphics({
          hierarchy: new this.cesium.CallbackProperty(callback, false),
          show: true,
          material: style.material
        })
      });
      this.outlineEntity = this.viewer.entities.add({
        polyline: {
          positions: new this.cesium.CallbackProperty(() => {
            return [...this.geometryPoints, this.geometryPoints[0]];
          }, false),
          width: style.outlineWidth,
          material: style.outlineMaterial,
          clampToGround: true
        }
      });
    }
  }
  drawLine() {
    if (!this.lineEntity) {
      const style = this.style;
      this.lineEntity = this.addLineEntity(style);
    }
  }
  drawPoint() {
    if (!this.pointEntity) {
      const points = this.getPoints();
      const style = this.style;
      this.pointEntity = this.viewer.entities.add({
        position: points[0],
        point: {
          pixelSize: style.pixelSize,
          heightReference: style.heightReference,
          color: style.color
        }
      });
    }
  }
  addTempLine() {
    if (!this.tempLineEntity) {
      const style = this.style;
      const lineStyle = {
        material: style.outlineMaterial,
        lineWidth: style.outlineWidth
      };
      this.tempLineEntity = this.addLineEntity(lineStyle);
    }
  }
  removeTempLine() {
    if (this.tempLineEntity) {
      this.viewer.entities.remove(this.tempLineEntity);
    }
  }
  addLineEntity(style) {
    const entity = this.viewer.entities.add({
      polyline: {
        positions: new this.cesium.CallbackProperty(
          () => this.geometryPoints,
          false
        ),
        width: style.lineWidth,
        material: style.material,
        clampToGround: true
      }
    });
    return entity;
  }
  cartesianToLnglat(cartesian) {
    const lnglat = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
    const lat = this.cesium.Math.toDegrees(lnglat.latitude);
    const lng = this.cesium.Math.toDegrees(lnglat.longitude);
    return [lng, lat];
  }
  pixelToCartesian(position) {
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
      return this.viewer.entities.add({
        position,
        point: {
          pixelSize: 10,
          heightReference: this.cesium.HeightReference.CLAMP_TO_GROUND,
          color: this.cesium.Color.RED
        }
      });
    });
    let isDragging = false;
    let draggedIcon = null;
    let dragStartPosition;
    this.controlPointsEventHandler = new this.cesium.ScreenSpaceEventHandler(
      this.viewer.canvas
    );
    this.controlPointsEventHandler.setInputAction((clickEvent) => {
      const pickedObject = this.viewer.scene.pick(clickEvent.position);
      if (this.cesium.defined(pickedObject)) {
        for (let i = 0; i < this.controlPoints.length; i++) {
          if (pickedObject.id._id === this.controlPoints[i]._id) {
            isDragging = true;
            draggedIcon = this.controlPoints[i];
            dragStartPosition = draggedIcon.position._value;
            draggedIcon.index = i;
            break;
          }
        }
        this.viewer.scene.screenSpaceCameraController.enableRotate = false;
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOWN);
    this.controlPointsEventHandler.setInputAction((moveEvent) => {
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
    this.controlPointsEventHandler.setInputAction(() => {
      if (draggedIcon && !this.cesium.Cartesian3.equals(
        dragStartPosition,
        draggedIcon.position._value
      )) {
        this.eventDispatcher.dispatchEvent(
          "drawUpdate",
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
      this.controlPoints.forEach((entity) => {
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
    let startPosition;
    this.dragEventHandler = new this.cesium.ScreenSpaceEventHandler(
      this.viewer.canvas
    );
    this.dragEventHandler.setInputAction((event) => {
      const pickRay = this.viewer.scene.camera.getPickRay(event.position);
      if (pickRay) {
        const cartesian = this.viewer.scene.globe.pick(
          pickRay,
          this.viewer.scene
        );
        const pickedObject = this.viewer.scene.pick(event.position);
        if (this.cesium.defined(pickedObject) && pickedObject.id instanceof this.cesium.Entity) {
          const clickedEntity = pickedObject.id;
          if (this.isCurrentEntity(clickedEntity.id)) {
            dragging = true;
            startPosition = cartesian;
            this.viewer.scene.screenSpaceCameraController.enableRotate = false;
          }
        }
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOWN);
    this.dragEventHandler.setInputAction((event) => {
      var _a, _b;
      if (dragging && startPosition) {
        const newPosition = this.pixelToCartesian(event.endPosition);
        if (newPosition) {
          const translation = this.cesium.Cartesian3.subtract(
            newPosition,
            startPosition,
            new this.cesium.Cartesian3()
          );
          if (this.type === "point") {
            const position = (_a = this.pointEntity.position) == null ? void 0 : _a.getValue(
              this.cesium.JulianDate.now()
            );
            const newPosition2 = this.cesium.Cartesian3.add(
              position,
              translation,
              new this.cesium.Cartesian3()
            );
            (_b = this.pointEntity.position) == null ? void 0 : _b.setValue(newPosition2);
          }
          const newPoints = this.geometryPoints.map((p) => {
            return this.cesium.Cartesian3.add(
              p,
              translation,
              new this.cesium.Cartesian3()
            );
          });
          this.points = this.points.map((p) => {
            return this.cesium.Cartesian3.add(
              p,
              translation,
              new this.cesium.Cartesian3()
            );
          });
          this.controlPoints.map((p) => {
            var _a2, _b2;
            const position = (_a2 = p.position) == null ? void 0 : _a2.getValue(this.cesium.JulianDate.now());
            const newPosition2 = this.cesium.Cartesian3.add(
              position,
              translation,
              new this.cesium.Cartesian3()
            );
            (_b2 = p.position) == null ? void 0 : _b2.setValue(newPosition2);
          });
          this.setGeometryPoints(newPoints);
          if (this.minPointsForShape === 4) {
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
        if (pickRay) {
          const pickedObject = this.viewer.scene.pick(event.endPosition);
          if (this.cesium.defined(pickedObject) && pickedObject.id instanceof this.cesium.Entity) {
            const clickedEntity = pickedObject.id;
            if (this.isCurrentEntity(clickedEntity.id)) {
              this.viewer.scene.canvas.style.cursor = "move";
            } else {
              this.viewer.scene.canvas.style.cursor = "default";
            }
          } else {
            this.viewer.scene.canvas.style.cursor = "default";
          }
        }
      }
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE);
    this.dragEventHandler.setInputAction(() => {
      dragging = false;
      startPosition = void 0;
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
  show(opts) {
    if (opts) {
      const { duration, delay, callback } = opts;
      this.showWithAnimation(duration, delay, callback);
      return;
    } else {
      this.showWithAnimation(0, 0);
    }
  }
  hide(opts) {
    if (opts) {
      const { duration, delay, callback } = opts;
      this.hideWithAnimation(duration, delay, callback);
      return;
    } else {
      this.hideWithAnimation(0, 0);
    }
  }
  showWithAnimation(duration = 2e3, delay = 0, callback) {
    var _a, _b, _c, _d;
    if (this.state !== "hidden") {
      return;
    }
    this.setState("static");
    if (this.type === "polygon") {
      let alpha = 0.3;
      const material = this.styleCache.material;
      if (material.image) {
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
      const outlineAlpha = (_b = (_a = this.styleCache) == null ? void 0 : _a.outlineMaterial) == null ? void 0 : _b.alpha;
      this.animateOpacity(
        this.outlineEntity,
        outlineAlpha || 1,
        duration,
        delay,
        void 0,
        this.state
      );
    } else if (this.type === "line") {
      const material = this.styleCache.material;
      let alpha = 1;
      if (material.image) {
        alpha = material.color.alpha;
      } else if (material.dashLength) {
        const color = material.color.getValue();
        alpha = color.alpha;
      } else {
        alpha = (_d = (_c = this.styleCache) == null ? void 0 : _c.material) == null ? void 0 : _d.alpha;
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
      this.setState("animating");
    }
  }
  hideWithAnimation(duration = 2e3, delay = 0, callback) {
    if (this.state === "hidden" || this.state != "static") {
      return;
    }
    this.setState("hidden");
    if (this.type === "polygon") {
      this.animateOpacity(
        this.polygonEntity,
        0,
        duration,
        delay,
        callback,
        this.state
      );
      this.animateOpacity(
        this.outlineEntity,
        0,
        duration,
        delay,
        void 0,
        this.state
      );
    } else if (this.type === "line") {
      this.animateOpacity(
        this.lineEntity,
        0,
        duration,
        delay,
        callback,
        this.state
      );
    }
    if (duration != 0) {
      this.setState("animating");
    }
  }
  animateOpacity(entity, targetAlpha, duration, delay, callback, state) {
    setTimeout(() => {
      const graphics = entity.polygon || entity.polyline || entity.billboard;
      let startAlpha;
      let material = graphics.material;
      if (material) {
        if (material.image && material.color.alpha !== void 0) {
          startAlpha = material.color.alpha;
        } else {
          startAlpha = material.color.getValue().alpha;
        }
      } else {
        const color = graphics.color.getValue();
        startAlpha = color.alpha;
      }
      let startTime = 0;
      const animate = (currentTime) => {
        if (!startTime) {
          startTime = currentTime;
        }
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          const deltalpha = elapsedTime / duration * (targetAlpha - startAlpha);
          const newAlpha = startAlpha + deltalpha;
          if (material) {
            if (material.image && material.color.alpha !== void 0) {
              material.color.alpha = newAlpha;
            } else {
              const newColor = material.color.getValue().withAlpha(newAlpha);
              material.color.setValue(newColor);
            }
          } else {
            const color = graphics.color.getValue();
            const newColor = color.withAlpha(newAlpha);
            graphics.color.setValue(newColor);
          }
          requestAnimationFrame(animate);
        } else {
          callback && callback();
          const restoredState = state ? state : "static";
          if (material) {
            if (material.image && material.color.alpha !== void 0) {
              material.color.alpha = targetAlpha;
            } else {
              const newColor = material.color.getValue().withAlpha(targetAlpha);
              material.color.setValue(newColor);
            }
          } else {
            const color = graphics.color.getValue();
            const newColor = color.withAlpha(targetAlpha);
            graphics.color.setValue(newColor);
          }
          requestAnimationFrame(() => {
            this.setState(restoredState);
          });
        }
      };
      requestAnimationFrame(animate);
    }, delay);
  }
  startGrowthAnimation(opts) {
    const { duration = 2e3, delay = 0, callback } = opts || {};
    if (this.state === "hidden" || this.state != "static") {
      return;
    }
    if (!this.minPointsForShape) {
      console.warn("Growth animation is not supported for this type of shape");
      return;
    }
    this.setState("animating");
    if (this.minPointsForShape === 4) {
      this.doubleArrowGrowthAnimation(duration, delay, callback);
      return;
    }
    setTimeout(() => {
      this.hideWithAnimation(0, 0, void 0);
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
          callback && callback();
          startTime = 0;
          this.viewer.clock.shouldAnimate = false;
          this.viewer.clock.onTick.removeEventListener(frameListener);
          this.setState("static");
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
          startPoint = this.cesium.Cartesian3.midpoint(
            points[0],
            points[1],
            new this.cesium.Cartesian3()
          );
        }
        let endPoint = points[movingPointIndex];
        const t = (elapsedTime - currentSegment * segmentDuration) / segmentDuration;
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
        this.showWithAnimation(0, 0, void 0);
      };
      this.viewer.clock.onTick.addEventListener(frameListener);
    }, delay);
  }
  doubleArrowGrowthAnimation(duration = 2e3, delay = 0, callback) {
    setTimeout(() => {
      this.hideWithAnimation(0, 0, void 0);
      const points = this.getPoints();
      let startTime = Date.now();
      this.viewer.clock.shouldAnimate = true;
      const frameListener = (clock) => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
          callback && callback();
          startTime = 0;
          this.viewer.clock.shouldAnimate = false;
          this.viewer.clock.onTick.removeEventListener(frameListener);
          this.setState("static");
          return;
        }
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
          endPointLeft
        ];
        let curveControlPointsRight = [
          startPointRight,
          controlPoint.right,
          endPointRight
        ];
        const newPositionLeft = this.getNewPosition(curveControlPointsLeft, t);
        const newPositionRight = this.getNewPosition(
          curveControlPointsRight,
          t
        );
        const tempPoints = [...points];
        tempPoints[2] = newPositionRight;
        tempPoints[3] = newPositionLeft;
        const geometryPoints = this.createGraphic(tempPoints);
        this.setGeometryPoints(geometryPoints);
        this.showWithAnimation(0, 0, void 0);
      };
      this.viewer.clock.onTick.addEventListener(frameListener);
    }, delay);
  }
  getNewPosition(curveControlPoints, t) {
    curveControlPoints = curveControlPoints.map((item) => {
      return this.cartesianToLnglat(item);
    });
    let curvePoints = getCurvePoints(0.3, curveControlPoints);
    curvePoints = curvePoints.map((p) => {
      return this.cesium.Cartesian3.fromDegrees(p[0], p[1]);
    });
    let newPosition = this.interpolateAlongCurve(curvePoints, t);
    return newPosition;
  }
  interpolateAlongCurve(curvePoints, t) {
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
    if (this.type === "polygon") {
      this.viewer.entities.remove(this.polygonEntity);
      this.viewer.entities.remove(this.outlineEntity);
      this.polygonEntity = null;
      this.outlineEntity = null;
      this.lineEntity = null;
    } else if (this.type === "line") {
      this.viewer.entities.remove(this.lineEntity);
    } else if (this.type === "point") {
      this.viewer.entities.remove(this.pointEntity);
    }
    this.removeClickListener();
    this.removeMoveListener();
    this.removeDoubleClickListener();
    this.removeControlPoints();
  }
  on(eventType, listener) {
    this.eventDispatcher.on(eventType, listener);
  }
  off(eventType, listener) {
    this.eventDispatcher.off(eventType, listener);
  }
  isCurrentEntity(id) {
    return this.entityId === id;
  }
  addPoint(cartesian) {
  }
  getPoints() {
    return [new this.cesium.Cartesian3()];
  }
  updateMovingPoint(cartesian, index) {
  }
  updateDraggingPoint(cartesian, index) {
  }
  getType() {
    return "polygon";
  }
  createGraphic(points) {
    return points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/arrow/fine-arrow.mjs
var FineArrow = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 2;
    this.cesium = cesium;
    this.tailWidthFactor = 0.1;
    this.neckWidthFactor = 0.2;
    this.headWidthFactor = 0.25;
    this.headAngle = Math.PI / 8.5;
    this.neckAngle = Math.PI / 13;
    this.minPointsForShape = 2;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    if (this.points.length < 2) {
      this.points.push(cartesian);
      this.onMouseMove();
    }
    if (this.points.length === 2) {
      const geometryPoints = this.createGraphic(this.points);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const [p1, p2] = positions.map(this.cartesianToLnglat);
    const len = getBaseLength([p1, p2]);
    const tailWidth = len * this.tailWidthFactor;
    const neckWidth = len * this.neckWidthFactor;
    const headWidth = len * this.headWidthFactor;
    const tailLeft = getThirdPoint(p2, p1, Math.PI / 2, tailWidth, true);
    const tailRight = getThirdPoint(
      p2,
      p1,
      Math.PI / 2,
      tailWidth,
      false
    );
    const headLeft = getThirdPoint(
      p1,
      p2,
      this.headAngle,
      headWidth,
      false
    );
    const headRight = getThirdPoint(
      p1,
      p2,
      this.headAngle,
      headWidth,
      true
    );
    const neckLeft = getThirdPoint(
      p1,
      p2,
      this.neckAngle,
      neckWidth,
      false
    );
    const neckRight = getThirdPoint(
      p1,
      p2,
      this.neckAngle,
      neckWidth,
      true
    );
    const points = [
      ...tailLeft,
      ...neckLeft,
      ...headLeft,
      ...p2,
      ...headRight,
      ...neckRight,
      ...tailRight,
      ...p1
    ];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(points);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/arrow/attack-arrow.mjs
var AttackArrow = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.headHeightFactor = 0.18;
    this.headWidthFactor = 0.3;
    this.neckHeightFactor = 0.85;
    this.neckWidthFactor = 0.15;
    this.headTailFactor = 0.8;
    this.minPointsForShape = 3;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawPolygon();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else {
      this.removeTempLine();
      const geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
    }
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    let [tailLeft, tailRight] = [lnglatPoints[0], lnglatPoints[1]];
    if (isClockWise(lnglatPoints[0], lnglatPoints[1], lnglatPoints[2])) {
      tailLeft = lnglatPoints[1];
      tailRight = lnglatPoints[0];
    }
    const midTail = Mid(tailLeft, tailRight);
    const bonePnts = [midTail].concat(lnglatPoints.slice(2));
    const headPnts = this.getArrowHeadPoints(bonePnts, tailLeft, tailRight);
    const [neckLeft, neckRight] = [headPnts[0], headPnts[4]];
    const tailWidthFactor = MathDistance(tailLeft, tailRight) / getBaseLength(bonePnts);
    const bodyPnts = this.getArrowBodyPoints(
      bonePnts,
      neckLeft,
      neckRight,
      tailWidthFactor
    );
    const count = bodyPnts.length;
    let leftPnts = [tailLeft].concat(bodyPnts.slice(0, count / 2));
    leftPnts.push(neckLeft);
    let rightPnts = [tailRight].concat(bodyPnts.slice(count / 2, count));
    rightPnts.push(neckRight);
    leftPnts = getQBSplinePoints(leftPnts);
    rightPnts = getQBSplinePoints(rightPnts);
    const points = leftPnts.concat(headPnts, rightPnts.reverse());
    const temp = [].concat(...points);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
  getArrowHeadPoints(points, tailLeft, tailRight) {
    try {
      let len = getBaseLength(points);
      let headHeight = len * this.headHeightFactor;
      const headPnt = points[points.length - 1];
      len = MathDistance(headPnt, points[points.length - 2]);
      const tailWidth = MathDistance(tailLeft, tailRight);
      if (headHeight > tailWidth * this.headTailFactor) {
        headHeight = tailWidth * this.headTailFactor;
      }
      const headWidth = headHeight * this.headWidthFactor;
      const neckWidth = headHeight * this.neckWidthFactor;
      headHeight = headHeight > len ? len : headHeight;
      const neckHeight = headHeight * this.neckHeightFactor;
      const headEndPnt = getThirdPoint(
        points[points.length - 2],
        headPnt,
        0,
        headHeight,
        true
      );
      const neckEndPnt = getThirdPoint(
        points[points.length - 2],
        headPnt,
        0,
        neckHeight,
        true
      );
      const headLeft = getThirdPoint(
        headPnt,
        headEndPnt,
        Math.PI / 2,
        headWidth,
        false
      );
      const headRight = getThirdPoint(
        headPnt,
        headEndPnt,
        Math.PI / 2,
        headWidth,
        true
      );
      const neckLeft = getThirdPoint(
        headPnt,
        neckEndPnt,
        Math.PI / 2,
        neckWidth,
        false
      );
      const neckRight = getThirdPoint(
        headPnt,
        neckEndPnt,
        Math.PI / 2,
        neckWidth,
        true
      );
      return [neckLeft, headLeft, headPnt, headRight, neckRight];
    } catch (e) {
      console.log(e);
    }
  }
  getArrowBodyPoints(points, neckLeft, neckRight, tailWidthFactor) {
    const allLen = wholeDistance(points);
    const len = getBaseLength(points);
    const tailWidth = len * tailWidthFactor;
    const neckWidth = MathDistance(neckLeft, neckRight);
    const widthDif = (tailWidth - neckWidth) / 2;
    let [tempLen, leftBodyPnts, rightBodyPnts] = [0, [], []];
    for (let i = 1; i < points.length - 1; i++) {
      const angle = getAngleOfThreePoints(points[i - 1], points[i], points[i + 1]) / 2;
      tempLen += MathDistance(points[i - 1], points[i]);
      const w = (tailWidth / 2 - tempLen / allLen * widthDif) / Math.sin(angle);
      const left = getThirdPoint(
        points[i - 1],
        points[i],
        Math.PI - angle,
        w,
        true
      );
      const right = getThirdPoint(
        points[i - 1],
        points[i],
        angle,
        w,
        false
      );
      leftBodyPnts.push(left);
      rightBodyPnts.push(right);
    }
    return leftBodyPnts.concat(rightBodyPnts);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/arrow/swallowtail-attack-arrow.mjs
var SwallowtailAttackArrow = class extends AttackArrow {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.headHeightFactor = 0.18;
    this.headWidthFactor = 0.3;
    this.neckHeightFactor = 0.85;
    this.neckWidthFactor = 0.15;
    this.tailWidthFactor = 0.1;
    this.headTailFactor = 0.8;
    this.swallowTailFactor = 1;
    this.swallowTailPnt = [0, 0];
    this.minPointsForShape = 3;
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    let [tailLeft, tailRight] = [lnglatPoints[0], lnglatPoints[1]];
    if (isClockWise(lnglatPoints[0], lnglatPoints[1], lnglatPoints[2])) {
      tailLeft = lnglatPoints[1];
      tailRight = lnglatPoints[0];
    }
    const midTail = Mid(tailLeft, tailRight);
    const bonePnts = [midTail].concat(lnglatPoints.slice(2));
    const headPnts = this.getArrowHeadPoints(bonePnts, tailLeft, tailRight);
    const [neckLeft, neckRight] = [headPnts[0], headPnts[4]];
    const tailWidth = MathDistance(tailLeft, tailRight);
    const allLen = getBaseLength(bonePnts);
    const len = allLen * this.tailWidthFactor * this.swallowTailFactor;
    this.swallowTailPnt = getThirdPoint(
      bonePnts[1],
      bonePnts[0],
      0,
      len,
      true
    );
    const factor = tailWidth / allLen;
    const bodyPnts = this.getArrowBodyPoints(
      bonePnts,
      neckLeft,
      neckRight,
      factor
    );
    const count = bodyPnts.length;
    let leftPnts = [tailLeft].concat(bodyPnts.slice(0, count / 2));
    leftPnts.push(neckLeft);
    let rightPnts = [tailRight].concat(bodyPnts.slice(count / 2, count));
    rightPnts.push(neckRight);
    leftPnts = getQBSplinePoints(leftPnts);
    rightPnts = getQBSplinePoints(rightPnts);
    const points = leftPnts.concat(headPnts, rightPnts.reverse(), [
      this.swallowTailPnt,
      leftPnts[0]
    ]);
    const temp = [].concat(...points);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp);
    return cartesianPoints;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/arrow/squad-combat.mjs
var SquadCombat = class extends AttackArrow {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.headHeightFactor = 0.18;
    this.headWidthFactor = 0.3;
    this.neckHeightFactor = 0.85;
    this.neckWidthFactor = 0.15;
    this.tailWidthFactor = 0.1;
    this.minPointsForShape = 2;
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length > 2) {
      this.lineEntity && this.viewer.entities.remove(this.lineEntity);
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length < 2) {
      return;
    } else {
      const geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
    }
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const tailPnts = this.getTailPoints(lnglatPoints);
    const headPnts = this.getArrowHeadPoints(
      lnglatPoints,
      tailPnts[0],
      tailPnts[1]
    );
    const neckLeft = headPnts[0];
    const neckRight = headPnts[4];
    const bodyPnts = this.getArrowBodyPoints(
      lnglatPoints,
      neckLeft,
      neckRight,
      this.tailWidthFactor
    );
    const count = bodyPnts.length;
    let leftPnts = [tailPnts[0]].concat(bodyPnts.slice(0, count / 2));
    leftPnts.push(neckLeft);
    let rightPnts = [tailPnts[1]].concat(bodyPnts.slice(count / 2, count));
    rightPnts.push(neckRight);
    leftPnts = getQBSplinePoints(leftPnts);
    rightPnts = getQBSplinePoints(rightPnts);
    const points = leftPnts.concat(headPnts, rightPnts.reverse());
    const temp = [].concat(...points);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp);
    return cartesianPoints;
  }
  getTailPoints(points) {
    const allLen = getBaseLength(points);
    const tailWidth = allLen * this.tailWidthFactor;
    const tailLeft = getThirdPoint(
      points[1],
      points[0],
      Math.PI / 2,
      tailWidth,
      false
    );
    const tailRight = getThirdPoint(
      points[1],
      points[0],
      Math.PI / 2,
      tailWidth,
      true
    );
    return [tailLeft, tailRight];
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/arrow/swallowtail-squad-combat.mjs
var SwallowtailSquadCombat = class extends SquadCombat {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.headHeightFactor = 0.18;
    this.headWidthFactor = 0.3;
    this.neckHeightFactor = 0.85;
    this.neckWidthFactor = 0.15;
    this.tailWidthFactor = 0.1;
    this.swallowTailFactor = 1;
    this.minPointsForShape = 2;
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const tailPnts = this.getTailPoints(lnglatPoints);
    const headPnts = this.getArrowHeadPoints(
      lnglatPoints,
      tailPnts[0],
      tailPnts[2]
    );
    const neckLeft = headPnts[0];
    const neckRight = headPnts[4];
    const bodyPnts = this.getArrowBodyPoints(
      lnglatPoints,
      neckLeft,
      neckRight,
      this.tailWidthFactor
    );
    const count = bodyPnts.length;
    let leftPnts = [tailPnts[0]].concat(bodyPnts.slice(0, count / 2));
    leftPnts.push(neckLeft);
    let rightPnts = [tailPnts[2]].concat(bodyPnts.slice(count / 2, count));
    rightPnts.push(neckRight);
    leftPnts = getQBSplinePoints(leftPnts);
    rightPnts = getQBSplinePoints(rightPnts);
    const points = leftPnts.concat(headPnts, rightPnts.reverse(), [
      tailPnts[1],
      leftPnts[0]
    ]);
    const temp = [].concat(...points);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp);
    return cartesianPoints;
  }
  getTailPoints(points) {
    const allLen = getBaseLength(points);
    const tailWidth = allLen * this.tailWidthFactor;
    const tailLeft = getThirdPoint(
      points[1],
      points[0],
      Math.PI / 2,
      tailWidth,
      false
    );
    const tailRight = getThirdPoint(
      points[1],
      points[0],
      Math.PI / 2,
      tailWidth,
      true
    );
    const len = tailWidth * this.swallowTailFactor;
    const swallowTailPnt = getThirdPoint(
      points[1],
      points[0],
      0,
      len,
      true
    );
    return [tailLeft, swallowTailPnt, tailRight];
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/arrow/straight-arrow.mjs
var StraightArrow = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 3e6;
    this.cesium = cesium;
    this.minPointsForShape = 2;
    this.setState("drawing");
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    if (this.points.length < 2) {
      this.points.push(cartesian);
      this.onMouseMove();
    }
    if (this.points.length === 2) {
      const geometryPoints = this.createGraphic(this.points);
      this.setGeometryPoints(geometryPoints);
      this.drawLine();
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const [pnt1, pnt2] = positions.map(this.cartesianToLnglat);
    const distance = MathDistance(pnt1, pnt2);
    let len = distance / this.arrowLengthScale;
    len = len > this.maxArrowLength ? this.maxArrowLength : len;
    const leftPnt = getThirdPoint(
      pnt1,
      pnt2,
      Math.PI / 6,
      len / 2,
      false
    );
    const rightPnt = getThirdPoint(
      pnt1,
      pnt2,
      Math.PI / 6,
      len / 2,
      true
    );
    const points = [...pnt1, ...pnt2, ...leftPnt, ...pnt2, ...rightPnt];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(points);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/arrow/curved-arrow.mjs
var CurvedArrow = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 3e6;
    this.cesium = cesium;
    this.t = 0.3;
    this.minPointsForShape = 2;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length < 2) {
      this.onMouseMove();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    let geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  createStraightArrow(positions) {
    const [pnt1, pnt2] = positions.map(this.cartesianToLnglat);
    const distance = MathDistance(pnt1, pnt2);
    let len = distance / this.arrowLengthScale;
    len = len > this.maxArrowLength ? this.maxArrowLength : len;
    const leftPnt = getThirdPoint(
      pnt1,
      pnt2,
      Math.PI / 6,
      len / 2,
      false
    );
    const rightPnt = getThirdPoint(
      pnt1,
      pnt2,
      Math.PI / 6,
      len / 2,
      true
    );
    const points = [...pnt1, ...pnt2, ...leftPnt, ...pnt2, ...rightPnt];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(points);
    return cartesianPoints;
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    if (positions.length === 2) {
      return this.createStraightArrow(positions);
    }
    const curvePoints = getCurvePoints(this.t, lnglatPoints);
    lnglatPoints[lnglatPoints.length - 2];
    const pnt2 = lnglatPoints[lnglatPoints.length - 1];
    const distance = wholeDistance(lnglatPoints);
    let len = distance / this.arrowLengthScale;
    len = len > this.maxArrowLength ? this.maxArrowLength : len;
    const leftPnt = getThirdPoint(
      curvePoints[curvePoints.length - 2],
      curvePoints[curvePoints.length - 1],
      Math.PI / 6,
      len / 2,
      false
    );
    const rightPnt = getThirdPoint(
      curvePoints[curvePoints.length - 2],
      curvePoints[curvePoints.length - 1],
      Math.PI / 6,
      len / 2,
      true
    );
    const temp = [].concat(...curvePoints);
    const points = [...temp, ...leftPnt, ...pnt2, ...rightPnt];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(points);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/arrow/assault-direction.mjs
var AssaultDirection = class extends FineArrow {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 2;
    this.cesium = cesium;
    this.tailWidthFactor = 0.08;
    this.neckWidthFactor = 0.1;
    this.headWidthFactor = 0.13;
    this.headAngle = Math.PI / 4;
    this.neckAngle = Math.PI * 0.17741;
    this.minPointsForShape = 2;
    this.setState("drawing");
  }
  createGraphic(positions) {
    const [p1, p2] = positions.map(this.cartesianToLnglat);
    const len = getBaseLength([p1, p2]) * 1.5;
    const tailWidth = len * this.tailWidthFactor;
    const neckWidth = len * this.neckWidthFactor;
    const headWidth = len * this.headWidthFactor;
    const tailLeft = getThirdPoint(p2, p1, Math.PI / 2, tailWidth, true);
    const tailRight = getThirdPoint(
      p2,
      p1,
      Math.PI / 2,
      tailWidth,
      false
    );
    const headLeft = getThirdPoint(
      p1,
      p2,
      this.headAngle,
      headWidth,
      false
    );
    const headRight = getThirdPoint(
      p1,
      p2,
      this.headAngle,
      headWidth,
      true
    );
    const neckLeft = getThirdPoint(
      p1,
      p2,
      this.neckAngle,
      neckWidth,
      false
    );
    const neckRight = getThirdPoint(
      p1,
      p2,
      this.neckAngle,
      neckWidth,
      true
    );
    const points = [
      ...tailLeft,
      ...neckLeft,
      ...headLeft,
      ...p2,
      ...headRight,
      ...neckRight,
      ...tailRight,
      ...p1
    ];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(points);
    return cartesianPoints;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/arrow/double-arrow.mjs
var DoubleArrow = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 2;
    this.llBodyPnts = [];
    this.rrBodyPnts = [];
    this.cesium = cesium;
    this.headHeightFactor = 0.25;
    this.headWidthFactor = 0.3;
    this.neckHeightFactor = 0.85;
    this.neckWidthFactor = 0.15;
    this.connPoint = [0, 0];
    this.tempPoint4 = [0, 0];
    this.minPointsForShape = 4;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawPolygon();
    } else if (this.points.length === 3) {
      this.lineEntity && this.viewer.entities.remove(this.lineEntity);
    } else {
      this.finishDrawing();
    }
  }
  finishDrawing() {
    this.curveControlPointLeft = this.cesium.Cartesian3.fromDegrees(
      this.llBodyPnts[2][0],
      this.llBodyPnts[2][1]
    );
    this.curveControlPointRight = this.cesium.Cartesian3.fromDegrees(
      this.rrBodyPnts[1][0],
      this.rrBodyPnts[1][1]
    );
    super.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else if (tempPoints.length > 2) {
      this.removeTempLine();
      const geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
    }
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const [pnt1, pnt2, pnt3] = [
      lnglatPoints[0],
      lnglatPoints[1],
      lnglatPoints[2]
    ];
    const count = lnglatPoints.length;
    if (count === 3) {
      this.tempPoint4 = this.getTempPoint4(pnt1, pnt2, pnt3);
      this.connPoint = Mid(pnt1, pnt2);
    } else if (count === 4) {
      this.tempPoint4 = lnglatPoints[3];
      this.connPoint = Mid(pnt1, pnt2);
    } else {
      this.tempPoint4 = lnglatPoints[3];
      this.connPoint = lnglatPoints[4];
    }
    let leftArrowPnts;
    let rightArrowPnts;
    this.isClockWise = isClockWise(pnt1, pnt2, pnt3);
    if (this.isClockWise) {
      leftArrowPnts = this.getArrowPoints(
        pnt1,
        this.connPoint,
        this.tempPoint4,
        false
      );
      rightArrowPnts = this.getArrowPoints(this.connPoint, pnt2, pnt3, true);
    } else {
      leftArrowPnts = this.getArrowPoints(pnt2, this.connPoint, pnt3, false);
      rightArrowPnts = this.getArrowPoints(
        this.connPoint,
        pnt1,
        this.tempPoint4,
        true
      );
    }
    const m = leftArrowPnts.length;
    const t = (m - 5) / 2;
    const llBodyPnts = leftArrowPnts.slice(0, t);
    const lArrowPnts = leftArrowPnts.slice(t, t + 5);
    let lrBodyPnts = leftArrowPnts.slice(t + 5, m);
    this.llBodyPnts = llBodyPnts;
    let rlBodyPnts = rightArrowPnts.slice(0, t);
    const rArrowPnts = rightArrowPnts.slice(t, t + 5);
    const rrBodyPnts = rightArrowPnts.slice(t + 5, m);
    this.rrBodyPnts = rrBodyPnts;
    rlBodyPnts = getBezierPoints(rlBodyPnts);
    const bodyPnts = getBezierPoints(
      rrBodyPnts.concat(llBodyPnts.slice(1))
    );
    lrBodyPnts = getBezierPoints(lrBodyPnts);
    const pnts = rlBodyPnts.concat(
      rArrowPnts,
      bodyPnts,
      lArrowPnts,
      lrBodyPnts
    );
    const temp = [].concat(...pnts);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp);
    return cartesianPoints;
  }
  getTempPoint4(linePnt1, linePnt2, point) {
    const midPnt = Mid(linePnt1, linePnt2);
    const len = MathDistance(midPnt, point);
    const angle = getAngleOfThreePoints(linePnt1, midPnt, point);
    let symPnt = [0, 0];
    let distance1;
    let distance2;
    let mid;
    if (angle < Math.PI / 2) {
      distance1 = len * Math.sin(angle);
      distance2 = len * Math.cos(angle);
      mid = getThirdPoint(
        linePnt1,
        midPnt,
        Math.PI / 2,
        distance1,
        false
      );
      symPnt = getThirdPoint(midPnt, mid, Math.PI / 2, distance2, true);
    } else if (angle >= Math.PI / 2 && angle < Math.PI) {
      distance1 = len * Math.sin(Math.PI - angle);
      distance2 = len * Math.cos(Math.PI - angle);
      mid = getThirdPoint(
        linePnt1,
        midPnt,
        Math.PI / 2,
        distance1,
        false
      );
      symPnt = getThirdPoint(midPnt, mid, Math.PI / 2, distance2, false);
    } else if (angle >= Math.PI && angle < Math.PI * 1.5) {
      distance1 = len * Math.sin(angle - Math.PI);
      distance2 = len * Math.cos(angle - Math.PI);
      mid = getThirdPoint(linePnt1, midPnt, Math.PI / 2, distance1, true);
      symPnt = getThirdPoint(midPnt, mid, Math.PI / 2, distance2, true);
    } else {
      distance1 = len * Math.sin(Math.PI * 2 - angle);
      distance2 = len * Math.cos(Math.PI * 2 - angle);
      mid = getThirdPoint(linePnt1, midPnt, Math.PI / 2, distance1, true);
      symPnt = getThirdPoint(midPnt, mid, Math.PI / 2, distance2, false);
    }
    return symPnt;
  }
  getArrowPoints(pnt1, pnt2, pnt3, clockWise) {
    const midPnt = Mid(pnt1, pnt2);
    const len = MathDistance(midPnt, pnt3);
    let midPnt1 = getThirdPoint(pnt3, midPnt, 0, len * 0.3, true);
    let midPnt2 = getThirdPoint(pnt3, midPnt, 0, len * 0.5, true);
    midPnt1 = getThirdPoint(
      midPnt,
      midPnt1,
      Math.PI / 2,
      len / 5,
      clockWise
    );
    midPnt2 = getThirdPoint(
      midPnt,
      midPnt2,
      Math.PI / 2,
      len / 4,
      clockWise
    );
    const points = [midPnt, midPnt1, midPnt2, pnt3];
    const arrowPnts = this.getArrowHeadPoints(points);
    if (arrowPnts && Array.isArray(arrowPnts) && arrowPnts.length > 0) {
      const neckLeftPoint = arrowPnts[0];
      const neckRightPoint = arrowPnts[4];
      const tailWidthFactor = MathDistance(pnt1, pnt2) / getBaseLength(points) / 2;
      const bodyPnts = this.getArrowBodyPoints(
        points,
        neckLeftPoint,
        neckRightPoint,
        tailWidthFactor
      );
      if (bodyPnts) {
        const n = bodyPnts.length;
        let lPoints = bodyPnts.slice(0, n / 2);
        let rPoints = bodyPnts.slice(n / 2, n);
        lPoints.push(neckLeftPoint);
        rPoints.push(neckRightPoint);
        lPoints = lPoints.reverse();
        lPoints.push(pnt2);
        rPoints = rPoints.reverse();
        rPoints.push(pnt1);
        return lPoints.reverse().concat(arrowPnts, rPoints);
      }
    } else {
      throw new Error("Interpolation Error");
    }
  }
  getArrowBodyPoints(points, neckLeft, neckRight, tailWidthFactor) {
    const allLen = wholeDistance(points);
    const len = getBaseLength(points);
    const tailWidth = len * tailWidthFactor;
    const neckWidth = MathDistance(neckLeft, neckRight);
    const widthDif = (tailWidth - neckWidth) / 2;
    let tempLen = 0;
    let leftBodyPnts = [];
    let rightBodyPnts = [];
    for (let i = 1; i < points.length - 1; i++) {
      const angle = getAngleOfThreePoints(points[i - 1], points[i], points[i + 1]) / 2;
      tempLen += MathDistance(points[i - 1], points[i]);
      const w = (tailWidth / 2 - tempLen / allLen * widthDif) / Math.sin(angle);
      const left = getThirdPoint(
        points[i - 1],
        points[i],
        Math.PI - angle,
        w,
        true
      );
      const right = getThirdPoint(
        points[i - 1],
        points[i],
        angle,
        w,
        false
      );
      leftBodyPnts.push(left);
      rightBodyPnts.push(right);
    }
    return leftBodyPnts.concat(rightBodyPnts);
  }
  getArrowHeadPoints(points) {
    const len = getBaseLength(points);
    const headHeight = len * this.headHeightFactor;
    const headPnt = points[points.length - 1];
    const headWidth = headHeight * this.headWidthFactor;
    const neckWidth = headHeight * this.neckWidthFactor;
    const neckHeight = headHeight * this.neckHeightFactor;
    const headEndPnt = getThirdPoint(
      points[points.length - 2],
      headPnt,
      0,
      headHeight,
      true
    );
    const neckEndPnt = getThirdPoint(
      points[points.length - 2],
      headPnt,
      0,
      neckHeight,
      true
    );
    const headLeft = getThirdPoint(
      headPnt,
      headEndPnt,
      Math.PI / 2,
      headWidth,
      false
    );
    const headRight = getThirdPoint(
      headPnt,
      headEndPnt,
      Math.PI / 2,
      headWidth,
      true
    );
    const neckLeft = getThirdPoint(
      headPnt,
      neckEndPnt,
      Math.PI / 2,
      neckWidth,
      false
    );
    const neckRight = getThirdPoint(
      headPnt,
      neckEndPnt,
      Math.PI / 2,
      neckWidth,
      true
    );
    return [neckLeft, headLeft, headPnt, headRight, neckRight];
  }
  getPoints() {
    return this.points;
  }
  getBezierControlPointforGrowthAnimation() {
    return this.isClockWise ? {
      left: this.curveControlPointLeft,
      right: this.curveControlPointRight
    } : {
      right: this.curveControlPointLeft,
      left: this.curveControlPointRight
    };
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/line/freehand-line.mjs
var FreehandLine = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.setState("drawing");
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    this.points.push(cartesian);
    this.setGeometryPoints(this.points);
    this.drawLine();
    this.eventDispatcher.dispatchEvent("drawUpdate", cartesian);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    this.setGeometryPoints(this.points);
    this.drawLine();
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/polygon/freehand-polygon.mjs
var FreehandPolygon = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length > 2) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length > 2) {
      this.setGeometryPoints(this.points);
      this.drawPolygon();
      this.eventDispatcher.dispatchEvent("drawUpdate", cartesian);
    }
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    this.setGeometryPoints(this.points);
    this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/line/curve.mjs
var Curve = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 3e6;
    this.cesium = cesium;
    this.t = 0.3;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Points are only added upon click events.
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawLine();
    }
  }
  /**
   * Draw the shape based on the mouse movement position during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    let geometryPoints = [];
    if (tempPoints.length === 2) {
      this.setGeometryPoints(tempPoints);
      this.drawLine();
    } else {
      geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
    }
  }
  /**
   * During editing mode, drag key points to update the corresponding data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * Generate geometric shape points based on key points..
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const curvePoints = getCurvePoints(this.t, lnglatPoints);
    const temp = [].concat(...curvePoints);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/polygon/ellipse.mjs
var Ellipse = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length > 1) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const pnt1 = lnglatPoints[0];
    const pnt2 = lnglatPoints[1];
    const center = Mid(pnt1, pnt2);
    const majorRadius = Math.abs((pnt1[0] - pnt2[0]) / 2);
    const minorRadius = Math.abs((pnt1[1] - pnt2[1]) / 2);
    const res = this.generatePoints(center, majorRadius, minorRadius);
    const temp = [].concat(...res);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp);
    return cartesianPoints;
  }
  generatePoints(center, majorRadius, minorRadius) {
    let [x, y, angle, points] = [null, null, 0, []];
    for (let i = 0; i <= 100; i++) {
      angle = Math.PI * 2 * i / 100;
      x = center[0] + majorRadius * Math.cos(angle);
      y = center[1] + minorRadius * Math.sin(angle);
      points.push([x, y]);
    }
    return points;
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/polygon/lune.mjs
var Lune = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length === 2) ;
    else if (this.points.length > 2) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    if (lnglatPoints.length === 2) {
      const mid = Mid(lnglatPoints[0], lnglatPoints[1]);
      const d = MathDistance(lnglatPoints[0], mid);
      const pnt = getThirdPoint(
        lnglatPoints[0],
        mid,
        Math.PI / 2,
        d,
        false
      );
      lnglatPoints.push(pnt);
    }
    let [pnt1, pnt2, pnt3, startAngle, endAngle] = [
      lnglatPoints[0],
      lnglatPoints[1],
      lnglatPoints[2],
      void 0,
      void 0
    ];
    const center = getCircleCenterOfThreePoints(pnt1, pnt2, pnt3);
    const radius = MathDistance(pnt1, center);
    const angle1 = getAzimuth(pnt1, center);
    const angle2 = getAzimuth(pnt2, center);
    if (isClockWise(pnt1, pnt2, pnt3)) {
      startAngle = angle2;
      endAngle = angle1;
    } else {
      startAngle = angle1;
      endAngle = angle2;
    }
    let points = getArcPoints(center, radius, startAngle, endAngle);
    const temp = [].concat(...points);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/polygon/rectangle.mjs
var Rectangle = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length > 1) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    const [p1, p2] = positions.map(this.cartesianToLnglat);
    const coords = [...p1, p1[0], p2[1], ...p2, p2[0], p1[1], ...p1];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(coords);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/polygon/triangle.mjs
var Triangle = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length === 3) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else {
      this.removeTempLine();
      this.drawPolygon();
    }
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    this.setGeometryPoints(this.points);
    this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/polygon/polygon.mjs
var Polygon = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else {
      this.removeTempLine();
      this.drawPolygon();
    }
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    this.setGeometryPoints(this.points);
    this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/polygon/circle.mjs
var Circle = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length > 1) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const center = lnglatPoints[0];
    const pnt2 = lnglatPoints[1];
    const radius = MathDistance(center, pnt2);
    const res = this.generatePoints(center, radius);
    const temp = [].concat(...res);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp);
    return cartesianPoints;
  }
  generatePoints(center, radius) {
    let x, y, angle;
    const points = [];
    for (let i = 0; i <= 100; i++) {
      angle = Math.PI * 2 * i / 100;
      x = center[0] + radius * Math.cos(angle);
      y = center[1] + radius * Math.sin(angle);
      points.push([x, y]);
    }
    return points;
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/polygon/sector.mjs
var Sector = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length === 3) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else {
      this.removeTempLine();
      const geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
    }
  }
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const [center, pnt2, pnt3] = [
      lnglatPoints[0],
      lnglatPoints[1],
      lnglatPoints[2]
    ];
    const radius = MathDistance(pnt2, center);
    const startAngle = getAzimuth(pnt2, center);
    const endAngle = getAzimuth(pnt3, center);
    const res = getArcPoints(center, radius, startAngle, endAngle);
    res.push(center, res[0]);
    const temp = [].concat(...res);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp);
    return cartesianPoints;
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/polygon/gathering-place.mjs
var GatheringPlace = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.t = 0.4;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length === 2) ;
    else if (this.points.length > 2) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    let arr = [];
    let lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    }).slice(0);
    if (lnglatPoints.length === 2) {
      const mid2 = Mid(lnglatPoints[0], lnglatPoints[1]);
      const d = MathDistance(lnglatPoints[0], mid2);
      const pnt = getThirdPoint(
        lnglatPoints[0],
        mid2,
        Math.PI / 2,
        d,
        true
      );
      lnglatPoints = [lnglatPoints[0], pnt, lnglatPoints[1]];
    }
    let mid = Mid(lnglatPoints[0], lnglatPoints[2]);
    lnglatPoints.push(mid, lnglatPoints[0], lnglatPoints[1]);
    let [normals, pnt1, pnt2, pnt3, pList] = [
      [],
      void 0,
      void 0,
      void 0,
      []
    ];
    for (let i = 0; i < lnglatPoints.length - 2; i++) {
      pnt1 = lnglatPoints[i];
      pnt2 = lnglatPoints[i + 1];
      pnt3 = lnglatPoints[i + 2];
      let normalPoints = getBisectorNormals(
        this.t,
        pnt1,
        pnt2,
        pnt3
      );
      normals = normals.concat(normalPoints);
    }
    let count = normals.length;
    normals = [normals[count - 1]].concat(normals.slice(0, count - 1));
    for (let i = 0; i < lnglatPoints.length - 2; i++) {
      pnt1 = lnglatPoints[i];
      pnt2 = lnglatPoints[i + 1];
      pList.push(pnt1);
      for (let t = 0; t <= 40; t++) {
        let pnt = getCubicValue(
          t / 40,
          pnt1,
          normals[i * 2],
          normals[i * 2 + 1],
          pnt2
        );
        pList.push(pnt);
      }
      pList.push(pnt2);
    }
    let points = pList;
    for (let i = 0; i < points.length; i++) {
      arr = arr.concat(points[i]);
    }
    const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/line/arc.mjs
var Arc = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 3e6;
    this.cesium = cesium;
    this.t = 0.3;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Points are only added upon click events.
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawLine();
    } else if (this.points.length > 2) {
      this.finishDrawing();
    }
  }
  /**
   * Draw the shape based on the mouse movement position during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    let geometryPoints = [];
    if (tempPoints.length === 2) {
      this.setGeometryPoints(tempPoints);
      this.drawLine();
    } else {
      geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
    }
  }
  /**
   * During editing mode, drag key points to update the corresponding data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * Generate geometric shape points based on key points..
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    let count = lnglatPoints.length;
    let arr = [];
    if (count < 2) return;
    if (count === 2) {
      for (let i = 0; i < lnglatPoints.length; i++) {
        arr = arr.concat(lnglatPoints[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    } else {
      let [pnt1, pnt2, pnt3, startAngle, endAngle] = [
        lnglatPoints[0],
        lnglatPoints[1],
        lnglatPoints[2],
        null,
        null
      ];
      let center = getCircleCenterOfThreePoints(pnt1, pnt2, pnt3);
      let radius = MathDistance(pnt1, center);
      let angle1 = getAzimuth(pnt1, center);
      let angle2 = getAzimuth(pnt2, center);
      if (isClockWise(pnt1, pnt2, pnt3)) {
        startAngle = angle2;
        endAngle = angle1;
      } else {
        startAngle = angle1;
        endAngle = angle2;
      }
      let points = getArcPoints(center, radius, startAngle, endAngle);
      for (let i = 0; i < points.length; i++) {
        arr = arr.concat(points[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    }
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/line/polyline.mjs
var Polyline = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 3e6;
    this.cesium = cesium;
    this.t = 0.3;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Points are only added upon click events.
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawLine();
    }
  }
  /**
   * Draw the shape based on the mouse movement position during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    let geometryPoints = [];
    if (tempPoints.length === 2) {
      this.setGeometryPoints(tempPoints);
      this.drawLine();
    } else {
      geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
    }
  }
  /**
   * During editing mode, drag key points to update the corresponding data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * Generate geometric shape points based on key points..
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    let arr = [];
    for (let i = 0; i < lnglatPoints.length; i++) {
      arr = arr.concat(lnglatPoints[i]);
    }
    const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/polygon/closed-curve.mjs
var ClosedCurve = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.t = 0.4;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    let arr = [];
    let lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    if (lnglatPoints.length === 2) {
      for (let i = 0; i < lnglatPoints.length; i++) {
        arr = arr.concat(lnglatPoints[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    } else {
      let pnts = lnglatPoints.slice(0);
      pnts.push(pnts[0], pnts[1]);
      let [normals, pList] = [[], []];
      for (let i = 0; i < pnts.length - 2; i++) {
        let normalPoints = getBisectorNormals(
          this.t,
          pnts[i],
          pnts[i + 1],
          pnts[i + 2]
        );
        normals = normals.concat(normalPoints);
      }
      let count = normals.length;
      normals = [normals[count - 1]].concat(normals.slice(0, count - 1));
      for (let i = 0; i < pnts.length - 2; i++) {
        let pnt1 = pnts[i];
        let pnt2 = pnts[i + 1];
        pList.push(pnt1);
        for (let t = 0; t <= 40; t++) {
          let pnt = getCubicValue(
            t / 40,
            pnt1,
            normals[i * 2],
            normals[i * 2 + 1],
            pnt2
          );
          pList.push(pnt);
        }
        pList.push(pnt2);
      }
      let points = pList;
      for (let i = 0; i < points.length; i++) {
        arr = arr.concat(points[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    }
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/point/point.mjs
var Point = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.setState("drawing");
  }
  getType() {
    return "point";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.drawPoint();
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian) {
    const tempPoints = [...this.points, cartesian];
    this.setGeometryPoints(tempPoints);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian, index) {
    this.points[index] = cartesian;
    this.setGeometryPoints(this.points);
  }
  getPoints() {
    return this.points;
  }
};

// node_modules/dls-map/es/composables/use-analysis/plot/index.mjs
var CesiumPlot = {
  FineArrow,
  AttackArrow,
  SwallowtailAttackArrow,
  SquadCombat,
  SwallowtailSquadCombat,
  StraightArrow,
  CurvedArrow,
  AssaultDirection,
  DoubleArrow,
  FreehandLine,
  FreehandPolygon,
  Curve,
  Ellipse,
  Lune,
  Reactangle: Rectangle,
  Triangle,
  Polygon,
  Circle,
  Sector,
  GatheringPlace,
  Arc,
  Polyline,
  ClosedCurve,
  Point
};
CesiumPlot.createGeometryFromData = (cesium, viewer, opts) => {
  console.log("执行了");
  const { type, style, cartesianPoints } = opts;
  const geometry = new CesiumPlot[type](cesium, viewer, style);
  geometry.points = cartesianPoints;
  const geometryPoints = geometry.createGraphic(cartesianPoints);
  geometry.setGeometryPoints(geometryPoints);
  if (geometry.type == "polygon") {
    geometry.drawPolygon();
  } else {
    geometry.drawLine();
  }
  geometry.finishDrawing();
  geometry.onClick();
  return geometry;
};

// node_modules/dls-map/es/composables/use-environment/useEnvironment.mjs
function FS_Snow() {
  return "#version 300 es\n    precision highp float;\n    uniform sampler2D colorTexture;\n    in vec2 v_textureCoordinates;\n    out vec4 fragColor;\n\n    float snow(vec2 uv, float scale) {\n        float time = czm_frameNumber / 60.0;\n        float w = smoothstep(1.0, 0.0, -uv.y * (scale / 10.0));\n        if (w < 0.1) return 0.0;\n        uv += time / scale;\n        uv.y += time * 2.0 / scale;\n        uv.x += sin(uv.y + time * 0.5) / scale;\n        uv *= scale;\n        vec2 s = floor(uv), f = fract(uv), p;\n        float k = 3.0, d;\n        p = 0.5 + 0.35 * sin(11.0 * fract(sin((s + p + scale) * mat2(7, 3, 6, 5)) * 5.0)) - f;\n        d = length(p);\n        k = min(d, k);\n        k = smoothstep(0.0, k, sin(f.x + f.y) * 0.01);\n        return k * w;\n    }\n\n    void main(void) {\n        vec2 resolution = czm_viewport.zw;\n        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);\n        vec3 finalColor = vec3(0.0);\n        float c = 0.0;\n        c += snow(uv, 30.0) * 0.0;\n        c += snow(uv, 20.0) * 0.0;\n        c += snow(uv, 15.0) * 0.0;\n        c += snow(uv, 10.0);\n        c += snow(uv, 8.0);\n        c += snow(uv, 6.0);\n        c += snow(uv, 5.0);\n        finalColor = vec3(c);\n        fragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(finalColor, 1.0), 0.3);\n    }\n";
}
function FS_Rain() {
  return `#version 300 es
    precision highp float;
    uniform sampler2D colorTexture;
    in vec2 v_textureCoordinates;
    out vec4 fragColor;

    float hash(float x) {
      return fract(sin(x * 23.3) * 13.13);
    }

    void main(void) {
      float time = czm_frameNumber / 60.0;
      vec2 resolution = czm_viewport.zw;

      vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
      vec3 c = vec3(0.6, 0.7, 0.8);

      float a = -0.4;
      float si = sin(a), co = cos(a);
      uv *= mat2(co, -si, si, co);
      uv *= length(uv + vec2(0, 4.9)) * 0.3 + 1.0;

      float v = 1.0 - sin(hash(floor(uv.x * 100.0)) * 2.0);
      float b = clamp(abs(sin(20.0 * time * v + uv.y * (5.0 / (2.0 + v)))) - 0.95, 0.0, 1.0) * 20.0;
      c *= v * b;

      fragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(c, 1.0), 0.5);
    }
  `;
}
function addSnowScene(viewer) {
  let collection = viewer.scene.postProcessStages;
  let fs_snow = FS_Snow();
  let snow = new Cesium.PostProcessStage({
    name: "czm_snow",
    fragmentShader: fs_snow
  });
  collection.add(snow);
}
function addRainScene(viewer) {
  let collection = viewer.scene.postProcessStages;
  let fs_rain = FS_Rain();
  let rain = new Cesium.PostProcessStage({
    name: "czm_rain",
    fragmentShader: fs_rain
  });
  collection.add(rain);
}

// node_modules/dls-map/es/composables/use-coverage/CesiumUseEcharts.mjs
async function CesiumUseEcharts(Cesium2, viewer, option, canvasConfig) {
  (function(e) {
    const t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      const i = t[r] = {
        i: r,
        l: false,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = true, i.exports;
    }
    n.m = e, n.c = t, n.d = function(e2, t2, r) {
      n.o(e2, t2) || Object.defineProperty(e2, t2, {
        enumerable: true,
        get: r
      });
    }, n.r = function(e2) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e2, "__esModule", {
        value: true
      });
    }, n.t = function(e2, t2) {
      if (1 & t2 && (e2 = n(e2)), 8 & t2) return e2;
      if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule) return e2;
      const r = /* @__PURE__ */ Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: true,
        value: e2
      }), 2 & t2 && "string" != typeof e2)
        for (let i in e2)
          n.d(
            r,
            i,
            (function(t3) {
              return e2[t3];
            }).bind(null, i)
          );
      return r;
    }, n.n = function(e2) {
      let t2 = e2 && e2.__esModule ? function() {
        return e2.default;
      } : function() {
        return e2;
      };
      return n.d(t2, "a", t2), t2;
    }, n.o = function(e2, t2) {
      return Object.prototype.hasOwnProperty.call(e2, t2);
    }, n.p = "", n(n.s = 0);
  })([
    function(e, t, n) {
      e.exports = n(1);
    },
    function(e, t, n) {
      echarts ? n(2).load() : console.error("missing echarts lib");
    },
    function(e, t, n) {
      function r(e2, t2) {
        for (let n2 = 0; n2 < t2.length; n2++) {
          let r2 = t2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
        }
      }
      n.r(t);
      let i = function() {
        function e2(t3, n3) {
          !function(e3, t4) {
            if (!(e3 instanceof t4))
              throw new TypeError("Cannot call a class as a function");
          }(this, e2), this._viewer = t3, this.dimensions = ["lng", "lat"], this._mapOffset = [0, 0], this._api = n3;
        }
        let t2, n2, i2;
        return t2 = e2, i2 = [
          {
            key: "create",
            value: function(t3, n3) {
              let r2;
              t3.eachComponent("GLMap", function(t4) {
                (r2 = new e2(echartsWrapper.cesiumViewer, n3)).setMapOffset(
                  t4.__mapOffset || [0, 0]
                ), t4.coordinateSystem = r2;
              }), t3.eachSeries(function(e3) {
                "GLMap" === e3.get("coordinateSystem") && (e3.coordinateSystem = r2);
              });
            }
          },
          {
            key: "dimensions",
            get: function() {
              return ["lng", "lat"];
            }
          }
        ], (n2 = [
          {
            key: "setMapOffset",
            value: function(e3) {
              return this._mapOffset = e3, this;
            }
          },
          {
            key: "getViewer",
            value: function() {
              return this._viewer;
            }
          },
          {
            key: "dataToPoint",
            value: function(e3) {
              let t3 = this._viewer.scene, n3 = [0, 0], r2 = Cesium2.Cartesian3.fromDegrees(e3[0], e3[1]);
              if (!r2) return n3;
              if (t3.mode === Cesium2.SceneMode.SCENE3D && Cesium2.Cartesian3.angleBetween(t3.camera.position, r2) > Cesium2.Math.toRadians(80))
                return false;
              let i3 = t3.cartesianToCanvasCoordinates(r2);
              return i3 ? [i3.x - this._mapOffset[0], i3.y - this._mapOffset[1]] : n3;
            }
          },
          {
            key: "pointToData",
            value: function(e3) {
              let t3 = this._mapOffset, n3 = viewer.scene.globe.ellipsoid, r2 = new Cesium2.cartesian3(e3[1] + t3, e3[2] + t3[2], 0), i3 = n3.cartesianToCartographic(r2);
              return [i3.lng, i3.lat];
            }
          },
          {
            key: "getViewRect",
            value: function() {
              let e3 = this._api;
              return new echarts.graphic.BoundingRect(
                0,
                0,
                e3.getWidth(),
                e3.getHeight()
              );
            }
          },
          {
            key: "getRoamTransform",
            value: function() {
              return echarts.matrix.create();
            }
          }
        ]) && r(t2.prototype, n2), i2 && r(t2, i2), e2;
      }();
      echarts.extendComponentModel({
        type: "GLMap",
        getViewer: function() {
          return echartsWrapper.cesiumViewer;
        },
        defaultOption: {
          roam: false
        }
      }), echarts.extendComponentView({
        type: "GLMap",
        init: function(e2, t2) {
          this.api = t2, echartsWrapper.cesiumViewer.scene.postRender.addEventListener(
            this.moveHandler,
            this
          );
        },
        moveHandler: function(e2, t2) {
          this.api.dispatchAction({
            type: "GLMapRoam"
          });
        },
        render: function(e2, t2, n2) {
        },
        dispose: function(e2) {
          echartsWrapper.cesiumViewer.scene.postRender.removeEventListener(
            this.moveHandler,
            this
          );
        }
      });
      function a() {
        echarts.registerCoordinateSystem("GLMap", i), echarts.registerAction(
          {
            type: "GLMapRoam",
            event: "GLMapRoam",
            update: "updateLayout"
          },
          function(e2, t2) {
          }
        );
      }
      n.d(t, "load", function() {
        return a;
      });
    }
  ]);
  console.log("echarts", echarts);
  const echartsWrapper = { ...echarts, cesiumViewer: viewer };
  function hrcEcharts(t, e, canvasConfig2) {
    this._canvasConfig = canvasConfig2;
    this._mapContainer = t;
    this.viewer = viewer;
    this._overlay = this._createChartOverlay();
    this._overlay.setOption(e);
  }
  hrcEcharts.prototype._createChartOverlay = function() {
    console.log(this);
    const t = this._mapContainer.scene;
    t.canvas.setAttribute("tabIndex", 0);
    const e = document.createElement("div");
    e.style.position = "absolute";
    if (this._canvasConfig) {
      e.style.top = "0px";
      e.style.left = "0px";
      e.style.width = this._canvasConfig.width + "rem";
      e.style.height = this._canvasConfig.height + "rem";
      e.style.pointerEvents = "none";
    } else {
      e.style.top = "0px";
      e.style.left = "0px";
      e.style.width = "120rem";
      e.style.height = "55rem";
      e.style.pointerEvents = "none";
    }
    const l = document.getElementsByClassName("echartMap").length;
    e.setAttribute(
      "id",
      "ysCesium-echarts-" + parseInt(Math.random() * 99999) + "-" + l
    );
    e.setAttribute("class", "echartMap");
    this._mapContainer.container.appendChild(e);
    this._echartsContainer = e;
    return echarts.init(e);
  };
  hrcEcharts.prototype.dispose = function() {
    this._echartsContainer && (this._mapContainer.container.removeChild(this._echartsContainer), this._echartsContainer = null), this._overlay && (this._overlay.dispose(), this._overlay = null);
  };
  hrcEcharts.prototype.updateOverlay = function(t) {
    this._overlay && this._overlay.setOption(t);
  };
  hrcEcharts.prototype.getMap = function() {
    return this._mapContainer;
  };
  hrcEcharts.prototype.getOverlay = function() {
    return this._overlay;
  };
  hrcEcharts.prototype.show = function() {
    document.getElementById(this._id).style.visibility = "visible";
  };
  hrcEcharts.prototype.hide = function() {
    document.getElementById(this._id).style.visibility = "hidden";
  };
  let data = new hrcEcharts(viewer, option, canvasConfig);
  return data;
}

// node_modules/dls-map/es/composables/use-coverage/CesiumHeatmap.mjs
var base = {
  config: {
    // radius: 10,
    // maxOpacity: .5,
    // minOpacity: 0,
    // blur: .75
  },
  canvas: {
    width: 1e3,
    delta: 50
  },
  _bounds: {
    min: { lat: Number.MAX_VALUE, lng: Number.MAX_VALUE },
    max: { lat: Number.MIN_VALUE, lng: Number.MIN_VALUE }
  }
};
var CesiumData;
function CesiumHeatMap(Cesium2, viewer, data, config) {
  this.viewer = viewer;
  CesiumData = Cesium2;
  base.config = Object.assign({}, base.config, config);
  base.config.container = document.createElement("canvas");
  this.setData(data);
}
CesiumHeatMap.prototype._parseData = function(data) {
  let parseData = {
    max: Number.MIN_VALUE,
    data: []
  };
  base.bounds = JSON.parse(JSON.stringify(base._bounds));
  data.map((v) => {
    base.bounds.min.lat = Math.min(base.bounds.min.lat, v.lat);
    base.bounds.min.lng = Math.min(base.bounds.min.lng, v.lng);
    base.bounds.max.lat = Math.max(base.bounds.max.lat, v.lat);
    base.bounds.max.lng = Math.max(base.bounds.max.lng, v.lng);
  });
  base.canvas.height = Math.floor(
    base.canvas.width * (base.bounds.max.lat - base.bounds.min.lat) / (base.bounds.max.lng - base.bounds.min.lng)
  );
  parseData.delta = {
    x: base.canvas.width / (base.bounds.max.lng - base.bounds.min.lng),
    y: base.canvas.height / (base.bounds.max.lat - base.bounds.min.lat)
  };
  data.map((v) => {
    let value = !isNaN(parseInt(v.value)) ? parseInt(v.value) : 1;
    parseData.max = Math.max(parseData.max, value);
    parseData.data.push({
      x: base.canvas.delta + Math.floor(parseData.delta.x * (v.lng - base.bounds.min.lng)),
      y: Math.floor(
        base.canvas.height + base.canvas.delta - parseData.delta.y * (v.lat - base.bounds.min.lat)
      ),
      value
    });
  });
  base.config.container.width = base.canvas.width + base.canvas.delta * 2;
  base.config.container.height = base.canvas.height + base.canvas.delta * 2;
  document.body.appendChild(base.config.container);
  this.heatmapInstance = h337.create(base.config);
  return parseData;
};
CesiumHeatMap.prototype.remove = function() {
  this.viewer.entities.removeById(base.config.id);
};
CesiumHeatMap.prototype.show = function() {
  this.entity && (this.entity.rectangle.show = true);
};
CesiumHeatMap.prototype.hide = function() {
  this.entity && (this.entity.rectangle.show = false);
};
CesiumHeatMap.prototype.fromLatLngToPoint = function(latLng) {
  let y = (1 - Math.log(
    Math.tan(latLng.lat * Math.PI / 180) + 1 / Math.cos(latLng.lat * Math.PI / 180)
  ) / Math.PI) / 2 * 256;
  return { x: 256 * (0.5 + latLng.lng / 360), y };
};
CesiumHeatMap.prototype.setData = function(data) {
  base.config.container.style.display = "block";
  data = this._parseData(data);
  this.viewer.entities.removeById(base.config.id);
  this.heatmapInstance.setData(data);
  base.config.id = (/* @__PURE__ */ new Date()).getTime();
  this.entity = this.viewer.entities.add({
    id: base.config.id,
    zIndex: -100,
    rectangle: {
      heightReference: CesiumData.HeightReference.CLAMP_TO_GROUND,
      coordinates: CesiumData.Rectangle.fromDegrees(
        Math.max(
          base.bounds.min.lng - (base.bounds.max.lng - base.bounds.min.lng) * base.canvas.delta / base.canvas.width,
          -180
        ),
        Math.max(
          base.bounds.min.lat - (base.bounds.max.lat - base.bounds.min.lat) * base.canvas.delta / base.canvas.height,
          -90
        ),
        Math.min(
          base.bounds.max.lng + (base.bounds.max.lng - base.bounds.min.lng) * base.canvas.delta / base.canvas.width,
          180
        ),
        Math.min(
          base.bounds.max.lat + (base.bounds.max.lat - base.bounds.min.lat) * base.canvas.delta / base.canvas.height,
          90
        )
      ),
      outline: true,
      outlineWidth: 10,
      outlineColor: CesiumData.Color.YELLOW,
      materials: CesiumData.Color.RED,
      material: new CesiumData.ImageMaterialProperty({
        image: this.heatmapInstance.getDataURL(),
        repeat: new CesiumData.Cartesian2(1, 1),
        transparent: true
      })
    }
  });
  base.config.container.style.display = "none";
};

// node_modules/dls-map/es/composables/use-analysis/CesiumBufferAnalyze.mjs
var Buffer = class {
  constructor(viewer, radius, options = { basePath: "" }) {
    this.radius = 5e5;
    this.transformWGS84ToCartesian = (position, alt = 0) => position ? Cesium.Cartesian3.fromDegrees(
      position.lon,
      position.lat,
      alt || position.alt,
      Cesium.Ellipsoid.WGS84
    ) : Cesium.Cartesian3.ZERO;
    this.transformCartesianToWGS84 = (cartesian) => {
      const ellipsoid = Cesium.Ellipsoid.WGS84;
      const cartographic = ellipsoid.cartesianToCartographic(cartesian);
      return {
        lon: Cesium.Math.toDegrees(cartographic.longitude),
        lat: Cesium.Math.toDegrees(cartographic.latitude),
        alt: cartographic.height
      };
    };
    this.transformWGS84ToCartographic = (position) => position ? Cesium.Cartographic.fromDegrees(
      position.lon || position.lon,
      position.lat,
      position.alt
    ) : Cesium.Cartographic.ZERO;
    this.clear = () => {
      this.drawLayer.entities.removeAll();
      return this.handler && this.handler.destroy();
    };
    this.viewer = viewer;
    this.radius = radius;
    this.drawLayer = new Cesium.CustomDataSource("measureLayer");
    this.viewer.dataSources.add(this.drawLayer);
  }
  /**
   * 坐标数组转换 笛卡尔转84
   * @param {Array} WSG84Arr {lon,lat,alt} 地理坐标数组
   * @param {Number} alt 拔高
   * @return {Array} Cartesian3 三维位置坐标数组
   */
  transformWGS84ArrayToCartesianArray(WSG84Arr, alt) {
    return WSG84Arr ? WSG84Arr.map((item) => this.transformWGS84ToCartesian(item, alt)) : [];
  }
  /**
   * 坐标数组转换 笛卡尔转86
   * @param {Array} cartesianArr 三维位置坐标数组
   * @return {Array} {lon,lat,alt} 地理坐标数组
   */
  transformCartesianArrayToWGS84Array(cartesianArr) {
    if (this.viewer) {
      return cartesianArr ? cartesianArr.map((item) => this.transformCartesianToWGS84(item)) : [];
    }
  }
  /**
   * 拾取位置点
   * @param {Object} px 屏幕坐标
   * @return {Object} Cartesian3 三维坐标
   */
  getCatesian3FromPX(px) {
    if (this.viewer && px) {
      const picks = this.viewer.scene.drillPick(px);
      let cartesian = null;
      let isOn3dtiles = false;
      let isOnTerrain = false;
      Object.keys(picks).forEach((i) => {
        const pick = picks[i];
        if (pick && pick.primitive instanceof (Cesium.Cesium3DTileFeature || Cesium.Cesium3DTileset || Cesium.Model)) {
          isOn3dtiles = true;
        }
        if (isOn3dtiles) {
          this.viewer.scene.pick(px);
          cartesian = this.viewer.scene.pickPosition(px);
          if (cartesian) {
            const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            if (cartographic.height < 0) cartographic.height = 0;
            const lon = Cesium.Math.toDegrees(cartographic.longitude);
            const lat = Cesium.Math.toDegrees(cartographic.latitude);
            const { height } = cartographic;
            cartesian = this.transformWGS84ToCartesian({
              lon,
              lat,
              alt: height
            });
          }
        }
      });
      const boolTerrain = this.viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider;
      if (!isOn3dtiles && !boolTerrain) {
        const ray = this.viewer.scene.camera.getPickRay(px);
        if (!ray) return null;
        cartesian = this.viewer.scene.globe.pick(ray, this.viewer.scene);
        isOnTerrain = true;
      }
      if (!isOn3dtiles && !isOnTerrain && boolTerrain) {
        cartesian = this.viewer.scene.camera.pickEllipsoid(
          px,
          this.viewer.scene.globe.ellipsoid
        );
      }
      if (cartesian) {
        const position = this.transformCartesianToWGS84(cartesian);
        if (position.alt < 0) {
          cartesian = this.transformWGS84ToCartesian(position, 0.1);
        }
        return cartesian;
      }
      return false;
    }
  }
  /**
   * 绘制面
   */
  polyBuffer() {
    return new Promise((resolve, reject) => {
      if (this.viewer) {
        this.viewer.scene.globe.depthTestAgainstTerrain = true;
        let positions = [];
        let polyPoint = [];
        const polygonHie = new Cesium.PolygonHierarchy();
        const polygonEntity = new Cesium.Entity();
        if (this.handler) {
          this.handler.destroy();
        }
        this.handler = new Cesium.ScreenSpaceEventHandler(
          this.viewer.scene.canvas
        );
        this.handler.setInputAction((movement) => {
          const cartesian = this.getCatesian3FromPX(movement.position);
          const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
          if (cartesian) {
            const lon = Cesium.Math.toDegrees(cartographic.longitude);
            const lat = Cesium.Math.toDegrees(cartographic.latitude);
            const { height } = cartographic;
            if (positions.length === 0) {
              polygonHie.positions.push(cartesian.clone());
              positions.push(cartesian.clone());
              polyPoint.push([lon, lat, height]);
            }
            positions.push(cartesian.clone());
            polygonHie.positions.push(cartesian.clone());
            polyPoint.push([lon, lat, height]);
          }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        this.handler.setInputAction((movement) => {
          const cartesian = this.getCatesian3FromPX(movement.endPosition);
          const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
          const lon = Cesium.Math.toDegrees(cartographic.longitude);
          const lat = Cesium.Math.toDegrees(cartographic.latitude);
          const { height } = cartographic;
          if (positions.length >= 2) {
            if (cartesian) {
              positions.pop();
              positions.push(cartesian);
              polygonHie.positions.pop();
              polygonHie.positions.push(cartesian);
              polyPoint.pop();
              polyPoint.push([lon, lat, height]);
            }
          }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        this.handler.setInputAction((movement) => {
          if (positions.length > 2) {
            positions.push(positions[0]);
            polyPoint.push(polyPoint[0]);
            const arrData = [...polyPoint];
            this.addPolygon(positions);
            this.initPolygonBuffer(polyPoint, this.radius);
            positions = [];
            polyPoint = [];
            polygonHie.positions = [];
            resolve(arrData);
          }
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
        this.handler.setInputAction((e) => {
          this.clear();
        }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
        polygonEntity.polyline = {
          width: 3,
          material: Cesium.Color.YELLOW.withAlpha(0.8),
          clampToGround: true
        };
        polygonEntity.polyline.positions = new Cesium.CallbackProperty(
          () => positions,
          false
        );
        polygonEntity.polygon = {
          hierarchy: new Cesium.CallbackProperty(() => polygonHie, false),
          material: Cesium.Color.WHITE.withAlpha(0.1),
          clampToGround: true
        };
        this.drawLayer.entities.add(polygonEntity);
      }
    });
  }
  // 初始化面缓冲
  initPolygonBuffer(bufferPolyogn, distance) {
    return new Promise((resolve, reject) => {
      let degreesArray = this.pointsToDegreesArray(bufferPolyogn);
      const polygonF = polygon([bufferPolyogn]);
      const buffered = buffer(polygonF, distance, { units: "meters" });
      const { coordinates } = buffered.geometry;
      const points = coordinates[0];
      degreesArray = this.pointsToDegreesArray(points);
      this.addBufferPolyogn(Cesium.Cartesian3.fromDegreesArray(degreesArray));
      resolve(bufferPolyogn);
    });
  }
  // 添加缓冲面
  addBufferPolyogn(positions) {
    this.drawLayer.entities.add({
      id: "polyognBuffer",
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(positions),
        material: Cesium.Color.RED.withAlpha(0.3),
        classificationType: Cesium.ClassificationType.BOTH,
        clampToGround: true
      }
    });
  }
  // 添加面
  addPolygon(positions) {
    this.drawLayer.entities.add({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(positions),
        material: Cesium.Color.WHITE.withAlpha(0.1),
        classificationType: Cesium.ClassificationType.BOTH,
        clampToGround: true
      },
      polyline: {
        positions,
        width: 2,
        material: Cesium.Color.YELLOW.withAlpha(0.4),
        clampToGround: true
      }
    });
  }
  // 坐标点格式转换
  pointsToDegreesArray(points) {
    const degreesArray = [];
    points.map((item) => {
      degreesArray.push(item[0]);
      degreesArray.push(item[1]);
    });
    return degreesArray;
  }
  changeRadius(changeDis) {
    this.radius = changeDis;
  }
};

// node_modules/dls-map/es/utils/util.mjs
var loadScript = (src) => {
  const $script = document.createElement("script");
  $script.async = false;
  $script.src = src;
  document.body.appendChild($script);
  return new Promise((resolve, reject) => {
    $script.onload = () => {
      resolve(true);
    };
  });
};
function groupPoints(pointsArray) {
  const groupedPoints = [];
  for (let i = 0; i < pointsArray.length; i++) {
    const group = [pointsArray[i], pointsArray[i + 1]];
    groupedPoints.push(group);
  }
  groupedPoints.pop();
  return groupedPoints;
}
function twoToCenter(point1, point2) {
  const pointNew1 = Cesium.Cartesian3.fromDegrees(point1[0], point1[1]);
  const pointNew2 = Cesium.Cartesian3.fromDegrees(point2[0], point2[1]);
  const centerPoint = Cesium.Cartesian3.lerp(
    pointNew1,
    pointNew2,
    0.5,
    new Cesium.Cartesian3()
  );
  return centerPoint;
}

// node_modules/dls-map/es/composables/use-entity/CesiumTrack.mjs
var groupArrPoint = [];
function CesiumTrack(data, viewer, img) {
  return new Promise((resolve, reject) => {
    groupArrPoint = [];
    let lineDataArr = [];
    if (!data.length) return false;
    console.log("dataaaaa", data);
    data.forEach((item, index) => {
      if (item.color) {
        const line = viewer.entities.add({
          name: "Purple",
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(
              item.positions.flat()
            ),
            width: 3,
            followSurface: false,
            material: new Cesium.PolylineArrowMaterialProperty(
              Cesium.Color.fromCssColorString(item.color)
            )
          }
        });
        handleGeneratePosition(item.positions, item.color, viewer);
        groupArrPoint.push({
          color: item.color,
          data: groupPoints(item.positions)
        });
        lineDataArr.push(line);
      }
    });
    handleGroupArrPoint(viewer, img);
    resolve(null);
    return lineDataArr;
  });
}
var handleGeneratePosition = (data, color, viewer) => {
  if (data && data.length) {
    let startPoint = {
      point: [data[0].lon, data[0].lat],
      track_time: "2020-09-03"
    };
    let endPoint = {
      point: [data[data.length - 1].lon, data[data.length - 1].lat],
      track_time: "2020-09-07"
    };
    let dataArr = [startPoint, endPoint];
    dataArr.forEach((item, index) => {
      let tooltip = `
          <div>
            <div class="line"></div>
            <div class="panel">
              <span class="content">${item.track_time}</span>
            </div>
          </div>
        `;
      let className = "LayerPointTime";
      ({
        viewer,
        position: [parseFloat(item.point[0]), parseFloat(item.point[1])],
        height: 0,
        offset: [0, -60],
        dom: tooltip,
        className,
        type: "LayerPointTime"
      });
    });
    data.forEach((t) => {
      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(t[0], t[1], 1e3),
        attribute: {
          data: []
        },
        point: {
          zIndex: 99999999,
          pixelSize: 6,
          pickable: true,
          color: Cesium.Color.fromCssColorString(color),
          heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
        }
      });
    });
  }
};
var handleGroupArrPoint = (viewer, img) => {
  groupArrPoint.forEach((item) => {
    item.data.forEach((coordItem) => {
      let centerPoint = twoToCenter(coordItem[0], coordItem[1]);
      let angle = rhumbBearing(coordItem[0], coordItem[1]);
      const angleInRadians = Cesium.Math.toRadians(-angle + 90);
      const hexColor = item.color;
      const alpha = 1;
      Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha);
      viewer.entities.add({
        position: centerPoint,
        billboard: {
          rotation: angleInRadians,
          image: img,
          scale: 0.1,
          alignedAxis: Cesium.Cartesian3.ZERO,
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
        }
      });
      viewer.scene.requestRender();
    });
  });
};

// node_modules/dls-map/es/utils/helper/index.mjs
var importHack = (module, moduleName) => {
  if (typeof module === "function") {
    return module;
  }
  if (module.default) {
    return module.default;
  }
  const wModule = window[moduleName];
  if (wModule) {
    return wModule.default ? wModule.default : wModule;
  }
  if (module) {
    return module;
  }
  throw new Error(`无法处理模块 : ${moduleName}`);
};
export {
  Buffer as CesiumBufferAnalyze,
  CesiumHeatMap,
  CesiumPlot,
  CesiumTrack,
  CesiumUseEcharts,
  DlsButton,
  DlsDivLabel,
  DlsMap,
  DrawSoildLine,
  Shaders,
  addBillboard,
  addCircle,
  addLine,
  addRainScene,
  addSnowScene,
  addWall,
  clearEntityByname,
  groupPoints,
  handlePitchDegrees,
  importHack,
  loadScript,
  removeDrawLine,
  twoToCenter,
  useCesiumCoord,
  useCesiumFlyTo,
  useLoadTerrain,
  useRemoveCesium,
  useSwitchMap,
  useSwitchViewPoint,
  withInstall,
  withInstallFunction
};
//# sourceMappingURL=dls-map.js.map
