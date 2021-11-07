<template>
  <div class="flex items-center justify-between mb-2">
    <h3 class="text-xl">{{ stop.name }}</h3>
    <div>↗️: {{ stop.ordersDrop }}; ↘️: {{ stop.ordersPick }}</div>
  </div>
  <div class="mb-4">
    {{ stop.address.street }}
    {{ stop.address.house_number }}
    <a
        :href="stop.address.link"
        target="_blank"
        class="underline text-green-500"
    >map</a>
  </div>
  <div class="flex items-center justify-between">
    <div>{{ stop.parsedStatus }}</div>
    <a v-if="stop.telephone" :href="`tel:${stop.telephone}`" class="flex">
      📞 Call
    </a>
    <Button>
      <router-link :to="`/stops/${stop.stop_id}`">Show more</router-link>
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Stop } from "@/types";
import Button from "./Button.vue";

export default defineComponent({
  name: "StopCard",
  components: {
    Button,
  },
  props: {
    stop: Object as () => Stop,
  },
});
</script>
