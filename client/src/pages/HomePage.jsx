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
import CarChoiceDetails from "../components/carChoiceDetails/CarChoiceDetails";
import { Steps } from "antd";
import Distance from "../components/distance/Distance";

const description = "setting up.";

const HomePage = (props, _ref) => {
  const [name, setName] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [carChoice, setCarChoice] = useState();
  const [distance, setDistance] = useState();

  console.log(carChoice);

  return (
    <>
      <section className="home">
        <div className="home__steps">
          <Steps
            progressDot
            current={1}
            items={[
              {
                title: "Finished",
                description: "This is a description.",
              },
              {
                title: "In Progress",
                description: "This is a description.",
              },
              {
                title: "Waiting",
                description: "This is a description.",
              },
            ]}
          />
        </div>
        <div className="home_right">
          {!isSigned && (
            <SignIn name={name} setName={setName} setIsSigned={setIsSigned} />
          )}
          {!isSigned && (
            <p>1) Sign in conditioning and display the page if name = true</p>
          )}
          {isSigned && !carChoice && (
            <div>
              <div> Hi, {name}!</div>
              <div>
                To project your trip costs
                <br />
                You always have a choice to
                <CarChoice setCarChoice={setCarChoice} /> or
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
          )}
          <br />
          <div>
            after calc options and map display - show Add checklist button
          </div>
          <div>checkilst todo to display at tripInfo page</div>
          <div> Give a name to your trip, and save info to json file.</div>
          check gas price?
        </div>
      </section>
    </>
  );
};

export default HomePage;
