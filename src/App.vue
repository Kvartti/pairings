<template>
  <div id="app">
<!--    <div class="navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/pairings">Pairings</router-link> 
    </div> -->
      
    <router-view/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
}
</script>

<style>
body {
    background: black;        
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
  background: white;
  min-height: 600px;
}

.navigation a:link, a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.navigation a:hover, a:active {
  background-color: red;
}
</style>
