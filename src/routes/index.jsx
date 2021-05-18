import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <Switch>
    <Route exact path="/" render={() => (<div>Match</div>)} />
    <Route render={() => (<div>Miss</div>)} />
  </Switch>
);
