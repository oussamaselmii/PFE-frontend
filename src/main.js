
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import bootstrapCss from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Jquery from "jquery";
window.$ = window.jQuery = Jquery;
import popper from "popper.js";
import bootstrapjs from "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
