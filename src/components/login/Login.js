import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./Login.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "firebase/auth";

const Login = (props) => {
  const [loginView, setLoginView] = useState(true);
  const [repeatedEmail, setRepeatedEmail] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    clearErrors,
    clearInputs,
  } = props;

  return (
    <>
      {loginView ? (
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
      ) : (
        <Container>
          <h1>Rejestracja</h1>
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
            <Form.Group controlId="formBasicEmailRepeat">
              <Form.Label>Powtórz adres email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Powtórz email"
                autoFocus
                required
                value={repeatedEmail}
                onChange={(e) => setRepeatedEmail(e.target.value)}
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
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Powtórz hasło</Form.Label>
              <Form.Control
                type="password"
                placeholder="Powtórz hasło"
                required
                value={repeatedPassword}
                onChange={(e) => setRepeatedPassword(e.target.value)}
              />
              <p className="errorMsg">{passwordError}</p>
            </Form.Group>
            <Row>
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
              <Col>
                <Button
                  className="btn-secondary"
                  style={{ width: "15vw" }}
                  onClick={() => {
                    setLoginView(true);
                    clearErrors();
                    clearInputs();
                  }}
                >
                  Powrót do logowania
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </>
  );
};

export default Login;
