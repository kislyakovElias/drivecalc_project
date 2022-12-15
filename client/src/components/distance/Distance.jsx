import "./Distance.scss";

import React, {useState} from "react";
import { Checkbox, Input, Button } from "antd";


function Distance(props) {
  const [val, setVal] = useState();
   const [checked, setChecked] = useState(false);
   
  
  const double = (e) => {
    setChecked(e.target.checked);
  };
  
  const onSubmit = () => {
    if(checked){
      props.setDistance(val*2)
    }else {
      props.setDistance(val*1)
     }

     //Do something that hide all the unnecessary stuff

    console.log(val, 'submitted');
  };

  return (
    <>
      <section className="distance">
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
          value={props.tank}
          onChange={(e) => props.setTank(e.target.value)}
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
      </section>
    </>
  );
}

export default Distance;
