import styled from "@emotion/styled"

export const ErrorMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const Warning = styled.div`
  width: 243px;
  height: 69px;
  color: #f35e5e;
  font-size: 57px;
  font-weight: 500;
  text-align: center;
`

export const APIMessage = styled.div`
  display: flex;
  justify-content: center;
  width: 710px;
  height: 22px;
  font-size: 18px;
  margin-bottom: 8px;
  color: #ffffff;
`

export const ButtonWrapper = styled.div`
  width: 155px;
`
