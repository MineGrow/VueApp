<template>
  <!-- 最外层容器 -->
  <section 
    class="container"
    :class="{'menu-open': menuOpen}"> 
    <!-- 左边的容器 -->
    <section class="menu">
      <!-- 菜单组件 menus -->
      <menus/>
    </section>

    <div
      class="content-overlay"
      @click="$store.dispatch('updateMenu')" />

    <!-- 右边的容器 -->
    <!-- 这个是当页面收缩覆盖在内容上面的模糊层，点击后复原 他可以直接调用vuex actions.js里面的updateMenu方法-->
    <div class="content-container">
      <router-view/>
    </div>
  </section>
</template>

<script>
    import menus from './menus'; // 导入创建的 menus 组件
    import todo from './todo';
    export default {
        components : { // 注册 menus 组件，让其可以在 template 调用
            menus,
            todo
        },
        computed: {
            menuOpen() {
                return this.$store.state.menuOpen;
            }
        }
    }
</script>

<style lang="less" scoped>
@import '../common/style/layouts.less';
</style>