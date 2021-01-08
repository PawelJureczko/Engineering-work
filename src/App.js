import "./App.css";
import React from "react";
import ToDoList from "./components/todolist/Todolist";
import Topbar from "./components/topbar/Topbar";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Topbar />
      <Login />
      {/* <ToDoList /> */}
    </>
  );
}

export default App;
