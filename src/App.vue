<template>
  <div id="app">
    
    <nav-bar></nav-bar>

    <!-- Router-view = basically a placeholder for the component path in a router-link-->

    <router-view></router-view>

    <!-- Learning how slots work... -->
    <!-- <learn-slots ref="learn"> -->
    <!-- <template #hello
        >This is the app sending info to "LearningSlots" component
        {{ Message }} <br />
      </template>

      <template #hello2="{ source }"> {{ source }} <br /></template> -->
    <!-- </learn-slots>
    <button @click="changeContent">Hello</button> -->
  </div>
</template>

<script>
// import LearnSlots from "./components/LearnSlots.vue";
import NavBar from "./components/NavBar.vue"

export default {
  name: "App",
  components: {NavBar},
  data() {
    return {
      Message: "Great job test!!",
    };
  },
  methods: {
    // calls on a child component's method
    changeContent() {
      this.$refs.learn.changeList();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
