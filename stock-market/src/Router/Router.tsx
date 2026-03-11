import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Stock from "../pages/Stock";

import "./router.css";

const stocksData = {
  apple: {
    name: "Apple",
    value: 172.36,
    change: { amount: 2.15, percent: 1.26 },
    showGraph: true,
  },
  google: {
    name: "Google",
    value: 128.44,
    change: { amount: -1.12, percent: -0.87 },
    showGraph: true,
  },
};

const allStocks = [stocksData.apple, stocksData.google];

const RouterComponent = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              to="/"
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              to="/stock1"
            >
              Stock 1
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              to="/stock2"
            >
              Stock 2
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/stock1"
          element={<Stock {...stocksData.apple} stocks={[stocksData.apple]} />}
        />
        <Route
          path="/stock2"
          element={
            <Stock {...stocksData.google} stocks={[stocksData.google]} />
          }
        />
      </Routes>
    </div>
  );
};

export default RouterComponent;
