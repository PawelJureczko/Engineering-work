import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Topbar.scss";
import Logo from "../../assets/icon/logo.png";

const Topbar = () => {
  return (
    <Navbar fixed="top" className="navbar__wrapper navbar-fixed-top">
      <Navbar.Brand
        href=""
        style={{ cursor: "pointer" }}
        className="navbar__image"
      >
        <img
          alt="company logo"
          src={Logo}
          onClick={() => console.log("hi")}
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link href="">Strona główna</Nav.Link>
        <Nav.Link href="">Lista tematów</Nav.Link>
        <Nav.Link href="">Obecność</Nav.Link>
        <Nav.Link href="">Wiadomości</Nav.Link>
      </Nav>
      <Nav className="mr-5">
        <NavDropdown title="Moje konto" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Action</NavDropdown.Item>
          <NavDropdown.Item href="">Another action</NavDropdown.Item>
          <NavDropdown.Item href="">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default Topbar;
