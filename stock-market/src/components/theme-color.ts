import { IStockChartEventArgs } from "@syncfusion/ej2-react-charts";

export function loadStockChartTheme(args: IStockChartEventArgs): void {
  // Example: Set theme based on args.theme or default
  let selectedTheme = args.theme ? args.theme : "Material";
  args.stockChart.theme = selectedTheme;
}
