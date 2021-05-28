import { ofType } from 'redux-observable';
import {
  of,
  iif,
  EMPTY,
  fromEvent,
} from 'rxjs';
import {
  map,
  filter,
  concatMap,
  takeUntil,
} from 'rxjs/operators';
import {
  startScroll,
  stopScroll,
} from 'store/slices/scroll';

function detectStopScroll$({
  handleRequest,
  scenicSpotType,
  state$,
}) {
  return iif(
    () => state$.value.scenicSpot[scenicSpotType].noMoreScenicSpot,
    EMPTY.pipe(map(stopScroll)),
    of(document.body.clientHeight === window.pageYOffset + window.innerHeight).pipe(
      filter((scrollToBottom) => scrollToBottom),
      map(handleRequest),
    ),
  );
}

export default (action$, state$) => action$.pipe(
  ofType(startScroll),
  concatMap((action) => fromEvent(document, 'scroll').pipe(
    concatMap(() => detectStopScroll$({ state$, ...action.payload })),
    takeUntil(action$.pipe(ofType(stopScroll))),
  )),
);
