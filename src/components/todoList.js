import React, {Component} from 'react';

import TodoItem from 'components/todoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {todos} = this.props;
        return (
            <section className="main">
				<input className="toggle-all"
					type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{
						todos.map(function(item) {
							return <TodoItem key={item.id} {...item}/>
						})
					}
				</ul>
			</section>
        );
    }
}

export default TodoList;