<template>
  <div class="fixed inset-0 -z-1 w-screen h-screen background-gradient"></div>
  <TopNav />
  <router-view />
</template>

<style>
.background-gradient {
  background: linear-gradient(42deg, #46607f, #16a891 80%, #57c595);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import TopNav from "@/components/TopNav.vue";

export default defineComponent({
  name: "App",
  components: {
    TopNav,
  },
});
</script>
