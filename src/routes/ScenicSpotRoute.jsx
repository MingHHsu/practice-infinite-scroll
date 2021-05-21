import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import ScenicSpotLayout from 'layout/ScenicSpot';

export default function ScenicSpotRoute({
  component: Component,
  exact,
  path,
}) {
  const cities = useSelector((state) => state.cities);
  const renderComponent = ({ match }) => {
    const listByCity = match?.path === '/scenicSpot/:city';
    if (listByCity && !cities.enum.some((city) => city === match?.params?.city)) {
      return <Redirect to="/scenicSpot" />;
    }
    return (
      <ScenicSpotLayout cities={cities}>
        <Component
          listByCity={listByCity}
          city={listByCity && {
            enName: match?.params?.city,
            twName: cities['x-enum'][match?.params?.city],
          }}
        />
      </ScenicSpotLayout>
    );
  };
  return <Route exact={exact} path={path} render={renderComponent} />;
}

ScenicSpotRoute.propTypes = {
  path: propTypes.oneOfType([
    propTypes.string,
    propTypes.arrayOf(propTypes.string),
  ]).isRequired,
  component: propTypes.oneOfType([
    propTypes.func,
    propTypes.node,
    propTypes.string,
    propTypes.object,
  ]).isRequired,
  exact: propTypes.bool,
};

ScenicSpotRoute.defaultProps = {
  exact: false,
};
