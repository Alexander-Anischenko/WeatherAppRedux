import Button from "../Button/Button";
import { ButtonWrapper, City, InfoResultWrapper, Temperature, WeatherData, WeatherImg, WeatherImgWrapper } from "./styles";


function InfoResult() {

    
    return <InfoResultWrapper>
    <WeatherData>
        <Temperature></Temperature>
        <City>Colrado</City>
    </WeatherData>
    <WeatherImgWrapper>
        <WeatherImg src="" alt=""/>
        <WeatherImg src="" alt=""/>
        <WeatherImg src="" alt=""/>
    </WeatherImgWrapper>
    <ButtonWrapper>
    <Button buttonName="Delete"/>
    </ButtonWrapper>
    
  </InfoResultWrapper>
}

export default InfoResult;
