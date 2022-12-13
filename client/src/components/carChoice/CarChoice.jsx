import "./CarChoice.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "../carCard/CarCard";
import SelectYear from "../selectYear/SelectYear";
import SelectMake from "../selectMake/SelectMake";
import SelectModel from "../selectModel/SelectModel";

import React from "react";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

function CarChoice(props) {
    const [dataset, setDataset] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    // const [selectedCar, setSelectedCar] = useState({})

    useEffect(() => {
      const fetchStudents = async () => {
        const { data } = await axios.get(`${BACK_END}/api/data`);
        setDataset(data);
      };

      fetchStudents();
    }, []);
    console.log(selectedYear);
    // console.log(selectedCar);

  return (
    <div className="App">
      <h3>Find your car below:</h3>
      <div>
        <SelectYear setSelectedYear={setSelectedYear} />
        <SelectMake
          setSelectedMake={setSelectedMake}
          selectedYear={selectedYear}
          data={dataset}
        />
        <SelectModel
          setSelectedModel={setSelectedModel}
          selectedYear={selectedYear}
          selectedMake={selectedMake}
          data={dataset}
        />
      </div>
      <br />
      {/* EPA FE Label Dataset ID changed to car_id */}
      {dataset
        .filter((el) =>
          el.model_year === selectedYear 
          // && el.mfr_name === selectedMake? selectedMake: ""
           && el.Carline === selectedModel
        )
        .map((el, index) => (
          <li className="App__listItem" key={index}>
         {/* MPG_calculated: {el.mpg_calculated} <br /> */}
            {
              <CarCard
                mfr_name={el.mfr_name}
                Carline={el.Carline}
                model_year={el.model_year}
                car_desc={el.car_desc}
                city_mpg={el.city_mpg}
                hwy_mpg={el.hwy_mpg}
                city_co2_rounded={el.city_co2_rounded}
                hwy_co2_rounded={el.hwy_co2_rounded}
                oil_type={el.oil_type}
                setSelectedCar={props.setCarChoice}
              />
            }
          </li>
        ))}
    </div>
  );
}

export default CarChoice;
