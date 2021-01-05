import React from "react";
import firebase from "../../firebase";

const SingleTodo = (props) => {
  function handleClick() {
    firebase
      .firestore()
      .collection("todos")
      .doc(props.id)
      .delete()
      .then(function () {
        console.log(props.id, "got deleted");
      });
  }
  return (
    <ul>
      <li onClick={handleClick}>
        {props.name}, {props.task}
      </li>
    </ul>
  );
};

export default SingleTodo;
