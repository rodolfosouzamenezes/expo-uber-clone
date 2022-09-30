import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  }
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

/***
 * SELECTORS
 * A selector is a function that accepts Redux state as an argument 
 * and returns data that is derived from that state.
 ***/ 
export const selectOrigin = state => state.nav.origin;
export const selectDestination = state => state.nav.destination;
export const selectTravelTimeInformation = state => state.nav.travelTimeInformation;

export default navSlice.reducer;
