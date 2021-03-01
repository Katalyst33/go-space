<!--      class="absolute bg-red-500  left-0 right-0 top-0 bottom-0"-->
<template>
  <div>
    <section
      class="z-10 flex flex-col justify-center sm:px-6 lg:px-8 "
      style="position: relative; z-index: 1;"
    >
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div
            v-show="mapError"
            class="py-2 px-6 bg-red-400 text-sm text-white"
          >
            {{ mapError }}
          </div>
          <form @submit.prevent="() => false" class="space-y-6 mt-4">
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Enter your address</label
              >
              <div class="mt-1 flex rounded-md shadow-sm">
                <div
                  class="relative flex items-stretch flex-grow focus-within:z-10"
                >
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <!-- Heroicon name: users -->

                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="map-marker-alt"
                      class="svg-inline--fa fa-map-marker-alt fa-w-12 w-5 h-5 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    v-model="address"
                    id="autocomplete"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border border-gray-400"
                    name="email"
                    placeholder="Enter your address"
                    type="text"
                  />
                </div>
                <button
                  @click="locatorButtonPressed"
                  class="-ml-px h-10 relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <!-- Heroicon name: sort-ascending -->
                  <svg
                    v-if="spinner"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fad"
                    data-icon="spinner-third"
                    class="svg-inline--fa fa-spinner-third fa-w-16  animate-spin h-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g class="fa-group">
                      <path
                        class="fa-secondary"
                        fill="currentColor"
                        d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z"
                        opacity="0.4"
                      ></path>
                      <path
                        class="fa-primary"
                        fill="currentColor"
                        d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z"
                      ></path>
                    </g>
                  </svg>

                  <svg
                    v-else
                    class="svg-inline--fa fa-dot-circle fa-w-16 h-5"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="dot-circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  v-model="address"
                  id="remember_me"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  name="remember_me"
                  type="checkbox"
                />
                <label
                  class="ml-2 block text-sm text-gray-900"
                  for="remember_me"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                class=" flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section id="map"></section>
  </div>
</template>

<script>
import axios from "axios";
const googleWindow = window.google.maps;

export default {
  data() {
    return {
      address: "",
      mapError: "",
      spinner: false
    };
  },
  mounted() {
    let autocomplete = new googleWindow.places.Autocomplete(
      document.getElementById("autocomplete"),
      {
        bounds: new googleWindow.LatLngBounds(
          new googleWindow.LatLng(9.41864, 11.3455)
        )
      }
    );
    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace();
      this.showUserLocationOnTheMap(
        place.geometry.location.lat(),
        place.geometry.location.lng()
      );
    });
  },

  methods: {
    locatorButtonPressed() {
      this.spinner = true;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.getAddressFrom(
              position.coords.latitude,
              position.coords.longitude
            );
            this.showUserLocationOnTheMap(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          error => {
            this.mapError =
              "Locator is unable to find your address, please type address manually ";
            this.spinner = false;
            return error;
          }
        );
      } else {
        this.spinner = false;

        // eslint-disable-next-line no-undef
        this.mapError = "Your browser does not support geolocation";
      }
    },
    getAddressFrom(lat, long) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}, ${long}&key=${process.env.VUE_APP_YOUR_API_KEY}`
        )
        .then(response => {
          if (response.data.error_message) {
            this.mapError = response.data.error_message;
          } else {
            this.address = response.data.results[0].formatted_address;
          }
        })
        .catch(err => {
          this.mapError = err.message;
          this.spinner = false;

          console.log(err.message);
        });
    },

    showUserLocationOnTheMap(lat, long) {
      //create map object

      let map = new googleWindow.Map(document.getElementById("map"), {
        zoom: 15,
        center: new googleWindow.LatLng(lat, long),
        mapTypeId: googleWindow.MapTypeId.ROADMAP
      });
      //add marker
      new googleWindow.Marker({
        position: new googleWindow.LatLng(lat, long),
        map: map
      });

      // add marker
    }
  }
};
</script>

<style>
.pac-icon {
  display: none;
}

.pac-item {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.pac-item:hover {
  background-color: #ddd9d9;
}

.pac-item-query {
  font-size: 16px;
}

#map {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: red;
  width: 100%;
}
</style>
