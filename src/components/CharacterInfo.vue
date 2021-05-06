<template>
    <div> 
        <router-link :to="{ name: 'Pairings'}" tag="button" class="backbutton">Back</router-link>

    <div id="data">
        <div v-switch="this.$route.params.id">
          <div v-case="this.$store.getters.characters[this.$store.getters.storeid].code">
        <h1>{{this.$store.getters.characters[this.$store.getters.storeid].name}}</h1>        
           <router-link :to="{ name: 'Result', params: { name: firstCharacter, second: value.code }}" tag="button" 
            v-for="(value, index) in this.$store.getters.characters[this.$store.getters.storeid].pairs" v-bind:key="index">{{value.name}}</router-link>
         </div>
            
          <div v-default>
              <h2>Tapahtui vahinko :o</h2>
              <p>Tätä hahmoa ei löytynyt</p>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'CharacterInfo',
  //el: '#data',
    data() {
      return {
          firstCharacter: this.$route.params.id,
      }
    }    
}
</script>

<style scoped>        
#data button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  float: center;
}

#data button:hover {
  background-color: #3e8e41;
}
.backbutton {
    border: 0px;
    background: #c9c9c9;
    padding: 5px 10px;
}
</style>