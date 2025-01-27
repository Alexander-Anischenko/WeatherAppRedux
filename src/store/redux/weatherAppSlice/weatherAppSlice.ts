import axios from "axios"

import { createAppSlice } from "../../createAppSlice"
import type { WeatherAppData, WeatherAppSliceState } from "./types"
import type { CityFormData } from "../../../pages/WeatherApp/Layout/Home/types"
import type { PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"

export const weatherAppInitialState: WeatherAppSliceState = {
  data: undefined,
  savedData: [],
  error: undefined,
  status: "default",
}

export const APP_ID = "baa52af8a07d22355fac54528cab1d8a"

export const weatherAppSlice = createAppSlice({
  name: "WEATHER_APP",

  initialState: weatherAppInitialState,

  reducers: create => ({
    sendCityName: create.asyncThunk(
      async (formData: CityFormData, thunkApi) => {
        try {
          const result = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${formData.cityName}&appid=${APP_ID}`,
          )
          return result.data
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },

      {
        pending: (state: WeatherAppSliceState) => {
          state.status = "loading"
          state.error = undefined
        },

        fulfilled: (state: WeatherAppSliceState, action: any) => {
          state.status = "success"
          state.data = {
            temperature: action.payload.main.temp,
            city: action.payload.name,
            icon: action.payload.weather[0].icon,
          }
        },

        rejected: (state: WeatherAppSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload.message
        },
      },
    ),

   /*  saveWeatherData: create.reducer(
      (state: WeatherAppSliceState, action: PayloadAction<WeatherAppData>) => {
        state.savedData = [...state.savedData, action.payload]
      },
    ), */

    saveWeatherData: create.reducer(
        (state: WeatherAppSliceState, action: PayloadAction<WeatherAppData>) => {
          state.savedData = [...state.savedData, {id: v4(), ...action.payload}]
        },
      ),

    /* deleteSavedData: create.reducer(
      (state: WeatherAppSliceState, action: { payload: string }) => {
        state.savedData = state.savedData.filter(
          data => data.city !== action.payload,
        )
      },
    ), */

    deleteSavedData: create.reducer(
        (state: WeatherAppSliceState, action: PayloadAction<string>) => {
          state.savedData = state.savedData.filter(
            item => item.id !== action.payload,
          )
        },
      ),

    deleteAllSavedData: create.reducer((state: WeatherAppSliceState) => {
      state.savedData = []
    }),

    clearError: create.reducer((state: WeatherAppSliceState) => {
      state.error = undefined
    }),

    clearData: create.reducer(() => {
      return weatherAppInitialState
    }),
  }),
  selectors: {
    weatherData: (state: WeatherAppSliceState) => state,
    savedData: (state: WeatherAppSliceState) => state.savedData,
  },
})

export const weatherAppSliceActions = weatherAppSlice.actions
export const weatherAppSliceSelectors = weatherAppSlice.selectors
