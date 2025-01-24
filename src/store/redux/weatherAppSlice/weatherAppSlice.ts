import axios from 'axios';

import { createAppSlice} from '../../createAppSlice'
import type {WeatherAppSliceState} from './types'
import type {CityFormData} from '../../../pages/WeatherApp/Layout/Home/types'


export const weatherAppInitialState: WeatherAppSliceState = {
    data: undefined,
    savedData: [],
    error: undefined,
    status: 'default',
};

export const APP_ID = "baa52af8a07d22355fac54528cab1d8a";


export const weatherAppSlice = createAppSlice({
    name: 'WEATHER_APP',

    initialState: weatherAppInitialState,

    reducers: create => ({
        sendCityName: create.asyncThunk(
            async (formData: CityFormData, thunkApi) => {
                try {
                    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${formData.cityName}&appid=${APP_ID}`)
                    return result.data
                } catch (error) {
                    return thunkApi.rejectWithValue(error)
                }
            },

            {
                pending: (state: WeatherAppSliceState) => {
                    state.status = 'loading'
                    state.error = undefined
                },

                fulfilled: (state: WeatherAppSliceState, action: any) => {
                    state.status = 'success'
                    state.data = {city: action.payload.name, temperature: action.payload.main.temp, icon: action.payload.weather[0].icon}
                },

                rejected: (state: WeatherAppSliceState, action: any) => {
                    state.status = 'error'
                    state.error = action.payload
                }
            }
        ),

        saveWeatherData: create.reducer((state: WeatherAppSliceState, action: any) => {
            state.savedData.push(action.payload)
        }),

        deleteSavedData: create.reducer((state: WeatherAppSliceState, action: any) => {
            state.savedData = state.savedData.filter(data => data.city !== action.payload);
        }),
        


        
}),
selectors: {
    weatherData: (state: WeatherAppSliceState) => state,
},

})

export const weatherAppSliceActions = weatherAppSlice.actions
export const weatherAppSliceSelectors = weatherAppSlice.selectors
