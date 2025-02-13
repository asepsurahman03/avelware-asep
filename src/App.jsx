import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Report from "./components/Report";
import Management from "./components/Management";
import Profile from "./components/Profile";
import FuelTransaction from "./components/FuelTransaction"; // Import file baru
import "bootstrap/dist/css/bootstrap.min.css";
<Route path="/report/fueltransaction" element={<FuelTransaction />} />


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
            <Route path="/report/fueltransaction" element={<FuelTransaction />} /> {/* Tambahkan route ini */}
            <Route path="/management" element={<Management />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
