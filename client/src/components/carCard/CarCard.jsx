import "./CarCard.scss";
import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

function CarCard(props) {

  return (
    <div className="carCard">
      {/* <h4 className="carCard__header">Your Car:</h4> */}
      <p className="carCard__label">Car: <span className="carCard__carname">{props?.mfr_name} {props?.Carline}</span></p>
      <p className="carCard__label">Year: {props?.model_year}</p>
      <p className="carCard__label">Car type: {props?.car_desc}</p>
      <p className="carCard__label">Fuel consumption: {Math.floor(+props.city_mpg + +props.hwy_mpg) / 2} miles per gallon.</p>
      <p className="carCard__label">Fuel consumption per 100km: {100*3.785411784/1.609344*(Math.floor(+props.city_mpg + +props.hwy_mpg) / 2)}</p>
      <p className="carCard__label">CO2 emission benchmark: {Math.floor(+props.city_co2_rounded + +props.hwy_co2_rounded) / 2}</p>
      <p className="carCard__label">Oil type : {props.oil_type}</p>
      <br />
      {/* Drive Desc -> car_desc */}
      {/* EPA FE Label Dataset ID changed to car_id */}
      {/* {dataset.map((el, index) => (
        <li key={index}>
          {el.mfr_name} - {el.Carline} <br />
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
