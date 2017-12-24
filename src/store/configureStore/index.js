import { createStore } from 'redux';
import reducers from 'reducers';
import initialState from './initialState';
import middleware from './middleware';

const store = createStore(reducers, initialState, middleware);

export default store;
