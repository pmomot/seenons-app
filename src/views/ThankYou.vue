<template>
  <div class="text-center text-white">
    <h1 class="mb-20 mt-32 text-4xl">You are awesome! 🚀</h1>
    <Button>
      <router-link to="/">Continue 🏃</router-link>
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "@/components";

export default defineComponent({
  name: "ThankYou",
  components: {
    Button,
  },
});
</script>
