

import {Button, Input} from "antd";
import "./SignIn.scss"

const SignIn = (props, _ref) => {


  const handleSubmit = (e) => {
    props.setCurrent(1);
    props.setIsSigned(true);
  };

  const handleChange = (e) => {
    props.setName(e.target.value);
  };

  return (
    <>
      <form className="submit" action="submit" onSubmit={handleSubmit}>
        <div>Give a name to your trip:</div>
        <Input
          className="submit__input"
          type="text"
          name="name"
          onChange={handleChange}
          value={props.name}
        />
        <button className="submit__button" type="submit">Start</button>
      </form>
    </>
  );
};

export default SignIn;
