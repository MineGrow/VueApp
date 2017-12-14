<template>
<!-- 菜单容器 -->
  <div class="list-todos">
      <!-- 单个菜单容器 v-for列表渲染 -->
      <a class="list-todo activeListClass list" v-for="item in items" :key="item.id">
          <!-- 锁的图标 v-if条件渲染 -->
          <span class="icon-lock" v-if="item.locked"></span>
          <!-- 数字 -->
          <span class="count-list" v-if="item.count > 0">{{ item.count }}</span>
          <!-- 菜单内容 数据绑定 -->
          {{ item.title }}
      </a>
      <a class="link-list-new">
          <!-- 新增菜单 -->
          <span class="icon-plus"></span>
          新增
      </a>
  </div>
</template>

<script>
export default {
  data() { // data 函数
    return {
        items: [
            { title: '星期一', count: 1, locked: true},
            { title: '星期二', count: 1, locked: true},
            { title: '星期三', count: 1, locked: false}
        ]
    }
  }
}
</script>

<style lang="less">
@import url('../common/style/menu.less');
</style>
