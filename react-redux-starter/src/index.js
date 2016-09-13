// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import components
import App from './client/components/App';
import FirstChild from './client/components/FirstChild/FirstChild';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './client/store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={FirstChild}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
