import MapCard from "../components/mapCard/MapCard";

const YourTrip = (props, _ref) => {
  return (
    <>
      {/* <div>Trip page</div> */}
      <div className="trip__map">
        <MapCard />
      </div>
      {/* https://developers.google.com/maps/documentation/places/web-service/details */}
    </>
  );
};

export default YourTrip;
