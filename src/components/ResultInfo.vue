<template>
    <div class="result-outer"> 
        <router-link :to="{ name: 'Second', params: { id: this.$route.params.name }}" tag="button" class="backbutton">Back</router-link>
        
        <div v-if="(this.$store.getters.characters[this.$store.getters.storeid].code == this.$route.params.name) && (this.$store.getters.characters[this.$store.getters.storeid].pairs[this.$store.getters.secondid].code == this.$route.params.second)">
            <!-- <h2>{{this.$store.getters.characters[this.$store.getters.storeid].name}} & {{this.$store.getters.characters[this.$store.getters.storeid].pairs[this.$store.getters.secondid].name}}</h2>
            <p>{{this.$store.getters.characters[this.$store.getters.storeid].pairs[this.$store.getters.secondid].ending}}</p> -->
            
         <!--   <h2>{{this.$store.getters.characters[this.$store.getters.storeid].name}} & {{this.$store.getters.characters[this.$store.getters.storeid].pairs[this.$store.getters.secondid].name}}</h2>
            <p>{{this.$store.getters.pairings[this.$store.getters.storyid].ending}}</p>
            <p>{{this.$store.getters.storyid}}</p>
            <p>{{this.$store.getters.pairings[this.$store.getters.storyid]}}</p>
            
            <p>{{this.$store.getters.pairingname}}</p>-->
            <h2>{{this.$store.getters.characters[this.$store.getters.storeid].name}} & {{this.$store.getters.characters[this.$store.getters.storeid].pairs[this.$store.getters.secondid].name}}</h2>
            <p>{{this.$store.getters.pairings[this.$store.getters.storyid].ending}}</p>
            
            
        </div>
        
        <div v-else>
            <h2>Tapahtui vahinko :o</h2>
            <p>Tätä paria ei löytynyt</p>
        </div>
        
        
    <!--    <div v-if="(this.$route.params.name == 'byleth_f' || this.$route.params.second == 'byleth_f') && (this.$route.params.name == 'dimitri' || this.$route.params.second == 'dimitri')">
            <h2 v-if="this.$route.params.name == 'byleth_f'">BYLETH (F)  & DIMITRI</h2>
            <h2 v-else>DIMITRI & BYLETH (F)</h2>
            <p>Paired with the end of the war, the joyous marriage of Byleth, the newly-appointed archbishop, and Dimitri, the newly-crowned king of Faerghus, gave the people of Fodlan much to celebrate. The two were devoted to improving life for the people and to seeking greater wisdom in order to reform the government and the church from the inside out. As leaders of church and state respectively, at times they engaged in heated debate. Even still, when enjoying a long horse ride or a quiet evening, they were not as the world saw them, but rather two adoring spouses, desperately in love. They remained as such for the rest of their days.</p>
        </div>        
        
        <div v-else-if="(this.$route.params.name == 'byleth_f' || this.$route.params.second == 'byleth_f') && (this.$route.params.name == 'dorothea' || this.$route.params.second == 'dorothea')">
            <h2 v-if="this.$route.params.name == 'byleth_f'">BYLETH (F)  & DOROTHEA</h2>
            <h2 v-else>DOROTHEA & BYLETH (F)</h2>
            <p>After taking on the role of archbishop of the Church of Seiros, Byleth announced her marriage to Dorothea. The former songstress resolved to stay out of the public eye, keeping to herself and her family, but as the archbishop worked tirelessly to restore Fodlan and the church, she did privately offer advice from time to time. It is said that her experience growing up as a commoner provided a useful perspective. Many years later, her diary was uncovered, revealing the full extent of the happy life the couple shared. The love poems that they wrote to one another were published as a collection.</p>
        </div>        
        
        <div v-else-if="(this.$route.params.name == 'byleth_f' || this.$route.params.second == 'byleth_f') && (this.$route.params.name == 'ferdinand' || this.$route.params.second == 'ferdinand')">
            <h2 v-if="this.$route.params.name == 'byleth_f'">BYLETH (F)  & FERDINAND</h2>
            <h2 v-else>FERDINAND & BYLETH (F)</h2>
            <p>After taking her place as the new archbishop of the Church of Seiros, Byleth announced her marriage to Ferdinand, who had assumed his place as Duke Aegir. The archbishop's husband overcame a slew of obstacles to reform his family's territory and Hrym but took no official position with the church, providing only guidance and support in his capacity as a loving spouse. History books extol Ferdinand's success as a lord of his territories, but they make no mention of his marriage to the archbishop. Thus, half of his life's work is lost to time.</p>
        </div>
        
        <div v-else-if="(this.$route.params.name == 'byleth_f' || this.$route.params.second == 'byleth_f') && (this.$route.params.name == 'yuri' || this.$route.params.second == 'yuri')">
            <h2 v-if="this.$route.params.name == 'byleth_f'">BYLETH (F)  & YURI</h2>
            <h2 v-else>YURI & BYLETH (F)</h2>
            <p>As the new Archbishop of the Church of Seiros, Byleth worked tirelessly to reform and rebuild in the aftermath of a devastating war. Constantly at her side during that time was her husband, Yuri, whose policy proposals led, time and again, to better education and opportunities for the less fortunate-a legacy that was later taken up by the couple's children. A trove of their love letters, uncovered many years later, revealed that she called him by an entirely different name in private. Scholars have never learned why.</p>
        </div>
        
        <div v-else-if="(this.$route.params.name == 'yuri' || this.$route.params.second == 'yuri') && (this.$route.params.name == 'constance' || this.$route.params.second == 'constance')">
            <h2 v-if="this.$route.params.name == 'constance'">CONSTANCE & YURI</h2>
            <h2 v-else>YURI & CONSTANCE</h2>
            <p>After the war, Constance devoted herself to her magical research. Her unorthodox methods allowed her to make great strides, which earned her acclaim and eventually enabled her to restore her noble house. Afterward, almost as if to spite her detractors, she married Yuri. The pair made a happy, if unconventional, couple, as the husband frequently ventured away for months on end. In the long years of their marriage, however, Constance laughed off any concerns-she was known to say that Yuri always knew how to find his way home. Many decades later, he passed away in bed alongside his beloved wife.</p>
        </div>
        
        <div v-else-if="(this.$route.params.name == 'dorothea' || this.$route.params.second == 'dorothea') && (this.$route.params.name == 'ferdinand' || this.$route.params.second == 'ferdinand')">
            <h2 v-if="this.$route.params.name == 'dorothea'">DOROTHEA & FERDINAND</h2>
            <h2 v-else>FERDINAND & DOROTHEA</h2>
            <p>After officially becoming the new Duke Aegir, Ferdinand set about reforming his territory. Thanks to the wisdom of his wife, Dorothea, Ferdinand's policies were of massive benefit to the commonfolk and brought about a swift recovery. In recognition of this achievement, he was called upon to help govern to Fodlan at large. Though the work of reforming the entire nation kept him very busy, he always managed to find time for Dorothea. It is said that their children filled their loving household with beautiful music ever after.</p>
        </div>
        
        <div v-else>
            <h2>Tapahtui vahinko :o</h2>
            <p>Tätä paria ei löytynyt</p>
        </div> -->
        
        
        

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
    margin: 0px 50px;
}

.backbutton {
    border: 0px;
    background: #c9c9c9;
    padding: 5px 10px;
    cursor:pointer;
}
</style>