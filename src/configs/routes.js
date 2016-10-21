import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from '../containers/root';
import VisibleTodoList from '../containers/visibleTodoList';

export default (
    <Route path="/" component={Root}>
        <IndexRoute component={VisibleTodoList} />
        <Route path="completed" component={VisibleTodoList} />
        <Route path="active" component={VisibleTodoList} />
    </Route>
)