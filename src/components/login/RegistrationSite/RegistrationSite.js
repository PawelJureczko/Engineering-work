import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./RegistrationSite.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "firebase/auth";

const RegistrationSite = ({
  email,
  setEmail,
  emailError,
  password,
  setPassword,
  passwordError,
  setLoginView,
  handleSignup,
  clearErrors,
  clearInputs,
  repeatedPassword,
  setRepeatedPassword,
  arePasswordSimilar,
  setPasswordError,
  userName,
  userSurname,
  userSubject,
  setUserName,
  setUserSurname,
  setUserSubject,
  setUserRole,
}) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleSignup();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleSignup]); //use enter key as submit for login
  return (
    <Container>
      <h1>Rejestracja</h1>
      <Form>
        <Form.Group controlId="selectUserRole">
          <Form.Label>Wybierz rolę</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => {
              setUserRole(e.target.value);
            }}
          >
            <option value={"student"}>Uczeń</option>
            <option value={"teacher"}>Nauczyciel</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicUserName">
          <Form.Label>Imię</Form.Label>
          <Form.Control
            type="text"
            placeholder="Imie"
            autoFocus
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicUserSurname">
          <Form.Label>Nazwisko</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nazwisko"
            autoFocus
            required
            value={userSurname}
            onChange={(e) => setUserSurname(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicUserSubject">
          <Form.Label>Przedmiot</Form.Label>
          <Form.Control
            type="text"
            placeholder="Przedmiot"
            autoFocus
            required
            value={userSubject}
            onChange={(e) => setUserSubject(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Adres email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Hasło</Form.Label>
          <Form.Control
            type="password"
            placeholder="Hasło"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordRepeat">
          <Form.Label>Powtórz hasło</Form.Label>
          <Form.Control
            type="password"
            placeholder="Powtórz hasło"
            required
            value={repeatedPassword}
            onChange={(e) => {
              setRepeatedPassword(e.target.value);
              clearErrors();
            }}
          />
          <p className="errorMsg">{passwordError}</p>
        </Form.Group>
        <Row>
          <Col>
            <Button
              variant="primary"
              style={{ width: "30vw" }}
              onClick={() => {
                if (arePasswordSimilar()) {
                  handleSignup();
                } else {
                  setPasswordError("Hasła nie są jednakowe");
                  setRepeatedPassword("");
                }
              }}
            >
              Zarejestruj się
            </Button>
          </Col>
          <Col>
            <Button
              className="btn-secondary"
              style={{ width: "15vw" }}
              onClick={() => {
                setLoginView(true);
                clearErrors();
                clearInputs();
                setRepeatedPassword("");
              }}
            >
              Powrót do logowania
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default RegistrationSite;
