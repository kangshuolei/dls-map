import * as n from "./src/index.mjs";
import { Button as a } from "./src/button/index.mjs";
const r = {
  install: (t) => {
    const o = n;
    for (let e in o)
      t.use(o[e]);
  }
};
export {
  a as Button,
  r as default
};
