<template>
  <div class="flex-auto px-6 py-4 bg-white rounded-t-lg shadow-md">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FullRoundedContainer",
});
</script>
