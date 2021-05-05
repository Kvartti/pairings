<template>
  <div class="about">
    <h1>Character Editor</h1>
    <p>Tää on se etusivu :oc</p>
      
    <p>{{$store.getters.count}}</p>
    <button @click="$store.commit('increment')">Olen button</button>
    <p>{{$store.getters.numero}}</p>
    <button @click="$store.commit('incrementBy', 'mmmm')">Olen button</button>
      <br/>
      <br/>
    <b><router-link to="/second" v-on:click.native="$store.commit('incrementBy', 'mmmm')">Toimisko tämä</router-link></b>
      <br/>
      <br/>
      <br/>
      <br/>
    <b><router-link :to="{ name: 'Second', params: { id: 22 }}" v-on:click.native="$store.commit('incrementBy', '22')">Toimisko tämä (22)</router-link></b>
      <br/>
    <b><router-link :to="{ name: 'Second', params: { id: 999 }}" v-on:click.native="$store.commit('incrementBy', '999')">Toimisko tämä (999)</router-link></b>
  </div>
</template>

<style>
.about a:link, a:visited {
  color: #2c3e50;
}

.about a:hover, a:active {
  color: red;
  text-decoration: none;
}
</style>
