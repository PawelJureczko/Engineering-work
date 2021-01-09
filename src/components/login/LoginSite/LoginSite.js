import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./LoginSite.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "firebase/auth";

const LoginSite = ({
  email,
  setEmail,
  emailError,
  password,
  setPassword,
  passwordError,
  handleLogin,
  setLoginView,
  clearErrors,
  clearInputs,
}) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleLogin();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleLogin]); //use enter key as submit for login
  return (
    <Container>
      <h1>Logowanie</h1>
      <Form>
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
          <p className="errorMsg">{passwordError}</p>
        </Form.Group>
        <Row>
          <Col>
            <Button
              variant="primary"
              style={{ width: "30vw" }}
              onClick={handleLogin}
            >
              Zaloguj
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              style={{ width: "30vw" }}
              onClick={() => {
                setLoginView(false);
                clearErrors();
                clearInputs();
              }}
            >
              Zarejestruj się
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default LoginSite;
