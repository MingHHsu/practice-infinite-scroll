import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

export default function ScenicSpotRoute({
  component: Component,
  exact,
  path,
}) {
  const cities = useSelector((state) => state.cities);
  const renderComponent = ({ match }) => {
    if (match?.path === '/scenicSpot/:city' && !cities.enum.some((city) => city === match?.params?.city)) {
      return <Redirect to="/scenicSpot" />;
    }
    return <Component />;
  };
  return <Route exact={exact} path={path} render={renderComponent} />;
}

ScenicSpotRoute.propTypes = {
  path: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]).isRequired,
  component: propTypes.oneOfType([propTypes.func, propTypes.node, propTypes.string]).isRequired,
  exact: propTypes.bool,
};

ScenicSpotRoute.defaultProps = {
  exact: false,
};
