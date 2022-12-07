import "./MapCard.scss";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

let apiKey = process.env.GOOGLE_API_KEY;

const containerStyle = {
  width: "600px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MapCard() {
  console.log(apiKey, "key");
  const { isLoaded } = useJsApiLoader({
    id: "google-map-scipt",
    googleMapsApiKey: `AIzaSyDWddamuKl0tWyNiCI4zr-22kXdgfMY-Tk`,
  });

  const [map, setMap] = React.useState(null);
  const options = () => ({
    mapId: "cd647f04eff7d73c",
    disableDefaultUI: true,
    clickableIcons: false,
  });

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  console.log(apiKey, "key2");
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
      {/* <script
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
      ></script> */}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapCard);
