import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入路由 自己封装的拦截器路由
import axios from '../utils/interceptor'
Vue.prototype.$axios = axios
// 引入element组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 导入全局样式表
import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
