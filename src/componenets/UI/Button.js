import { Button as SemanticButton } from "semantic-ui-react";
import styled from "styled-components";

const StyledButton = styled(SemanticButton)`
    &.ui.button {
        background-color: #005b96;
        color: #fff;
        border-radius: 5px;
        width: 145px;
    }
`;

function Button({ text, ...props }) {
    return <StyledButton {...props}>{text}</StyledButton>;
}

export default Button;
