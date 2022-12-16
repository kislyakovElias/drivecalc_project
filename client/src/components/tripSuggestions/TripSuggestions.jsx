import "./TripSuggestions.scss";


function TripSuggestions(props) {
let range = ((props.tank / (235.214583 / props.mpg)) * 100).toFixed(1);


  return (
    <div className="suggDetails">
      <h4 className="suggDetails__header">Trip suggestions:</h4>
      {props.mpg <= 18 && (
        <div className="suggDetails__label">
          Your car is considered heavy on gas, please be mindful, and look for gas stations along your trip.
        </div>
      )}

      {props.tunk <= 10 && (
        <div className="suggDetails__label">
          Your tank have only {props.tunk} litres, please fill-up asap.
        </div>
      )}
      <div className="suggDetails__label">
        Your maximum range is{" "}
        <span className="suggDetails__sugginfo">{range}</span> kilometres,
        according to the fuel and car specs provided.
      </div>
    </div>
  );
}

export default TripSuggestions;
