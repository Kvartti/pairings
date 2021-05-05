<template>
  <div class="pairmain">
    <h1>Choose the Second Character</h1>
    <!-- <p>hue hue hue hue :Dc</p>
    <p>hue hue hue hue :Dc</p>
    <p>hue hue hue hue :Dc</p>
    <p>hue hue hue hue :Dc</p>

    <p>{{this.$route.params.id}}</p> -->
      
      <!--    <router-link to="/">Home</router-link>
      <br>
      <br>
    <router-link to="/1">Ykkönen</router-link><br>
    <router-link to="/katariina">Katariina</router-link> -->
                <CharacterInfo/>
      

    <p>{{this.$route.params.id}}</p> 

    <p>{{this.$route.params.id}}</p> 

    <p>{{this.$route.params.id}}</p> 
  </div>
</template>

<script>
import CharacterInfo from '../components/CharacterInfo.vue'
    
  export default {
    data() {
      return {
        characterID: this.$route.params.id,
      }
    },
      components: {
        CharacterInfo
      },
};
</script>

<style>
.pairmain a:link, a:visited {
  color: #2c3e50;
}

.pairmain a:hover, a:active {
  color: red;
  text-decoration: none;
}
</style>
