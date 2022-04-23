import styled from 'styled-components';
import BarChart from "../icons/BarChart";
import AppChart from "../icons/AppChart";
import Laptop from "../icons/Laptop";
import PieChart from "../icons/PieChart";
import OffIcon from "../icons/OffIcon";


const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 35px;
`;
function SideBar() {

    return (
        <StyledSideBar>
            <BarChart />
            <AppChart />
            <Laptop />
            <PieChart />
            <OffIcon />
        </StyledSideBar>
    )
}

export default SideBar;