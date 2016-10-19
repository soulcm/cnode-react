import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Root from 'containers/root';
import VisibleTodoList from 'containers/visibleTodoList';
import store from 'store/index';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRoute component={VisibleTodoList} />
                <Route path="completed" component={VisibleTodoList} />
                <Route path="active" component={VisibleTodoList} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)



