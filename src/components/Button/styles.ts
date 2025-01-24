import styled from "@emotion/styled"

interface MainButtonProps {
  disabled: boolean
}

export const MainButton = styled.button<MainButtonProps>`
  width: 100%;
  height: 48px;
  padding: 12px 40px 12px 40px;
  border-radius: 50px;
  gap: 10px;
  opacity: 0px;
  background-color: ${({ disabled }) => (disabled ? "grey" : "#3678b4")};
  font-weight: 600;
  font-size: 20px;
  font-family: Lato, sans-serif;
  color: aliceblue;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  &:hover {
    background-color: #4A319F;
    transform: scale(0.99);
  }

  &:active {
    background-color: #362A84;
    transform: scale(0.98);
    box-shadow: 0 2px 2px #666;
  }
`
