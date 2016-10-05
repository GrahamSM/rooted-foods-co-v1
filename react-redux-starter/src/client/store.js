import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';
// const middlewares = [thunkMiddleware];
//TODO: Check this out!

//Import the root reducer
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(
  browserHistory, store);

export default store;

//Store holds the state of the application at any point in time!
