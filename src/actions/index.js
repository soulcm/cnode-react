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

export function toggleItem(id) {
    return {
        type: types.TOGGLE_ITEM,
        id
    }
}

export function toggleAll() {
    return {
        type: types.TOGGLE_ALL,
    }
}

