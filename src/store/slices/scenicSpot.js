import { createSlice } from '@reduxjs/toolkit';
import { mergeDeepRight } from 'ramda';

const initialState = {
  getScenicSpot: {
    isRequesting: false,
    error: null,
    noMoreScenicSpot: false,
    data: [],
  },
  getScenicSpotByCity: {
    isRequesting: false,
    error: null,
    noMoreScenicSpot: false,
    city: '',
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
          noMoreScenicSpot: data.length < 30,
          data: [
            ...state.getScenicSpot.data,
            ...data,
          ],
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
    selectAnotherCity(state, action) {
      const currentCity = state.getScenicSpotByCity.city;
      const selectedCity = action.payload.city;
      if (currentCity !== selectedCity) {
        return mergeDeepRight(state, {
          getScenicSpotByCity: {
            city: action.payload.city,
            data: [],
          },
        });
      }
      return { ...state };
    },
    requestGetScenicSpotByCity(state, action) {
      return mergeDeepRight(state, {
        getScenicSpotByCity: {
          isRequesting: true,
          city: action.payload.city,
        },
      });
    },
    receivedGetScenicSpotByCity(state, action) {
      const { data } = action.payload;
      return mergeDeepRight(state, {
        getScenicSpotByCity: {
          isRequesting: false,
          noMoreScenicSpot: data.length < 30,
          data: [
            ...state.getScenicSpotByCity.data,
            ...data,
          ],
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
  selectAnotherCity,
  requestGetScenicSpotByCity,
  receivedGetScenicSpotByCity,
  receivedErrorGetScenicSpotByCity,
} = actions;

export default reducer;
