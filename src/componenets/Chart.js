import DonutChart from "react-donut-chart";
import styled from "styled-components";

const ChartWrapper = styled.div`
    width: 320px;
    text-align: center;
    flex-shrink: 0;

    .donutchart {
        margin-top: 50px;
    }

    .legends {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 20px;
        background-color: #F1FAFE;
        border-radius: 10px;

        .square {
            display: inline-block;
            width: 15px;
            height: 15px;
            margin-right: 10px;
            border-radius: 5px;
            background-color: black;

            &.purple {
                background-color: #A259FF;
            }

            &.orange {
                background-color: #F24E1E;
            }

            &.yellow {
                background-color: #FFC107;
            }

            &.blue {
                background-color: #6497B1;
            }
        }
        
    }
`;

const colors = ['purple', 'orange', 'yellow', 'blue'];

function Chart({data}) {
    return (
        <ChartWrapper>
            <div className="legends">
                {
                    data.map((d, i) => (
                        <div key={i}>
                            <span className={`square ${colors[i] || 'black'}`}></span>
                            <span>{d.label}</span>
                        </div>                
                    ))
                }
            </div>
            <DonutChart
                data={data}
                colors={[
                    '#A259FF',
                    '#F24E1E',
                    '#FFC107',
                    '#6497B1'
                ].concat(Array(100).fill('black'))}
                legend={false}
                width={300}
            />
        </ChartWrapper>
    );
}

export default Chart;