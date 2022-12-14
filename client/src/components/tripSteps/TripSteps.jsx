import React, {
  useEffect,
  useState,
} from "react";

import SignIn from "../signIn/SignIn";
import CarChoice from "../carChoice/CarChoice";
import CarChoiceDetails from "../carChoiceDetails/CarChoiceDetails";
import { Steps } from "antd";
import Distance from "../distance/Distance";
import TripDetails from "../tripDetails/TripDetails";


const TripSteps = (props, _ref) => {
  const [name, setName] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [carChoice, setCarChoice] = useState();
  const [distance, setDistance] = useState();
  const [current, setCurrent] = useState(0);

  console.log(carChoice);

  useEffect(() => {
    console.log(distance);
  }, [distance]);

  return (
    <>
      <section className="home">
        {!distance && <div className="home__steps">
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
                description: "Input distance or destination.",
              },
            ]}
          />
        </div>}
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
          )}
          {isSigned && carChoice && distance && (
            <div>
              <TripDetails distance={distance} carChoice={carChoice} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TripSteps;
