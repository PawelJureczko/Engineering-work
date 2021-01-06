import React, { useState } from "react";
import firebase from "../../firebase";
import "./SingleTodo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

const SingleTodo = ({ isDone, id, name, task }) => {
  const [isChecked, setIsChecked] = useState(isDone);

  function handleDelete() {
    firebase
      .firestore()
      .collection("todos")
      .doc(id)
      .delete()
      .then(function () {
        console.log(id, "got deleted");
      });
  }

  function handleDone() {
    firebase
      .firestore()
      .collection("todos")
      .doc(id)
      .update({ isDone: !isChecked });
    setIsChecked(!isChecked);
  }
  return (
    <ul className="SingleTodo__wrapper">
      {/* do zrobienia - wrzucenie do bazy danych info czy task jest zrobiony czy nie.  */}
      <li className={isChecked ? "SingleTodo SingleTodo__done" : "SingleTodo "}>
        <span className="SingleTodo__name">{name}</span>{" "}
        <span className="SingleTodo__task">{task}</span>
        <FontAwesomeIcon
          className="SingleTodo__icon"
          icon={faCheck}
          onClick={handleDone}
        />
        <FontAwesomeIcon
          className="SingleTodo__icon"
          icon={faTrashAlt}
          onClick={handleDelete}
        />
      </li>
    </ul>
  );
};

export default SingleTodo;
