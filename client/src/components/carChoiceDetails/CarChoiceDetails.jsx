import "./CarChoiceDetails.scss";
import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

function CarChoiceDetails(props) {
  let carSelect = (e) => {
    let obj = {
      year: props?.model_year,
      make: props?.mfr_name,
      model: props?.Carline,
      mpg: Math.floor(+props.city_mpg + +props.hwy_mpg) / 2,
      litre_100km: +(
        235.214583 /
        (Math.floor(+props.city_mpg + +props.hwy_mpg) / 2)
      ).toFixed(1),
    };
    props.setSelectedCar(obj);
  };

  return (
    <div className="carCard">
      {/* <h4 className="carCard__header">Your Car:</h4> */}
      <p className="carCard__label">
        Car:{" "}
        <span className="carCard__carname">
          {props?.make} {props?.model}
        </span>
      </p>
      <p className="carCard__label">Year: {props?.year}</p>
      
      <p className="carCard__label">
        Fuel consumption: {props.mpg}
        miles per gallon.
      </p>
      <p className="carCard__label">
        Fuel consumption per 100km:{" "}
       {props.litre_100km}
        litre per 100 km
      </p>
      
    </div>
  );
}

export default CarChoiceDetails;
