/* global google */

import "./DistanceMap.scss";
import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import dot from "../../assets/icons/circle-dot-regular.svg";
// import utils from "./mapRender"

let apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

var myLatLng = { lat: 38.346, lng: -0.4907 };   
var mapOptions = {
  center: myLatLng,
  zoom: 7,
  mapTypeId: window.google.maps.MapTypeId.ROADMAP,
};

// //create map
// const map = new google.maps.Map(document.querySelector(".mapCalc__container__map"),mapOptions);

// // //create a DirectionsService object to use the route method and get a result for our request
// const directionsService = new window.google.maps.DirectionsService();

// // //create a DirectionsRenderer object which we will use to display the route
// const directionsDisplay = new window.google.maps.DirectionsRenderer();

// // //bind the DirectionsRenderer to the map
// directionsDisplay.setMap(map);

// utils.getDistance();

function DistanceMap() {

  
  return (
    <div className="map">
      <div className="mapCalc">
        <h1 className="mapCalc__header">Find the distance</h1>
        <p className="mapCalc__text">Provide places to calculate distance:</p>
        <form className="mapCalc__form" action="">
          <span>{dot}</span>
          <label className="mapCalc__form__label" htmlFor="from">
            Point A:
          </label>
          <div className="mapCalc__form__container">
            <input
              className="mapCalc__form__container-input"
              type="text"
              id="from"
              placeholder="Origin"
            />
          </div>

          <label className="mapCalc__form__label" htmlFor="to">
            Point B:
          </label>
          <div>
            <input
              className="mapCalc__form__container-input"
              type="text"
              id="to"
              placeholder="Origin"
            />
          </div>
        </form>
        <div className="mapCalc__button">
          <button 
          // onClick={''}
          >Click</button>
        </div>
        <div className="mapCalc__container">
          <div className="mapCalc__container__map" id="googleMap">1</div>
          <div className="mapCalc__container__output" id="output"></div>
        </div>
      </div>
    </div>
  );
}

export default DistanceMap;
