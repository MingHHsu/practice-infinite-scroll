/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { startScroll, stopScroll } from 'store/slices/scroll';
import {
  requestGetScenicSpot,
  requestGetScenicSpotByCity,
} from 'store/slices/scenicSpot';
import ScenicSpot from './components/ScenicSpot';
import { ScenicSpotContainer, H2 } from './styled';

export default function ScenicSpotPage({
  listByCity,
  city,
}) {
  const dispatch = useDispatch();
  const scenicSpotType = listByCity ? 'getScenicSpotByCity' : 'getScenicSpot';
  const handleRequest = listByCity ? requestGetScenicSpotByCity : requestGetScenicSpot;
  const scenicSpot = useSelector((state) => state.scenicSpot[scenicSpotType].data);
  useEffect(() => {
    if (scenicSpot.length === 0) dispatch(handleRequest({ city: city?.enName }));
  }, [scenicSpot]);
  useEffect(() => {
    dispatch(startScroll({
      scenicSpotType,
      handleRequest,
    }));
    return () => dispatch(stopScroll());
  }, [scenicSpotType, handleRequest]);
  return (
    <ScenicSpotContainer>
      <H2>{`${city?.twName || '全部'}景點列表`}</H2>
      <ScenicSpot.Group>
        {scenicSpot.map((detail) => <ScenicSpot.Card key={detail.ScenicSpotID} {...detail} />)}
      </ScenicSpot.Group>
    </ScenicSpotContainer>
  );
}

ScenicSpotPage.propTypes = {
  listByCity: propTypes.bool.isRequired,
  city: propTypes.oneOfType([
    propTypes.oneOf([false]),
    propTypes.shape({
      enName: propTypes.string,
      twName: propTypes.string,
    }),
  ]).isRequired,
};
