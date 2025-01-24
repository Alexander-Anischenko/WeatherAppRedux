export interface WeatherAppData {
    temperature: any
    city: string
    icon: string
}

export interface WeatherAppSliceState {
    data?: WeatherAppData
    savedData: WeatherAppData[]
    error: any
    status: 'default' | 'loading' |'success' | 'error'
}