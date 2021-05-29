import ol from 'ol'
var Markers =
    [
        { lat: 41.28247976112171, lng: 28.000645778308126 },
    ];

var myMap = new ol.Map({
    target: "map",
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([41.28247976112171, 28.000645778308126]),
        zoom: 6
    })
});

var features = [];


for (var i = 0; i < Markers.length; i++) {
    var item = Markers[i];
    var longitude = item.lng;
    var latitude = item.lat;

    var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([latitude, longitude], 'EPSG:4326', 'EPSG:3857'))
    });

    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon(({
            anchor: [0.5, 1],
            src: "http://cdn.mapmarker.io/api/v1/pin?text=P&size=50&hoffset=1"
        }))
    });

    iconFeature.setStyle(iconStyle);
    features.push(iconFeature);

}

var vectorSource = new ol.source.Vector({
    features: features
});

var vectorLayer = new ol.layer.Vector({
    source: vectorSource
});
myMap.addLayer(vectorLayer);
const btn = document.getElementById("pinLocation");
btn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("location should be turned on!")
    }
    console.log("it is clicked")
})

const showPosition = (position) => {
    console.log(position.coords.latitude)
    var newlonLat = new OpenLayers.LonLat(position.coords.longitude, position.coords.latitude).transform(map.getProjectionObject(), new OpenLayers.Projection("EPSG:4326"));

    myMap.setCenternewlonLat)
}
