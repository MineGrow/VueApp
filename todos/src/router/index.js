import Vue from 'vue'             // 导入vue
import Router from 'vue-router'   // 导入vue-router库
import Layouts from '@/components/layouts'  // 导入layouts.vue组件

Vue.use(Router)   // 全局注册Router组件，它会绑定到vue实例里面

export default new Router({   // 创建 router 实例，然后传 routes 配置
  routes: [
    {
      path: '/',          // 访问路径
      name: 'Layouts',    // 路径名
      component: Layouts  // 访问的组件，即访问‘/’，它会加载 Layouts 组件所有的内容
    }
  ]
})