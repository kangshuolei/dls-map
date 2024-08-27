import { defineComponent as l, onMounted as u, computed as r, openBlock as s, createElementBlock as p, normalizeClass as a, renderSlot as c } from "vue";
import "./style/index.css";
const i = /* @__PURE__ */ l({
  name: "kl-button",
  __name: "button",
  props: {
    type: {}
  },
  setup(e) {
    u(() => {
      console.log("执行了。。。", Cesium);
    });
    const t = e, o = r(() => ({ [`kl-button--${t.type}`]: t.type }));
    return (n, m) => (s(), p("button", {
      class: a(["kl-button", o.value])
    }, [
      c(n.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
