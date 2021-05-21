import React from 'react';
import propTypes from 'prop-types';
import {
  ScenicSpotGroupRoot,
} from './styled';

export default function ScenicSpotGroup({
  children,
}) {
  return (
    <ScenicSpotGroupRoot>
      {children}
    </ScenicSpotGroupRoot>
  );
}

ScenicSpotGroup.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.array,
    propTypes.string,
    propTypes.object,
  ]).isRequired,
};
