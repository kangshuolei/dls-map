import * as r from "./src/index.mjs";
import { Button as a } from "./src/button/index.mjs";
import { DlsMap as i } from "./src/dlsMap/index.mjs";
const n = {
  install: (t) => {
    const o = r;
    for (let e in o)
      t.use(o[e]);
  }
};
export {
  a as Button,
  i as DlsMap,
  n as default
};
