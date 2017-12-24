import { applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import history from 'routes/history';

const isProd = process.env.NODE_ENV === 'production';
const middlewareList = [routerMiddleware(history)];

if (!isProd) {
  middlewareList.push(createLogger());
}

const middleware = compose(applyMiddleware(...middlewareList));

export default middleware;
