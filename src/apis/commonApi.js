import fetchApi from './index';


export const getTodoList = (data) => {
    return fetchApi({
        url: '/getTodoList',
        body: data
    })
}
