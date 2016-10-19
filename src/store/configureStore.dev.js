import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import todoApp from 'reducers/index';

import DevTools from 'containers/DevTools';

const logger = createLogger();


const enhancer = compose(
  //你要使用的中间件，放在前面
  applyMiddleware(logger),
  //必须的！启用带有monitors（监视显示）的DevTools
  DevTools.instrument()
)

const store = createStore(todoApp, enhancer);

module.exports = store;