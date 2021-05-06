<template>
    <div> 
        <router-link :to="{ name: 'Pairings'}" tag="button" class="backbutton">Back</router-link>
        <div v-switch="this.$route.params.id" class="firstcharacterlist">
        <!-- BYLETH (F) POSSIBLE PAIRINGS -->
          <div v-case="'byleth_f'">
              <h2>BYLETH (F)</h2>
                <router-link :to="{ name: 'Result', params: { name: 'byleth_f', second: 'dimitri' }}" tag="button">Dimitri</router-link>
                <router-link :to="{ name: 'Result', params: { name: 'byleth_f', second: 'dorothea' }}" tag="button">Dorothea</router-link>
                <router-link :to="{ name: 'Result', params: { name: 'byleth_f', second: 'ferdinand' }}" tag="button">Ferdinand</router-link>
                <router-link :to="{ name: 'Result', params: { name: 'byleth_f', second: 'yuri' }}" tag="button">Yuri</router-link>
          </div>
            
        <!-- CONSTANCE POSSIBLE PAIRINGS -->
          <div v-case="'constance'">
              <h2>CONSTANCE</h2>
                <router-link :to="{ name: 'Result', params: { name: 'constance', second: 'yuri' }}" tag="button">Yuri</router-link>
          </div>
            
        <!-- DIMITRI POSSIBLE PAIRINGS -->
          <div v-case="'dimitri'">
              <h2>DIMITRI</h2>
                <router-link :to="{ name: 'Result', params: { name: 'dimitri', second: 'byleth_f' }}" tag="button">Byleth (F)</router-link>
          </div>
            
        <!-- DOROTHEA POSSIBLE PAIRINGS -->
          <div v-case="'dorothea'">
              <h2>DOROTHEA</h2>
                <router-link :to="{ name: 'Result', params: { name: 'dorothea', second: 'byleth_f' }}" tag="button">Byleth (F)</router-link>
                <router-link :to="{ name: 'Result', params: { name: 'dorothea', second: 'ferdinand' }}" tag="button">Ferdinand</router-link>
          </div>
            
        <!-- FERDINAND POSSIBLE PAIRINGS -->
          <div v-case="'ferdinand'">
              <h2>FERDINAND</h2>
                <router-link :to="{ name: 'Result', params: { name: 'ferdinand', second: 'byleth_f' }}" tag="button">Byleth (F)</router-link>
                <router-link :to="{ name: 'Result', params: { name: 'ferdinand', second: 'dorothea' }}" tag="button">Dorothea</router-link>
          </div>
            
        <!-- YURI POSSIBLE PAIRINGS -->
          <div v-case="'yuri'">
              <h2>YURI</h2>
                <router-link :to="{ name: 'Result', params: { name: 'yuri', second: 'constance' }}" tag="button">Constance</router-link>
              
                <router-link :to="{ name: 'Result', params: { name: 'yuri', second: 'byleth_f' }}" tag="button">Byleth (F)</router-link>
          </div>
            
          <div v-default>
              <h2>Tapahtui vahinko :o</h2>
              <p>Tätä hahmoa ei löytynyt</p>
          </div>
        </div>

        <div id="data">

            <h1>KOLMAS</h1>
           <!--<router-link :to="{ name: 'Result', params: { name: firstCharacter, second: value.code }}" tag="button" 
            v-for="(value, index) in this.characters[i].pairs" v-bind:key="index">{{value.name}}</router-link>-->
           <router-link :to="{ name: 'Result', params: { name: firstCharacter, second: value.code }}" tag="button" 
            v-for="(value, index) in this.$store.getters.characters[this.$store.getters.storeid].pairs" v-bind:key="index">{{value.name}}</router-link>
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
          //pairList: this.$route.params.id + '.pairs',
          //i: this.$store.getters.storeid,
          
        /* props: {
              i: this.props.i
          },*/
          
      /*  while (firstCharacter !== this.characters[i].code) {
              
              i++;
            }, */
          
          //KOLMOS KOITOS
        /*  characters: [{
              //BYLETH (F)
              code: 'byleth_f', 
              name: 'Byleth (F)',
              pairs: [{
                code: 'dimitri',
                name: 'Dimitri'
              },{
                code: 'ferdinand',
                name: 'Ferdinand'
              },{
                code: 'yuri',
                name: 'Yuri'
              }]
          },{
              //DIMITRI
              code: 'dimitri', 
              name: 'Dimitri',
              pairs: [{
                code: 'byleth_f',
                name: 'Byleth (F)'
              }]
          },
        ],*/
          /*mounted(): {
              for (this.i; this.firstCharacter !== this.characters[this.i].code; this.i+1) {
                  console.log("this.i");
                }
          },
          
          
          methods: {
                onWindowLoad: function() {
                    var e = this.i;
                    
                    while (this.firstCharacter !== this.characters[e].code) {
                      console.log(e);
                      e++;
                      //this.i = this.e;
                      this.$set(this.i, this.e)  
                    }
                },
            },
          mounted: {
              onWindowLoad()
          },
       mounted: function(){
             while (this.firstCharacter !== this.characters[i].code) {
              
              i++;
            }
        },*/
          
          //KAKKOS KOITOS
          byleth_f: {
            name: 'Byleth (F)',
            array: [{name : 'omena', id: 'ei omena'},  {name: 'päärynä', id: 'ei päärynä'}],
            pairs: {
                dimitri: {
                    id: 'dimitri',
                    name: 'Dimitri',
                },
                dorothea: {
                    id: 'dorothea',
                    name: 'Dorothea',
                },
                ferdinand: {
                    id: 'ferdinand',
                    name: 'Ferdinand',
                },
                yuri: {
                    id: 'yuri',
                    name: 'Yuri',
                }
            }
        },
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