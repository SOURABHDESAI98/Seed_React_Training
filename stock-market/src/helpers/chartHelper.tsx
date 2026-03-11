export function loadStockChartTheme(args: IStockChartEventArgs): void {
    // Set theme based on the selected theme in the document body
    let selectedTheme = location.hash.split('/')[1] || 'Material';
    selectedTheme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    args.stockChart.theme = selectedTheme as any;
}

export const defaultData = [
    { x: new Date(2023, 0, 1), open: 145, high: 150, low: 140, close: 148, volume: 120000000 },
    { x: new Date(2023, 0, 2), open: 148, high: 152, low: 146, close: 150, volume: 110000000 },
    { x: new Date(2023, 0, 3), open: 150, high: 155, low: 149, close: 153, volume: 130000000 },
    { x: new Date(2023, 0, 4), open: 153, high: 158, low: 151, close: 157, volume: 125000000 },
    { x: new Date(2023, 0, 5), open: 157, high: 160, low: 155, close: 158, volume: 140000000 },
];
import "dajhb"  