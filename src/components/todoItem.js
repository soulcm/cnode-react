import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {text, completed} = this.props;

        return (
            <li className="">
				<div className="view">
					<input className="toggle"
						type="checkbox" />
					<label>
						{text}
					</label>
					<button className="destroy" />
				</div>
			</li>
        );
    }
}

export default TodoItem;
