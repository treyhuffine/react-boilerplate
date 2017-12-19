import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

const isProd = process.env.NODE_ENV === 'production';
const middlewareList = [];

if (!isProd) {
  middlewareList.push(createLogger());
}

const middleware = compose(applyMiddleware(...middlewareList));

export default middleware;
