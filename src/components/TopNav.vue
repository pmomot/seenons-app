<template>
  <div class="flex items-center justify-between px-6 py-4">
    <div class="w-5">
      <div v-if="isBackVisible" @click="goBack" class="cursor-pointer">
        <svg viewBox="0 0 34 38" xmlns="http://www.w3.org/2000/svg">
          <path style="fill: white" d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79    L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792    C25.58,33.883,25.075,34.075,24.57,34.075z"/>
        </svg>
      </div>
    </div>
    <div class="w-8 h-8 relative rounded-full overflow-hidden">
      <router-link to="/">
        <img
          src="https://seenons-public-assets.s3.eu-central-1.amazonaws.com/default/seenons_profile.png"
          alt="logo"
          class="w-full h-full"
        />
      </router-link>
    </div>
    <!-- Can add logout handler if needed -->
    <div class="w-5 cursor-pointer">
      <svg viewBox="0 0 34 38" xmlns="http://www.w3.org/2000/svg">
        <title>logout-icon</title>
        <polyline
          style="
            fill: none;
            stroke: #fff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
          "
          points="1 29.17 1 1 19.78 1 19.78 9.06"
        ></polyline>
        <polyline
          style="
            fill: none;
            stroke: #fff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
          "
          points="19.78 20.71 19.78 29.17 11.96 29.17"
        ></polyline>
        <polygon
          style="
            fill: none;
            stroke: #fff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
          "
          points="11.96 37 1 29.17 1 1 11.96 8.83 11.96 37"
        ></polygon>
        <line
          style="
            fill: none;
            stroke: #fff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
          "
          y2="14.89"
          x2="17.35"
          y1="14.89"
          x1="33"
        ></line>
        <polyline
          style="
            fill: none;
            stroke: #fff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
          "
          points="27.29 9.06 33 14.89 27.29 20.71"
        ></polyline>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopNav",
  computed: {
    isBackVisible() {
      return this.$router.currentRoute.value.path !== "/";
    },
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
});
</script>
