import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex); // 安装 Vuex 插件

// 创建初始应用全局状态变量
const state = {
    todoList: [], // 指我们的待办事项列表数据
    menuOpen: false // 移动端的时候，菜单是否开启
};

// 定义所需的 Mutations
const mutations = {
    EDITTODE(state, data) { // 定义名为 EDITTODE 函数用作改变 todoList 的值
        state.todoList = data;
    },
    MENUOPEN(state) {       // 定义名为 MENUOPEN 函数用作改变 menuOpen 的值
        state.menuOpen = !state.menuOpen;
    }
};

// 创建 store 实例并且导出
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
});