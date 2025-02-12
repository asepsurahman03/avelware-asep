import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  return (
    <Container 
      fluid 
      className="bg-dark text-white d-flex flex-column flex-md-row" 
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
      <div className="flex-grow-1 p-4 d-flex justify-content-center align-items-center" style={{ marginLeft: "250px", marginRight: "auto" }}>
        <Card className="text-white bg-gradient p-4 shadow-lg border-0 rounded w-100 mx-3" style={{ maxWidth: "500px", background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}>
          <Card.Body className="text-center">
            <div className="position-relative mb-3">
              <Image
                src="/images/Asep Surahman Sulaeman.jpg"
                roundedCircle
                width={120}
                height={120}
                className="border border-light shadow-lg img-fluid"
              />
              <div className="position-absolute bottom-0 end-0 bg-success rounded-circle p-2" style={{ width: "20px", height: "20px" }}></div>
            </div>
            <h3 className="fw-bold">Asep Surahman Sulaeman</h3>
            <p className="text-white-50">Website Developer</p>
            <hr className="border-light" />
            <p><strong>Email:</strong> asepsulaeman03@gmail.com</p>
            <p><strong>Alamat:</strong> Kp. Babakan Kondang, RT/002 RW/007, Desa Hegarmanah, Kecamatan Takokak, Kabupaten Cianjur, Jawa Barat, Indonesia.</p>
            <p><strong>Nomor Telepon:</strong> +62 856-5983-8977</p>
            <Button 
              variant="light" 
              className="mt-3 fw-bold shadow-sm w-100"
              href="https://wa.me/6285659838977"
              target="_blank"
            >
              Hubungi Saya
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Profile;
