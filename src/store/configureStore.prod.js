import { createStore } from 'redux';
import todoApp from 'reducers/index';

const store = createStore(todoApp);

module.exports = store;