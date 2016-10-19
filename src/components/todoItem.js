import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text, completed, onToogleItem, onDeleteItem} = this.props;

        return (
            <li className="">
				<div className="view">
					<input className="toggle"
						type="checkbox"
                        checked={completed}
                        onClick={onToogleItem}/>
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
