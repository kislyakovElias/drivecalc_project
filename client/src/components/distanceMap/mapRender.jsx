// /* global google */

var myLatLng = { lat: 38.346, lng: -0.4907 };
var mapOptions = {
  center: myLatLng,
  zoom: 7,
  mapTypeId: window.google.maps.MapTypeId.ROADMAP,
};

// //create map
var map = new window.google.maps.Map(document.getElementById("googleMap"), mapOptions);

// //create a DirectionsService object to use the route method and get a result for our request
const directionsService = new window.google.maps.DirectionsService();

// //create a DirectionsRenderer object which we will use to display the route
const directionsDisplay = new window.google.maps.DirectionsRenderer();

// //bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);

// //define calcRoute function
function calcRoute() {
  //create request
  var request = {
    origin: document.getElementById("from").value,
    destination: document.getElementById("to").value,
    travelMode: window.google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
    unitSystem: window.google.maps.UnitSystem.IMPERIAL,
  };

  //pass the request to the route method
  const output = document.querySelector("#output");
  directionsService.route(request, function (result, status) {
    if (status === window.google.maps.DirectionsStatus.OK) {
      //Get distance and time
      output.innerHTML =
        "<div class='alert-info'>From: " +
        document.getElementById("from").value +
        ".<br />To: " +
        document.getElementById("to").value +
        ".<br /> Driving distance <i class='fas fa-road'></i> : " +
        result.routes[0].legs[0].distance.text +
        ".<br />Duration <i class='fas fa-hourglass-start'></i> : " +
        result.routes[0].legs[0].duration.text +
        ".</div>";

      //display route
      directionsDisplay.setDirections(result);
    } else {
      //delete route from map
      directionsDisplay.setDirections({ routes: [] });
      //center map in London
      map.setCenter(myLatLng);

      //show error message
      output.innerHTML =
        "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
    }
  });
}

// //create autocomplete objects for all inputs
// var options = {
//   types: ["(cities)"],
// };

// var input1 = document.getElementById("from");
// var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

// var input2 = document.getElementById("to");
// var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
