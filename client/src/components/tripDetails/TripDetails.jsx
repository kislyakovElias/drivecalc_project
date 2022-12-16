import "./TripDetails.scss";
import Mapp from "../mapCard/Mapp";
import {Input} from "antd";


function TripDetails(props) {

  let litre_100km = (235.214583 / (props.carChoice? props.carChoice.mpg : 15)).toFixed(1)
  let litresNeeded = (
    (props.distance / 100) *
    (235.214583 / litre_100km)
  ).toFixed(1);
  let total_cost = (litresNeeded * (props.gas_price? props.gas_price: 1.55)).toFixed(1);
  let range = (props.tank/litre_100km) * 100000;

  return (
    <div className="details">
      <h4>Trip {props.name} Details</h4>

      <div className="details__trip">
        <label htmlFor="">Tank: </label>
        <Input
          className="details__trip__tank"
          type="number"
          value={props.tank}
          onChange={(e) => props.setTank(e.target.value)}
        />
        <br />
        <label htmlFor="">Gas price:</label>
        <Input
          className="details__trip__gas"
          type="number"
          value={props.gas_price}
          onChange={(e) => props.setGas_price(e.target.value)}
        />
      </div>
      <div className="details__trip">
        Your car fuel efiiciency is:{" "}
        <span className="carCard__carinfo">
          {" "}
          {litre_100km ? litre_100km : "n/a"} l/100km{" "}
        </span>
        .
      </div>
      <div>
        Your trip distance is:{" "}
        <span className="carCard__carinfo">
          {" "}
          {props.distance ? props.distance : "n/a"}
        </span>{" "}
        kilometers.
      </div>
      <div>
        You will need:{" "}
        <span className="carCard__carinfo">
          {litresNeeded ? litresNeeded : "n/a"}
        </span>{" "}
        litres of fuel for your trip.
      </div>
      <div>
        regular fuel cost today is:{" "}
        <span className="carCard__carinfo">
          {props?.gas_price ? props.gas_price : 1.5}
        </span>{" "}
      </div>
      <hr />
      <div>
        Total trip cost is:{" "}
        <span className="carCard__carinfo">
          {total_cost ? total_cost : "n/a"}
        </span>{" "}
      </div>
      
    </div>
  );
}

export default TripDetails;
