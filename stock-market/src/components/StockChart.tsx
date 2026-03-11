import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  CandleSeries,
  Category,
  Tooltip,
  Crosshair,
  Zoom,
  Legend,
} from "@syncfusion/ej2-react-charts";

// Sample stock data
const stockData = [
  {
    x: "2024-03-01",
    open: 120,
    high: 130,
    low: 115,
    close: 125,
    volume: 10000,
  },
  {
    x: "2024-03-02",
    open: 125,
    high: 135,
    low: 120,
    close: 130,
    volume: 12000,
  },
  {
    x: "2024-03-03",
    open: 130,
    high: 140,
    low: 128,
    close: 138,
    volume: 15000,
  },
  {
    x: "2024-03-04",
    open: 138,
    high: 145,
    low: 135,
    close: 140,
    volume: 11000,
  },
  {
    x: "2024-03-05",
    open: 140,
    high: 150,
    low: 138,
    close: 148,
    volume: 13000,
  },
];

const StockChart: React.FC = () => {
  return (
    <ChartComponent
      id="stock-chart"
      primaryXAxis={{ valueType: "Category", title: "Date" }}
      primaryYAxis={{
        title: "Price",
        minimum: 100,
        maximum: 160,
        interval: 10,
      }}
      tooltip={{ enable: true }}
      crosshair={{ enable: true }}
      zoomSettings={{ enableSelectionZooming: true, enablePinchZooming: true }}
      legendSettings={{ visible: true }}
      height="400px"
    >
      <Inject
        services={[CandleSeries, Category, Tooltip, Crosshair, Zoom, Legend]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          type="Candle"
          dataSource={stockData}
          xName="x"
          yName="close"
          name="Stock Price"
          open="open"
          close="close"
          high="high"
          low="low"
          volume="volume"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StockChart;
