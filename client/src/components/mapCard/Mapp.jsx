/* global google */
import React, {
  useMemo,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
  CircleF,
  MarkerClustererF,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
// import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";
import point from "../../assets/icons/position-map-pointer-svgrepo-com.svg";

import TripDetails from "../tripDetails/TripDetails";

const libraries = ["places"];
const mapContainerStyle = {
  height: "75vh",
  width: "100%",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 49.24,
  lng: -123.11,
};

export default function Mapp(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [from, setFrom] = useState(
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null
    )
      ? navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        )
      : {
          lat: 43.6532,
          lng: -79.3832,
        }
  );

  const [to, setTo] = useState({});

  useEffect(() => {
    fetchDirections();
    distanceUpd();
  }, [to]);

  const [markers, setMarkers] = useState([]);
  const [markerA, setMarkerA] = useState([]);
  const [markerB, setMarkerB] = useState([]);
  const [selected, setSelected] = useState(null);
  const [directions, setDirections] = useState();
  const [distance, setDistance] = useState(props.distance? props.distance: 0);

  function distanceUpd() {
    if (directions) {
      let leg = directions.routes[0].legs[0];
      let newDistance = leg ? leg.distance.value / 1000 : 1;
      setDistance(newDistance);
    }
  }

  useEffect(()=>{
    distanceUpd();
  },[directions])

  const onMapClick = useCallback((e) => {
    if (from) {
      setTo((current) => [
        current,
        { lat: e.latLng.lat(), lng: e.latLng.lng(), time: new Date() },
      ]);
    } else {
      setFrom((current) => [
        current,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          time: new Date(),
        },
      ]);
    }

    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const points = useMemo(() => generatePoints(from), [from]);

  const fetchDirections = (point) => {
    if (!from) return;
    if (window.google) {
      const service = new window.google.maps.DirectionsService();
      service.route(
        {
          origin: from,
          destination: to,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK" && result) {
            setDirections(result);
            console.log(result, 'Directionsset');
          }
        }
      );
    }
  };

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div className="mapbox">
      {directions && 
      <TripDetails
                name={props.name}
                distance={distance}
                carChoice={props.carChoice}
                tank={props.tank}
                setTank={props.setTank}
                gas_price={props.gas_price}
                setGas_price={props.setGas_price}

                leg={directions.routes[0].legs[0]} /> 
            }

      <Locate panTo={panTo} />
      <Search
        setMarkers={setMarkers}
        setMarkerA={setMarkerA}
        from={from}
        setFrom={setFrom}
        panTo={panTo}
      />
      <To
        setMarkerB={setMarkerB}
        from={from}
        to={to}
        setTo={setTo}
        panTo={panTo}
      />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {/* {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: { point },
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))} */}

        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                zIndex: 10,
                strokeColor: "#1976D2",
                strokeWeight: 5,
              },
            }}
          />
        )}

        {from && (
          <>
            <Marker
              key={`${from.lat}-${from.lng}`}
              position={{ lat: from.lat, lng: from.lng }}
              onClick={() => {
                setSelected(from);
              }}
              icon={{
                url: { point },
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
            <CircleF
              center={from}
              radius={props.range ? (props.range - (+props.range / 3)) : 350000}
              options={rangeOptions}
            />
            <CircleF
              center={from}
              radius={props.range ? props.range : 400000}
              options={dangerOptions}
            />
          </>
        )}

        {to && (
          <>
            <Marker
              key={`${to.lat}-${to.lng}`}
              position={{ lat: to.lat, lng: to.lng }}
              onClick={() => {
                setSelected(to);
              }}
              icon={{
                url: { point },
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
            {/* <MarkerClustererF>
              {(clusterer) =>
                points.map((point) => (
                  <Marker
                    key={point.lat}
                    position={point}
                    clusterer={clusterer}
                    icon={{
                      url: point,
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(15, 15),
                      scaledSize: new window.google.maps.Size(30, 30),
                    }}
                  />
                ))
              }
            </MarkerClustererF> */}
          </>
        )}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="point">
                  ×
                </span>{" "}
                Point
              </h2>
              <p>Spot!</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="locate yourself" />
    </button>
  );
}

function Search({ setMarkers, setMarkerA, from, setFrom, panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    console.log(getGeocode({ address }), address);

    try {
      const results = await getGeocode({ address });
      console.log(getLatLng(results[0]), "latLong");
      const { lat, lng } = await getLatLng(results[0]);
      setFrom({ lat, lng });
      setMarkerA((current) => [
        current,
        {
          lat: lat,
          lng: lng,
          time: new Date(),
        },
      ]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Your start point"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption
                  key={Math.random() * 1111}
                  value={description}
                />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
function To({ setMarkerB, to, setTo, panTo, fetchDirections, distanceUpd }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    console.log(getGeocode({ address }), address);

    try {
      const results = await getGeocode({ address });
      console.log(results[0]);
      const { lat, lng } = await getLatLng(results[0]);
      setTo({ lat, lng });
      setMarkerB((current) => [
        ...current,
        {
          lat: lat,
          lng: lng,
          time: new Date(),
        },
      ]);
      // fetchDirections(to)
      panTo({ lat, lng });
      distanceUpd();
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your destination"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable4: false,
  editable: false,
  visible: true,
};

const rangeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#71bb1d",
  fillColor: "#8BC34A",
};

const dangerOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};

const generatePoints = (position) => {
  const _points = [];
  for (let i = 0; i < 30; i++) {
    const direction = Math.random() < 0.5 ? -2 : 2;
    _points.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
    });
  }
  return _points;
};
