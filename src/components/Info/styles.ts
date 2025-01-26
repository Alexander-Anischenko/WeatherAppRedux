import styled from "@emotion/styled"

interface ButtonWrapperProps {
  isHistory?: boolean
}

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const WeatherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const WeatherData = styled.div`
  height: 80px;
  width: 100px;
  color: #ffffff;
  margin: 22px 0 0 36px;
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 290px;
  height: 74px;
  margin: 28px 127px 0 0;
`

export const WeatherImg = styled.img`
  width: 80px;
`

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  gap: 95px;
  width: 710px;
  padding: ${({ isHistory }) => (isHistory ? "0 275px 14px" : "0 145px 14px")};
`
