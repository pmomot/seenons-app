<template>
  <button
    type="button"
    :class="`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${classes}`"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    wide: Boolean,
  },
  computed: {
    classes() {
      return this.$props.wide
        ? "w-full bg-green-500 hover:bg-green-400 text-center text-white justify-center"
        : "text-sm font-medium text-gray-700 bg-white hover:bg-gray-50";
    },
  },
});
</script>
