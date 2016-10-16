import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory, hashHistory} from 'react-router';

import Home from 'components/home';
import Topic from 'components/Topic';


export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                    <Route path="/topic" component={Topic} />
                </Route>
            </Router>
        )
    }
}


const dom = document.getElementById('app')

ReactDom.render(<App />, dom)



