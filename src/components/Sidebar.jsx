import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaFileAlt, FaHistory, FaUsersCog, FaUser, FaChevronRight, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { ListGroup, Offcanvas, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [reportOpen, setReportOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "Report", path: "/report", icon: <FaFileAlt />, dropdown: true, subItems: [
        { name: "Fuel Transaction History", path: "/report/fuel-transaction" },
        { name: "Machine Usage", path: "/report/machine-usage" },
        { name: "Man Power Usage", path: "/report/manpower-usage" }
      ]},
    { name: "History", path: "/history", icon: <FaHistory /> },
    { name: "Management", path: "/management", icon: <FaUsersCog /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> }
  ];

  return (
    <>
      {/* Button for mobile sidebar */}
      <Button 
        variant="dark" 
        className="d-md-none position-fixed top-0 end-0 m-3" 
        onClick={() => setShowSidebar(true)}
        style={{ zIndex: 1050 }}
      >
        <FaBars />
      </Button>

      {/* Sidebar for larger screens */}
      <div
        className="d-none d-md-flex flex-column p-3 bg-dark text-white"
        style={{ width: "250px", minHeight: "100vh", position: "fixed", top: 0, left: 0 }}
      >
        <h3 className="text-center mb-4">AVELWARE</h3>
        <ListGroup variant="flush">
          {menuItems.map((item) => (
            <>
              <ListGroup.Item
                key={item.name}
                action
                onClick={() => item.dropdown ? setReportOpen(!reportOpen) : navigate(item.path)}
                className={`d-flex justify-content-between align-items-center text-white ${location.pathname === item.path ? "active bg-primary" : "bg-transparent"}`}
                style={{
                  border: "none",
                  fontSize: "16px",
                  padding: "12px",
                  transition: "background 0.3s ease-in-out",
                  cursor: "pointer"
                }}
              >
                <div className="d-flex align-items-center">
                  <span style={{ fontSize: "18px", marginRight: "10px" }}>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
                {item.dropdown && (reportOpen ? <FaChevronDown /> : <FaChevronRight />)}
              </ListGroup.Item>
              {item.dropdown && reportOpen && (
                <div className="bg-secondary">
                  {item.subItems.map((subItem) => (
                    <ListGroup.Item
                      key={subItem.name}
                      action
                      onClick={() => navigate(subItem.path)}
                      className="text-white bg-transparent ps-5"
                      style={{ border: "none", padding: "10px", background: "none" }}
                    >
                      {subItem.name}
                    </ListGroup.Item>
                  ))}
                </div>
              )}
            </>
          ))}
        </ListGroup>
      </div>

      {/* Mobile Sidebar */}
      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} backdrop="true" className="bg-dark text-white">
        <Offcanvas.Header>
          <Offcanvas.Title>AVELWARE</Offcanvas.Title>
          <Button variant="link" className="text-white" onClick={() => setShowSidebar(false)}>
            <FaTimes size={24} />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            {menuItems.map((item) => (
              <>
                <ListGroup.Item
                  key={item.name}
                  action
                  onClick={() => { setShowSidebar(false); item.dropdown ? setReportOpen(!reportOpen) : navigate(item.path); }}
                  className={`d-flex justify-content-between align-items-center text-white ${location.pathname === item.path ? "active bg-primary" : "bg-transparent"}`}
                  style={{
                    border: "none",
                    fontSize: "16px",
                    padding: "12px",
                    transition: "background 0.3s ease-in-out",
                    cursor: "pointer"
                  }}
                >
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: "18px", marginRight: "10px" }}>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  {item.dropdown && (reportOpen ? <FaChevronDown /> : <FaChevronRight />)}
                </ListGroup.Item>
                {item.dropdown && reportOpen && (
                  <div className="bg-secondary">
                    {item.subItems.map((subItem) => (
                      <ListGroup.Item
                        key={subItem.name}
                        action
                        onClick={() => { setShowSidebar(false); navigate(subItem.path); }}
                        className="text-white bg-transparent ps-5"
                        style={{ border: "none", padding: "10px", background: "none" }}
                      >
                        {subItem.name}
                      </ListGroup.Item>
                    ))}
                  </div>
                )}
              </>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
