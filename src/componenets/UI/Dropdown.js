import { Select } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
    &.ui.selection.dropdown {
        background-color: #1BC5BD;
        color: #fff;
        border-radius: 5px;
        min-width: fit-content;
        width: 145px;
    }
    
`

const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' }
  ]
  

function Dropdown() {

    return (
        <StyledSelect placeholder='choose option' options={countryOptions} />
    )
}

export default Dropdown;