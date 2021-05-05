<template>
  <div class="pairmain">
    <h1>Choose a Second Character</h1>
                <CharacterInfo/>
  </div>
</template>

<script>
import CharacterInfo from '../components/CharacterInfo.vue'
    
  export default {
    data() {
      return {
        characterID: this.$route.params.id,
      }
    },
      components: {
        CharacterInfo
      },
};
</script>

<style scoped>
.pairmain {
    padding-top: 10px;
}
    
.pairmain a:link, a:visited {
  color: #2c3e50;
}

.pairmain a:hover, a:active {
  color: red;
  text-decoration: none;
}
</style>
