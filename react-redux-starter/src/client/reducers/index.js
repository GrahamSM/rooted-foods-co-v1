import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login_signup from './login_signup.js';

const rootReducer = combineReducers({login_signup, routing: routerReducer });

export default rootReducer;
