<template>
  <div class="flex flex-col h-full" v-if="stop">
    <div
      class="px-6 mb-4 flex items-center justify-between text-white font-bold"
    >
      <h1>{{ stop.name }}</h1>
      <div>{{ stop.parsedStatus }}</div>
    </div>
    <FullRoundedContainer>
      <div class="mb-4">
        <dl>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Address</dt>
            <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
              {{ stop.address.postal_code }}, {{ stop.address.street
              }}{{ stop.address.house_number }}, {{ stop.address.town }},
              {{ stop.address.country }}
            </dd>
          </div>
          <div
            v-if="stop.telephone"
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Contact</dt>
            <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
              <a :href="`tel:${stop.telephone}`" class="flex">
                📞 {{ stop.telephone }}
              </a>
            </dd>
          </div>
          <div
            v-if="stop.comment"
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Comment</dt>
            <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
              {{ stop.comment }}
            </dd>
          </div>
        </dl>
      </div>
      <div v-if="stop.ordersDrop?.length" class="mb-4">
        <h3 class="mb-4">
          Orders to <b>drop off</b> ({{ stop.ordersDrop.length }}):
        </h3>
        <div
          class="border border-gray-300 shadow rounded-lg p-4 mb-8"
          v-for="order in stop.ordersDrop"
          :key="order.order_id"
        >
          <OrderCard :order="order" />
        </div>
      </div>
      <div v-if="stop.ordersPick?.length" class="mb-4">
        <h3 class="mb-4">
          Orders to <b>pick up</b> ({{ stop.ordersPick.length }}):
        </h3>
        <div
          class="border border-gray-300 shadow rounded-lg p-4 mb-8"
          v-for="order in stop.ordersPick"
          :key="order.order_id"
        >
          <OrderCard :order="order" />
        </div>
      </div>
      <Button v-if="isSubmitVisible" class="mb-8" :wide="true" @click="submit"
        >Submit</Button
      >
      <span
        class="underline text-red-500 hover:text-red-400 cursor-pointer"
        @click="reportIssue"
      >
        Report an issue
      </span>
    </FullRoundedContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button, FullRoundedContainer, OrderCard } from "@/components";
import { Stop, Status } from "@/types";

export default defineComponent({
  name: "Stop",
  components: {
    Button,
    FullRoundedContainer,
    OrderCard,
  },
  computed: {
    stop(): Stop {
      const routeStopId = this.$route.params.stopId;
      return this.$store.state.stops.find(
        (stop: Stop) => String(stop.stop_id) === String(routeStopId)
      );
    },
    // hide submit button if Completed or Processing
    isSubmitVisible(): boolean {
      if (!this.stop) {
        return false;
      }
      return !(
        this.stop.status === Status.Completed ||
        this.stop.status === Status.Pending
      );
    },
  },
  methods: {
    reportIssue() {
      console.log("show issue reporting modal");
      // Don't have time to implement it now
      // But the idea is to show the Dialog with:
      // 1. A dropdown to capture the type of the issue (using Issue enum from global types)
      // 2. Comment field to explain what's exactly wrong and provide more details
      // Then this dialog would dispatch the relevant action and the store will call the backend
      // on success dialog will close and show the success notification
      // on error dialog will still be visible and show the error notification
    },
    submit() {
      // ideally I would do this in the dialog
      // but for the sake of time decided to create separate route
      this.$router.push(`/stops/${this.$route.params.stopId}/process`);
    },
  },
});
</script>
