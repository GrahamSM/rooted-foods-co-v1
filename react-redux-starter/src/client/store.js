import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Import the root reducer
import rootReducer from './reducers/index';

const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(
  browserHistory, store);

export default store;

//Store holds the state of the application at any point in time!
