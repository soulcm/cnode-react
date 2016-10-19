import React, {Component} from 'react';
import classNames from 'classnames';

class TodoItem extends Component {
    render() {
        const {text, completed, onToggleItem, onDeleteItem} = this.props;

        const classes = classNames({
			'completed': completed,
		});

        return (
            <li className={classes}>
				<div className="view">
					<input className="toggle"
						type="checkbox"
                        checked={completed}
                        onChange={onToggleItem}/>
					<label>
						{text}
					</label>
					<button className="destroy"
                        onClick={onDeleteItem}/>
				</div>
			</li>
        );
    }
}

export default TodoItem;
