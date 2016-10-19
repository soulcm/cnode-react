import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import todoApp from 'reducers/index';

const logger = createLogger();

const store = createStore(todoApp, applyMiddleware(logger));

export default store