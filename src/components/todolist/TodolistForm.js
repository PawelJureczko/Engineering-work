import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import SingleTodo from "./SingleTodo";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TodolistForm.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const TodolistForm = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name && todo) {
      firebase
        .firestore()
        .collection("todos")
        .add({
          name: name,
          todo: todo,
          isDone: false,
        })
        .then(() => {
          setTodo("");
          setName("");
        });
    }
  }

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("todos")
      .onSnapshot((snapshot) => {
        const newTodos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodos(newTodos);
      });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>
                  Wpisz zadanie:
                  <Form.Control
                    as="textarea"
                    rows={2}
                    cols={80}
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                  />
                </Form.Label>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group>
              <Col>
                <Form.Label>
                  Imię:
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Label>
              </Col>
            </Form.Group>
            {/* </Row>
          <Row style={{ paddingLeft: "14px" }}> */}
            <Button
              as="input"
              type="submit"
              value="submit"
              style={{
                border: "none",
                marginTop: "25px",
                marginBottom: "30px",
              }}
            />
          </Row>
        </Container>
      </Form>
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          task={todo.todo}
          isDone={todo.isDone}
        />
      ))}
    </>
  );
};

export default TodolistForm;
