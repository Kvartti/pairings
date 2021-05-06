<template>
  <div class="pairmain">
    <h1>Ending</h1>
        <ResultInfo/>
  </div>
</template>

<script>
import ResultInfo from '../components/ResultInfo.vue'
    
  export default {
    data() {
      return {
        characterID: this.$route.params.name,
        secondID: this.$route.params.second,
      }
    },
      components: {
        ResultInfo
      },      
      mounted: function(){
         this.setID(0);
         this.setSecondID(0);
      },
      methods: {
          setID: function(counter){
                
              this.$store.commit('nollaa', '0');
              
              while (this.$store.getters.characters[counter].code !== this.characterID) {
                  this.$store.commit("rightCharacter");
                  counter++;
              }
          },
          setSecondID: function(kounter){
              
              this.$store.commit('nollaaToinen', '0');
            console.log(this.$store.getters.characters[this.$store.getters.storeid].code);
            console.log(this.$store.getters.characters[this.$store.getters.storeid].pairs[kounter].name);
              
              while (this.$store.getters.characters[this.$store.getters.storeid].pairs[kounter].code !== this.secondID) {
                  this.$store.commit("secondCharacter");
                  kounter++;
              } console.log(this.$store.getters.characters[this.$store.getters.storeid].pairs[kounter].name);
          }
      },
};
</script>

<style scoped>
.pairmain {
    padding-top: 10px;
}
    
.pairmain a:link, a:visited {
  color: #2c3e50;
}

.pairmain a:hover, a:active {
  color: red;
  text-decoration: none;
}
</style>
