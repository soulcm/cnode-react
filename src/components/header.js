import React, { Component } from 'react';
import {connect} from 'react-redux';

import TextInput from './textInput';
import { addItem } from '../actions/index';

class Header extends Component {
    render() {
        const {onSave} = this.props;
        return (
            <header className="header">
				<h1>todos</h1>
                <TextInput className="new-todo"
			        placeholder="What needs to be done?"
                    onSave={onSave}/>
			</header>
        )
    }
}

export default Header