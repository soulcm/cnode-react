import React, {Component} from 'react';

import TodoItem from 'components/todoItem';

class TodoList extends Component {
    render() {
        const {todos, onToggleItem, onDeleteItem, onToggleAll} = this.props;
		if (!todos.length) {
			return null
		}
		const checked = todos.every(item => item.completed);
        return (
            <section className="main">
				<input className="toggle-all" checked={checked}
					type="checkbox" onChange={onToggleAll}/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{
						todos.map((item) => {
							return <TodoItem key={item.id} {...item}
										onToggleItem={() => onToggleItem(item.id)}
										onDeleteItem={() => onDeleteItem(item.id)} />
						})
					}
				</ul>
			</section>
        );
    }
}

export default TodoList;