<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card class="w-100 h-100">
        <v-card-title class="text-h5"> Where to? </v-card-title>
        <v-card-text>
          <div style="height: 20rem; width: 40rem" id="map"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="done"> Done </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
  created() {
    this.dialog = this.show;
  },
  mounted() {
    let lng;
    let lat;
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    var cc = [
      this.whereTo.location.latitude,
      this.whereTo.location.longitude,
    ];
    console.log(this.whereTo)
    function showPosition(position) {
      lng = position.coords.latitude;
      lat = position.coords.longitude;

      mapboxgl.accessToken =
        "pk.eyJ1IjoibmF0aTEyMyIsImEiOiJja3Bnd2tvdWswOGp3Mm9uOGdveDc4amg0In0.vi5NlTk7x1--yXFQYPjcWw";
      var map = new mapboxgl.Map({
        container: document.getElementById("map"),
        style: "mapbox://styles/mapbox/streets-v10",
        center: [lat, lng], // starting position
        zoom: 13,
      });
      var canvas = map.getCanvasContainer();
      var start = [lat, lng];
      // create a function to make a directions request
      function getRoute(end) {
        var start = [lat, lng];
        var url =
          "https://api.mapbox.com/directions/v5/mapbox/driving/" +
          start[0] +
          "," +
          start[1] +
          ";" +
          end[0] +
          "," +
          end[1] +
          "?steps=true&geometries=geojson&access_token=" +
          mapboxgl.accessToken;

        // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.onload = function () {
          var json = JSON.parse(req.response);
          var data = json.routes[0];
          var route = data.geometry.coordinates;
          var geojson = {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: route,
            },
          };
          // if the route already exists on the map, reset it using setData
          if (map.getSource("route")) {
            map.getSource("route").setData(geojson);
          } else {
            // otherwise, make a new request
            map.addLayer({
              id: "route",
              type: "line",
              source: {
                type: "geojson",
                data: {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "LineString",
                    coordinates: geojson,
                  },
                },
              },
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "#3887be",
                "line-width": 5,
                "line-opacity": 0.75,
              },
            });
          }
          // add turn instructions here at the end
        };
        req.send();
      }

      map.on("load", () => {
        // make an initial directions request that
        // starts and ends at the same location
        getRoute(start);

        // Add starting point to the map
        map.addLayer({
          id: "point",
          type: "circle",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: start,
                  },
                },
              ],
            },
          },
          paint: {
            "circle-radius": 10,
            "circle-color": "#3887be",
          },
        });

        canvas.style.cursor = "";
        var coords = cc;

        console.log(coords);
        var end = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: coords,
              },
            },
          ],
        };
        if (map.getLayer("end")) {
          map.getSource("end").setData(end);
        } else {
          map.addLayer({
            id: "end",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: coords,
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#f30",
            },
          });
        }
        getRoute(coords);
        // this is where the code from the next step will go
      });
    }
    getLocation();

    // map.click()
    // document.getElementById("map").click();
  },
  computed: {},
  methods: {
    done(e) {
      this.$emit("emitHideModal");
      this.dialog = false;
    },
  },

  props: ["whereTo", "show"],
};
</script>