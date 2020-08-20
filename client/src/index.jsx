import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ReviewParent from './components/ReviewParent';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render((
  <Router>
    <Route path="/:productId" component={ReviewParent} />
    <Route exact path="/">
      <Redirect to="/5" />
    </Route>
  </Router>
), document.getElementById('root'));
