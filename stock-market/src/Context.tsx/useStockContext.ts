import { useContext } from "react";
import { StockContext } from "./stockContext";

export const useStockContext = () => {
  const ctx = useContext(StockContext);
  if (!ctx)
    throw new Error("useStockContext must be used within StockProvider");
  return ctx;
};
