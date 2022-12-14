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
      props.setDistance(val)
     }

    console.log(val, 'submitted');
  };

  return (
    <>
      <section>
        <label htmlFor="distance"></label>
        <Input
          placeholder="input distance in kilometers"
          onChange={(e) => setVal(e.target.value)}
          name="distance"
          type="text"
        />
        <Button onClick={onSubmit}> Add distance</Button>
        <Checkbox checked={checked} onChange={double}>
          roundtrip?
        </Checkbox>
      </section>
    </>
  );
}

export default Distance;
