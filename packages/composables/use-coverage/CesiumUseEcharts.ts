//因为目前这个只支持echarts 4.x版本
// 所以没有通过 import 的方式引用 echarts，用 index.html 引入 echart.js的方式引用的
export default async function CesiumUseEcharts(
  Cesium,
  viewer,
  option,
  canvasConfig
) {
  //结合echarts
  (function (e) {
    const t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      const i = (t[r] = {
        i: r,
        l: !1,
        exports: {},
      });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: r,
          });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: 'Module',
          }),
          Object.defineProperty(e, '__esModule', {
            value: !0,
          });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        const r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', {
            enumerable: !0,
            value: e,
          }),
          2 & t && 'string' != typeof e)
        )
          for (let i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (e) {
        let t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 0));
  })([
    function (e, t, n) {
      e.exports = n(1);
    },
    function (e, t, n) {
      echarts ? n(2).load() : console.error('missing echarts lib');
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      n.r(t);
      let i = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this._viewer = t),
            (this.dimensions = ['lng', 'lat']),
            (this._mapOffset = [0, 0]),
            (this._api = n);
        }
        let t, n, i;
        return (
          (t = e),
          (i = [
            {
              key: 'create',
              value: function (t, n) {
                let r;
                t.eachComponent('GLMap', function (t) {
                  (r = new e(echartsWrapper.cesiumViewer, n)).setMapOffset(
                    t.__mapOffset || [0, 0]
                  ),
                    (t.coordinateSystem = r);
                }),
                  t.eachSeries(function (e) {
                    'GLMap' === e.get('coordinateSystem') &&
                      (e.coordinateSystem = r);
                  });
              },
            },
            {
              key: 'dimensions',
              get: function () {
                return ['lng', 'lat'];
              },
            },
          ]),
          (n = [
            {
              key: 'setMapOffset',
              value: function (e) {
                return (this._mapOffset = e), this;
              },
            },
            {
              key: 'getViewer',
              value: function () {
                return this._viewer;
              },
            },
            {
              key: 'dataToPoint',
              value: function (e) {
                let t = this._viewer.scene,
                  n = [0, 0],
                  r = Cesium.Cartesian3.fromDegrees(e[0], e[1]);
                if (!r) return n;
                if (
                  t.mode === Cesium.SceneMode.SCENE3D &&
                  Cesium.Cartesian3.angleBetween(t.camera.position, r) >
                    Cesium.Math.toRadians(80)
                )
                  return !1;
                let i = t.cartesianToCanvasCoordinates(r);
                return i
                  ? [i.x - this._mapOffset[0], i.y - this._mapOffset[1]]
                  : n;
              },
            },
            {
              key: 'pointToData',
              value: function (e) {
                let t = this._mapOffset,
                  n = viewer.scene.globe.ellipsoid,
                  r = new Cesium.cartesian3(e[1] + t, e[2] + t[2], 0),
                  i = n.cartesianToCartographic(r);
                return [i.lng, i.lat];
              },
            },
            {
              key: 'getViewRect',
              value: function () {
                let e = this._api;
                return new echarts.graphic.BoundingRect(
                  0,
                  0,
                  e.getWidth(),
                  e.getHeight()
                );
              },
            },
            {
              key: 'getRoamTransform',
              value: function () {
                return echarts.matrix.create();
              },
            },
          ]) && r(t.prototype, n),
          i && r(t, i),
          e
        );
      })();
      echarts.extendComponentModel({
        type: 'GLMap',
        getViewer: function () {
          return echartsWrapper.cesiumViewer;
        },
        defaultOption: {
          roam: !1,
        },
      }),
        echarts.extendComponentView({
          type: 'GLMap',
          init: function (e, t) {
            (this.api = t),
              echartsWrapper.cesiumViewer.scene.postRender.addEventListener(
                this.moveHandler,
                this
              );
          },
          moveHandler: function (e, t) {
            this.api.dispatchAction({
              type: 'GLMapRoam',
            });
          },
          render: function (e, t, n) {},
          dispose: function (e) {
            echartsWrapper.cesiumViewer.scene.postRender.removeEventListener(
              this.moveHandler,
              this
            );
          },
        });
      function a() {
        echarts.registerCoordinateSystem('GLMap', i),
          echarts.registerAction(
            {
              type: 'GLMapRoam',
              event: 'GLMapRoam',
              update: 'updateLayout',
            },
            function (e, t) {}
          );
      }
      n.d(t, 'load', function () {
        return a;
      });
    },
  ]);
  console.log('echarts', echarts);

  //开始
  // 创建一个包装对象
  const echartsWrapper = { ...echarts, cesiumViewer: viewer };
  // echarts.cesiumViewer = viewer;
  function hrcEcharts(t, e, canvasConfig) {
    this._canvasConfig = canvasConfig;
    this._mapContainer = t;
    this.viewer = viewer;
    this._overlay = this._createChartOverlay();
    this._overlay.setOption(e);
  }
  hrcEcharts.prototype._createChartOverlay = function () {
    console.log(this);
    const t = this._mapContainer.scene;
    t.canvas.setAttribute('tabIndex', 0);
    const e = document.createElement('div');
    e.style.position = 'absolute';
    if (this._canvasConfig) {
      e.style.top = '0px';
      e.style.left = '0px';
      e.style.width = this._canvasConfig.width + 'rem';
      e.style.height = this._canvasConfig.height + 'rem';
      e.style.pointerEvents = 'none';
    } else {
      e.style.top = '0px';
      e.style.left = '0px';
      e.style.width = 120 + 'rem';
      e.style.height = 55 + 'rem';
      e.style.pointerEvents = 'none';
    }
    const l = document.getElementsByClassName('echartMap').length;
    e.setAttribute(
      'id',
      'ysCesium-echarts-' + parseInt(Math.random() * 99999) + '-' + l
    );
    e.setAttribute('class', 'echartMap');
    this._mapContainer.container.appendChild(e);
    this._echartsContainer = e;
    return echarts.init(e);
  };
  hrcEcharts.prototype.dispose = function () {
    this._echartsContainer &&
      (this._mapContainer.container.removeChild(this._echartsContainer),
      (this._echartsContainer = null)),
      this._overlay && (this._overlay.dispose(), (this._overlay = null));
  };
  hrcEcharts.prototype.updateOverlay = function (t) {
    this._overlay && this._overlay.setOption(t);
  };
  hrcEcharts.prototype.getMap = function () {
    return this._mapContainer;
  };
  hrcEcharts.prototype.getOverlay = function () {
    return this._overlay;
  };
  hrcEcharts.prototype.show = function () {
    document.getElementById(this._id).style.visibility = 'visible';
  };
  hrcEcharts.prototype.hide = function () {
    document.getElementById(this._id).style.visibility = 'hidden';
  };
  let data = new hrcEcharts(viewer, option, canvasConfig);
  return data;
}
