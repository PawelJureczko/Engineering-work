import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import "firebase/auth";
import LoginSite from "./LoginSite/LoginSite";
import RegistrationSite from "./RegistrationSite/RegistrationSite";

const Login = (props) => {
  const [loginView, setLoginView] = useState(true);
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const {
    setPasswordError,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    // hasAccount,
    // setHasAccount,
    emailError,
    passwordError,
    clearErrors,
    clearInputs,
    userName,
    userSurname,
    userSubject,
    setUserName,
    setUserSurname,
    setUserSubject,
    setUserRole,
  } = props;

  function arePasswordSimilar() {
    if (password === repeatedPassword) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      {loginView ? (
        <LoginSite
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          password={password}
          setPassword={setPassword}
          passwordError={passwordError}
          handleLogin={handleLogin}
          setLoginView={setLoginView}
          clearErrors={clearErrors}
          clearInputs={clearInputs}
        />
      ) : (
        <RegistrationSite
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          password={password}
          setPassword={setPassword}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          handleSignup={handleSignup}
          setLoginView={setLoginView}
          clearErrors={clearErrors}
          clearInputs={clearInputs}
          repeatedPassword={repeatedPassword}
          userName={userName}
          userSurname={userSurname}
          userSubject={userSubject}
          setRepeatedPassword={setRepeatedPassword}
          arePasswordSimilar={arePasswordSimilar}
          setUserName={setUserName}
          setUserSurname={setUserSurname}
          setUserSubject={setUserSubject}
          setUserRole={setUserRole}
        />
      )}
    </>
  );
};

export default Login;
