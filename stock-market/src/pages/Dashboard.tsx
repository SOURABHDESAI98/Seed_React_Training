import "./dashboard.css";
import StockCard from "./Stock";


const Dashboard = () => {
  // Example stock data
  const stocks = [
    { name: "Apple", value: 172.36, change: { amount: 2.15, percent: 1.26 } },
    { name: "Google", value: 128.44, change: { amount: -1.12, percent: -0.87 } },
  ];
  return (
    <div className="dashboard-parent">
      {stocks.map((stock, idx) => (
        <StockCard key={idx} {...stock} />
      ))}
    </div>
  );
};

export default Dashboard;
