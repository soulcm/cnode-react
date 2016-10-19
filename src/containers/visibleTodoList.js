import {connect} from 'react-redux';

import TodoList from 'components/todoList';
import {toogleItem, deleteItem} from 'actions/index';

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
        onToogleItem: (id) => {
            dispatch(toogleItem(id))
        },
        onDeleteItem: (id) => {
            dispatch(deleteItem(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)