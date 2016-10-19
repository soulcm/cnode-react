import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

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
				        <IndexLink to="/" activeClassName="selected">All</IndexLink>
				    </li>
				    <li>
				        <Link to="/active" activeClassName="selected">Active</Link>
				    </li>
				    <li>
				        <Link to="/completed" activeClassName="selected">Completed</Link>
				    </li>
				</ul>
			</footer>
        );
    }
}

export default Footer;