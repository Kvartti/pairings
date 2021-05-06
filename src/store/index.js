import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
     //id: '1',
     //chosencharacter: "katariina",
     numero: '0',
     count: 15,
     storeid: 0,
     i: 0,
     
    //KOLMOS KOITOS
          characters: [{
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
          },{
              //DIMITRI
              code: 'yuri', 
              name: 'Yuri',
              pairs: [{
                code: 'byleth_f',
                name: 'Byleth (F)'
              }]
          },
        ],
 },
    
    
 mutations: {
     increment (state) {
         state.count++;
     },
    incrementBy (state, n) {
        state.numero = n;
    },    
    firstCharacterID (state, n) {
        state.numero = n;
    },
    rightCharacter: (state) => state.storeid++,
    nollaa (state, n) {
        state.storeid = n;
    },
 },
    
 getters: {
     //id: state => state.id,
     //chosencharacter: state => state.chosencharacter,
     numero: state => state.numero,
     count: state => state.count,
     storeid: state => state.storeid,
     characters: state => state.characters,
     i: state => state.i,
 },
    
 methods: { 
    chooseID(state, chooseID) {
         state.id = chooseID;
     },
    firstCharacter(state, numero) {
        this.$store.commit('numero', numero.target.value)
    },
 },
    
 actions:   {
 },
});

/*import {mapState} from 'vuex';

new Vue({
    el: '#app',
    store,
    data: {
    },                          
    computed: mapState([
        'count'
    ]),                        
});

store.commit('increment');
console.log(store.state.count);*/

