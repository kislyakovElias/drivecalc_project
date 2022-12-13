import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = (props, _ref) => {
  const nav = useNavigate();
  // const [name, setName] = useState("");
  // const [isSigned, setisSigned] = useState(false);

  const handleSubmit = (e) => {
    props.setIsSigned(true);
  };

  const handleChange = (e) => {
    props.setName(e.target.value);
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <div>Sighn in with a name:</div>
        <input type="text" name="name" onChange={handleChange} value={props.name} />
        <button
          type="sumit"
          // onClick={handleSubmit}
        >
          Start
        </button>
      </form>
    </>
  );
};

export default SignIn;
