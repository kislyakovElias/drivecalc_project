import axios from "axios";
import React, { useEffect, useState } from "react";

import logoReact from "../assets/images/react-seeklogo.com.svg"

import { Button } from "antd";
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

  useEffect(() => {
    console.log(distance);
  }, [distance]);

  const toStart = (e) => {
    setStart(!start);
  };

  return (
    <>
      {isSigned && carChoice && distance && (
        <div>
          Your trip details:
          <TripDetails distance={distance} carChoice={carChoice} />
        </div>
      )}
      {start && <TripSteps setIsSigned={setIsSigned} />}
      {!start && (
        <div>
          <section className="home__top">
            <br />
            <h1 className="home__top__header">
              Easy projecting your travel expenses
            </h1>
            <br />
            <div className="home__top__line2">
              The simpliest way to calculate how much you'd spend on the trip
            </div>
            <div className="home__top__b-con">
              <Button className="home__top__button" onClick={toStart}>
                Start now
              </Button>
            </div>
          </section>
          <section className="home__middle">
            {/* previous trips links */}
            <div className="home__middle__header">Previous trips</div>
            <div className="home__middle__trips">+Trip</div>
          </section>
          <section className="home__info_section">
            <div className="home__info_section__post">
              <div className="home__info_section__post__left">-- Ilya --</div>
              <div className="home__info_section__post__right">
                Frontend: React,
                <div className="logo1"></div> JavaScript, CSS with SASS,
                AntDesign
              </div>
            </div>
            <div className="home__info_section__post">
              <div className="home__info_section__post__left">
                BackEnd: NodeJS, ExpressJs
              </div>
              <div className="home__info_section__post__right">Tech Stack</div>
            </div>

            {/* Do it !!!! */}

            <div className="home__info_section__post">
              <div className="home__info_section__post__left">
                <img src="../assets/images/frank-luca-vA9OaBKQn3Q-unsplash.jpg" alt="" />
              </div>
              <div className="home__info_section__post__right">
                Give a name to your trip, and save info to json file. check gas
                price?
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default HomePage;
