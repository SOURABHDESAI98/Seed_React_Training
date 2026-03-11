declare module "@canvasjs/react-charts" {
  import React from "react";

  interface CanvasJSChartProps {
    options: any;
    onRef?: (chart: any) => void;
  }

  export const CanvasJSChart: React.FC<CanvasJSChartProps>;

  export default {
    CanvasJSChart: React.FC<CanvasJSChartProps>,
  };
}
