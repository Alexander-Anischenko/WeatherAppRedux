import Button from "../Button/Button";
import { APIMessage, ButtonWrapper, ErrorMessageContent, Warning } from "./styles";

function ErrorMessage () {
    return(<ErrorMessageContent>
        <Warning>API Error</Warning>
        <APIMessage>Something went wrong with API data</APIMessage>
        <ButtonWrapper>
        <Button buttonName="Delete"/>
        </ButtonWrapper>
    </ErrorMessageContent>)
};

export default ErrorMessage;