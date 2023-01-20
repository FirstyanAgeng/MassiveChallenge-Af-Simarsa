/* eslint-disable jsx-a11y/alt-text */
import deskfas from "../assets/images/fasilitas.png";
import Arrow from "../assets/images/arrow.png";
import Layout from "../components/Layout";
import { Card, Container, Row, Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Karir = () => {
  return (
    <Layout>
      <div className="Karir">
        <Card className="bg-light text-dark">
          <Card.Img src={deskfas} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Karir </h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <Container>
          <div className="p-5 Karir-content">
            <h1 className="text-center pb-5">Job yang tersedia</h1>
            <Row>
              <Col xs="3">
                <div
                  style={{
                    backgroundColor: "#D9D9D9",
                  }}
                  className="container py-5 list-karir"
                >
                  <div className="text-center">
                    <p>Filter Pekerjaan</p>
                    <p>Kategori</p>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="w-90"
                      >
                        Pilih Kategori
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Pramusaji
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Dokter</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Perawat</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p className="mt-3">Jenjang pendidikan</p>
                  <ul>
                    <li style={{ listStyle: "square" }}>SMK/SMA</li>
                    <li style={{ listStyle: "square" }}>D1</li>
                    <li style={{ listStyle: "square" }}>D3</li>
                    <li style={{ listStyle: "square" }}>S1</li>
                    <li style={{ listStyle: "square" }}>S2</li>
                    <li style={{ listStyle: "square" }}>Profesi</li>
                  </ul>
                </div>
              </Col>
              <Col xs="9">
                {" "}
                <Row className="container mb-5 kartu-Karir py-3 text-center">
                  <Col xs="4">Dokter Umum</Col>
                  <Col xs="4">S3 Kedokteran</Col>
                  <Col xs="4">Purwokerto</Col>
                  <p className="pt-5 px-5" style={{ textAlign: "justify" }}>
                    Rumah Sakit Bunda Purwokerto membutuhkan Dokter Umum dengan
                    kriteria: <br />- Pria/wanita <br /> - Pendidikan profesi
                    Dokter Umum
                  </p>

                  <Link to="/" className="text-center pt-5">
                    Selengkapnya
                    <img
                      src={Arrow}
                      alt=""
                      style={{ width: "10px", height: "10px" }}
                    />
                  </Link>
                </Row>
                <Row className="container mb-5 kartu-Karir py-3 text-center">
                  <Col xs="4">Perawat</Col>
                  <Col xs="4">S1/D3 Perawat</Col>
                  <Col xs="4">Purwokerto</Col>
                  <p className="pt-5 px-5" style={{ textAlign: "justify" }}>
                    Rumah Sakit Bunda Purwokerto membutuhkan Perawat dengan
                    kriteria: <br />
                    - Pria/wanita <br /> - Usia maksimal 30 tahun
                  </p>

                  <Link to="/" className="text-center pt-5">
                    Selengkapnya
                    <img
                      src={Arrow}
                      alt=""
                      style={{ width: "10px", height: "10px" }}
                    />
                  </Link>
                </Row>
                <Row className="container mb-5 kartu-Karir py-3 text-center">
                  <Col xs="4">Pramusaji</Col>
                  <Col xs="4">SMK Tata Boga</Col>
                  <Col xs="4">Purwokerto</Col>
                  <p className="pt-5 px-5" style={{ textAlign: "justify" }}>
                    Rumah Sakit Bunda Purwokerto membutuhkan Pramusaji dengan
                    kriteria: <br />
                    - Pria/wanita <br /> - Usia maksimal 30 tahun
                  </p>

                  <Link to="/" className="text-center pt-5">
                    Selengkapnya
                    <img
                      src={Arrow}
                      alt=""
                      style={{ width: "10px", height: "10px" }}
                    />
                  </Link>
                </Row>
                <Row className="container mb-5 kartu-Karir py-3 text-center">
                  <Col xs="4">Dokter Umum</Col>
                  <Col xs="4">S3 Kedokteran</Col>
                  <Col xs="4">Purwokerto</Col>
                  <p className="pt-5 px-5" style={{ textAlign: "justify" }}>
                    Rumah Sakit Bunda Purwokerto membutuhkan Dokter Spesialis
                    Paru dengan kriteria: <br />- Pria/wanita <br />- Pendidikan
                    profesi Dokter Spesialis Paru
                  </p>

                  <Link to="/" className="text-center pt-5">
                    Selengkapnya
                    <img
                      src={Arrow}
                      alt=""
                      style={{ width: "10px", height: "10px" }}
                    />
                  </Link>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Karir;
