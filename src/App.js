import './App.css';
import styled from 'styled-components';
import Header from './componenets/Header';
import SideBar from './componenets/SideBar';
import Filters from './componenets/Filters';
import Table from './componenets/Table';

const SideBarFiltersContainer = styled.div`
  display: flex;
  padding-top: 40px;
  flex-grow: 1;
`;

const MainContainer = styled.div`
    padding-right: 100px;
    width: 100%;    
`;

const Content = styled.div`
    margin-top: 27px;
  padding: 18px 24px;
  border-radius: 10px;
  background-color: #f1fafe;

`;

const Footer = styled.div`
    margin-top: 30px;
		padding: 18px;
		font-weight: bold;
		background-color: #f1fafe;
		border-radius: 10px;
`;


function App() {
  return (
    <div className="App">
      <Header />
      <SideBarFiltersContainer>
        <SideBar />
        <MainContainer>
          <Filters />
          <Content>
            <div>
              <strong>Project 1</strong>
              <strong> | </strong>
              <strong>Gateway 1</strong>
            </div>
            <Table />
            <Table extendable/>
          </Content>
          <Footer>
              <span>TOTAL: </span>
              <span>14,065 $</span>
          </Footer>
        </MainContainer>
      </SideBarFiltersContainer>

    </div>
  );
}

export default App;
