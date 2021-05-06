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
        //characterID: this.$route.params.id,
        firstCharacter: this.$route.params.id,
        characters: this.characters,
        //pairList: this.$route.params.id + '.pairs',
        //i: this.props.i,
        testi: '',
        id: this.$store.getters.storeid,
       /*   props: {
              i: 1
          },*/
      }
    },
      components: {
        CharacterInfo
      },       
      mounted: function(){
         console.log(this.firstCharacter);
         //console.log(this.i);
         //console.log(this.characters);
         //console.log(this.characters[0].code);
         //console.log(this.characters[1].code);
         console.log(this.testi);
         this.testi = 'hi'
         console.log(this.testi);
         console.log(this.id);
         console.log(this.id);
         this.setID();
       /* while (this.firstCharacter !== this.characters[1].code) {
             this.i++;
             console.log(':(');
            }*/
      },
      methods: {
          setID: function(){
              console.log('SETid MENI LÄPI :D');
                //this.$store.commit.storeid = 15;
                this.$store.commit("rightCharacter");
              console.log(this.$store.getters.storeid);
              //console.log(this.)
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
