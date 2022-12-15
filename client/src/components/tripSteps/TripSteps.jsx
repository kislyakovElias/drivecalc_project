import "./TripSteps.scss";
import React, { useEffect, useState } from "react";

import SignIn from "../signIn/SignIn";
import CarChoice from "../carChoice/CarChoice";
import CarChoiceDetails from "../carChoiceDetails/CarChoiceDetails";
import { Steps, Button } from "antd";
import Distance from "../distance/Distance";
import TripDetails from "../tripDetails/TripDetails";
import TripSuggestions from "../tripSuggestions/TripSuggestions";

const TripSteps = (props, _ref) => {
  const [name, setName] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [carChoice, setCarChoice] = useState();
  const [distance, setDistance] = useState();
  const [current, setCurrent] = useState(0);
  const [tank, setTank] = useState(0);
  const [gas_price, setGas_price] = useState(1.5);

  console.log(carChoice);

  useEffect(() => {
    console.log(distance);
  }, [distance]);

  return (
    <>
      <section className="trip">
        {!distance && (
          <div className="trip__cont">
            <Steps
              className="trip__cont__steps"
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
                  description: "Input distance or destination.",
                },
              ]}
            />
          </div>
        )}
        <div className="trip__right">
          {!isSigned && (
            <SignIn
              name={name}
              setName={setName}
              setIsSigned={setIsSigned}
              setCurrent={setCurrent}
            />
          )}
          {isSigned && !carChoice && (
            <div className="trip__right__car">
              <div className="trip__right__car__choice">
                <div className="trip__right__car__choice__header">
                  {" "}
                  You've strated a trip to {name}!
                </div>
                <div className="trip__right__car__choice__info">
                  To project your trip costs
                  <br />
                  You always have a choice to
                </div>
              </div>
              <div className="trip__right__car__compo">
                <CarChoice
                  setCarChoice={setCarChoice}
                  setCurrent={setCurrent}
                />
                or <Button>Provide details</Button> if you know it.
              </div>
            </div>
          )}
          {isSigned && carChoice && (
            <div className="trip__right__car">
              {isSigned && carChoice && distance && (
                <div className="trip__right__car_details">
                  <TripSuggestions
                    tank={tank}
                    distance={distance}
                    mpg={carChoice.mpg}
                  />
                </div>
              )}
              <div className="trip__right__car_details">
                <CarChoiceDetails
                  year={carChoice.year}
                  make={carChoice.make}
                  model={carChoice.model}
                  mpg={carChoice.mpg}
                  litre_100km={carChoice.litre_100km}
                />
              </div>
            </div>
          )}
          {isSigned && carChoice && !distance && (
            <div>
              And add the trip{" "}
              <Distance
                setTank={setTank}
                tank={tank}
                setDistance={setDistance}
              />{" "}
              or provide poins A and B
            </div>
          )}
          {isSigned && carChoice && distance && (
            <div>
              <TripDetails
                name={name}
                distance={distance}
                carChoice={carChoice}
                tank={tank}
                setTank={setTank}
                gas_price={gas_price}
                setGas_price={setGas_price}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TripSteps;
