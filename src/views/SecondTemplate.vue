<template>
  <div class="pairmain">
    <h1>Choose a Second Character</h1>
                <CharacterInfo/>
  </div>
</template>

<script>
import CharacterInfo from '../components/CharacterInfo.vue'
    
  export default {
    data() {
      return {
        firstCharacter: this.$route.params.id,
        characters: this.characters,
        testi: '',
        id: this.$store.getters.storeid,
      }
    },
      components: {
        CharacterInfo
      },       
      mounted: function(){
         this.setID(0);
      },
      methods: {
          setID: function(counter){
              console.log("0:" +  this.$store.getters.characters[0].code);
              console.log("1:" +  this.$store.getters.characters[1].code);
              console.log("2:" +  this.$store.getters.characters[2].code);
              
              console.log(this.$store.getters.characters[counter].code + " = "+this.firstCharacter);
                
              this.$store.commit('nollaa', '0');
              
              while (this.$store.getters.characters[counter].code !== this.firstCharacter) {
                  console.log('counter: ' + counter);
                  console.log('storeid: ' + this.$store.getters.storeid);
                  this.$store.commit("rightCharacter");
                  counter++;
              }
                  console.log('after while:')
                  console.log('counter: ' + counter);
                  console.log('storeid: ' + this.$store.getters.storeid);
          }
      }
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
