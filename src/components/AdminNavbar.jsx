import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { HOME} from "../router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/admin.css"
import "../pages/Beranda";
import { HOME } from "../router";
import { IoLogOutOutline } from "react-icons/io5";

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="navbar-main" variant="dark" expand="lg">
        <Container>
          <NavLink to="/" className="navbar-brand h1Header">
            SIMARS
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Navbar.Text>
                <p className="hsatu"><strong>Tiara</strong> - Petugas Entry</p>
              </Navbar.Text>
            </Nav>

            <IoLogOutOutline onClick={() => navigate(HOME)} style={{color:'white'}} size="27px"/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
