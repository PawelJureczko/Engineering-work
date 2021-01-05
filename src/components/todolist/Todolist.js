import React from "react";
import "./Todolist.scss";
import TodolistForm from "./TodolistForm";

const ToDoList = () => {
  return (
    <div className="tdl_wrapper">
      <h1 className="tdl_title">Lista zadań do zrobienia:</h1>
      <TodolistForm />
    </div>
  );
};

export default ToDoList;
