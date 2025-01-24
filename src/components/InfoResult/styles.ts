import styled from "@emotion/styled"

export const InfoResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 710px;
  height: 180px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(8px);
  border-radius: 30px;
`

export const WeatherData = styled.div`
  height: 80px;
  width: 100px;
  color: #ffffff;
  padding: 12px 0 0 36px;
`
export const Temperature = styled.div`
  font-size: 57px;
  font-weight: 500;
`
export const City = styled.div`
  font-size: 20px;
  font-weight: 700;
`

export const WeatherImgWrapper = styled.div`
  width: 290px;
  height: 74px;
  padding: 10px 127px 0 0;
`

export const WeatherImg = styled.img`
  width: 80px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 95px;
  width: 710px;
  padding: 0 275px 14px;
`