import "./CarInfo.scss"

import React from "react";

function CarInfo(props) {
  return (
    <>
    <section>
      <input type="text" />
      <button> Add a car</button>
    </section>
    <section className="yourCar">
      <div>
      <div>
        <p>Your Car</p>
        <p>{props.carname}</p>
      </div>
      <div>
        <p>Type</p>
        <p>{props.cartype}</p>
      </div>
      <div>
        <div>change</div>
        <div>del</div>
      </div>
      </div>
      <div>
        <div>
          <div>specs</div>
          <div>{props.specs}</div>
        </div>
        <button> Btn </button>
      </div>
      <p className="yourCar__text">{props?.car}</p>
    </section>
    </>
  );
}

export default CarInfo;
