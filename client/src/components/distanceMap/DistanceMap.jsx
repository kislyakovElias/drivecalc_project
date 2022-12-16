/* global google */

import "./DistanceMap.scss";
import { useEffect } from "react";


function DistanceMap(props) {

    useEffect(() => {
      if(!props?.leg?.distance || !props?.leg?.duration) return null;
      props?.setDistance(props?.leg?.distance.value / 1000);
    }, [props?.leg ? props.leg : ""]);

    console.log(props?.leg, "1111");
  return (
    <div className="map">

    </div>
  );
}

export default DistanceMap;
