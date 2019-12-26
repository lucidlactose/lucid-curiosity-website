// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';

import Home from './pages/home.js';
import PageNotFound from './pages/pageNotFound.js';
import List from './pages/list';

const root = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={List} />
    <Route component={PageNotFound} />
  </Switch>
);

export default root;
