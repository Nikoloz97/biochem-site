<template>
  <div id="app">
    <router-link to="/">Home | </router-link>
    <router-link to="/pretest">Pre-test</router-link>

    <!-- Router-view = displays all router-links. 
         **How does it default to Home View?  -->
    <router-view></router-view>

    <!-- Learning how slots work... -->
    <learn-slots ref="learn">
      <!-- <template #hello
        >This is the app sending info to "LearningSlots" component
        {{ Message }} <br />
      </template>

      <template #hello2="{ source }"> {{ source }} <br /></template> -->
    </learn-slots>
    <button @click="changeContent">Hello</button>
  </div>
</template>

<script>
import LearnSlots from "./components/LearnSlots.vue";

export default {
  name: "App",
  components: { LearnSlots },
  data() {
    return {
      Message: "Great job!!",
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
  margin-top: 60px;
}
</style>
