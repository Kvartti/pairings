<template>
    <div> 
        <div v-switch="this.$route.params.name">
          <div v-case="'22'">
              <h2>Tämä on 22</h2>
              <p>Hehehe</p>
              <p>{{$store.state.numero}}</p>
          </div>
            
            
         <!--999 RESULTS -->
          <div v-case="'999'">
              <div v-switch="this.$route.params.second">
                  
                <!-- 50 -->
                <div v-case="'50'">
                    <h2>{{this.$route.params.name}} & {{this.$route.params.second}}</h2>
                    <p>Tähän tulisi 999 ja 50 :oc</p>
                </div>  
                  
                <!-- 68 -->
                <div v-case="'68'">
                    <h2>{{this.$route.params.name}} & {{this.$route.params.second}}</h2>
                    <p>Tähän tulisi 999 ja 68 :oc</p>
                </div>  
                  
                <!-- DEFAULT aka ERROR-->
                <div v-default>
                    <h2>Tapahtui vahinko :o</h2>
                    <p>Tätä paria ei löytynyt</p>
                </div>
                  
              </div>
          </div>
            
            
          <!-- DEFAULT aka ERROR-->
          <div v-default>
              <h2>Tapahtui vahinko :o</h2>
              <p>Tätä hahmoa ei löytynyt</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ResultInfo',
}
</script>