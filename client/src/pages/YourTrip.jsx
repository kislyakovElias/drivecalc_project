import Mapp from "../components/mapCard/Mapp";



const YourTrip = (props, _ref) => {
  return (
    <>
      <div>Trip page</div>
      <div className="trip__map">
        <Mapp />
      </div>
      {/* https://developers.google.com/maps/documentation/places/web-service/details */}
    </>
  );
};

export default YourTrip;
