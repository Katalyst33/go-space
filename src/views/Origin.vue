<template>
  <div>
    <div class="my-4">
      <h1 class="text-2xl">Enter Origin</h1>

      <form id="location-form">
        <div>
          <div class="mt-1">
            <input
              type="text"
              v-model="searchLocation"
              class="shadow-sm focus:ring-blue-500 focus:border-blue-500
               border-blue-600 bg-blue-100 focus:bg-white
              block w-full  sm:text-sm border-gray-300 rounded-md shadow-md"
              placeholder="Start typing and address..."
            />
          </div>
        </div>

        <br />
      </form>
      <button
        class="px-40 py-2 text-white rounded bg-blue-600 hover:bg-blue-500 my-4 shadow-md"
        @click="getLocation"
      >
        Set Origin
      </button>
    </div>
    <section
      class="text-left bg-gray-200 rounded-lg px-4 text-xl divide-y divide-blue-500"
    >
      <div class="py-4">
        <h4 class="text-blue-500 font-bold text-2xl pb-4">Origin</h4>
        <span class="font-semibold pr-4">Address:</span
        >{{ origin.formattedAddress }}
      </div>

      <div>
        <div class="py-4 ">
          <h3 class="font-semibold">Geometry</h3>

          <span class="font-semibold pr-4"> Latitude:</span
          >{{ origin.latitude }}
          <br />
          <span class="font-semibold pr-4"> Longitude:</span>
          {{ origin.longitude }}
        </div>
      </div>

      <div class="py-4 text-sm">
        <h3>Address component</h3>
        <template v-for="item in origin.addressComponents">
          <div :key="item.id">
            <span class="font-bold capitalize">{{ item.types[0] }}: </span
            >{{ item.long_name }}
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Origins",

  data() {
    return {
      searchLocation: "shoprite jabi",
      origin: {
        formattedAddress: null,
        addressComponents: [],
        latitude: null,
        longitude: null
      }
    };
  },
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
          this.origin.formattedAddress =
            response.data.results[0].formatted_address;
          this.origin.addressComponents =
            response.data.results[0].address_components;
          this.origin.latitude = response.data.results[0].geometry.location.lat;
          this.origin.longitude =
            response.data.results[0].geometry.location.lng;
        })
        .then(() => {
          this.$store.dispatch("setOrigin", this.origin);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
