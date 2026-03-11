import React, { createContext, useEffect, useState } from "react";

export interface StockGraphPoint {
  seq: number;
  time: string;
  date: string;
  open: number;
  high: number;
  low: number;
}

interface StockContextType {
  stockOne: number;
  stockTwo: number;
  stockOneGraph: StockGraphPoint[];
  stockTwoGraph: StockGraphPoint[];
}

export const StockContext = createContext<StockContextType | undefined>(
  undefined,
);

export const StockProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [stockOne, setStockOne] = useState(100);
  const [stockTwo, setStockTwo] = useState(200);
  const [stockOneGraph, setStockOneGraph] = useState<StockGraphPoint[]>([
    {
      seq: 1,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      open: 100,
      high: 100,
      low: 100,
    },
  ]);
  const [stockTwoGraph, setStockTwoGraph] = useState<StockGraphPoint[]>([
    {
      seq: 1,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      open: 200,
      high: 200,
      low: 200,
    },
  ]);

  useEffect(() => {
    let highOne = 100;
    let lowOne = 100;
    let highTwo = 200;
    let lowTwo = 200;
    let sOne = 100;
    let sTwo = 200;

    const interval = setInterval(() => {
      sOne = +(sOne + (Math.random() - 0.5) * 10).toFixed(2);
      sTwo = +(sTwo + (Math.random() - 0.5) * 10).toFixed(2);
      setStockOne(sOne);
      setStockTwo(sTwo);

      highOne = Math.max(highOne, sOne);
      lowOne = Math.min(lowOne, sOne);
      highTwo = Math.max(highTwo, sTwo);
      lowTwo = Math.min(lowTwo, sTwo);

      // Add new graph points every second
      const now = new Date();
      setStockOneGraph((prev) => {
        const nextSeq = prev.length ? prev[prev.length - 1].seq + 1 : 1;
        // Simulate high and low for each interval
        const high = +(sOne + Math.random() * 5).toFixed(2);
        const low = +(sOne - Math.random() * 5).toFixed(2);
        const arr = [
          ...prev,
          {
            seq: nextSeq,
            time: now.toLocaleTimeString(),
            date: now.toLocaleDateString(),
            open: sOne,
            high,
            low,
          },
        ];
        return arr;
      });
      setStockTwoGraph((prev) => {
        const nextSeq = prev.length ? prev[prev.length - 1].seq + 1 : 1;
        // Simulate high and low for each interval
        const high = +(sTwo + Math.random() * 5).toFixed(2);
        const low = +(sTwo - Math.random() * 5).toFixed(2);
        const arr = [
          ...prev,
          {
            seq: nextSeq,
            time: now.toLocaleTimeString(),
            date: now.toLocaleDateString(),
            open: sTwo,
            high,
            low,
          },
        ];
        return arr.length > 20 ? arr.slice(-20) : arr;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StockContext.Provider
      value={{ stockOne, stockTwo, stockOneGraph, stockTwoGraph }}
    >
      {children}
    </StockContext.Provider>
  );
};
