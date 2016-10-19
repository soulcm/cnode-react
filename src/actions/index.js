import * as types from 'constants/actionTypes'

export function addItem({ text , id }) {
    return {
        type: types.ADD_ITEM,
        id,
        text
    }
}

export function deleteItem(id) {
    return {
        type: types.DELETE_ITEM,
        id
    }
}

export function toogleItem(id) {
    return {
        type: types.TOOGLE_ITEM,
        id
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    }
}