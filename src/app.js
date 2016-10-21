import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store/index';
import DevTools from './containers/DevTools';
import routes from './configs/routes';

let initialState;

const store = configureStore(initialState);
if (process.env.NODE_ENV === 'production') {
    render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>,
        document.getElementById('app')
    )
} else {
    render(
        <Provider store={store}>
            <div>
                <Router history={browserHistory} routes={routes} />
                <DevTools />
            </div>
        </Provider>,
        document.getElementById('app')
    )
}






