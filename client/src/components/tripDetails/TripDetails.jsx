import "./TripDetails.scss";


function TripDetails(props) {

  let litresNeeded = (props.distance / 100) * props.carChoice.litre_100km;

  return (
    <div className="details">
      <h4>Details</h4>
      <div>
        Your car is: {props.carChoice.make} {props.carChoice.model}
        {props.carChoice.year}
      </div>
      <div>
        Fuel efiiciency is: {props.carChoice.mpg} Miles per galon, or{" "}
        {props.carChoice.litre_100km} l/100km.
      </div>
      <div>Your trip distance is: {props.distance}</div>
      <div>You will need: <h5>{litresNeeded}</h5> litres for your trip.</div>
      
    </div>
  );
}

export default TripDetails;
