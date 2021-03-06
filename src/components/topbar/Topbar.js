import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Topbar.scss";
import Logo from "../../assets/icon/logo.png";

const Topbar = (props) => {
  const { handleLogout, user } = props;

  return (
    <Navbar fixed="top" className="navbar__wrapper navbar-fixed-top">
      <Navbar.Brand href="" className="navbar__image">
        <img alt="company logo" src={Logo}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {user ? (
        <Nav className="mr-auto">
          <Nav.Link href="">Strona główna</Nav.Link>
          <Nav.Link href="">Lista tematów</Nav.Link>
          <Nav.Link href="">Lista obecności</Nav.Link>
          <Nav.Link href="">Wiadomości</Nav.Link>
        </Nav>
      ) : (
        <Nav className="mr-auto">
          <Nav.Link href="">Strona główna</Nav.Link>
        </Nav>
      )}
      <Nav className="mr-5">
        {user ? (
          <NavDropdown title={user.email} id="basic-nav-dropdown">
            <NavDropdown.Item href="">Moje konto</NavDropdown.Item>
            <NavDropdown.Item href="">Ustawienia</NavDropdown.Item>
            <NavDropdown.Item href="">Zmiana hasła</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="" onClick={handleLogout}>
              Wyloguj
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Nav.Link href="">Zaloguj</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default Topbar;
