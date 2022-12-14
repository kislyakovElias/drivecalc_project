import "./TripDetails.scss";
import Mapp from "../mapCard/Mapp";


function TripDetails(props) {

  let litresNeeded =
    (props.distance / 100) * (235.214583 / props.carChoice.mpg).toFixed(1);

  return (
    <div className="details">
      <h4>Trip Details</h4>
      {/* <div>
        Your car is: {props.carChoice.year} {props.carChoice.make} {props.carChoice.model}
        
      </div> */}
      <div>
        Fuel efiiciency is: {props.carChoice.mpg} Miles per galon, or{" "}
        {props.carChoice.litre_100km} l/100km.
      </div>
      <div>Your trip distance is: {props.distance}</div>
      <div>You will need: <bold>{litresNeeded}</bold> litres of fuel for your trip.</div>
      <div >

      <Mapp/>
      </div>
      
    </div>
  );
}

export default TripDetails;
