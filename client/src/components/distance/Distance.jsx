import "./Distance.scss";

import React, {useState} from "react";
import { Checkbox, Input, Button } from "antd";


function Distance(props) {
  const [val, setVal] = useState();
  
  const handleChange = (value) => {
    setVal(value);
    console.log(value,"d");
  };
  
  const onSubmit = () => {
    props.setDistance(val)
    console.log(val, 'submitted');
  };

  return (
    <>
      <section>
        <label htmlFor="distance"></label>
        <Input placeholder="input distance in kilometers" onChange={(e)=>setVal(e.target.value)} name="distance" type="text" />
        <Button onClick={onSubmit}> Check the distance</Button>
        <Checkbox >roundtrip?</Checkbox>
      </section>
    </>
  );
}

export default Distance;