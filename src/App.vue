<template>
  <div id="app">

    <router-link to="/">Home | </router-link>
    <router-link to="/pretest">Pre-test</router-link>
    
    <!-- Router-view = displays all router-links. 
         **How does it default to welcome screen?  -->
    <router-view></router-view>

    
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {},
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
