<template>
  <button
    type="button"
    class="
      inline-flex
      items-center
      px-4
      py-2
      border border-gray-300
      rounded-md
      shadow-sm
      text-sm
      font-medium
      text-gray-700
      bg-white
      hover:bg-gray-50
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
    "
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
});
</script>
