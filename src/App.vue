<template>
  <div id="app">
    <router-link to="/">Home | </router-link>
    <router-link to="/pretest">Pre-test</router-link>

    <!-- Router-view = displays all router-links. 
         **How does it default to welcome screen?  -->
    <router-view></router-view>

    <learn-slots
      >Info here gets sent into the slot element in the component</learn-slots
    >
  </div>
</template>

<script>
import LearnSlots from "./components/LearnSlots.vue";

export default {
  name: "App",
  components: { LearnSlots },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
