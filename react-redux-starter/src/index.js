// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import components
import App from './client/components/App';
import PageBody from './client/components/PageBody/PageBody.js';
import LoginPage from './client/components/LoginSignUp/LoginPage.js';
import SignUpPage from './client/components/LoginSignUp/SignUpPage.js';


// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './client/store';

///MAYBE SET UP PAGE BODY AS YOUR DASHBOARD, WITH HEADER RIGHT ABOVE IT?
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PageBody}></IndexRoute>
        <Route path='/login' component={LoginPage}></Route>
        <Route path='/signup' component={SignUpPage}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
