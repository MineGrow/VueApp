<template>
  <div class="list-todos"> <!-- 菜单容器 -->
    <!-- 单个菜单容器 v-for列表渲染 -->
    <a 
      @click="goList(item.id)" 
      class="list-todo activeListClass list" 
      :class="{'active': item.id === todoId}" 
      v-for="(item, index) in todoList" 
      :key="index">
      <!-- 锁的图标 v-if条件渲染 -->
      <span 
        class="icon-lock" 
        v-if="item.locked"/>
      <!-- 数字 -->
      <span 
        class="count-list" 
        v-if="item.count > 0">{{ item.count }}</span>
      <!-- 菜单内容 数据绑定 -->
      {{ item.title }}
    </a>
    <a 
      class="link-list-new" 
      @click="addTodoList">
      <!-- 新增菜单 -->
      <span class="icon-plus"/>
      新增
    </a>
  </div>
</template>

<script>
import { getTodoList, addTodo } from "../api/api"; // 引入我们封装好的两个接口函数
export default {
  data() {
    // data 函数
    return {
      items: [], // 菜单数据
      todoId: "" // 默认选中id
    };
  },
  created() {
    // 调用请求菜单列表数据的接口
    getTodoList({}).then(res => {
      const TODOS = res.data.todos; // 数据都会返回在res.data里面
      this.items = TODOS;
      this.todoId = TODOS[0].id;
    });
  },
  methods: {
    goList(id) {
      // 点击菜单时，替换选中id
      this.todoId = id;
    },
    addTodoList() {
      // 点击新增按钮的时候
      // 调用新增菜单的接口，在接口调用成功再请求数据
      addTodo({}).then(data => {
        this.$store.dispatch('getTodo').then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              this.goList(this.todoList[this.todoList.length - 1].id);
            }, 100);
          });
        });
      });
    }
  },
  watch: {
    todoId(id) {
      this.$router.push({ name: "todo", params: { id: id } });
      // 监听到用户的点击todoId的变化再跳转路由
    }
  },
  computed: {
    todoList() {
      return this.$store.getters.getTodoList;  // 返回vuex getters.js 定义的getTodoList数据
    }
  },
  created() {
    this.$store.dispatch('getTodo').then(() => { //调用vuex actions.js 里面的 getTodo函数
      this.$nextTick(() => {
        this.goList(this.todoList[0].id);
      })
    })
  }
};
</script>

<style lang="less">
@import url("../common/style/menu.less");
</style>
