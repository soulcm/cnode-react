import {ADD_ITEM, TOOGLE_ITEM, DELETE_ITEM} from 'constants/actionTypes';

const createItem = ({text, id}) => {
	return {
		id,
		completed: false,
		text
	}
}

const toogleItem = (item, action) => {
    if (item.id === action.id) {
        return {
            ...item,
            completed: !item.completed
        }
    } else {
        return item
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, createItem(action)]

        case TOOGLE_ITEM:
            return state.map(item => toogleItem(item, action))

        case DELETE_ITEM:
            return state.filter(item => item.id !== action.id)

        default:
            return state;
    }
}

export default todos;