import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "./plugins/element.js";

Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
