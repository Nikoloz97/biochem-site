<template>
  <div id="app">
    <welcome-screen msg="Welcome to LearnBiochem"/>

    <pre-test></pre-test>
    <router-view></router-view>
  </div>
</template>

<script>
import WelcomeScreen from './views/WelcomeScreen.vue';
import PreTest from './views/Pre-Test.vue'

export default {
  name: 'App',
  components: {
    WelcomeScreen,
    PreTest
  },

}
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
