import "./CarCard.scss";
import {Button} from "antd";

function CarCard(props) {
  let carSelect = (e) => {
    let obj = {
      year: props?.model_year,
      make: props?.mfr_name,
      model: props?.carline,
      mpg: (+props.mpg_combined).toFixed(1),
      co2: props.co2_rounded ? props.co2_rounded : "",
    };
    props.setCurrent(2);
    props.setSelectedCar(obj);
  };

  console.log(props);

  return (
    <div className="carCard">
      {/* <h4 className="carCard__header">Your Car:</h4> */}
      <div className="carCard__header">
        Car: {props?.model_year}{" "}
        <span className="carCard__carname">
          {props?.mfr_name} {props?.carline}
        </span>
      </div>
      <div className="carCard__grouplab">
        <div className="carCard__label">
          Class:{" "}
          <span className="carCard__carinfo">
            {props?.class ? props.class.toLowerCase() : "n/a"}
          </span>
        </div>
        <div className="carCard__label">
          Car type:{" "}
          <span className="carCard__carinfo">
            {props?.car_type ? props.car_type : "n/a"}
          </span>
        </div>
      </div>
      <div className="carCard__label">Miles per gallon:</div>
      <div className="carCard__grouplab">
        <div className="carCard__label">
          Manufacturer:{" "}
          <span className="carCard__carinfo">
            {(+props.mpg_combined_nominal).toFixed(1)}
          </span>
          .
        </div>
        <div className="carCard__label">
          Average:{" "}
          <span className="carCard__carinfo">
            {(+props.mpg_combined).toFixed(1)}
          </span>
          .
        </div>
      </div>
      <div className="carCard__label">
        Fuel consumption:{" "}
        <span className="carCard__carinfo">
          {(235.214583 / props.mpg_combined_nominal).toFixed(1)} litre
        </span>{" "}
        per 100 km
      </div>
      <div className="carCard__grouplab">
        <div className="carCard__label">
          Engine capacity:{" "}
          <span className="carCard__carinfo">
            {props?.engine_volume ? props.engine_volume : "n/a"}
          </span>
        </div>
        <div className="carCard__label">
          Cylinders:{" "}
          <span className="carCard__carinfo">
            {props?.num_cylinders ? props.num_cylinders : "n/a"}
          </span>
        </div>
      </div>
      <div className="carCard__label">
        CO2 emission benchmark:{" "}
        <span className="carCard__carinfo">
          {props?.co2_rounded ? Math.floor(+props.co2_rounded) : "n/a"}
        </span>
      </div>
      <div className="carCard__label">
        Oil type :{" "}
        <span className="carCard__carinfo">
          {props?.oil_type ? props.oil_type : "n/a"}
        </span>
      </div>
      <br />
      <Button className="carCard__carbutton" onClick={carSelect}>
        Select
      </Button>
    </div>
  );
}

export default CarCard;
