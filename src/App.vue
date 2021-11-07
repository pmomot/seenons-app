<template>
  <div class="background-gradient"></div>
  <TopNav />
  <router-view />
</template>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

.background-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(42deg, #46607f, #16a891 80%, #57c595);
  z-index: -1;
}

#temp-nav a {
  font-weight: bold;
  color: #2c3e50;
}

#temp-nav a.router-link-exact-active {
  color: #42b983;
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
