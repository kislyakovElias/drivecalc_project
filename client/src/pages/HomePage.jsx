import axios from "axios";
import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SignIn from "../components/signIn/SignIn"
import CarChoice from "../components/carChoice/CarChoice";

const HomePage = (props, _ref) => {
  const [name, setName] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [carChoice, setCarChoice] = useState({});

  return (
    <>
      {!isSigned && <SignIn name={name} setName={setName} setIsSigned={setIsSigned}/>
      }
      <p>1) Sign in conditioning and display the page if name = true</p>
      {}
      {isSigned && 
      <div>
         <div> Hi, {name}!</div>
      <div>
        To project your trip costs
        <br />
        You always have a choice to 
        <CarChoice/> or
        <button>Provide details</button> if you know it.

      </div>
      </div>}
      {isSigned && carChoice && <div>

      </div> }
      <div>And add the trip distance or provide poins A and B</div>
      <br />
      <div>after calc options and map display - show Add checklist button</div>
      <div>checkilst todo to display at tripInfo page</div>
      <div> Give a name to your trip, and save info to json file.</div>
      check gas price?
    </>
  );
};

export default HomePage;
