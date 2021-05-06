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
        //pairingCode: this.$store.getters.pairingname
      }
    },
      components: {
        ResultInfo
      },      
      mounted: function(){
         this.pairingName();
         this.setID(0);
         this.setSecondID(0);
         this.findStory(0);
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
              
              while (this.$store.getters.characters[this.$store.getters.storeid].pairs[kounter].code !== this.secondID) {
                  this.$store.commit("secondCharacter");
                  kounter++;
              }
          },
          findStory: function(qounter){
              
              this.$store.commit('nollaaStory', '0');
              while (this.$store.getters.pairings[qounter].code !== this.$store.getters.pairingname){
                  this.$store.commit("storyEnding");
                  qounter++;
              }
              console.log(this.$store.getters.pairingname)
              console.log(this.$store.getters.storyid)
          },
          
          //CREATE PAIRING NAME
          pairingName: function(){
              var combo = '';
              if (this.characterID < this.secondID){
                  combo = this.characterID.concat(this.secondID);
                  this.$store.commit("nimeaPairing", combo);
              } else {
                  combo = this.secondID.concat(this.characterID);
                  this.$store.commit("nimeaPairing", combo);
              }
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
