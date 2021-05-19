import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import scenicSpot from './scenicSpot';
import cities from './cities';

export default (history) => combineReducers({
  router: connectRouter(history),
  scenicSpot,
  cities,
});
