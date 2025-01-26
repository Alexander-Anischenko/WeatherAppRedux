import styled from "@emotion/styled"

export const SpinnerComponent = styled.div`
  border: 40px solid rgba(0, 0, 0, 0.1);
  border-left-color: #f5c31f;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
export const SpinnerWrapper = styled.div`
  height: 180px;
`
