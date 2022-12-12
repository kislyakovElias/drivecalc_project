import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = (props, _ref) => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [isSigned, setisSigned] = useState(false);

  const handleSubmit = (e) => {
    // setName(e.target.name.value);
    console.log(e.target);
    console.log(name);
    // nav("/home", name={name}, setName={setName})
    <NavLink to="/home" name={name} />;
    nav("/home");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <div>Sighn in with a name:</div>
        <input type="text" name="name" onChange={handleChange} value={name} />
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
