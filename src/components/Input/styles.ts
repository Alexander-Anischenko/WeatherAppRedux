//@import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);
import styled from "@emotion/styled"

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`

export const Label = styled.label`
  height: 24px;
  font-size: 16px;
  color: #6f6f6f;
`
export const InputStyle = styled.input`
  width: 550px;
  height: 48px;
  padding: 12px 12px 12px 20px;
  gap: 10px;
  border-radius: 40px;
  opacity: 0px;
  font-size: 16px;
  outline: none;
  border: 1px solid #ffffff;
  background: #ffffff1a;
  backdrop-filter: blur(16px); 
   ::placeholder{
        color: #cececeff; 
    } 
`;

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 16px;
`;
