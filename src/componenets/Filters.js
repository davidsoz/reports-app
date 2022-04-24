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

function buildOption(key, value, text) {
    return {
        key,
        value,
        text,
    };
}

function Filters({ filtersRef, projects, gateways, onGenerate }) {
    function filterChangeHandler(key, value) {
        filtersRef.current = {
            ...filtersRef.current,
            [key]: value || null,
        };
    }

    return (
        <FiltersContainer>
            <Description>
                <span>Reports</span>
                <span>Easily generate a report of your transactions</span>
            </Description>
            <div>
                <Dropdown
                    onChange={(_, d) =>
                        filterChangeHandler("projectId", d.value)
                    }
                    defaultValue={0}
                    options={[buildOption("all", 0, "All projects")].concat(
                        projects.map((project) =>
                            buildOption(
                                project.projectId,
                                project.projectId,
                                project.name
                            )
                        )
                    )}
                />
                <Dropdown
                    onChange={(_, d) =>
                        filterChangeHandler("gatewayId", d.value)
                    }
                    defaultValue={0}
                    options={[buildOption("all", 0, "All gateways")].concat(
                        gateways.map((gateway) =>
                            buildOption(
                                gateway.gatewayId,
                                gateway.gatewayId,
                                gateway.name
                            )
                        )
                    )}
                />
                <DatePicker
                    onChange={(_, d) => filterChangeHandler("from", d.value)}
                />
                <DatePicker
                    onChange={(_, d) => filterChangeHandler("to", d.value)}
                />
                <Button text="Generate report" onClick={onGenerate} />
            </div>
        </FiltersContainer>
    );
}

export default Filters;
