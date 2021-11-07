<template>
  <div class="flex items-center justify-between px-6 py-4">
    <div></div>
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
});
</script>
