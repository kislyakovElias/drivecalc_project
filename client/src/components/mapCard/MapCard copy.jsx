import "./MapCard.scss";
import { useEffect } from "react";
import {
  Map,
  Marker,
  GoogleApiWrapper,
  useLoadScript,
  GoogleMap,
} from "google-maps-react";
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

  useEffect(() => {
    new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }, []);

  if (!isLoaded) return <div>Loading..</div>;
  return (
    <>
      <GoogleMap></GoogleMap>
      {/* // <GoogleApiWrapper>
    // <Map
    //   google={google}
    //   zoom={10}
    //   initialCenter={{
    //     lat: 35.5496939,
    //     lng: -120.7060049,
    //   }}
    //   style={style}
    // />

    // </GoogleApiWrapper>
    
    // window.initMap = initMap;
    //   <div className="carCard">

    //   </div> */}
      {/* <iframe
  width="450"
  height="250"
  frameborder="0" style="border:0"
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/view?key=${YOUR_API_KEY}&${PARAMETERS}`}
  >
</iframe> */}
    </>
  );
}

export default MapCard;
