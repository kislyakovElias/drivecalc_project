import axios from "axios";
import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SignIn from "../components/signIn/SignIn"

const HomePage = (props, _ref) => {
  return (
    <>
      <SignIn/>
      <div>Homepage</div>
      <div>Login here</div>
      <br />
    </>
  );
};

export default HomePage;
