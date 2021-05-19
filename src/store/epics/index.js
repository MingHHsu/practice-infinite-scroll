import { combineEpics } from 'redux-observable';
import {
  getScenicSpotEpic,
  getScenicSpotByCityEpic,
} from './scenicSpot';

export default combineEpics(
  getScenicSpotEpic,
  getScenicSpotByCityEpic,
);
