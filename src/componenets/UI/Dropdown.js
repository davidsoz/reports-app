import { Select } from "semantic-ui-react";
import styled from "styled-components";

const StyledSelect = styled(Select)`
    &.ui.selection.dropdown {
        background-color: #1bc5bd;
        color: #fff;
        border-radius: 5px;
        min-width: fit-content;
        width: 145px;
    }
`;

function Dropdown(props) {
    return <StyledSelect {...props} />;
}

export default Dropdown;
