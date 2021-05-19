import { createSlice } from '@reduxjs/toolkit';
import { mergeDeepRight } from 'ramda';

const initialState = {
  getScenicSpot: {
    isRequesting: false,
    error: null,
    data: [],
  },
  getScenicSpotByCity: {
    isRequesting: false,
    error: null,
    data: [],
  },
};

const { actions, reducer } = createSlice({
  name: 'scenicSpot',
  initialState,
  reducers: {
    requestGetScenicSpot(state) {
      return mergeDeepRight(state, {
        getScenicSpot: {
          isRequesting: true,
        },
      });
    },
    receivedGetScenicSpot(state, action) {
      const { data } = action.payload;
      return mergeDeepRight(state, {
        getScenicSpot: {
          isRequesting: false,
          data,
        },
      });
    },
    receivedErrorGetScenicSpot(state, action) {
      return mergeDeepRight(state, {
        getScenicSpotByCity: {
          isRequesting: false,
          error: action.payload.error,
        },
      });
    },
    requestGetScenicSpotByCity(state) {
      return mergeDeepRight(state, {
        getScenicSpotByCity: {
          isRequesting: true,
        },
      });
    },
    receivedGetScenicSpotByCity(state, action) {
      const { data } = action.payload;
      return mergeDeepRight(state, {
        getScenicSpotByCity: {
          isRequesting: false,
          data,
        },
      });
    },
    receivedErrorGetScenicSpotByCity(state, action) {
      return mergeDeepRight(state, {
        getScenicSpotByCity: {
          isRequesting: false,
          error: action.payload.error,
        },
      });
    },
  },
});

export const {
  requestGetScenicSpot,
  receivedGetScenicSpot,
  receivedErrorGetScenicSpot,
  requestGetScenicSpotByCity,
  receivedGetScenicSpotByCity,
  receivedErrorGetScenicSpotByCity,
} = actions;

export default reducer;
