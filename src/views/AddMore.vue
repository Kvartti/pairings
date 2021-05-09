<template>
  <div class="firstcharacterlist">
    <h1>Make Additions</h1>
        <router-link :to="{ name: 'Pairings'}" tag="button" class="backbutton">Back</router-link>
    <h2>Add New Character</h2>
      <p>Write new character's name and a code to appear in the url.<br/> <i>E.g. Felix / felix, Byleth (F) / byleth_f</i></p>
        <input v-model="charaname" placeholder="Name" @keyup.enter="createCharacter()"><br/>
        <input v-model="characode" placeholder="code" @keyup.enter="createCharacter()"><br/>
        
        <button v-on:click="createCharacter()" style="margin-top: 5px;" id="charabutton">Add New Character</button>
      <div id="confirmChara"></div>
      <br/>
      <br/>
      
      
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
      <textarea v-model="ending" placeholder="add ending here"></textarea>
      <br/>
      <button v-on:click="doEverything()">Add Ending</button><br/>
      <div id="confirmEnding"></div>
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
        formalnameOne: '',  
        formalnameTwo: '',  
          
        pairingCode: '',
        ending: '',
        
        charaname: '',
        characode: '',
        
        forSorter: this.$store.getters.pairings,
      }
    },
      methods: {
          //EVERYTHING TO ADD THE ENDING (for the button)
          doEverything: function(){
              this.pairingName();
              this.realityCheck();
              this.easySorter();
              this.charapairSorter();
          },
          
          //SORT ENDINGS
          easySorter: function(){              
            this.$store.getters.pairings.sort(function(a, b){
                if(a.code < b.code) { return -1; }
                if(a.code > b.code) { return 1; }
                return 0;
            })
          },
          
          //SORT CHARACTERS
          charaSorter: function(){              
            this.$store.getters.characters.sort(function(a, b){
                if(a.code < b.code) { return -1; }
                if(a.code > b.code) { return 1; }
                return 0;
            })
          },
          
          //ADD A NEW CHARACTER (for the button)
          createCharacter: function(){
                 var w = 0;
                 var ready = true;
              
                 for (w = 0; w < this.$store.getters.characters.length; w++){
                     if (this.characode == this.$store.getters.characters[w].code || this.charaname == this.$store.getters.characters[w].name){
                         ready = false;
                         console.log(ready);
                     }
                 }
              
                if (ready == true) {
                    this.$store.commit('ADD_CHARACTER', {code: this.characode, name: this.charaname, pairs: []});
                    this.charaSorter();
                    this.confirmChara();
                    console.log('New character ' + this.charaname + " was added.");    
                } else {
                    this.noChara();
                    console.log("Couldn't add the character")
                }
              
              
          },
          
          //CREATE PAIRING NAME
          pairingName: function(){
              if (this.selectedOne < this.selectedTwo){
                  this.pairingCode = this.selectedOne.concat(this.selectedTwo)
                  console.log(this.pairingCode)
              } else {
                  this.pairingCode = this.selectedTwo.concat(this.selectedOne)
                  console.log(this.pairingCode)
              }
          },
        //DOES PAIRING EXIST ALREADY? IF NOT COMMIT CHANGES.
          realityCheck: function(){
             var i = 0;
             var permission = true;
              
             for (i = 0; i < this.$store.getters.pairings.length; i++) {
                
                if (this.pairingCode == this.$store.getters.pairings[i].code) {
                    permission = false;
                    this.noEnding();
                    break; 
                }
             }
              
             //COMMIT CHANGES IF POSSIBLE
             if (permission == true) {
                 //ending and shipname
                 this.$store.commit('ADD_ENDING', {code: this.pairingCode, ending: this.ending});
                 console.log(this.$store.getters.pairings);

                 var e = 0;
                 for (e = 0; e < this.$store.getters.characters.length; e++){
                     console.log(e + "." + this.selectedOne + " = " + this.$store.getters.characters[e].code);
                     this.findProperNamesOne();
                     this.findProperNamesTwo();
                    
                     //EKAN TYYPIN NIMI                  
                     if (this.selectedOne == this.$store.getters.characters[e].code) {
                         console.log("SAME HAT! " + e)
                         
                         this.$store.commit('ADD_PAIR_INDEX', e);
                         this.$store.commit('ADD_PAIR', {code: this.selectedTwo, name: this.$store.getters.formalnameTwo});
                         this.charapairSorter();
                     }                          
                     //TOKAN TYYPIN NIMI
                     else if (this.selectedTwo == this.$store.getters.characters[e].code) {
                         console.log("SAME HAT! " + e)
                         
                         this.$store.commit('ADD_PAIR_INDEX', e);
                         this.$store.commit('ADD_PAIR', {code: this.selectedOne, name: this.$store.getters.formalnameOne});
                         this.charapairSorter();
                     } 
                 }
                 this.confirmEnding();
                 //this.charapairSorter();
                 //console.log(this.$store.getters.characters);
             } else {
                 console.log("Can't add the pair");
             }
              
          },
          
          //CHARACTER PAIR SORTER
          charapairSorter: function(){              
            this.$store.getters.characters[this.$store.getters.addpairindex].pairs.sort(function(a, b){
                if(a.code < b.code) { return -1; }
                if(a.code > b.code) { return 1; }
                return 0;
            })
          },
          findProperNamesOne: function(){
              var counter = 0;
             
              while (this.selectedOne !== this.$store.getters.characters[counter].code)  {
                  console.log(counter + ": " + this.$store.getters.characters[counter].code);
                  counter++;
              }
                  this.$store.commit('setFormalOne', this.$store.getters.characters[counter].name);
                  console.log(this.$store.getters.formalnameOne);
          },
          findProperNamesTwo: function(){
              var counter = 0;
             
              while (this.selectedTwo !== this.$store.getters.characters[counter].code)  {
                  console.log(counter + ": " + this.$store.getters.characters[counter].code);
                  counter++;
              }
                  this.$store.commit('setFormalTwo', this.$store.getters.characters[counter].name);
                  console.log(this.$store.getters.formalnameTwo);
          },
          
          //CONFIRM ADDITIONS
          confirmChara: function(){ 
            var chadiv = document.getElementById('confirmChara');
            chadiv.innerHTML += "Character added <br/>";   
          },
          noChara: function(){
            var chadiv = document.getElementById('confirmChara');
            chadiv.innerHTML += "Couldn't add the character (the name or code exists already) <br/>";   
          },
          
          confirmEnding: function(){  
            var enddiv = document.getElementById('confirmEnding');
            enddiv.innerHTML += 'Ending added <br/>';
          },
          noEnding: function(){
            var enddiv = document.getElementById('confirmEnding');
            enddiv.innerHTML += "Couldn't add the ending (it exists already)<br/>";   
          },
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
    
textarea {
  width: 40%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}
    
select {
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #dddddd;
}
    
input {
  width: 35%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  text-align: center;
}

button {
  background-color: #66c066;
  border: none;
  padding: 15px 32px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  float: center;
}
</style>
