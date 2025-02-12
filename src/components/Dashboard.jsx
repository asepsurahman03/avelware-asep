import { FaChartBar, FaChartPie, FaGasPump, FaSearch, FaCaretDown } from "react-icons/fa";
import { Container, Row, Col, Card, Table, Dropdown, Image } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, PieChart, Pie, Cell } from "recharts";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const fuelStatus = [
    { name: "Pertamax Turbo", volume: 40, capacity: 200, status: "FILLING", color: "#a0000f" },
    { name: "Pertamax", volume: 160, capacity: 200, status: "STANDBY", color: "#28a745" },
    { name: "Pertalite", volume: 100, capacity: 200, status: "STANDBY", color: "#f39c12" },
    { name: "Solar", volume: 90, capacity: 200, status: "STANDBY", color: "#007bff" },
    { name: "Bio Solar", volume: 120, capacity: 200, status: "FILLING", color: "#964B00" },
    { name: "Pertamax Max", volume: 130, capacity: 200, status: "STANDBY", color: "#800080" }
  ];

  

  const carUsageData = [
    { name: "Car 1", volume: 85 },
    { name: "Car 2", volume: 65 },
    { name: "Car 6", volume: 35 },
    { name: "Car 10", volume: 20 },
    { name: "Car 3", volume: 15 }
  ];

  const fuelUsageData = [
    { name: "Pertalite", value: 4000, percentage: 40, color: "#c412fb" },
    { name: "Pertamax", value: 1500, percentage: 15, color: "#b6f307" },
    { name: "Pertamax Turbo", value: 1500, percentage: 15, color: "#00ff3a" },
    { name: "Solar", value: 1000, percentage: 10, color: "#a1b2fe" },
    { name: "Bio Solar", value: 1000, percentage: 10, color: "#123efb" },
    { name: "Pertamax Max", value: 1000, percentage: 10, color: "#d40014" }
  ];

  return (
    <Container 
        fluid 
        className="bg-dark text-white d-flex" 
        style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "auto"
          }}
        >
      <Sidebar />

      <div className="flex-grow-4 p-3" style={{ marginLeft: "250px" }}>
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center mb-3">
          {/* Search Bar */}
          <div className="d-flex align-items-center bg-secondary rounded px-2">
            <span className="text-white me-2">Search</span>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-0 text-white"
              style={{ outline: "none" }}
            />
            <FaSearch className="text-white ms-2" />

          </div>

          {/* Date Time & Profile */}
          <div className="d-flex align-items-center">
          <span className="me-3">{currentTime.toLocaleTimeString()}, {currentTime.toLocaleDateString()}</span>
          <Dropdown>
              <Dropdown.Toggle as="div" className="d-flex align-items-center">
                {/* Gambar Profil */}
                <Image
                  src="/images/Asep Surahman Sulaeman.jpg" // Path gambar di folder public/images/
                  roundedCircle
                  width={50}
                  height={50}
                  className="me-2"
                />
                <span>Asep Surahman Sulaeman</span>
                <FaCaretDown className="ms-2" />
              </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        </header>
        <h2>Dashboard</h2>

        <Row className="mb-1 p-3" style={{ backgroundColor: "#430c6b", borderRadius: "10px", overflow: "hidden" }}>
          <Col md={12}>
            <Card className="p-1 text-white bg-transparent border-0">
              <Card.Body>
                <h2 className="text-center fw-bold">REAL TIME FUEL TANK STATUS</h2>
              </Card.Body>
            </Card>
          </Col>

          {/* Fuel Status Cards */}
          <Row>
          {fuelStatus.map((fuel, index) => (
            <Col key={index} md={4} className="mb-3">
              <Card className="p-3 text-white shadow" style={{ backgroundColor: fuel.color, borderRadius: "12px" }}>
                <Card.Body className="d-flex align-items-center">
                  <div className="tank-container me-1" style={{ width: "15px", height: "70px", border: "2px solid white", borderRadius: "5px", position: "relative", overflow: "hidden", background: "#ddd" }}>
                    <div className="fuel-level" style={{ position: "absolute", bottom: 0, width: "100%", height: `${(fuel.volume / fuel.capacity) * 100}%`, background: fuel.color }}></div>
                  </div>
                  <FaGasPump size={80} className="me-3" />
                  <div>
                    <Card.Title className="fw-bold">{fuel.name}</Card.Title>
                    <Card.Text>{fuel.volume} / {fuel.capacity} L</Card.Text>
                    <Card.Text className="fw-bold">Status: {fuel.status}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

          {/* Charts */}
          <Col md={6} className="mt-4">
            <Card className="p-3 bg-transparent border border-light text-white">
              <Card.Title className="text-center fw-bold">
                <FaChartBar className="me-2" /> TOP 5 CAR USAGE THIS MONTH
              </Card.Title>
              <div className="d-flex justify-content-center">
                <ResponsiveContainer width="95%" height={300}>
                  <BarChart data={carUsageData} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.2)" vertical={false} />
                    <XAxis dataKey="name" stroke="white" />
                    <YAxis stroke="white" label={{ value: "Volume (Liter)", angle: -90, position: "insideLeft", fill: "white" }} />
                    <Tooltip cursor={{ fill: "rgba(255,255,255,0.1)" }} />
                    <Bar dataKey="volume" fill="#5ED6A9" barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>

          <Col md={6} className="mt-4">
            <Card className="p-3 bg-transparent border border-light text-white">
              <Card.Title className="text-center">
                <FaChartPie className="me-2" /> Fuel Usage This Month
              </Card.Title>
              <div className="d-flex justify-content-center">
                <PieChart width={400} height={300}>
                  <Pie
                    data={fuelUsageData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percentage }) => `${percentage}%`}
                    labelStyle={{ fill: "white", fontSize: "14px", fontWeight: "bold" }}
                  >
                    {fuelUsageData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>

              {/* Fuel Usage Table */}
              <Table striped bordered variant="dark" className="mt-3">
                <thead>
                  <tr>
                    <th style={{ width: "50px" }}>#</th>
                    <th>Fuel Name</th>
                    <th>Ratio %</th>
                    <th>Jumlah (L)</th>
                  </tr>
                </thead>
                <tbody>
                  {fuelUsageData.map((fuel, index) => (
                    <tr key={index}>
                      <td>
                        <div style={{ width: "15px", height: "15px", backgroundColor: fuel.color, borderRadius: "50%" }}></div>
                      </td>
                      <td>{fuel.name}</td>
                      <td>{fuel.percentage}%</td>
                      <td>{fuel.value} L</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
              
    </Container>
  );
};

export default Dashboard;
