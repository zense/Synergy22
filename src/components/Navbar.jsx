import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.scss';
import { BsFacebook, BsInstagram } from "react-icons/bs";
const NavigationBar = () => {
    return (
        <>
            <Navbar variant="dark" expand="lg" className="navbar-main" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#" className="nav-item" id="nav-logo">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className="nav-item">Home</Nav.Link>
                            <Nav.Link href="#action2" className="nav-item">Workshops</Nav.Link>
                            <Nav.Link href="#action2" className="nav-item">Competitions</Nav.Link>
                            <Nav.Link href="#action2" className="nav-item">Panel Discussions</Nav.Link>
                            <Nav.Link href="#action2" className="nav-item">Talks</Nav.Link>
                            <Nav.Link href="#action2" className="nav-item">Team</Nav.Link>
                        </Nav>
                        <div className="d-flex">
                            <span className="nav-icons">
                                {/* navigate to google.com */}
                                <a href="https://www.facebook.com/IIITBofficial/" target="_blank" rel="noreferrer">
                                    <BsFacebook style={{ color: "white", fontSize: "1.5em" }} />
                                </a>

                            </span>
                            <span className="nav-icons">
                                <a href="https://www.instagram.com/iiitb_official/" target="_blank" rel="noreferrer">
                                    <BsInstagram style={{ color: "white", fontSize: "1.5em" }} />
                                </a>
                            </span>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
export default NavigationBar;