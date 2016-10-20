import fetchApi from 'apis/index';


export const getTodoList = (data) => {
    return fetchApi({
        url: '/getTodoList',
        body: data
    })
}
