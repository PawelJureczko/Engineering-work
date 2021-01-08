import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./Login.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  function handleSubmit(e) {
    console.log(email);
    e.preventDefault();
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }

  const [email, setEmail] = useState("");
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Row>
          <Col>
            <Button
              variant="primary"
              type="submit"
              onSubmit={handleSubmit}
              value={email}
            >
              Submit
            </Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={() => console.log("register")}>
              Register
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
