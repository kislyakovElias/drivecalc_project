import "./MapCard.scss";
import { useEffect } from "react";
import {
  Marker,
  GoogleApiWrapper,
  GoogleMap,
} from "google-maps-react";
import { useLoadScript } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import google from "google-maps-react";

let YOUR_API_KEY = "AIzaSyDWddamuKl0tWyNiCI4zr-22kXdgfMY-Tk";
let PARAMETERS = "q=Eiffel+Tower,Paris+France";

const style = {
  width: "600px",
  height: "300px",
};

function MapCard(props) {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: YOUR_API_KEY });

  // function initMap() {

  // useEffect(() => {
  //   new google.maps.Map(document.getElementById("map"), {
  //   center: { lat: -34.397, lng: 150.644 },
  //   zoom: 8,
  // })
  //   }
  // , [])

  if (!isLoaded) {return <div>Loading..</div>
} else{return <Map />;}
}

function Map() {
  return (
    <GoogleMap
      zoom={10}
      initialCenter={{
        lat: 35.5496939,
        lng: -120.7060049,
      }}
      style={style}
      mapContainerClassName="map__container"
    ></GoogleMap>
  );
}

export default MapCard;
