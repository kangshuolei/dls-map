import { createApp } from "vue";
import App from "./app.vue";
import kkk from "@kkk-cesium-map/components"

const app = createApp(App);
app.use(kkk)
app.mount("#app");
