<template>
  <div class="firstcharacterlist">
    <h1>Choose a Character</h1>
            <router-link :to="{ name: 'Second', params: { id: this.$route.params.name }}" tag="button" class="backbutton">Back</router-link><br/>
       
    <router-link :to="{ name: 'Second', params: { id: value.code }}" tag="button" v-for="(value, index) in this.$store.getters.characters" v-bind:key="index">{{value.name}}</router-link>
      <br/>
      <br/>
    <router-link :to="{ name: 'AddMore'}" tag="button" class="addButton">Add More</router-link>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        //id: '',
        //numero: '',
      }
    }
}
</script>


<style scoped>        
.firstcharacterlist {
    padding-top: 10px;
}
    
.firstcharacterlist button {
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

.firstcharacterlist button:hover {
  background-color: #3e8e41;
}
    
.backbutton {
    visibility: hidden;
}

.addButton {
  background-color: lightcoral !important;
}
</style>
