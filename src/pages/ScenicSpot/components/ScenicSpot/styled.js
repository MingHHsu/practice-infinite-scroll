import styled from 'styled-components';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

export const ScenicSpotGroupRoot = styled.div`
`;

export const ScenicSpotCard = styled(Card)`
  margin: 20px 0;
  &::after {
    content: "";
    display: block;
    position: relative;
    border: 2px solid #fff;
    border-radius: 2px;
  }
  &.MuiPaper-root {
    background-color: transparent;
  }
  &.MuiPaper-elevation1 {
    box-shadow: none;
  }
`;

export const ScenicSpotCardContent = styled(CardContent)`
  color: #fff;
`;

export const ScenicSpotTitle = styled(Typography)`
  color: #fff;
`;

export const ScenicSpotCardSubTitle = styled.div`
  display: flex;
  color: #666666;
`;

export const ScenicSpotCardSubTitleWrapper = styled.div`
`;

export const ScenicSpotCity = styled(Typography)``;

export const ScenicSpotOpenTime = styled(Typography)``;

export const ScenicSpotDescriptionDetail = styled(Typography)`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
