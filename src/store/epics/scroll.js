import { ofType } from 'redux-observable';
import { fromEvent, of, merge } from 'rxjs';
import {
  mergeMap, takeUntil, map, filter,
} from 'rxjs/operators';
import {
  startScroll,
  stopScroll,
} from 'store/slices/scroll';

function detectScrollToBottom$({
  handleRequest,
}) {
  return of(document.body.clientHeight === window.pageYOffset + window.innerHeight).pipe(
    filter((scrollToBottom) => scrollToBottom),
    map(handleRequest),
  );
}

function detectStopScroll$({
  handleRequest,
  scenicSpotType,
  state$,
}) {
  return of(state$.value.scenicSpot[scenicSpotType].noMoreScenicSpot).pipe(
    mergeMap((noMoreScenicSpot) => merge(
      of(noMoreScenicSpot).pipe(
        filter(() => noMoreScenicSpot),
        map(stopScroll),
      ),
      of(noMoreScenicSpot).pipe(
        filter(() => !noMoreScenicSpot),
        mergeMap(() => detectScrollToBottom$({ handleRequest })),
      ),
    )),
  );
}

export default (action$, state$) => action$.pipe(
  ofType(startScroll),
  mergeMap((action) => fromEvent(document, 'scroll').pipe(
    mergeMap(() => detectStopScroll$({ ...action.payload, state$ })),
    takeUntil(action$.pipe(ofType(stopScroll))),
  )),
);
