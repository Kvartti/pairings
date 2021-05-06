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
 },
    
 getters: {
     //id: state => state.id,
     //chosencharacter: state => state.chosencharacter,
     numero: state => state.numero,
     count: state => state.count,
     storeid: state => state.storeid,
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

