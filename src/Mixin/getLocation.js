import axios from "axios";

export const getLocationMix = {
  mounted() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      axios
        .get("https://maps.googleapis.com/maps/api/geocode/json?", {
          params: {
            address: this.searchLocation,
            key: process.env.VUE_APP_APPKEY
          }
        })
        .then(response => {
          //log full response
          console.log(response);
          this.formattedAddress = response.data.results[0].formatted_address;
          this.addressComponents = response.data.results[0].address_components;
          this.latitude = response.data.results[0].geometry.location.lat;
          this.longitude = response.data.results[0].geometry.location.lng;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
