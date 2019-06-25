// Map for unemployment
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

L.geoJson(statesData).addTo(map)

function getColor(d) {
  return d > 8     ? '#800026' :
         d > 7.5   ? '#BD0026' :
         d > 7     ? '#E31A1C' :
         d > 6.5   ? '#FC4E2A' :
         d > 6     ? '#FD8D3C' :
         d > 5     ? '#FEB24C' :
         d > 4     ? '#FED976' :
                     '#FFEDA0' ;
}

function style(feature) {
  return {
      fillColor: getColor(feature.properties.overdose),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

L.geoJson(statesData, {style: style}).addTo(map);









/*var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 13
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);
*/



/*
var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";

d3.json(url, function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i].location;

    if (location) {
      heatArray.push([location.coordinates[1], location.coordinates[0]]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 35
  }).addTo(myMap);

});
*/