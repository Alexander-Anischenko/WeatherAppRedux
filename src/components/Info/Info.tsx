import Button from "../Button/Button"
import {
  ButtonWrapper,
  City,
  InfoWrapper,
  Temperature,
  WeatherData,
  WeatherImg,
  WeatherImgWrapper,
  WeatherWrapper,
} from "./styles"
import type { InfoProps } from "./types"

function Info({
  temperature = 18,
  city = "Manneim",
  weatherImg,
  onSave,
  onDelete,
  isHistory = false,
}: InfoProps) {
  return (
    <InfoWrapper>
      <WeatherWrapper>
        <WeatherData>
          <Temperature>{temperature}°</Temperature>
          <City>{city}</City>
        </WeatherData>
        <WeatherImgWrapper>
          <WeatherImg src={weatherImg} alt="Weather Img" />
          <WeatherImg src={weatherImg} alt="Weather Img" />
          <WeatherImg src={weatherImg} alt="Weather Img" />
        </WeatherImgWrapper>
      </WeatherWrapper>
      <ButtonWrapper isHistory={isHistory}>
        {!isHistory && onSave && <Button buttonName="Save" onClick={onSave} />}
        {onDelete && <Button buttonName="Delete" onClick={onDelete} />}
      </ButtonWrapper>
    </InfoWrapper>
  )
}

export default Info
