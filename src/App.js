import "./App.css";
import React from "react";
import ToDoList from "./components/todolist/Todolist";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <ToDoList />
    </>
  );
}

export default App;
