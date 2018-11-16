// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from './api/http'
import api from './api/api'
import RE from './RE/RE'


Vue.config.productionTip = false
Vue.use(ElementUI,{zIndex:10000})

Vue.prototype.$http = http
Vue.prototype.api = api
Vue.prototype.RE = RE

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//切换路由后回滚顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
