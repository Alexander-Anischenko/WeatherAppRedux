import Button from "../../../../components/Button/Button"
import Info from "../../../../components/Info/Info"
import { ButtonWrapper, HistoryPageWrapper } from "./styles"

function History() {
    return (
        <HistoryPageWrapper>
            <Info isHistory = {true}/>
            <ButtonWrapper>
                <Button buttonName="Delete all cards"/>   
            </ButtonWrapper>
        </HistoryPageWrapper>
    )
}

export default History