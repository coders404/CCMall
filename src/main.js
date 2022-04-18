import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as API from './API'
Vue.use(ElementUI);

Vue.config.productionTip = false
// 引入全局组件Subnav
import Subnav from './components/Subnav'
Vue.component(Subnav.name, Subnav)
// 引入全局组件Pagination
import Pagination from './components/Pagination'
Vue.component(Pagination.name, Pagination)
new Vue({
  beforeCreate() {
    Vue.prototype.$API = API
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
