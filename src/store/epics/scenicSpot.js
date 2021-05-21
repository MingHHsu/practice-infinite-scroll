import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  getScenicSpot,
  getScenicSpotByCity,
} from 'store/apis/scenicSpot';
import {
  requestGetScenicSpot,
  receivedGetScenicSpot,
  receivedErrorGetScenicSpot,
  requestGetScenicSpotByCity,
  receivedGetScenicSpotByCity,
  receivedErrorGetScenicSpotByCity,
} from 'store/slices/scenicSpot';

export const getScenicSpotEpic = (action$, state$) => action$.pipe(
  ofType(requestGetScenicSpot),
  switchMap((action) => getScenicSpot({
    $skip: state$.value.scenicSpot.getScenicSpot.data.length,
  }).pipe(
    map((payload) => receivedGetScenicSpot(payload)),
    catchError((error) => of(receivedErrorGetScenicSpot({ ...action.payload, error }))),
  )),
);

export const getScenicSpotByCityEpic = (action$, state$) => action$.pipe(
  ofType(requestGetScenicSpotByCity),
  switchMap((action) => getScenicSpotByCity({
    $skip: state$.value.scenicSpot.getScenicSpotByCity.data.length,
    city: state$.value.scenicSpot.getScenicSpotByCity.city,
  }).pipe(
    map((payload) => receivedGetScenicSpotByCity(payload)),
    catchError((error) => of(receivedErrorGetScenicSpotByCity({ ...action.payload, error }))),
  )),
);
