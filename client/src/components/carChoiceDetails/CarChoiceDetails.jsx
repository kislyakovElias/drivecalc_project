import "./CarChoiceDetails.scss";


function CarChoiceDetails(props) {
  return (
    <div className="carDetails">
      <h4 className="carDetails__header">Your Car:</h4>
      <div className="carDetails__label">
        Car:{" "}
        <span className="carDetails__carname">
          {props?.year}{" "}
          {props?.make} {props?.model.toLowerCase()}
        </span>
      </div>
      <div className="carDetails__label">
        Average mpg:{" "}
        <span className="carCard__carinfo">{(+props.mpg).toFixed(1)}</span>{" "}
        miles per gallon.
      </div>
      <div className="carDetails__label">
        Fuel consumption:{" "}
        <span className="carCard__carinfo">
          {(235.214583 / props.mpg).toFixed(1)}
        </span>{" "}
        litre per 100 km
      </div>
    </div>
  );
}

export default CarChoiceDetails;
