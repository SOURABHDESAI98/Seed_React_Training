import CanvasJSReact from "@canvasjs/react-charts";
import "./graph.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface Stock {
  name: string;
  values: number[];
}

interface GraphProps {
  stockHistory: Stock[];
}

function Graph({ stockHistory }: GraphProps) {
  return (
    <div className="graph-container">
      {stockHistory.map((stock: Stock) => {
        const options = {
          animationEnabled: true,
          theme: "light2",
          axisX: {
            title: "Time",
            labelFormatter: function (e: any) {
              return `T${e.value}`;
            },
          },
          axisY: {
            title: "Value",
            includeZero: false,
          },
          data: [
            {
              type: "line",
              dataPoints: stock.values.map((v: number, idx: number) => ({
                x: idx + 1,
                y: v,
              })),
            },
          ],
        };
        return (
          <div key={stock.name} className="graph-item">
            <CanvasJSChart options={options} />
          </div>
        );
      })}
    </div>
  );
}

export default Graph;
