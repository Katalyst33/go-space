<!--
<template>
  <div>
    <p>Distances22</p>
    <div class="grid grid-cols-2 gap-10">
      <div v-if="origin" class="bg-red-400">
        <h1>Origin</h1>
        {{ origin.formattedAddress }}
        <h4>Latitude: {{ origin.latitude }}</h4>
        <h4>longitude: {{ origin.longitude }}</h4>
      </div>
      <div v-if="destination" class="bg-red-400">
        <h1>Destination</h1>
        {{ destination.formattedAddress }}
        <h4>Latitude: {{ destination.latitude }}</h4>
        <h4>longitude: {{ destination.longitude }}</h4>
      </div>
    </div>
    <div id="output" ref="output"></div>
    <div id="map" ref="map"></div>
  </div>
</template>

&lt;!&ndash;<script
  type="application/javascript"
  src="https://polyfill.io/v3/polyfill.min.js?features=default"
></script>
<script
  type="application/javascript"
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
  defer
></script>&ndash;&gt;

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["origin", "destination"])
  },
  mounted() {
    window.initMap = (...args) => this.initMap(...args);
    window.deleteMarkers = (...args) => this.deleteMarkers(...args);

    let mapScript = document.createElement("script");
    mapScript.setAttribute(
      "src",
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDZAeK6Ngp1yGGmvXPZ_J1vkmgpR_hul0&callback=initMap&libraries=&v=weekly"
    );
    document.head.appendChild(mapScript);
    setTimeout(() => {
      let pollyScript = document.createElement("script");
      pollyScript.setAttribute(
        "src",
        "https://polyfill.io/v3/polyfill.min.js?features=default"
      );
      document.head.appendChild(pollyScript);
    }, 4000);
    // this.initMap();

    console.log("debuuging step ");
  },
  methods: {
    initMap() {
      // const google = window.google;
      /* const bounds = new google.maps.LatLngBounds();
      const markersArray = [];
      const origin1 = { lat: 55.93, lng: -3.118 };
      const origin2 = "Greenwich, England";
      const destinationA = "Stockholm, Sweden";
      const destinationB = { lat: 50.087, lng: 14.421 };
      const destinationIcon =
        "https://chart.googleapis.com/chart?" +
        "chst=d_map_pin_letter&chld=D|FF0000|000000";
      const originIcon =
        "https://chart.googleapis.com/chart?" +
        "chst=d_map_pin_letter&chld=O|FFFF00|000000";
      const map = new google.maps.Map(this.$refs.map, {
        center: { lat: 55.53, lng: 9.4 },
        zoom: 10
      });
      const geocoder = new google.maps.Geocoder();
      const service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [origin1, origin2],
          destinations: [destinationA, destinationB],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        },
        (response, status) => {
          if (status !== "OK") {
            alert("Error was: " + status);
          } else {
            const originList = response.originAddresses;
            const destinationList = response.destinationAddresses;
            const outputDiv = this.$refs.output;
            outputDiv.innerHTML = "";
            console.log(outputDiv, "outpooooooooo");

            window.deleteMarkers(markersArray);

            const showGeocodedAddressOnMap = function(asDestination) {
              const icon = asDestination ? destinationIcon : originIcon;

              return function(results, status) {
                if (status === "OK") {
                  map.fitBounds(bounds.extend(results[0].geometry.location));
                  markersArray.push(
                    new google.maps.Marker({
                      map,
                      position: results[0].geometry.location,
                      icon: icon
                    })
                  );
                } else {
                  alert("Geocode was not successful due to: " + status);
                }
              };
            };

            for (let i = 0; i < originList.length; i++) {
              const results = response.rows[i].elements;
              geocoder.geocode(
                { address: originList[i] },
                showGeocodedAddressOnMap(false)
              );

              for (let j = 0; j < results.length; j++) {
                geocoder.geocode(
                  { address: destinationList[j] },
                  showGeocodedAddressOnMap(true)
                );
                outputDiv.innerHTML +=
                  originList[i] +
                  " to " +
                  destinationList[j] +
                  ": " +
                  results[j].distance.text +
                  " in " +
                  results[j].duration.text +
                  "<br>";
              }
            }
          }
        }
      );*/

      const bounds = new google.maps.LatLngBounds();
      const markersArray = [];
      const origin1 = {
        lat: this.origin.latitude,
        lng: this.origin.longitude
      };
      const origin2 = {
        lat: this.destination.latitude,
        lng: this.destination.longitude
      };
      const destinationA = {
        lat: this.destination.latitude,
        lng: this.destination.longitude
      };
      const destinationB = {
        lat: this.destination.latitude,
        lng: this.destination.longitude
      };
      const destinationIcon =
        "https://chart.googleapis.com/chart?" +
        "chst=d_map_pin_letter&chld=D|FF0000|000000";
      const originIcon =
        "https://chart.googleapis.com/chart?" +
        "chst=d_map_pin_letter&chld=O|FFFF00|000000";
      const map = new google.maps.Map(this.$refs.map, {
        center: {
          lat: 55.53,
          lng: 9.4
        },
        zoom: 10
      });
      const geocoder = new google.maps.Geocoder();
      const service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [origin1, origin2],
          destinations: [destinationA, destinationB],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        },
        (response, status) => {
          if (status !== "OK") {
            alert("Error was: " + status);
          } else {
            const originList = response.originAddresses;
            const destinationList = response.destinationAddresses;
            const outputDiv = this.$refs.output;
            outputDiv.innerHTML = "";

            window.deleteMarkers(markersArray);

            const showGeocodedAddressOnMap = function(asDestination) {
              const icon = asDestination ? destinationIcon : originIcon;

              return function(results, status) {
                if (status === "OK") {
                  map.fitBounds(bounds.extend(results[0].geometry.location));
                  markersArray.push(
                    new google.maps.Marker({
                      map,
                      position: results[0].geometry.location,
                      icon: icon
                    })
                  );
                } else {
                  alert("Geocode was not successful due to: " + status);
                }
              };
            };

            for (let i = 0; i < originList.length; i++) {
              const results = response.rows[i].elements;
              geocoder.geocode(
                {
                  address: originList[i]
                },
                showGeocodedAddressOnMap(false)
              );

              for (let j = 0; j < results.length; j++) {
                geocoder.geocode(
                  {
                    address: destinationList[j]
                  },
                  showGeocodedAddressOnMap(true)
                );
                outputDiv.innerHTML +=
                  originList[i] +
                  " to " +
                  destinationList[j] +
                  ": " +
                  results[j].distance.text +
                  " in " +
                  results[j].duration.text +
                  "<br>";
              }
            }
          }
        }
      );
    },

    deleteMarkers(markersArray) {
      for (let i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
      }
      markersArray = [];
    }
  }
};
</script>

<style scoped>
#right-panel {
  font-family: "Roboto", "sans-serif";
  line-height: 30px;
  padding-left: 10px;
}

#right-panel select,
#right-panel input {
  font-size: 15px;
}

#right-panel select {
  width: 100%;
}

#right-panel i {
  font-size: 12px;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#map {
  height: 100%;
  width: 50%;
}

#right-panel {
  float: right;
  width: 48%;
  padding-left: 2%;
}

#output {
  font-size: 11px;
}
</style>
-->
