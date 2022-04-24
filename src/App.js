import "./App.css";
import styled from "styled-components";
import Header from "./componenets/Header";
import SideBar from "./componenets/SideBar";
import Filters from "./componenets/Filters";
import Table from "./componenets/Table";
import { useEffect, useMemo, useRef, useState } from "react";
import { getGateways, getProjects, getReport } from "./api";
import { Dimmer, Loader } from "semantic-ui-react";
import { sumTransactions } from "./helpers";

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
    const [allProjects, setAllProjects] = useState([]);
    const [allGateways, setAllGateways] = useState([]);
    const [report, setReport] = useState(null);
    const [headings, setHeadings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    const dataIsReady = useRef(false);

    const filtersRef = useRef({
        projectId: null,
        gatewayId: null,
        from: null, // '2021-04-01',
        to: null, //'2021-04-30',
    });

    useEffect(() => {
        setLoading(true);
        Promise.all([getProjects(), getGateways()])
            .then((res) => {
                setAllProjects(res[0].data);
                setAllGateways(res[1].data);
                dataIsReady.current = true;
            })
            .catch(setLoading(false));
    }, []);

    useEffect(() => {
        if (dataIsReady.current) {
            generateReport();
            dataIsReady.current = false;
        }
    });

    function generateReport() {
        setLoading(true);
        getReport(filtersRef.current)
            .then((res) => {
                res.data.forEach((data) => {
                    data.gatewayName = allGateways.find(
                        (gateway) => gateway.gatewayId === data.gatewayId
                    ).name;
                    data.amount += " USD";
                });
                setTotal(sumTransactions(res.data));
                const report = {};
                if (filtersRef.current.projectId == null) {
                    allProjects.forEach((project) => {
                        report[project.projectId] = res.data.filter(
                            (transaction) =>
                                transaction.projectId === project.projectId
                        );
                    });
                } else {
                    if (filtersRef.current.gatewayId == null) {
                        allGateways.forEach((gateway) => {
                            report[gateway.gatewayId] = res.data.filter(
                                (transaction) =>
                                    transaction.gatewayId === gateway.gatewayId
                            );
                        });
                    } else {
                        report.data = res.data;
                    }
                }
                return report;
            })
            .then((report) => {
                setReport(report);
                const headings = [
                    {
                        label: "Date",
                        key: "created",
                    },
                    {
                        label: "Gateway",
                        key: "gatewayName",
                    },
                    {
                        label: "Transaction ID",
                        key: "paymentId",
                    },
                    {
                        label: "Amount",
                        key: "amount",
                    },
                ];
                if (
                    filtersRef.current.projectId != null ||
                    filtersRef.current.gatewayId != null
                ) {
                    headings.splice(1, 1);
                }
                setHeadings(headings);
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="App">
            <Dimmer active={loading}>
                <Loader />
            </Dimmer>
            <Header />
            <SideBarFiltersContainer>
                <SideBar />
                <MainContainer>
                    <Filters
                        filtersRef={filtersRef}
                        projects={allProjects}
                        gateways={allGateways}
                        onGenerate={generateReport}
                    />
                    <Content>
                        <div>
                            <strong>
                                {filtersRef.current.projectId
                                    ? allProjects.find(
                                          (project) =>
                                              project.projectId ===
                                              filtersRef.current.projectId
                                      ).name
                                    : "All projects"}
                            </strong>
                            <strong> | </strong>
                            <strong>
                                {filtersRef.current.gatewayId
                                    ? allGateways.find(
                                          (gateway) =>
                                              gateway.gatewayId ===
                                              filtersRef.current.gatewayId
                                      ).name
                                    : "All gateways"}
                            </strong>
                        </div>
                        {report &&
                            (!loading && filtersRef.current.projectId == null
                                ? allProjects.map((project, index) => (
                                      <Table
                                          key={project.projectId}
                                          extendable
                                          extend={index === 0}
                                          headings={headings}
                                          rows={report[project.projectId]}
                                          title={project.name}
                                      />
                                  ))
                                : !loading &&
                                  filtersRef.current.gatewayId == null
                                ? allGateways.map((gateway, index) => (
                                      <Table
                                          key={gateway.gatewayId}
                                          extendable
                                          extend={index === 0}
                                          headings={headings}
                                          rows={report[gateway.gatewayId]}
                                          title={gateway.name}
                                      />
                                  ))
                                : !loading && (
                                      <Table
                                          headings={headings}
                                          rows={report.data}
                                      />
                                  ))}
                    </Content>
                    <Footer>
                        <span>TOTAL: </span>
                        <span>{total} $</span>
                    </Footer>
                </MainContainer>
            </SideBarFiltersContainer>
        </div>
    );
}

export default App;
