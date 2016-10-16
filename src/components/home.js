import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>App{a}</h1>
                <ul>
                    <li><Link to="/topic">About</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}



export default Home;