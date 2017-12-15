import {
    getTodoList
} from '../api/api';

export const getTodo = ({ // 定义一个名字为getTodo的事件
    commit
}) => {
    return new Promise((resolve) => {
        /**
         * 调用 getTodo 函数的时候，会调用getTodoList这个ajax请求函数
         * 函数返回值后，再调用store.js 里面的EDITTODE方法，并把值传给它
         */
        getTodoList().then(res => {
            commit('EDITTODE', res.data.todos);
            resolve();
        });
    });
};

export const updateMenu = ({ // 定义一个名字为 updateMenu 的事件
    commit
}) => {
    commit('MENUOPEN'); // 调用 store.js 里面的MENUOPEN方法
}