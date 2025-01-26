import Button from "../Button/Button"
import {
  APIMessage,
  ButtonWrapper,
  ErrorMessageContent,
  Warning,
} from "./styles"
import type { ErrorMessageProps } from "./types"

function ErrorMessage({ message, onErrorDelete }: ErrorMessageProps) {
  return (
    <ErrorMessageContent>
      <Warning>API Error</Warning>
      <APIMessage>{message}</APIMessage>
      <ButtonWrapper>
        {onErrorDelete && (
          <Button buttonName="Delete" onClick={onErrorDelete} />
        )}
      </ButtonWrapper>
    </ErrorMessageContent>
  )
}

export default ErrorMessage
