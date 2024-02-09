import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './nav.css';

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary  fixed-top">
      <Container fluid>
        <div className="nav_logo">
          <Navbar.Brand href="/">
            <img src="/images/logo.svg" />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="nav_inside_content me-auto my-2 my-lg-0 justify-content-center gap-3 flex-grow-1 pr-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className=" text-danger ">Home</Nav.Link>
            <Nav.Link href="/acquirepage/coursepage/course">
              All Courses
            </Nav.Link>
            <Nav.Link href="/acquirepage/liveclass/classlv">
              Live Classes
            </Nav.Link>
            <Nav.Link href="/acquirepage/whypage/why">Why Us?</Nav.Link>
          </Nav>
        
          <Form className="d-flex  gap-5">
           
            <div className="nav_btn d-flex justify-content-center gap-3">
            <Nav.Link
              href="/acquirepage/contactpage/contact"
              className="btn btn_contact"
              type="submit"
            >
              Contact Us
            </Nav.Link>
              <Nav.Link href="/" className="btn btn_first" type="submit">
                Login
              </Nav.Link>

              <Nav.Link
                href="/"
                className="btn btn-outline-danger btn_second text-danger "
                type="submit"
              >
                Sign up
              </Nav.Link>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
