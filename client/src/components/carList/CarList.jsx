import "./CarList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "../carCard/CarCard";

import React from "react";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

function CarList() {
    const [dataset, setDataset] = useState([]);

    useEffect(() => {
      const fetchStudents = async () => {
        const { data } = await axios.get(`${BACK_END}/api/data`);
        setDataset(data);
      };

      fetchStudents();
    }, []);

  return (
    <div className="App">
      <h2>Hello traveler</h2>
      <div>
        <form action="">
          <label htmlFor="">search</label>
          <input type="text" />
          <button>search</button>
        </form>
      </div>
      <br />
      {/* EPA FE Label Dataset ID changed to car_id */}
      {dataset.map((el, index) => (
        
        <li className="App__listItem" key={index}>
            {/* <hr />
          {el.mfr_name} - {el.Carline} <br />
          <br />
          {"Mpg"} - {el.city_mpg} + {el.hwy_mpg} / 2 ={" "}
          {Math.floor(+el.city_mpg + +el.hwy_mpg) / 2} <br />
          <p className="carCard__label">Fuel consumption per 100km: {Math.floor(100*3.785411784/(1.609344*(+el.city_mpg + +el.hwy_mpg) / 2))}</p>
          <br />
          {"Co2"} : {el.city_co2_rounded} + {el.hwy_co2_rounded} ={" "}
          {Math.floor(+el.city_co2_rounded + +el.hwy_co2_rounded) / 2}
          <br />
         MPG_calculated: {el.mpg_calculated} <br />
          CO2: {el.comb_co2} <br />
          Oil type : {el.oil_type}
          <br /> */}
          {<CarCard mfr_name={el.mfr_name} Carline={el.Carline} model_year={el.model_year} car_desc={el.car_desc} city_mpg={el.city_mpg} hwy_mpg={el.hwy_mpg} city_co2_rounded={el.city_co2_rounded} hwy_co2_rounded={el.hwy_co2_rounded} oil_type={el.oil_type}/>}
        </li>
      ))}
    </div>
  );
}

export default CarList;
