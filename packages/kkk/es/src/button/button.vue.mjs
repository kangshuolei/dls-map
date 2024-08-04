import { defineComponent as r, computed as l, openBlock as u, createElementBlock as s, normalizeClass as p, renderSlot as a } from "vue";
import "./style/index.css";
const d = /* @__PURE__ */ r({
  name: "kl-button",
  __name: "button",
  props: {
    type: {}
  },
  setup(e) {
    const t = e, o = l(() => ({ [`kl-button--${t.type}`]: t.type }));
    return (n, c) => (u(), s("button", {
      class: p(["kl-button", o.value])
    }, [
      a(n.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
