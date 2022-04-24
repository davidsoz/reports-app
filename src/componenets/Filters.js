import { useState } from "react";
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
    color: #7e8299;
    font-size: 16px;
    line-height: 19px;
  }
`;

function Filters({ projects, gateways }) {
  const [selectedFilters, setSelectedFilters] = useState({
    projectId: null,
    gatewayId: null,
    from: null,
    to: null,
  });

  function filterChangeHandler(key, value) {
    setSelectedFilters({
        ...selectedFilters,
        [key]: value
    })

  }

  return (
    <FiltersContainer>
      <Description>
        <span>Reports</span>
        <span>Easily generate a report of your transactions</span>
      </Description>
      <div>
        <Dropdown
          onChange={(_, d) => filterChangeHandler( 'projectId', d.value)}
          placeholder="Choose project"
          options={projects.map((project) => ({
            key: project.projectId,
            value: project.projectId,
            text: project.name,
          }))}
        />
        <Dropdown
        onChange={(_, d) => filterChangeHandler( 'gatewayId', d.value)}
          placeholder="Choose gateway"
          options={gateways.map((gateway) => ({
            key: gateway.gatewayId,
            value: gateway.gatewayId,
            text: gateway.name,
          }))}
        />
        <DatePicker
          onChange={(_, d) => filterChangeHandler( 'from', d.value)}
        />
        <DatePicker onChange={(_, d) => filterChangeHandler( 'to', d.value)}/>
        <Button text="Generate report" onClick={() => console.log(1)} />
      </div>
    </FiltersContainer>
  );
}

export default Filters;
