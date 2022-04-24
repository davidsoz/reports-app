import { Input } from "semantic-ui-react";
import styled from "styled-components";

const StyledDate = styled(Input)`
    &.ui.input > input {
        background-color: #1bc5bd;
        color: #fff;
        border-radius: 5px;
        width: 145px;
    }
`;

function DatePicker(props) {
    return <StyledDate type="date" {...props} />;
}

export default DatePicker;
