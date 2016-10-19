import React, { Component } from 'react';
import {connect} from 'react-redux';

import TextInput from 'components/textInput';
import AddTodo from 'containers/addTodo';

import { addItem } from 'actions/index';

class Header extends Component {
    render() {
        return (
            <header className="header">
				<h1>todos</h1>
                <AddTodo className="new-todo"
			        placeholder="What needs to be done?"/>
			</header>
        )
    }
}

export default Header