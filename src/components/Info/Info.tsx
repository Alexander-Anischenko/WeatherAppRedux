import Button from "../Button/Button";
import { ButtonWrapper, City, InfoWrapper, Temperature, WeatherData, WeatherImg, WeatherImgWrapper, WeatherWrapper } from "./styles";
import type { InfoProps } from "./types";

function Info({temperature = 18, city = 'Manneim', weatherImg, isHistory = false}: InfoProps) {
  return <InfoWrapper>
    <WeatherWrapper>
    <WeatherData>
        <Temperature>{temperature}°</Temperature>
        <City>{city}</City>
    </WeatherData>
    <WeatherImgWrapper>
        <WeatherImg src={weatherImg} alt="Weather Img"/>
        <WeatherImg src={weatherImg} alt="Weather Img"/>
        <WeatherImg src={weatherImg} alt="Weather Img"/>
    </WeatherImgWrapper>
    </WeatherWrapper>
    <ButtonWrapper>
    {!isHistory && <Button buttonName="Save"/>}
    <Button buttonName="Delete"/>
    </ButtonWrapper>
    
  </InfoWrapper>
};

export default Info;
