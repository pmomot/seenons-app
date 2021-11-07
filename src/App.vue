<template>
  <div class="h-screen">
    <div class="fixed inset-0 -z-1 w-screen h-screen background-gradient"></div>
    <TopNav />
    <div class="h-full">
      <router-view />
    </div>
  </div>
</template>

<style>
.background-gradient {
  background: linear-gradient(42deg, #46607f, #16a891 80%, #57c595);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { TopNav } from "@/components";

export default defineComponent({
  name: "App",
  components: {
    TopNav,
  },
  methods: {
    ...mapActions(["getRoute"]),
  },
  created() {
    this.getRoute();
  },
});
</script>
