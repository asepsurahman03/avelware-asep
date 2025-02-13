import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import { FaCalendarAlt, FaFileExport, FaHistory } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const FuelTransaction = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const transactions = [
    { id: 1, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "B 1236 K", code: "20130", fuel: "pertalite", usage: 5, left: 150 },
    { id: 2, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "B 1234 K", code: "20130", fuel: "pertalite", usage: 5, left: 150 },
    { id: 3, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "B 1236 C", code: "20130", fuel: "pertamax", usage: 7, left: 150 },
    { id: 4, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "AA 1001 SC", code: "20130", fuel: "pertamax", usage: 5, left: 150 },
    { id: 5, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "F 5689 K", code: "20130", fuel: "pertamax turbo", usage: 6, left: 150 },
    { id: 6, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "F 1111 K", code: "20130", fuel: "solar", usage: 5, left: 150 },
    { id: 7, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "B 1235 X", code: "20130", fuel: "solar", usage: 5, left: 150 },
    { id: 8, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "B 1665", code: "20130", fuel: "solar", usage: 5, left: 150 },
    { id: 9, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "B 3993 S", code: "20130", fuel: "pertalite", usage: 2, left: 150 },
    { id: 10, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "B 3993 S", code: "20130", fuel: "pertalite", usage: 0, left: 150 },
    { id: 11, date: "2023-10-18 15:13:17", station: "Station 2", name: "andrew", license: "B 3993 S", code: "20130", fuel: "pertalite", usage: 0, left: 150 },
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
        overflow: "auto",
      }}
    >
      <Sidebar />

      <div className="flex-grow-4 p-3" style={{ marginLeft: "250px" }}>
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-white d-flex align-items-center">
            <FaHistory className="me-2" /> Fuel Transaction History
          </h3>

          <div className="d-flex align-items-center">
            {/* Date Picker */}
            <div className="d-flex align-items-center bg-secondary rounded px-2 me-2">
              <FaCalendarAlt className="text-white me-2" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="bg-transparent text-white border-0"
              />
              <span className="mx-2 text-white">-</span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                className="bg-transparent text-white border-0"
              />
            </div>

            {/* Export Button */}
            <Button variant="primary" className="d-flex align-items-center">
              <FaFileExport className="me-2" /> Export
            </Button>
          </div>
        </header>

        {/* Table Section */}
        <Card className="p-3 bg-transparent border border-light text-white">
          <Table striped bordered hover variant="dark" className="text-center">
            <thead className="bg-dark text-white">
              <tr>
                <th style={{ width: "50px" }}>ID</th>
                <th>Time/Date</th>
                <th>Station</th>
                <th>Name</th>
                <th>License</th>
                <th>Code</th>
                <th>Fuel</th>
                <th>Fuel Usage (L)</th>
                <th>Left Over (L)</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={tx.id}>
                  <td>{tx.id}</td>
                  <td>{tx.date}</td>
                  <td>{tx.station}</td>
                  <td>{tx.name}</td>
                  <td>{tx.license}</td>
                  <td>{tx.code}</td>
                  <td>{tx.fuel}</td>
                  <td>{tx.usage}</td>
                  <td>{tx.left}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-3">
            <Button variant="secondary" size="sm" className="me-2">
              1
            </Button>
            <Button variant="secondary" size="sm">Next</Button>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default FuelTransaction;
