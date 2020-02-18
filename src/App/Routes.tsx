import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Authenticate from '../Auth/Authenticate';
import NestedFolder from './NestedFolder';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/nested" />
        <Route path="/authenticate" component={Authenticate} />
        <Route path="/nested" component={NestedFolder} />
      </Switch>
    </Router>
  );
};

export default Routes;
