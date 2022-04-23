import Logo from "../icons/Logo";
import UserIcon from "../icons/UserIcon";
import MenuIcon from "../icons/MenuIcon";
import styled from 'styled-components';
import BarChart from "../icons/BarChart";
import AppChart from "../icons/AppChart";
import Laptop from "../icons/Laptop";
import PieChart from "../icons/PieChart";
import OffIcon from "../icons/OffIcon";

const StyledHeder = styled.header`
    padding: 20px 100px 16px 0; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #F3F6F9;
    div {
        display: flex;
        align-items: center;
        gap: 18px;
        &:first-child {
            gap: 0;
            div:first-child {
                padding: 0 35px;
            }
        }
    }
`;

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px 35px;
`;

function Header() {
  return (
      <>
       <StyledHeder>
      <div>
          <div>
            <Logo />
          </div>
        <MenuIcon />
      </div>
      <div>
        <UserIcon />
        <span>John Doe</span>
      </div>
      
    </StyledHeder>
    <SideBar>
        <BarChart />
        <AppChart />
        <Laptop />
        <PieChart />
        <OffIcon />
    </SideBar>
      </>
   
  );
}

export default Header;
