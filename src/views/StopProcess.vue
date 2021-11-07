<template>
  <div v-if="stop" class="px-6">
    <div class="mb-4 text-white font-bold text-2xl text-center">
      <h1>{{ stop.name }}</h1>
    </div>
    <div v-if="stop.ordersDrop?.length" class="mb-4">
      <h3 class="mb-4 text-white">
        Orders to <b>drop off</b> ({{ stop.ordersDrop.length }}):
      </h3>
      <div
        class="border border-gray-300 shadow rounded-lg bg-white p-4 mb-8"
        v-for="order in stop.ordersDrop"
        :key="order.order_id"
      >
        <OrderProcessCard :order="order" />
      </div>
    </div>
    <div v-if="stop.ordersPick?.length" class="mb-4">
      <h3 class="mb-4 text-white">
        Orders to <b>pick up</b> ({{ stop.ordersPick.length }}):
      </h3>
      <div
        class="border border-gray-300 shadow rounded-lg bg-white p-4 mb-8"
        v-for="order in stop.ordersPick"
        :key="order.order_id"
      >
        <OrderProcessCard :order="order" />
      </div>
    </div>
    <div class="flex items-center justify-between">
      <Button
        class="mb-8 bg-red-400 hover:bg-red-300 text-white"
        @click="cancel"
        >Cancel</Button
      >
      <Button
        class="mb-4 bg-green-400 hover:bg-green-300 text-white"
        @click="process"
        >Confirm</Button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button, OrderProcessCard } from "@/components";
import { Stop } from "@/types";

export default defineComponent({
  name: "StopProcess",
  components: {
    Button,
    OrderProcessCard,
  },
  computed: {
    stop(): Stop {
      const routeStopId = this.$route.params.stopId;
      return this.$store.state.stops.find(
        (stop: Stop) => String(stop.stop_id) === String(routeStopId)
      );
    },
  },
  methods: {
    process() {
      const ordersPick =
        this.stop.ordersPick?.map(({ quantity, order_id }) => ({
          quantity,
          order_id,
        })) || [];
      const ordersDrop =
        this.stop.ordersDrop?.map(({ quantity, order_id }) => ({
          quantity,
          order_id,
        })) || [];
      this.$store.dispatch("processStop", {
        stop_id: this.$route.params.stopId,
        orders: [...ordersPick, ...ordersDrop],
      });
      this.$router.push("/");
    },
    cancel() {
      this.$router.push(`/stops/${this.$route.params.stopId}`);
    },
  },
});
</script>
