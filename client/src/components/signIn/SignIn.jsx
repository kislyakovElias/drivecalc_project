
import {  useNavigate } from "react-router-dom";
import {Button, Input} from "antd";

const SignIn = (props, _ref) => {
  const nav = useNavigate();


  const handleSubmit = (e) => {
    props.setCurrent(1);
    props.setIsSigned(true);
  };

  const handleChange = (e) => {
    props.setName(e.target.value);
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <div>Give a name to your trip:</div>
        <Input type="text" name="name" onChange={handleChange} value={props.name} />
        <button
          type="submit"
        >
          Start
        </button>
      </form>
    </>
  );
};

export default SignIn;
