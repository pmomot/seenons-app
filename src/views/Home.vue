<template>
  <div class="flex flex-col h-full">
    <div
      class="px-6 mb-4 flex items-center justify-between text-white font-bold"
    >
      <h1>{{ routeName || "loading..." }}</h1>
      <div>{{ time }}</div>
    </div>
    <FullRoundedContainer>
      <div
        class="border border-gray-300 shadow rounded-lg p-4 mb-8"
        v-for="stop in stops"
        :key="stop.stop_id"
      >
        <StopCard :stop="stop" />
      </div>
    </FullRoundedContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dayjs from "dayjs";
import { FullRoundedContainer, StopCard } from "@/components";
import { Stop } from "@/types";

export default defineComponent({
  name: "Home",
  components: {
    FullRoundedContainer,
    StopCard,
  },
  computed: {
    routeName() {
      return this.$store.state.name;
    },
    time() {
      const time = this.$store.state.time_end;
      return time ? dayjs(time).format("HH:mm") : "";
    },
    stops(): Stop[] {
      return this.$store.state.stops;
    },
  },
});
</script>
