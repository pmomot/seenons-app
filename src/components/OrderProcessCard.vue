<template>
  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt class="text-sm font-medium text-gray-500">Quantity</dt>
    <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
      {{ quantity }}
    </dd>
  </div>
  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt class="text-sm font-medium text-gray-500">Stream type</dt>
    <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
      {{ stream_type }}
    </dd>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// didn't have a chance to add quantities manipulation logic, but it would go in here
export default defineComponent({
  name: "OrderProcessCard",
  props: {
    quantity: Number,
    stream_type: String,
  },
});
</script>
