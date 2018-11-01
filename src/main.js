import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/index";
import iView from "iview";
import mockdata from "./mock"
/* mock数据全局灌入 */
import "iview/dist/styles/iview.css";

Vue.config.productionTip = false
Vue.use(iView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')