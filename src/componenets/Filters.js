import styled from "styled-components";
import Table from "./Table";
import Button from "./UI/Button";
import DatePicker from "./UI/DatePicker";
import Dropdown from "./UI/Dropdown";

const FiltersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    flex-grow: 1;
    align-items: flex-start;
    div:last-child {
        display: flex;
        align-items: flex-start;
        gap: 20px;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    span:first-child {
        font-size: 24px;
        font-weight: 700;
    }
    span:last-child {
        color: #7E8299;
        font-size: 16px;
        line-height: 19px;
    }
`;

function Filters({projects, gateways}) {
    return (
        <FiltersContainer>
            <Description>
                <span>Reports</span>
                <span>Easily generate a report of your transactions</span>
            </Description>
            <div>
                <Dropdown placeholder='Choose project' options={projects.map(project => ({key: project.projectId, value: project.projectId, text: project.name}))}/>
                <Dropdown placeholder='Choose gateway' options={gateways.map(gateway => ({key: gateway.gatewayId, value: gateway.gatewayId, text: gateway.name}))}/>
                <DatePicker value='1995-05-05' onChange={(value, d) => console.log(d.value)}/>
                <DatePicker />
                <Button text='Generate report' onClick={() => console.log(1)}/>
            </div>
        </FiltersContainer>
    )
}

export default Filters;