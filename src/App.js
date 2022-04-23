import './App.css';
import styled from 'styled-components';
import Header from './componenets/Header';
import SideBar from './componenets/SideBar';
import Filters from './componenets/Filters';

const SideBarFiltersContainer = styled.div`
  display: flex;
  padding-top: 40px;
  flex-grow: 1;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <SideBarFiltersContainer>
        <SideBar />
        <Filters />
      </SideBarFiltersContainer>
    </div>
  );
}

export default App;
