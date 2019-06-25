// Map for overdose
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

L.geoJson(statesData).addTo(map)

// define the color for each category
function getColor(d) {
  return d > 0.025   ? '#800026' :
         d > 0.0225  ? '#BD0026' :
         d > 0.02    ? '#E31A1C' :
         d > 0.0175  ? '#FC4E2A' :
         d > 0.015   ? '#FD8D3C' :
         d > 0.0125  ? '#FEB24C' :
         d > 0.01    ? '#FED976' :
                       '#FFEDA0' ;
}

// fill the color
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

// define the mouseout action
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
}