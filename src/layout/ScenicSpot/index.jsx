import React from 'react';
import propTypes from 'prop-types';
import CitySelector from './components/CitySelector';
import {
  Header,
  Layout,
  Content,
} from './styled';

export default function ScenicSpotLayout({
  cities,
  children,
}) {
  return (
    <Layout>
      <Header>
        Header
      </Header>
      <Content>
        <CitySelector cities={cities} />
        {children}
      </Content>
    </Layout>
  );
}

ScenicSpotLayout.propTypes = {
  cities: propTypes.shape({
    enum: propTypes.arrayOf(propTypes.string),
    'x-enum': propTypes.shape({}),
  }).isRequired,
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.func,
    propTypes.node,
    propTypes.object,
  ]).isRequired,
};
