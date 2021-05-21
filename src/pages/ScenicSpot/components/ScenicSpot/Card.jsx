import React, { memo } from 'react';
import propTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import {
  ScenicSpotCard,
  ScenicSpotCardContent,
  ScenicSpotCity,
  ScenicSpotOpenTime,
  ScenicSpotName,
  ScenicSpotDescriptionDetail,
  ScenicSpotCardSubTitle,
  ScenicSpotCardSubTitleWrapper,
} from './styled';

function Card({
  Name,
  DescriptionDetail,
  Phone,
  Address,
  OpenTime,
  City,
}) {
  return (
    <ScenicSpotCard>
      <ScenicSpotCardContent>
        <ScenicSpotName variant="h5" component="h2">
          {Name}
        </ScenicSpotName>
        {City && <ScenicSpotCity>{City}</ScenicSpotCity>}
        <ScenicSpotOpenTime>{OpenTime}</ScenicSpotOpenTime>
        <ScenicSpotDescriptionDetail>{DescriptionDetail}</ScenicSpotDescriptionDetail>
        <ScenicSpotCardSubTitleWrapper>
          <ScenicSpotCardSubTitle component="div">
            <PhoneIcon />
            {Phone}
          </ScenicSpotCardSubTitle>
          <ScenicSpotCardSubTitle component="div">
            <LocationOnIcon />
            {Address}
          </ScenicSpotCardSubTitle>
        </ScenicSpotCardSubTitleWrapper>
      </ScenicSpotCardContent>
    </ScenicSpotCard>
  );
}

export default memo(Card, (
  prev,
  next,
) => (prev.ID === next.ID) && (prev.UpdateTime === next.UpdateTime));

Card.propTypes = {
  Name: propTypes.string.isRequired,
  DescriptionDetail: propTypes.string.isRequired,
  Phone: propTypes.string.isRequired,
  Address: propTypes.string.isRequired,
  OpenTime: propTypes.string.isRequired,
  City: propTypes.string,
};

Card.defaultProps = {
  City: null,
};
