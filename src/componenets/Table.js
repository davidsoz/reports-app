import { useState } from "react";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";

const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;

    margin-bottom: 35px;
    padding: 25px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
`;

const TableContainer = styled.div`
    margin-top: 35px;

    .grid {
        height: 300px;
        overflow-y: scroll;
    }
`;

const GridRow = styled(Grid.Row)`
    margin: 0 15px;
    border-radius: 5px;

    &:nth-child(odd) {
        background-color: white;
    }
    .column {
        padding: 5px 20px;
        text-align: center;
        &:first-child {
            text-align: left;
        }
        &:last-child {
            text-align: right;
        }
    }
`;

function Table({ headings, rows, extendable, extend = false }) {
    const [extendTable, setExtendTable] = useState(extend);

    function toglExtendTable() {
        setExtendTable(!extendTable);
    }

    return (
        <>
            <TableContainer>
                {extendable && (
                    <TableHeader onClick={toglExtendTable}>
                        <div>Project 1</div>
                        <div>TOTAL: 10 065 $ </div>
                    </TableHeader>
                )}
                {(!extendable || extendTable) && (
                    <Grid columns={headings.length}>
                        <GridRow>
                            {headings.map((heading) => (
                                <Grid.Column key={heading.key}>
                                    <div>{heading.label}</div>
                                </Grid.Column>
                            ))}
                        </GridRow>

                        {rows.map((row) => (
                            <GridRow key={row.paymentId}>
                                {headings.map((heading) => (
                                    <Grid.Column key={heading.key}>
                                        <div>{row[heading.key]}</div>
                                    </Grid.Column>
                                ))}
                            </GridRow>
                        ))}
                    </Grid>
                )}
            </TableContainer>
        </>
    );
}

export default Table;
