import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Root from 'containers/root';
import VisibleTodoList from 'containers/visibleTodoList';
import DevTools from 'containers/DevTools';
import store from 'store/index';

render(
    <Provider store={store}>
        <div>
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRoute component={VisibleTodoList} />
                <Route path="completed" component={VisibleTodoList} />
                <Route path="active" component={VisibleTodoList} />
            </Route>
        </Router>
        <DevTools />
        </div>
    </Provider>,
    document.getElementById('app')
)



