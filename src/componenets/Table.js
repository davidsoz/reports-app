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
`;

const TableContainer = styled.div`
  margin-top: 35px;
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

function Table({ extendable, extend = false}) {
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
          <Grid columns={3}>
            <GridRow>
              <Grid.Column>
                <div>Date</div>
              </Grid.Column>
              <Grid.Column>
                <div>Transaction ID</div>
              </Grid.Column>
              <Grid.Column>
                <div>Amount</div>
              </Grid.Column>
            </GridRow>

            <GridRow>
              <Grid.Column>
                <div>01/21/2021</div>
              </Grid.Column>
              <Grid.Column>
                <div>a732b</div>
              </Grid.Column>
              <Grid.Column>
                <div>3964 $</div>
              </Grid.Column>
            </GridRow>
            <GridRow>
              <Grid.Column>
                <div>01/21/2021</div>
              </Grid.Column>
              <Grid.Column>
                <div>a732b</div>
              </Grid.Column>
              <Grid.Column>
                <div>3964 $</div>
              </Grid.Column>
            </GridRow>
            <GridRow>
              <Grid.Column>
                <div>01/21/2021</div>
              </Grid.Column>
              <Grid.Column>
                <div>a732b</div>
              </Grid.Column>
              <Grid.Column>
                <div>3964 $</div>
              </Grid.Column>
            </GridRow>
          </Grid>
        )}
      </TableContainer>
    </>
  );
}

export default Table;
