import "./CarList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "../carCard/CarCard";
import SelectYear from "../selectYear/SelectYear";
import SelectMake from "../selectMake/SelectMake";
import SelectModel from "../selectModel/SelectModel";

import React from "react";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

function CarList() {
    const [dataset, setDataset] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedCar, setSelectedCar] = useState({})

    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios.get(`${BACK_END}/api/data`);
        setDataset(data);
      };

      fetchData();
    }, []);
    console.log(selectedYear);
    console.log(selectedCar);

  return (
    <div className="App">
      <h2>Hello traveler, find specs of your car:</h2>
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
        .filter(
          (el) =>
            el.model_year === selectedYear &&
            // && el.mfr_name === selectedMake? selectedMake: ""
            el.carline === selectedModel
        )
        .map((el, index) => (
          <li className="App__listItem" key={index}>
            {
              <CarCard
                model_year={el.model_year}
                mfr_name={el.mfr_name}
                carline={el.carline}
                class={el.class}
                car_type={el.car_type}
                mpg_combined_nominal={el.mpg_combined_nominal}
                mpg_combined={el.mpg_combined}
                co2_rounded={el.co2_rounded}
                oil_type={el.oil_type}
                setSelectedCar={setSelectedCar}

                engine_volume={el.engine_volume}
                num_cylinders={el.num_cylinders}
              />
            }
          </li>
        ))}
    </div>
  );
}

export default CarList;
