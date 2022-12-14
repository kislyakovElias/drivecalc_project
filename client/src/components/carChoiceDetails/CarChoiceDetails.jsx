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
      model: props?.carline,
      mpg: (+props.mpg_combined).toFixed(1),
      co2: props.co2_rounded ? props.co2_rounded : "",
    };
    props.setCurrent(2);
    props.setSelectedCar(obj);
  };

  return (
    <div className="carCard">
      {/* <h4 className="carCard__header">Your Car:</h4> */}
      <p className="carCard__label">
        Car:{" "}
        <span className="carCard__carname">
          {props?.year} {props?.make} {props?.model}
        </span>
      </p>
      <p className="carCard__label">
        Average mpg: {(+props.mpg).toFixed(1)} miles per gallon.
      </p>
      <p className="carCard__label">
        Fuel consumption:{" "}
        {(235.214583 / props.mpg).toFixed(1)} litre per 100 km
      </p>
    </div>
  );
}

export default CarChoiceDetails;
