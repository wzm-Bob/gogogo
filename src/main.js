import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/index";
import iView from "iview";
import ElementUI from "element-ui";
import "iview/dist/styles/iview.css";
import 'element-ui/lib/theme-chalk/index.css';
import mockdata from "./mock"
import './authrouter'
/* mock数据全局灌入 */

import BreadCrumb from "./components/Breadcrumb";
Vue.component('BreadCrumb',BreadCrumb)
Vue.use(iView)
Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')