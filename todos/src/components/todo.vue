<template>
  <div class="page lists-show"><!--最外层容器-->
    <nav><!--容器上半部分-->
      <!-- 在菜单的图标下面添加updateMenu时间，他可以直接调用vuex actions.js里面的updateMenu方法 -->
      <div
        class="form list-edit-form"
        v-show="isUpdate">
        <!-- 当用户点击标题进入修改状态 -->
        <input 
          type="text"
          v-model="todo.title"
          @keyup.enter="updateTitle"
          :disabled="todo.locked">
        <div class="nav-group right">
          <a 
            class="nav-item" 
            @click="isUpdate = false">
            <span class="icon-close"/>
          </a>
        </div>
      </div>
      <div 
        class="nav-group" 
        @click="$store.dispatch('updateMenu')" 
        v-show="!isUpdate"> <!--移动端的菜单图标-->
        <a class="nav-item">
          <span class="icon-list-unordered" />
        </a>
      </div>
      <h1 
        class="title-page" 
        v-show="!isUpdate" 
        @click="isUpdate = true">
        <span class="title-wrapper">{{ todo.title }}</span> <!-- 标题-->
        <span class="count-list">{{ todo.count }}</span><!-- 数目-->
      </h1>
      <div 
        class="nav-group right"
        v-show="!isUpdate"><!-- 右边的删除，锁定图标容器-->
        <div class="options-web"> 
          <a 
            class=" nav-item" 
            @click="onlock"> <!-- 锁定图标-->
            <span 
              class="icon-lock" 
              v-if="todo.locked" />
            <span 
              class="icon-unlock" 
              v-else/>
          </a>
          <a class=" nav-item"><!-- 删除图标-->
            <span 
              class="icon-trash"
              @click="onDelete"/>
          </a>
        </div>
      </div>
  
      <div class=" form todo-new input-symbol"> <!-- 新增单个代办单项输入框,监听了回车事件，双向绑定text值,监听了disabled属性，在todo.locked为true的情况下无法编辑-->
        <input 
          type="text" 
          v-model="text" 
          placeholder="请输入"
          @keyup.enter="onAdd" 
          :disabled="todo.locked" >
        <span class="icon-add"/>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <div 
        v-for="item in items" 
        :key="item.id">
        <item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
  import { getTodo, addRecord } from '../api/api';
  import item from "./item";

  export default {
    data() {
      return {
        todo: {
          //详情内容
          title: "星期一",
          count: 12,
          locked: false
        },
        items: [ //代办单项列表
        ],
        text: "",//新增代办单项绑定的值
        isUpdate: false
      };
    },
    components: {
      item
    },
    watch: {
      '$route.params.id'() {
        // 监听$route.params.id 的变化，如果这个id即代表用户点击了其他的待办事项，需要重新请求数据
        this.init();
      }
    },
    created() {
      // created 生命周期，在实例已经创建完成，页面还没渲染时调用init方法
      this.init();
    },
    methods: {
      init() {
        // 获取 $route下params下的id，即我们在menus.vue组件处传入的数据
        const ID = this.$route.params.id;
        getTodo({ id: ID }).then(res => {
          let { id, title, count, isDelete, locked, record } = res.data.todo;
          // 请求成功，拿到res.data.todo; 再将 record 赋值到待办单项列表，其他赋值到todo对象
          this.items = record;
          this.todo = {
            id: id,
            title: title,
            count: count,
            locked: locked,
            isDelete: isDelete
          };
        });
      },
      onAdd() {
        // 当用户输入文字，并且回车时调用此方法
        const ID = this.$route.params.id;
        addRecord({ id: ID, text: this.text }).then(res => {
          this.text = '';
          this.init();
        })
      },
      updateTodo() {
        let _this = this;
        editTodo({
          todo: this.todo
        }).then(data => {
          this.$store.dispath('getTodo');
        });
      },
      updateTitle() {
        this.updateTodo();
        this.isUpdate = false;
      },
      onlock() {
        this.todo.locked = !this.todo.locked;
        this.updateTodo();
      },
      onDelete() {
        this.todo.isDelete = true;
        this.updateTodo();
      }
    }

  };
</script>
<style lang = "less">
@import "../common/style/nav.less";
@import "../common/style/form.less";
@import "../common/style/todo.less";
</style>