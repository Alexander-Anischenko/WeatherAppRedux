import { useFormik } from "formik"

import Input from "../../../../components/Input/Input"
import Button from "../../../../components/Button/Button"

import { CityForm, HomePageWrapper } from "./styles"
import type { CityFormData } from "./types"
import { CITY_FORM_VALUES } from "./types"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import {
  weatherAppSliceActions,
  weatherAppSliceSelectors,
} from "../../../../store/redux/weatherAppSlice/weatherAppSlice"
//import { v4 } from "uuid"
import Info from "../../../../components/Info/Info"
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage"
import Spinner from "../../../../components/Spinner/Spinner"

function Home() {
  // 12. Сохраняем функцию dispatch, которую возвращает хук useAppDispatch
  const dispatch = useAppDispatch()

  const { data, error, status } = useAppSelector(
    weatherAppSliceSelectors.weatherData,
  )

  const formik = useFormik({
    initialValues: {
      [CITY_FORM_VALUES.CITY_NAME]: "",
    } as CityFormData,
    onSubmit: (values: CityFormData, formikHelpers) => {
      if (!values[CITY_FORM_VALUES.CITY_NAME]) {
        alert("Please enter the name of the city") // Показываем алерт, если поле ввода пустое
        return
      }
      // 13. Диспатчим экшен (идентификатор действия) , который вызовет соответствующий редьюсер
      dispatch(weatherAppSliceActions.sendCityName(values))
      formikHelpers.resetForm()
    },
  })

  const handleSave = () => {
    if (data) {
      const dataToSave = {
        ...data,
        temperature: Math.round(data.temperature - 273.15), // Конвертация температуры из Кельвинов в Цельсии
      }
      dispatch(weatherAppSliceActions.saveWeatherData(dataToSave)) // Отправка действия для сохранения данных о погоде в store
    }
  }

  const handleDelete = () => {
    dispatch(weatherAppSliceActions.clearData()) // Отправка действия для очистки текущих данных о погоде
  }

  const handleErrorDelete = () => {
    dispatch(weatherAppSliceActions.clearError()) // Отправка действия для очистки ошибки
  }

  return (
    <HomePageWrapper>
      <CityForm onSubmit={formik.handleSubmit}>
        <Input
          name={CITY_FORM_VALUES.CITY_NAME}
          placeholder="Enter wishable city"
          value={formik.values[CITY_FORM_VALUES.CITY_NAME]}
          onChange={formik.handleChange}
        />
        <Button buttonName="Search" type="submit" />
      </CityForm>
      {status === "loading" && <Spinner />}
      {status === "success" && data && (
        <Info
          temperature={Math.round(data.temperature - 273.15)}
          city={data.city}
          weatherImg={`http://openweathermap.org/img/w/${data.icon}.png`}
          onSave={handleSave}
          onDelete={handleDelete}
          isHistory={false}
        />
      )}
      {status === "error" && error && (
        <ErrorMessage message={error} onErrorDelete={handleErrorDelete} />
      )}
    </HomePageWrapper>
  )
}
export default Home
