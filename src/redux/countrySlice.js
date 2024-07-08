import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
    name: "Country",
    initialState: {
        originalCountryData: [],
        countryData: [],
        searchData: "",
        isDarkMode: false,
        colorSchema: {
            backGround: "hsl(0, 0%, 98%)",
            elementBackGround: "hsl(0, 0%, 100%)",
            textColor: "hsl(200, 15%, 8%)"
        }
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
        },
        darkModeToggle: (state) => {
            state.isDarkMode = !state.isDarkMode

            if (state.isDarkMode) {
                state.colorSchema = {
                    backGround: "hsl(207, 26%, 17%)",
                    elementBackGround: "hsl(209, 23%, 22%)",
                    textColor: "hsl(0, 0%, 100%)"
                }
            } else {
                state.colorSchema = {
                    backGround: "hsl(0, 0%, 98%)",
                    elementBackGround: "hsl(0, 0%, 100%)",
                    textColor: "hsl(200, 15%, 8%)"
                }
            }
        }
    }

})

export const { addCountry, SearchCountry, filterByRegion, darkModeToggle } = countrySlice.actions
export default countrySlice.reducer;