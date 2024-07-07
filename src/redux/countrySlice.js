import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
    name: "Country",
    initialState: {
        originalCountryData: [],
        countryData: [],
        searchData: ""
    },
    reducers: {
        addCountry: (state, action) => {
            state.originalCountryData = action.payload;
            state.countryData = action.payload
        },
        SearchCountry: (state, action) => {
            state.countryData = state.originalCountryData.filter(country =>
                country.name.common.toLowerCase().startsWith(action.payload));
        },
        filterByRegion: (state, action) => {
            if (action.payload == "All") {
                state.countryData = state.originalCountryData;
            }
            else {
                state.countryData = state.originalCountryData.filter(country =>
                    country.region == action.payload)
            }
        }
    }

})

export const { addCountry, SearchCountry, filterByRegion } = countrySlice.actions
export default countrySlice.reducer;