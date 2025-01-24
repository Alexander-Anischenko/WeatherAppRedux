import type { ButtonProps } from "./types";
import { MainButton } from "./styles";

//props ='значение по умолчанию(default)'
function Button({ buttonName, type = "button", onClick, disabled = false }: ButtonProps) {
    //console.log(props);

    return <MainButton onClick={onClick} disabled = {disabled}>{buttonName}</MainButton>;
}

export default Button;
