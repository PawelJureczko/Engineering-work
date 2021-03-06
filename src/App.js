import "./App.scss";
import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import "firebase/firestore";
import ToDoList from "./components/todolist/Todolist";
import Topbar from "./components/topbar/Topbar";
import Login from "./components/login/Login";
//import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userRole, setUserRole] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setUserName("");
    setUserSurname("");
    setUserSubject("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            err.message = "Niewłaściwy adres email";
            setEmailError(err.message);

            break;
          case "auth/user-disabled":
            err.message = "Użytkownik zbanowany";
            setEmailError(err.message);

            break;
          case "auth/user-not-found":
            err.message = "Użytkownik nie istnieje";
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            err.message = "Niewłaściwe hasło";
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            err.message = "Użytkownik o podanym emailu istnieje";
            setEmailError(err.message);
            break;
          case "auth/invalid-email":
            err.message = "Niewłaściwy adres email";
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            err.message = "Zbyt słabe hasło";
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      })
      .then((registeredUser) => {
        firebase.firestore().collection("usersCollection").add({
          uid: registeredUser.user.uid,
          userName: userName,
          userSurname: userSurname,
          userSubject: userSubject,
          userRole: userRole,
        });
      })
      .catch((err) => {
        err.message = "uzupełnij formularz";
        setPasswordError(err.message);
      });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  useEffect(() => {
    const authListener = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
      });
    };
    authListener();
  });

  return (
    <>
      <Topbar handleLogout={handleLogout} user={user} />
      {user ? (
        <ToDoList />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          clearErrors={clearErrors}
          clearInputs={clearInputs}
          setPasswordError={setPasswordError}
          userName={userName}
          userSurname={userSurname}
          userSubject={userSubject}
          setUserName={setUserName}
          setUserSurname={setUserSurname}
          setUserSubject={setUserSubject}
          setUserRole={setUserRole}
        />
      )}
    </>
  );
}

export default App;
