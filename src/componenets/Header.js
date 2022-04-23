import Logo from "../icons/Logo";
import UserIcon from "../icons/UserIcon";
import MenuIcon from "../icons/MenuIcon";
import styled from 'styled-components';


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
    
      </>
   
  );
}

export default Header;
