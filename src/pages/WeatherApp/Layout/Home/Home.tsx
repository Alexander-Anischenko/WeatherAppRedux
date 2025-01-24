import { useFormik } from "formik"

import Input from "../../../../components/Input/Input"
import Button from "../../../../components/Button/Button"

import { CityForm, HomePageWrapper } from "./styles"
import type { CityFormData} from "./types";
import  { CITY_FORM_VALUES } from "./types"
import { useAppDispatch } from "../../../../store/hooks";
import { weatherAppSliceActions } from "../../../../store/redux/weatherAppSlice/weatherAppSlice";
import { v4 } from "uuid";
import Info from "../../../../components/Info/Info";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import Spinner from "../../../../components/Spinner/Spinner";

function Home() {
  // 12. Сохраняем функцию dispatch, которую возвращает хук useAppDispatch
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      [CITY_FORM_VALUES.CITY_NAME]: '',
      
    } as CityFormData,
    onSubmit: (values) => {
      // 13. Диспатчим экшен (идентификатор действия) , который вызовет соответствующий редьюсер
      /* dispatch(usersSliceActions.addUser({...values, id: v4()})) */
      dispatch(weatherAppSliceActions.sendCityName(values))
      
      
    }
  })

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
        {formik.isSubmitting && <Spinner/>}
      </CityForm>
      <Info isHistory={true}/>
      <ErrorMessage/>
    </HomePageWrapper>
  )
}
export default Home