import React from "react";
import MapCard from "../components/mapCard/MapCard";
import MapType from "../components/mapCard/MapType";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapContainer from "../components/mapCard/MapContainer";

let YOUR_API_KEY = "AIzaSyDWddamuKl0tWyNiCI4zr-22kXdgfMY-Tk";

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return "<Spinner />";
    case Status.FAILURE:
      return "<ErrorComponent />";
    case Status.SUCCESS:
      return <MapCard />;
  }
};

const YourTrip = (props, _ref) => {
  return (
    <>
      <div>Trip page</div>
      <div>Map</div>
      <MapCard />
      {/* <MapType /> */}
      {/* <MapContainer /> */}
    </>
  );
};

export default YourTrip;
