import {connect} from 'react-redux';

import * as types from 'constants/filterTypes';

import TodoList from 'components/todoList';

const getVisibleTodos = ({todos, visibilityFilter}) => {
    switch (visibilityFilter) {
        case types.SHOW_ALL:
            return todos

        case types.SHOW_COMPLETED:
            return todos.filter(item => item.completed)

        case types.SHOW_ACTIVE:
            return todos.filter(item => !item.completed)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state)
    }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps)(TodoList)