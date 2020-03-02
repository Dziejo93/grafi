import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../Layout';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/nested" />
        <Route path="/login" />
        <Route path="/nested" component={Layout} />
      </Switch>
    </Router>
  );
};

export default Routes;
