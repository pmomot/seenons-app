<template>
  <div class="home">
    <HelloWorld :msg="routeName" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    routeName() {
      return this.$store.state.name;
    },
  },
});
</script>
