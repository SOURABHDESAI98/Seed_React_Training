import Graph from "../components/Graph";
import "./stock.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useStockContext } from "../Context.tsx/useStockContext";

const StockCard = ({ name, value, change, showGraph = false,stocks }) => {
  const { stockOneGraph, stockTwoGraph } =
    useStockContext();
 
  const stockHistory = [
    { name: "Stock One", values: stockOneGraph.map((h) => h.open) },
    { name: "Stock Two", values: stockTwoGraph.map((h) => h.open) },
  ];

  // change: { amount: number, percent: number }
  const isUp = change.amount >= 0;
  return (
    <div className={`stock-card ${isUp ? "up" : "down"}`}>
      <div className="stock-name">{name}</div>
      <div className="stock-value">${value.toFixed(2)}</div>
      <div className="stock-change">
        <span className="change-amount">
          {isUp ? "+" : "-"}
          {Math.abs(change.amount).toFixed(2)}
        </span>
        <span
          className="change-percent"
          style={{ color: isUp ? "#27ae60" : "#e74c3c" }}
        >
          ({isUp ? "+" : "-"}
          {Math.abs(change.percent).toFixed(2)}%)
        </span>
      </div>

      {showGraph && (
        <div className="stock-overview-container">
          <Container fluid>
            <Row>
              <Col xs={12} className="p-0">
                <Card className="shadow w-100 border-0">
                  <Card.Header
                    className="bg-primary text-white text-center"
                    style={{ fontSize: "1.4rem", fontWeight: 700 }}
                  >
                    Stock Overview
                  </Card.Header>
                  <Card.Body className="p-4">
                    <Row className="stock-items-row g-3">
                      {stocks.map((stock, index) => (
                        <Col
                          key={stock.name}
                          xs={12}
                          md={6}
                          lg={6}
                          className="d-flex"
                        >
                          <Card className="stock-overview-card text-center shadow-sm w-100">
                            <Card.Body>
                              <Card.Title className="mb-3">
                                {stock.name}
                              </Card.Title>
                              <Card.Text
                                className="bg-info text-white rounded py-3"
                                style={{
                                  fontSize: "1.7rem",
                                  fontWeight: 700,
                                  margin: 0,
                                }}
                              >
                                {stock.value.toFixed(2)}
                              </Card.Text>
                            </Card.Body>
                            <div style={{ width: "100%", padding: "12px" }}>
                              <Graph stockHistory={[stockHistory[index]]} />
                            </div>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default StockCard;
