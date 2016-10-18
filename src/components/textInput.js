import React, {Component} from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleKeyDown(e) {
        if (e.keyCode === 13) { //enter
            this.props.onSave(this.state.value);
        }
    }

    render() {
        return (
            <input className={this.props.className}
				placeholder={this.props.placeholder}
				autoFocus={true}
                value={this.state.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
			/>
        );
    }
}

export default TextInput;