<template>
  <div>
    <h1 class="text-xl">Global State</h1>
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
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "GlobalDestination",

  computed: {
    ...mapState(["origin", "destination"])
  }
};
</script>
