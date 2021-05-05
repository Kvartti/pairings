<template>
  <div class="pairmain">
    <h1>Result</h1>
                <ResultInfo/>
  </div>
</template>

<script>
import ResultInfo from '../components/ResultInfo.vue'
    
  export default {
    data() {
      return {
        characterID: this.$route.params.name,
      }
    },
      components: {
        ResultInfo
      },  
    props: {
        name: {
          type: String,
          required: true
        },
        second: {
          type: String,
          required: true
        },
  }
};
</script>

<style scoped>
.pairmain a:link, a:visited {
  color: #2c3e50;
}

.pairmain a:hover, a:active {
  color: red;
  text-decoration: none;
}
</style>
