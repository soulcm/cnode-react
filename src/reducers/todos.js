import {ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM, TOGGLE_ALL} from 'constants/actionTypes';

const createItem = ({text, id}) => {
	return {
		id,
		completed: false,
		text
	}
}

const toggleItem = (item, action) => {
    if (item.id === action.id) {
        return {
            ...item,
            completed: !item.completed
        }
    } else {
        return item
    }
}

const toggleAll = (state) => {
    const completed = state.every((item) => {
        return item.completed
    })

    if (completed) {
        state.forEach((item) => {
            item.completed = false;
        })
    } else {
        state.forEach((item) => {
            item.completed = true;
        })
    }
    return state;
}

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, createItem(action)]

        case TOGGLE_ITEM:
            return state.map(item => toggleItem(item, action))

        case DELETE_ITEM:
            return state.filter(item => item.id !== action.id)

        case TOGGLE_ALL:
            return toggleAll([...state]);
        default:
            return state;
    }
}

export default todos;