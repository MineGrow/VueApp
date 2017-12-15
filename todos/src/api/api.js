import axios from 'axios';

export const getTodoList = params => { // 封装一个函数，名为getTodoList
    return axios.get(`/todo/list`, {
        params: params
    })
};

export const addTodo = params => {
    return axios.post(`/todo/addTodo`, params).then(res => res.data);
};

// 新增一个请求查询待办单项列表的数据接口函数
export const getTodo = params => {
    return axios.get(`/todo/listId`, {
        params: params
    });
};

// 新增一个请求待办单的接口函数
export const addRecord = params => {
    return axios.post(`/todo/addRecord`, params).then(res => res.data);
};

export const editRecord = params => {
    return axios.post(`/todo/editRecord`, params).then(res => res.data);
}