
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/AnderScore/geojson/master/55.geojson");

var map = L.map('map').fitBounds(geojsonLayer.getBounds());

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'examples.map-20v6611k'
}).addTo(map);
geojsonLayer.addTo(map);
