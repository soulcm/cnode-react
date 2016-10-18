import React, {Component} from 'react';
import {Link} from 'react-router';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
				<span className="todo-count">
					<strong>

					</strong>
				</span>
				<ul className="filters">
				    <li>
				        <Link to="/all">All</Link>
				    </li>
				    <li>
				        <Link to="/active">Active</Link>
				    </li>
				    <li>
				        <Link to="/completed">Completed</Link>
				    </li>
				</ul>
			</footer>
        );
    }
}

export default Footer;