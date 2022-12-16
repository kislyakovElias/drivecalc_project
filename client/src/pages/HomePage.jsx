
import React, { useEffect, useState } from "react";

import { Button } from "antd";
import TripSteps from "../components/tripSteps/TripSteps";

const HomePage = (_ref) => {

  const [start, setStart] = useState(false);
  const [distance, setDistance] = useState();


  useEffect(() => {
    console.log(distance);
  }, [distance]);

  const toStart = (e) => {
    setStart(!start);
  };

  return (
    <>
      {start && <TripSteps />}
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
              <div className="home__info_section__post__left">
                Add a new task in ToDo list to make sure you got it,
                before your travel!
              </div>
              <div className="home__info_section__post__right">
                Simply check your gas milage
              </div>
            </div>
            <div className="home__info_section__post">
              <div className="home__info_section__post__left">
                Point A to point B
              </div>
              <div className="home__info_section__post__right">
                Trips are always nice, but it is a good idea to track the
                distance and project your future costs befor the departure.
              </div>
           </div>
         </section>
        </div>
      )}
    </>
  );
};

export default HomePage;
