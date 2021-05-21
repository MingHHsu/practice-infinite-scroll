import { combineEpics } from 'redux-observable';
import {
  getScenicSpotEpic,
  getScenicSpotByCityEpic,
} from './scenicSpot';
import scrollEpic from './scroll';

export default combineEpics(
  getScenicSpotEpic,
  getScenicSpotByCityEpic,
  scrollEpic,
);
