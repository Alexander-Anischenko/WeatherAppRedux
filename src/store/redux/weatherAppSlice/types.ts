export interface WeatherAppData {
    id?: string
  temperature: number
  city: string
  icon: string
}

export interface WeatherAppSliceState {
  data?: WeatherAppData
  savedData: WeatherAppData[]
  error: any
  status: "default" | "loading" | "success" | "error"
}
