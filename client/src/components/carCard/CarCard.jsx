import "./CarCard.scss";


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
      <p className="carCard__label">
        Car:{" "}
        <span className="carCard__carname">
          {props?.mfr_name} {props?.carline}
        </span>
      </p>
      <p className="carCard__label">Year: {props?.model_year}</p>
      <p className="carCard__label">
        Car class: {props?.class ? props.class : "n/a"}
      </p>
      <p className="carCard__label">
        Car type: {props?.car_type ? props.car_type : "n/a"}
      </p>
      <p className="carCard__label">
        Manufacturer mpg: {(+props.mpg_combined_nominal).toFixed(1)} miles per
        gallon.
      </p>
      <p className="carCard__label">
        Average mpg: {(+props.mpg_combined).toFixed(1)} miles per gallon.
      </p>
      <p className="carCard__label">
        Fuel consumption per 100km:{" "}
        {(235.214583 / props.mpg_combined_nominal).toFixed(1)} litre per 100 km
      </p>
      <h4 className="carCard__label">Engine: {props.engine_volume}</h4>
      <h4 className="carCard__label">Cylinders: {props.num_cylinders}</h4>
      <p className="carCard__label">
        CO2 emission benchmark:{" "}
        {props?.co2_rounded ? Math.floor(+props.co2_rounded) : "n/a"}
      </p>
      <p>{props.co2_rounded}</p>
      <p className="carCard__label">
        Oil type : {props?.oil_type ? props.oil_type : "n/a"}
      </p>
      <br />
      <button onClick={carSelect}>Select</button>
    </div>
  );
}

export default CarCard;
