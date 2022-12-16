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
      const fetchData = async () => {
        const { data } = await axios.get(`${BACK_END}/api/data`);
        setDataset(data);
      };

      fetchData();
    }, []);
    console.log(selectedYear);
    // console.log(selectedCar);

  return (
    <div className="carChoice">
      <h3 className="carChoice__header">Find your car below:</h3>
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
          el.model_year === selectedYear &&
          el.mfr_name === selectedMake &&
          el.carline === selectedModel
            ? selectedModel
            : ""
        )
        .map((el, index) => (
          <li className="App__listItem" key={index}>
            {/* MPG_calculated: {el.mpg_calculated} <br /> */}
            {
              <CarCard
                model_year={el.model_year}
                mfr_name={el.mfr_name}
                carline={el.carline}
                class={el.class}
                car_type={el.car_type}
                num_cylinders={el.num_cylinders}
                engine_volume={el.engine_volume}
                mpg_combined_nominal={el.mpg_combined_nominal}
                mpg_combined={el.mpg_combined}
                co2_rounded={el.co2_rounded}
                oil_type={el.oil_type}
                setSelectedCar={props.setCarChoice}
                setCurrent={props.setCurrent}
              />
            }
          </li>
        ))}
    </div>
  );
}

export default CarChoice;
