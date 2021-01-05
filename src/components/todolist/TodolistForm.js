import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import SingleTodo from "./SingleTodo";
// import ToDoList from "./todolist";

const TodolistForm = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

  function handleClick(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("todos")
      .where("name", "==", "pawel")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.data());
        });
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name && todo) {
      firebase
        .firestore()
        .collection("todos")
        .add({
          name: name,
          todo: todo,
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
      <form onSubmit={handleSubmit}>
        <label>
          Wpisz zadanie:
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <label>
          Imię:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
      <button onClick={handleClick}>check</button>
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          task={todo.todo}
        />
      ))}
    </>
  );
};

export default TodolistForm;
