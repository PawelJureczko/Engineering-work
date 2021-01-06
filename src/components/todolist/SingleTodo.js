import React, { useState } from "react";
import firebase from "../../firebase";
import "./SingleTodo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

const SingleTodo = (props) => {
  const [doneClass, setDoneClass] = useState("false");

  function handleDelete() {
    firebase
      .firestore()
      .collection("todos")
      .doc(props.id)
      .delete()
      .then(function () {
        console.log(props.id, "got deleted");
      });
  }

  function handleDone() {
    setDoneClass(!doneClass);
  }
  return (
    <ul className="SingleTodo_wrapper">
      {/* do zrobienia - wrzucenie do bazy danych info czy task jest zrobiony czy nie.  */}
      <li className={doneClass ? "SingleTodo" : "SingleTodo SingleTodo_done"}>
        <span className="SingleTodo_name">{props.name}</span>{" "}
        <span className="SingleTodo_task">{props.task}</span>
        <FontAwesomeIcon icon={faCheck} onClick={handleDone} />
        <FontAwesomeIcon
          className="SingleTodo_icon"
          icon={faTrashAlt}
          onClick={handleDelete}
        />
      </li>
    </ul>
  );
};

export default SingleTodo;
