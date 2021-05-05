<template>
    <div> 
        <!--           
        <div v-if="$store.state.clanname === 'Naranginan'">
              <h4>Naranginan</h4>
              <p>Naranja</p>
          </div>
        
          <div v-if="$store.state.clanname === 'Kahachar'">
              <h4>Kahachar</h4>
              <p>Kahhhakka</p>
          </div>

          <div v-if="$store.state.clanname === 'Sabres'">
              <h4>Sabres</h4>
              <p>hEI</p>
          </div> -->
        
        
        
        <div v-switch="this.$route.params.id">
          <div v-case="'22'">
              <h2>Tämä on 22</h2>
              <p>Hehehe</p>
              <p>{{$store.state.numero}}</p>
          </div>
            
          <div v-case="'999'">
              <h2>Tämä on 999</h2>
              <p>Hehehe</p>
                <b><router-link :to="{ name: 'Result', params: { name: '999', second: '50' }}" v-on:click.native="$store.commit('firstCharacterID', '999')">Toimisko tämä (999)</router-link></b>
          </div>
            
          <div v-default>
              <h2>Tapahtui vahinko :o</h2>
              <p>Tätä hahmoa ei löytynyt</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CharacterInfo',
}
</script>