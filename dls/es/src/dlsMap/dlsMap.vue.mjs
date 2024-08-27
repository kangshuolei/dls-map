import { defineComponent as c, ref as d, reactive as m, onMounted as u, openBlock as f, createElementBlock as p, unref as v } from "vue";
import "./style/index.css";
const C = ["id"], _ = /* @__PURE__ */ c({
  name: "dls-map",
  __name: "dlsMap",
  props: ["mapConfig"],
  emits: ["cesiumReady"],
  setup(i, { expose: a, emit: o }) {
    const t = i, r = o, e = t.mapConfig, s = d(null), l = m({});
    return u(() => {
      e.defaultAccessToken && (Cesium.Ion.defaultAccessToken = e.defaultAccessToken);
      let n = new Cesium.Viewer(e.id, {
        baseLayerPicker: !1,
        geocoder: !1,
        animation: !1,
        shouldAnimate: !0,
        homeButton: !1,
        sceneMode: e.sceneMode === 2 ? Cesium.SceneMode.SCENE2D : Cesium.SceneMode.SCENE3D,
        timeline: !1,
        fullscreenButton: !1,
        scene3DOnly: !1,
        sceneModePicker: !1,
        navigationInstructionsInitiallyVisible: !1,
        navigationHelpButton: !1,
        selectionIndicator: !1,
        infoBox: !1,
        imageryProvider: !1
      });
      (e.defaultAccessToken || e.imageryProvider) && n.imageryLayers.addImageryProvider(
        new Cesium.UrlTemplateImageryProvider(e.imageryProvider)
      ), n.cesiumWidget.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      ), s.value = n, r("cesiumReady", s.value);
    }), a({
      dataM: l,
      viewer: s
    }), (n, g) => (f(), p("div", {
      id: v(e).id,
      style: { position: "absolute", width: "100%", height: "100%" },
      class: "dlsMapContainer"
    }, null, 8, C));
  }
});
export {
  _ as default
};
