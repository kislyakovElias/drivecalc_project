import "./CarCard.scss";
import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

function CarCard(props) {
  let carSelect = (e) => {
    let obj = {
      year: props?.model_year,
      make: props?.mfr_name,
      model: props?.carline,
      mpg: Math.floor(+props.city_mpg + +props.hwy_mpg) / 2,
      litre_100km: +(
        235.214583 /
        (Math.floor(+props.city_mpg + +props.hwy_mpg) / 2)
      ).toFixed(1),
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
          {props?.mfr_name} {props?.carline}
        </span>
      </p>
      <p className="carCard__label">Year: {props?.model_year}</p>
      <p className="carCard__label">
        Car class: {props?.class ? props.class : "n/a"}
      </p>
      <p className="carCard__label">
        Car type: {props?.car_type ? props.car_type : "n/a"}
      </p>
      <p className="carCard__label">
        Fuel consumption:{props.mpg_combined}
        miles per gallon.
      </p>
      <span>mpg comb nominal: {props.mpg_combined_nominal}</span>
      <p className="carCard__label">
        Fuel consumption per 100km:{" "}
        {(235.214583 / props.mpg_combined_nominal).toFixed(1)} litre per 100 km
      </p>
      <p className="carCard__label">
        CO2 emission benchmark:{" "}
        {Math.floor(+props.co2_rounded)}
      </p>
      <p>{props.co2_rounded}</p>
      <p className="carCard__label">Oil type : {props.oil_type}</p>
      <br />
      <button onClick={carSelect}>Select</button>
      {/* Drive Desc -> car_desc */}
      {/* EPA FE Label Dataset ID changed to car_id */}
      {/* {dataset.map((el, index) => (
        <li key={index}>
          {el.mfr_name} - {el.carline} <br />
          <br />
          {"Mpg"} - {el.city_mpg} + {el.hwy_mpg} / 2 ={" "}
          {Math.floor(+el.city_mpg + +el.hwy_mpg) / 2} <br />
          <br />
          {"Co2"} - {el.city_co2_rounded} + {el.hwy_co2_rounded} -{" "}
          {Math.floor(+el.city_co2_rounded + +el.hwy_co2_rounded) / 2}
          <br />
          {el.mpg_calculated}
          {el.comb_co2} ' '{el.oil_type}
          <br />
        </li>
      ))} */}
    </div>
  );
}

export default CarCard;
