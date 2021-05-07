<template>
  <div class="firstcharacterlist">
    <h1>Make Additions</h1>
        <router-link :to="{ name: 'Pairings'}" tag="button" class="backbutton">Back</router-link>
    <h2>Add New Character</h2>
      <input v-model="charaname" placeholder="NAME" style="margin-right: 10px;">
      <input v-model="characode" placeholder="CODE">
      <button v-on:click="createCharacter()" style="margin-top: 5px;">Create New Character</button>
      
    <h2>Add Pairing</h2>
      
    <select v-model="selectedOne" style="margin-right: 5px;">
        <option v-for="(value, index) in this.$store.getters.characters" v-bind:key="index">
            {{ value.code }}
        </option>
    </select>
      &
    <select v-model="selectedTwo" style="margin-left: 5px;">
        <option v-for="(value, index) in this.$store.getters.characters" v-bind:key="index">
            {{ value.code }}
        </option>
    </select>
      <br/>
      <br/>
      <span>{{ selectedOne }} & {{selectedTwo}}</span><br/>
        <button v-on:click="pairingName()">Get pairing name</button>
      <p>{{this.pairingCode}}</p>
      <br/>
      <br/>
      <textarea v-model="ending" placeholder="add ending here"></textarea>
        <p style="white-space: pre-line;">{{ ending }}</p>
        <button v-on:click="realityCheck()">RealityCheck</button><br/>
        <button v-on:click="doEverything()">DoEverything</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>{{this.$store.getters.pairings[9]}}</p>
        <button v-on:click="easySorter()">sort</button>
      <p>{{this.$store.getters.characters.length}}</p>
      <p>{{this.$store.getters.characters[0].code}}</p>
      <p>{{this.$store.getters.characters[0].pairs}}</p>
      <br/>
      <br/>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        id: '',
        numero: '',
        selectedOne: '',
        selectedTwo: '',
        pairingCode: '',
        ending: '',
        
        charaname: '',
        characode: '',
        
        forSorter: this.$store.getters.pairings,
      }
    },
      methods: {
          doEverything: function(){
              this.pairingName();
              this.realityCheck();
              this.easySorter();
          },
          
          //SORT ENDINGS
          easySorter: function(){              
            this.$store.getters.pairings.sort(function(a, b){
                if(a.code < b.code) { return -1; }
                if(a.code > b.code) { return 1; }
                return 0;
            })
                console.log(this.$store.getters.pairings);
          },
          
          //SORT CHARACTERS
          charaSorter: function(){              
            this.$store.getters.characters.sort(function(a, b){
                if(a.code < b.code) { return -1; }
                if(a.code > b.code) { return 1; }
                return 0;
            })
          },
          
          //ADD A NEW CHARACTER
          createCharacter: function(){
                 this.$store.commit('ADD_CHARACTER', {code: this.characode, name: this.charaname, pairs: []});
                 this.charaSorter();
                 console.log('New character ' + this.charaname + " was added.");
          },
          
          //CREATE PAIRING NAME
          pairingName: function(){
              //var combo = '';
              if (this.selectedOne < this.selectedTwo){
                  this.pairingCode = this.selectedOne.concat(this.selectedTwo)
                  console.log(this.pairingCode)
                  //combo = this.characterID.concat(this.secondID);
                  //this.$store.commit("nimeaPairing", combo);
              } else {
                  this.pairingCode = this.selectedTwo.concat(this.selectedOne)
                  console.log(this.pairingCode)
                  //combo = this.secondID.concat(this.characterID);
                  //this.$store.commit("nimeaPairing", combo);
              }
          },
        //DOES PAIRING EXIST ALREADY? IF NOT COMMIT CHANGES.
          realityCheck: function(){
             //console.log('RealityCheck' + this.$store.getters.pairings.length)
             
             var i = 0;
             var permission = true;
              
             for (i = 0; i < this.$store.getters.pairings.length; i++) {
                //console.log(i + ". " +  this.$store.getters.pairings[i].code + " " + this.pairingCode);
                
                if (this.pairingCode == this.$store.getters.pairings[i].code) {
                    //console.log('It exists already :o');
                    permission = false;
                    break; 
                }
             }
              
             //COMMIT CHANGES IF POSSIBLE
             if (permission == true) {
                 //ending and shipname
                 this.$store.commit('ADD_ENDING', {code: this.pairingCode, ending: this.ending});
                 console.log(this.$store.getters.pairings);

                                  
                 //personal data
                 var e = 0;
                 
                 for (e = 0; e < this.$store.getters.characters.length; e++){
                     console.log(e + "." + this.selectedOne + " = " + this.$store.getters.characters[e].code);
                     
                     if (this.selectedOne == this.$store.getters.characters[e].code) {
                         console.log("SAME HAT! " + e)
                         
                         this.$store.commit('ADD_PAIR_INDEX', e);
                        //console.log(this.$store.getters.addpairindex);
                        //console.log(this.$store.getters.characters[this.$store.getters.addpairindex].pairs);
                         
                         this.$store.commit('ADD_PAIR', {code: this.selectedOne, name: 'nameh'});
                         //this.$store.commit('ADD_PAIR', {code: this.selectedOne, name: this.selectedOne}, e);
                     }
                 }
                 
            /*     var e = 0;
                 for (e = 0; e < this.$store.getters.characters.length; e++) {
                    if (this.selectedOne == this.$store.getters.characters[e].code)
                        this.$store.commit('ADD_PAIR', {code: this.selectedOne, name: 'namehere' }, e);
                 }*/
                 
                 
                 console.log('Added');
                 console.log(this.$store.getters.characters);
             } else {
                 console.log("Can't add the pair");
             }
              
          }
      },
}
</script>


<style scoped>        
.firstcharacterlist {
    padding-top: 10px;
}
    

.backbutton {
    border: 0px;
    background: #c9c9c9;
    padding: 5px 10px;
    cursor:pointer;
}
</style>
