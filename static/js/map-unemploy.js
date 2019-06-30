// Map for unemployment
var maps = L.map('maps').setView([37.8, -96], 4);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(maps);

L.geoJson(updata).addTo(maps)

function getColor(t) {
  return t > 8     ? '#800026' :
         t > 7.5   ? '#BD0026' :
         t > 7     ? '#E31A1C' :
         t > 6.5   ? '#FC4E2A' :
         t > 6     ? '#FD8D3C' :
         t > 5     ? '#FEB24C' :
         t > 4     ? '#FED976' :
                     '#FFEDA0' ;
}

function style(feature) {
  return {
      fillColor: getColor(feature.properties.unemployment),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

L.geoJson(updata, {style: style}).addTo(maps);

// define the mouseout action
function highlightFeature(e) {
  var layers = e.target;

  layers.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layers.bringToFront();
      infos.update(layers.feature.properties);
  }
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  infos.update();
}

function zoomToFeature(e) {
  maps.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layers) {
  layers.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
  });
}

geojson = L.geoJson(updata, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(maps);

// Custom info Control
var infos = L.control();

infos.onAdd = function (maps) {
    this._div = L.DomUtil.create('div', 'info'); 
    this.update();
    return this._div;
};

infos.update = function (props) {
    this._div.innerHTML = '<h4>Unemployment Rate by States</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.unemployment + '% unemployment rate'
        : 'Mouse over a state');
};

infos.addTo(maps);