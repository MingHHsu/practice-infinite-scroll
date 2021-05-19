import axiosObserable from './axiosObservable';

const baseURL = process.env.REACT_APP_MOTC_API_HOST;

export const getScenicSpot = ({
  $skip,
}) => axiosObserable({
  baseURL,
  url: '/v2/Tourism/ScenicSpot',
  method: 'get',
  params: {
    $format: 'JSON',
    $top: 30,
    $skip,
  },
});

export const getScenicSpotByCity = ({
  city,
  $skip,
}) => axiosObserable({
  baseURL,
  url: `/v2/Tourism/ScenicSpot/${city}`,
  method: 'get',
  params: {
    $format: 'JSON',
    $top: 30,
    $skip,
  },
});
