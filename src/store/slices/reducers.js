import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cities from './cities';

export default (history) => combineReducers({
  router: connectRouter(history),
  cities,
});
