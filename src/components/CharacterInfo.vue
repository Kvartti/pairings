<template>
    <div> 
        <router-link :to="{ name: 'Pairings'}" tag="button" class="backbutton">Back</router-link>
        <div v-switch="this.$route.params.id" class="firstcharacterlist">
        <!-- BYLETH (F) POSSIBLE PAIRINGS -->
          <div v-case="'byleth_f'">
              <h2>BYLETH (F)</h2>
                <router-link :to="{ name: 'Result', params: { name: 'byleth_f', second: 'dimitri' }}" tag="button">Dimitri</router-link>
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
    </div>
</template>

<script>
export default {
  name: 'CharacterInfo',
}
</script>

<style scoped>        
.firstcharacterlist button {
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

.firstcharacterlist button:hover {
  background-color: #3e8e41;
}
.backbutton {
    border: 0px;
    background: #c9c9c9;
    padding: 5px 10px;
}
</style>