<template>
    <!-- 最外层容器 -->
    <section class="container"> 
        <!-- 左边的容器 -->
        <section class="menu">
            <!-- 菜单组件 menus -->
            <menus></menus>
        </section>

        <!-- 右边的容器 -->
        <section class="content-container">
            <todo></todo>
        </section>
    </section>
</template>

<script>
import menus from './menus'; // 导入创建的 menus 组件
import todo from './todo';
export default {
    components : { // 注册 menus 组件，让其可以在 template 调用
        menus,
        todo
    }
}
</script>

<style lang="less" scoped>
@import '../common/style/layouts.less';
</style>