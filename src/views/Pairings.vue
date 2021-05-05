<template>
  <div class="pairmain">
    <h1>Choose a Character</h1>
    <p>Tää on se etusivu :oc</p>
    <p>hue hue hue hue :Dc</p>
    <b><router-link :to="{ name: 'Second', params: { id: '22' }}" v-on:click.native="$store.commit('incrementBy', '22')">Toimisko tämä (22)</router-link></b>
      <br/>
    <b><router-link :to="{ name: 'Second', params: { id: 999 }}" v-on:click.native="$store.commit('incrementBy', '999')">Toimisko tämä (999)</router-link></b>
      <br/>
      <br/>
    <b><router-link :to="{ name: 'Second', params: { id: '999' }}" v-on:click.native="$store.commit('firstCharacterID', '999')">Toimisko tämä (999)</router-link></b>
    <!--<router-link to="/1">Ykkönen</router-link><br>
    <router-link to="/katariina">Katariina</router-link>
      <br/>
    <router-link :to="{ name: 'Testi', params: { id: 22 }}" name="chooseID" @change="chooseID">User</router-link>
      <br/>
      <br/>
    <router-link to="/1" @click="firstCharacter('12')">Add one</router-link>
      <br/>
      <br/>
    <router-link to="/" v-on:click.native="$store.commit('incrementBy', 'mmmm')" >Tämä toimii</router-link>
      <br/>
    <a @click="$store.commit('incrementBy', 'mmmm')">Tämä(kin) toimii</a>
      <p>{{ $store.getters.id }}</p>
      <p>{{ $store.getters.numero }}</p> firstCharacterID-->
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
      }
    },
      
  /*  methods: {
    chooseID: function(event) {
      this.$store.commit('chooseID', event.target.value)
    },
    firstCharacter: function(numero) {
        this.$store.commit('firstCharacter', numero.target.value)
    }
  }*/
}
</script>


<style>
.pairmain a:link, a:visited {
  color: #2c3e50;
}

.pairmain a:hover, a:active {
  color: red;
  text-decoration: none;
}
.pairmain a:link, a:visited {
  color: #2c3e50;
}

.pairmain a:hover, a:active {
  color: red;
  text-decoration: none;
}
</style>
