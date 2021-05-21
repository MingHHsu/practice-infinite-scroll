import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScenicSpotPage from 'pages/ScenicSpot';
import ScenicSpotRoute from './ScenicSpotRoute';

export default () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/scenicSpot" />} />
    <ScenicSpotRoute exact path={['/scenicSpot', '/scenicSpot/:city']} component={ScenicSpotPage} />
  </Switch>
);
