import "./Distance.scss";

import React, {useState, useEffect} from "react";
import { Checkbox, Input, Button, Switch } from "antd";
import Mapp from "../mapCard/Mapp";
import TripDetails from "../tripDetails/TripDetails";
import ToDoComponent from "../toDoComponent/ToDoComponent"


function Distance(props) {
  const [val, setVal] = useState();
  const [checked, setChecked] = useState(false);
  const [inputType, setInputType] = useState(false);
  const [gas_price, setGas_price] = useState(1.5);
  const [addList, setAddList] = useState(false);
  let range = ((props.tank / (235.214583 / props.mpg)) * 100000).toFixed(1);
  let distance = props?.leg?.distance.value / 1000;

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    setInputType(!inputType);
  };
  const addOne = (checked) => {
    console.log(`switch to ${checked}`);
    setAddList(!addList);
  };

  const double = (e) => {
    setChecked(e.target.checked);
  };

  const onSubmit = () => {
    if (checked) {
      props.setDistance(val * 2);
      setInputType(!inputType);
    } else {
      setInputType(!inputType);
      props.setDistance(val * 1);
    }

    //Do something that hide all the unnecessary stuff

    console.log(val, "submitted");
  };

  return (
    <>
      <section className="distance">
        +Add manually <Switch defaultChecked onChange={onChange} /> -Provide
        points on the map <br />
        No List Needed  <Switch onChange={addOne} />
        +Add ToDo List
        <br />
        <br />
        {inputType && (
          <>
            <div>
              <label className="distance__label" htmlFor="distance">
                Provide the distance manually{" "}
              </label>
              <Input
                className="distance__input"
                placeholder="input distance in kilometers"
                onChange={(e) => setVal(e.target.value)}
                name="distance"
                type="number"
              />
              <label className="distance__label" htmlFor="">
                <br />
                Add how many litres you currently have in gas tank
              </label>
              <Input
                className="details__trip__tank"
                type="number"
                value={props?.tank}
                onChange={(e) => props?.setTank(e.target.value)}
              />
              <br />
              <Button className="distance__button" onClick={onSubmit}>
                {" "}
                Add distance
              </Button>
              <Checkbox
                className="distance__checkbox"
                checked={checked}
                onChange={double}
              >
                roundtrip?
              </Checkbox>
            </div>
            <div>
              {props.distance && (
                <TripDetails
                  name={props.name}
                  distance={props.distance}
                  carChoice={props.carChoice}
                  tank={props.tank}
                  setTank={props.setTank}
                  gas_price={gas_price}
                  setGas_price={setGas_price}
                />
              )}
            </div>
          </>
        )}
        {addList && <ToDoComponent/>}
        {/* <ToDoComponent/> */}
        {!inputType && (
          <div>
            {/* {!props.tank && <><label className="distance__label" htmlFor="">
              <br />
              Add how many litres you currently have in gas tank
            </label>
            <Input
              className="details__trip__tank"
              type="number"
              value={props?.tank}
              onChange={(e) => props?.setTank(e.target.value)}
            />
            <br />
            </>}  */}
            {/* <div>
              <TripDetails
              distance={props.distance}
                name={props.name}
                carChoice={props.carChoice}
                tank={props.tank}
                setTank={props.setTank}
                gas_price={gas_price}
                setGas_price={Gas_price}
              />
            </div> */}
            <Mapp
              className="distance__map"
              range={range}
              setDistance={props.setDistance}
              distance={props.distance}
              name={props.name}
              carChoice={props.carChoice}
              tank={props.tank}
              setTank={props.setTank}
              gas_price={gas_price}
              setGas_price={setGas_price}
            />
          </div>
        )}
      </section>
    </>
  );
}

export default Distance;
