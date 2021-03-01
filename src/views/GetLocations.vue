<template>
  <div class="px-10">
    <GlobalDestination v-if="origin && destination" />
    <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-x-8">
      <Origin />
      <Destination />
    </div>
  </div>
</template>

<script>
import Origin from "../views/Origin";
import Destination from "../views/Destination";
import { mapState } from "vuex";
import GlobalDestination from "@/views/GlobalDestination";

export default {
  components: { GlobalDestination, Origin, Destination },
  data() {
    return {
      searchLocation: "kubwa",
      formattedAddress: null,
      addressComponents: [],
      latitude: null,
      longitude: null
    };
  },
  computed: {
    ...mapState(["origin", "destination"])
  }
};
</script>
