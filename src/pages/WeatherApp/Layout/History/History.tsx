import Button from "../../../../components/Button/Button"
import Info from "../../../../components/Info/Info"
import { ButtonWrapper, HistoryPageWrapper, InfoContainer } from "./styles"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import {
  weatherAppSliceActions,
  weatherAppSliceSelectors,
} from "../../../../store/redux/weatherAppSlice/weatherAppSlice"
import { v4 } from "uuid"

function History() {
  const dispatch = useAppDispatch()

  const savedWeatherData = useAppSelector(weatherAppSliceSelectors.savedData) // Получаем данные о погоде из store

  // Создаем функцию, которая будет удалять карточку с погодой по названию города
  const handleDelete = (city: string) => {
    dispatch(weatherAppSliceActions.deleteSavedData(city))
  }

  // Создаем функцию, которая будет удалять все карточки с погодой
  const handleDeleteAll = () => {
    dispatch(weatherAppSliceActions.deleteAllSavedData())
  }

  const savedWeatherComponents = savedWeatherData.map(cityWeather => {
    return (
      <Info
        key={v4()}
        temperature={cityWeather.temperature}
        city={cityWeather.city}
        weatherImg={`http://openweathermap.org/img/w/${cityWeather.icon}.png`}
        onDelete={() => handleDelete(cityWeather.city)}
        isHistory={true}
      />
    )
  })

  return (
    <HistoryPageWrapper>
      <InfoContainer>
        {savedWeatherComponents}
        {savedWeatherComponents.length > 0 && (
          <ButtonWrapper>
            <Button buttonName="Delete all cards" onClick={handleDeleteAll} />
          </ButtonWrapper>
        )}
      </InfoContainer>
    </HistoryPageWrapper>
  )
}

export default History
