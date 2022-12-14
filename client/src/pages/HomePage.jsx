import axios from "axios";
import React, {
  useEffect,
  useState,

} from "react";

import {Button} from "antd";
import { Routes, Route, useLocation } from "react-router-dom";
import SignIn from "../components/signIn/SignIn"
import CarChoice from "../components/carChoice/CarChoice";
import CarChoiceDetails from "../components/carChoiceDetails/CarChoiceDetails";
import { Steps } from "antd";
import Distance from "../components/distance/Distance";
import TripDetails from "../components/tripDetails/TripDetails";
import TripSteps from "../components/tripSteps/TripSteps";


const HomePage = (props, _ref) => {
  const [name, setName] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [start, setStart] = useState(false);
  const [carChoice, setCarChoice] = useState();
  const [distance, setDistance] = useState();
  const [current, setCurrent] = useState(0);

  console.log(carChoice);

  useEffect(()=>{
console.log(distance);
  },[distance])

    const toStart = (e) => {
      setStart(!start);
    };

  return (
    <>
      {/* <section className="home">
        <div className="home__steps">
          <Steps
            progressDot
            current={current}
            items={[
              {
                title: "Name",
                description: "Provide your name.",
              },
              {
                title: "Car",
                description: "Choose your car.",
              },
              {
                title: "Destination",
                description: "This is a description.",
              },
            ]}
          />
        </div>
        <div className="home_right">
          {!isSigned && (
            <SignIn
              name={name}
              setName={setName}
              setIsSigned={setIsSigned}
              setCurrent={setCurrent}
            />
          )}
          {isSigned && !carChoice && (
            <div>
              <div> Hi, {name}!</div>
              <div>
                To project your trip costs
                <br />
                You always have a choice to
                <CarChoice
                  setCarChoice={setCarChoice}
                  setCurrent={setCurrent}
                />{" "}
                or
                <button>Provide details</button> if you know it.
              </div>
            </div>
          )}
          {isSigned && carChoice && (
            <div>
              <CarChoiceDetails
                year={carChoice.year}
                make={carChoice.make}
                model={carChoice.model}
                mpg={carChoice.mpg}
                litre_100km={carChoice.litre_100km}
              />
            </div>
          )}
          {isSigned && carChoice && !distance && (
            <div>
              And add the trip <Distance setDistance={setDistance} /> or provide
              poins A and B
            </div>
          )}*/}
      {isSigned && carChoice && distance && (
        <div>
          Your trip details:
          <TripDetails distance={distance} carChoice={carChoice} />
        </div>
      )}
      { start && <TripSteps setIsSigned={setIsSigned} />}
      {!start && <div>
        <br />
        <div>
          <div>T o star click start and do whaeva u want</div>
          <br />
          after calc options and map display - show Add checklist button
        </div> <Button onClick={toStart} >Start</Button>
        <div>checkilst todo to display at tripInfo page</div>
        <div> Give a name to your trip, and save info to json file.</div>
        check gas price?
      </div>}
      
    </>
  );
};

export default HomePage;
