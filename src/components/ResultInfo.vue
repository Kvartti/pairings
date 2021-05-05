<template>
    <div class="result-outer"> 
        <router-link :to="{ name: 'Second', params: { id: this.$route.params.name }}" tag="button" class="backbutton">Back</router-link>
        
        <!-- BYLETH (F) & YURI -->
        <div v-if="(this.$route.params.name == 'byleth_f' || this.$route.params.second == 'byleth_f') && (this.$route.params.name == 'dimitri' || this.$route.params.second == 'dimitri')">
            <h2 v-if="this.$route.params.name == 'byleth_f'">BYLETH (F)  & DIMITRI</h2>
            <h2 v-else>DIMITRI & BYLETH (F)</h2>
            <p>Paired with the end of the war, the joyous marriage of Byleth, the newly-appointed archbishop, and Dimitri, the newly-crowned king of Faerghus, gave the people of Fodlan much to celebrate. The two were devoted to improving life for the people and to seeking greater wisdom in order to reform the government and the church from the inside out. As leaders of church and state respectively, at times they engaged in heated debate. Even still, when enjoying a long horse ride or a quiet evening, they were not as the world saw them, but rather two adoring spouses, desperately in love. They remained as such for the rest of their days.</p>
        </div>
        
        <!-- BYLETH (F) & YURI -->
        <div v-else-if="(this.$route.params.name == 'byleth_f' || this.$route.params.second == 'byleth_f') && (this.$route.params.name == 'yuri' || this.$route.params.second == 'yuri')">
            <h2 v-if="this.$route.params.name == 'byleth_f'">BYLETH (F)  & YURI</h2>
            <h2 v-else>YURI & BYLETH (F)</h2>
            <p>As the new Archbishop of the Church of Seiros, Byleth worked tirelessly to reform and rebuild in the aftermath of a devastating war. Constantly at her side during that time was her husband, Yuri, whose policy proposals led, time and again, to better education and opportunities for the less fortunate-a legacy that was later taken up by the couple's children. A trove of their love letters, uncovered many years later, revealed that she called him by an entirely different name in private. Scholars have never learned why.</p>
        </div>
        
        <!-- CONSTANCE & YURI -->
        <div v-else-if="(this.$route.params.name == 'yuri' || this.$route.params.second == 'yuri') && (this.$route.params.name == 'constance' || this.$route.params.second == 'constance')">
            <h2 v-if="this.$route.params.name == 'constance'">CONSTANCE & YURI</h2>
            <h2 v-else>YURI & CONSTANCE</h2>
            <p>After the war, Constance devoted herself to her magical research. Her unorthodox methods allowed her to make great strides, which earned her acclaim and eventually enabled her to restore her noble house. Afterward, almost as if to spite her detractors, she married Yuri. The pair made a happy, if unconventional, couple, as the husband frequently ventured away for months on end. In the long years of their marriage, however, Constance laughed off any concerns-she was known to say that Yuri always knew how to find his way home. Many decades later, he passed away in bed alongside his beloved wife.</p>
        </div>
        
        <div v-else>
            <h2>Tapahtui vahinko :o</h2>
            <p>Tätä paria ei löytynyt</p>
        </div>
        
        
        

    </div>
</template>

<script>
export default {
    data() {
      return {
        name: 'ResultInfo',
      }
    },
  }
</script>

<style>
.result-outer {
    margin: 0px 100px;
}

.backbutton {
    border: 0px;
    background: #c9c9c9;
    padding: 5px 10px;
}
</style>