import styled from "@emotion/styled"

export const HistoryPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  max-height: 100hv;

  width: 100%;
`

export const ButtonWrapper = styled.div`
  width: 710px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  overflow-y: auto;
  max-height: calc(100vh - 120px);
  width: 100%;
`
