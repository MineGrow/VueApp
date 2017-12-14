// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'         // 引入vue模块
import App from './App'       // 引入vue组件
import router from './router' // 引入路由配置文件

Vue.config.productionTip = false  // 关闭生产模式下给出的提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
