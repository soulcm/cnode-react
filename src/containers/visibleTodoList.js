import {connect} from 'react-redux';

import TodoList from '../components/todoList';
import {toggleItem, deleteItem, toggleAll, getItems} from '../actions/index';

const getVisibleTodos = (todos, ownProps) => {
    switch (ownProps.location.pathname) {
        case '/':
            return todos;
        case '/completed':
            return todos.filter(item => item.completed)
        case '/active':
            return todos.filter(item => !item.completed)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state.todos, ownProps)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleItem: (id) => {
            dispatch(toggleItem(id))
        },
        onDeleteItem: (id) => {
            dispatch(deleteItem(id))
        },
        onToggleAll: () => {
            dispatch(toggleAll())
        },
        getItems: () => {
            dispatch(getItems())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)