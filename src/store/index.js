import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
     //numero: '0',
     //count: 15,
     pairingname: '',
     storeid: 0,
     secondid: 0,
     storyid: 0,
     i: 0,
     addpairindex: 0,
     
    //YHTEYDET ARRAY
          characters: [{
              //ANNETTE
              code: 'annette', 
              name: 'Annette',
              pairs: [{
                code: 'felix',
                name: 'Felix',
              },]
          },{
              //BYLETH (F)
              code: 'byleth_f', 
              name: 'Byleth (F)',
              pairs: [{
                code: 'dimitri',
                name: 'Dimitri',
              },{
                code: 'dorothea',
                name: 'Dorothea',
              },{
                code: 'felix',
                name: 'Felix',
              },{
                code: 'ferdinand',
                name: 'Ferdinand',
              },{
                code: 'yuri',
                name: 'Yuri',
              }]
          },{
              //CONSTANCE
              code: 'constance', 
              name: 'Constance',
              pairs: [{
                code: 'yuri',
                name: 'Yuri',
              },]
          },{
              //DIMITRI
              code: 'dimitri', 
              name: 'Dimitri',
              pairs: [{
                code: 'byleth_f',
                name: 'Byleth (F)',
              }]
          },{
              //DOROTHEA
              code: 'dorothea', 
              name: 'Dorothea',
              pairs: [{
                code: 'byleth_f',
                name: 'Byleth (F)',
              },{
                code: 'felix',
                name: 'Felix',
              },{
                code: 'ferdinand',
                name: 'Ferdinand',
              }]
          },{
              //FELIX
              code: 'felix', 
              name: 'Felix',
              pairs: [{
                code: 'annette',
                name: 'Annette',
              },{
                code: 'byleth_f',
                name: 'Byleth (F)',
              },{
                code: 'dorothea', 
                name: 'Dorothea',
              }]
          },{
              //FERDINAND
              code: 'ferdinand', 
              name: 'Ferdinand',
              pairs: [{
                code: 'byleth_f',
                name: 'Byleth (F)',
              },{
                code: 'dorothea', 
                name: 'Dorothea',
              }]
          },{
              //YURI
              code: 'yuri', 
              name: 'Yuri',
              pairs: [{
                code: 'byleth_f',
                name: 'Byleth (F)',
              },{
                code: 'constance',
                name: 'Constance',
              }]
          },
        ],
     pairings: [{
        code: 'annettefelix',
        ending: "After the war, Felix inherited the title of Duke Fraldarius from his late father, Rodrigue. Some time later, he married Annette, and the pair earned renown together by working hard at restoring their territory to and beyond its former glory. The people adored the pair: Felix for his fierce determination, and Annette for her boundless cheer. Years later, Annette threw herself into songwriting, and with the support and encouragement of her husband, she produced melodies that remained popular for generations. The lyrics became distorted over time, however, and the original meaning of the music was lost."
    },{
        code: 'byleth_fdimitri',
        ending: 'Paired with the end of the war, the joyous marriage of Byleth, the newly-appointed archbishop, and Dimitri, the newly-crowned king of Faerghus, gave the people of Fodlan much to celebrate. The two were devoted to improving life for the people and to seeking greater wisdom in order to reform the government and the church from the inside out. As leaders of church and state respectively, at times they engaged in heated debate. Even still, when enjoying a long horse ride or a quiet evening, they were not as the world saw them, but rather two adoring spouses, desperately in love. They remained as such for the rest of their days.'
    },{
        code: 'byleth_fdorothea',
        ending: "After taking on the role of archbishop of the Church of Seiros, Byleth announced her marriage to Dorothea. The former songstress resolved to stay out of the public eye, keeping to herself and her family, but as the archbishop worked tirelessly to restore Fodlan and the church, she did privately offer advice from time to time. It is said that her experience growing up as a commoner provided a useful perspective. Many years later, her diary was uncovered, revealing the full extent of the happy life the couple shared. The love poems that they wrote to one another were published as a collection."
    },{
        code: 'byleth_ffelix',
        ending: "Byleth married Felix, who had become Duke Fraldarius, shortly after she was named to succeed Rhea as archbishop. Felix focused his efforts on restoring his territory and the Kingdom and became the archbishop's closest confidant, both privately and officially. They often spent a lot of time apart, but whenever they reunited, they had a tradition of crossing blades before crossing words. Attendants remarked that the smiles they wore on their faces during these bouts were never seen elsewhere."
    },{
        code: 'byleth_fferdinand',
        ending: "After taking her place as the new archbishop of the Church of Seiros, Byleth announced her marriage to Ferdinand, who had assumed his place as Duke Aegir. The archbishop's husband overcame a slew of obstacles to reform his family's territory and Hrym but took no official position with the church, providing only guidance and support in his capacity as a loving spouse. History books extol Ferdinand's success as a lord of his territories, but they make no mention of his marriage to the archbishop. Thus, half of his life's work is lost to time."
    },{
        code: 'byleth_fyuri',
        ending: "As the new Archbishop of the Church of Seiros, Byleth worked tirelessly to reform and rebuild in the aftermath of a devastating war. Constantly at her side during that time was her husband, Yuri, whose policy proposals led, time and again, to better education and opportunities for the less fortunate-a legacy that was later taken up by the couple's children. A trove of their love letters, uncovered many years later, revealed that she called him by an entirely different name in private. Scholars have never learned why."
    },{
        code: 'constanceyuri',
        ending: "After the war, Constance devoted herself to her magical research. Her unorthodox methods allowed her to make great strides, which earned her acclaim and eventually enabled her to restore her noble house. Afterward, almost as if to spite her detractors, she married Yuri. The pair made a happy, if unconventional, couple, as the husband frequently ventured away for months on end. In the long years of their marriage, however, Constance laughed off any concerns-she was known to say that Yuri always knew how to find his way home. Many decades later, he passed away in bed alongside his beloved wife."
    },{
        code: 'dorotheaferdinand',
        ending: "After officially becoming the new Duke Aegir, Ferdinand set about reforming his territory. Thanks to the wisdom of his wife, Dorothea, Ferdinand's policies were of massive benefit to the commonfolk and brought about a swift recovery. In recognition of this achievement, he was called upon to help govern to Fodlan at large. Though the work of reforming the entire nation kept him very busy, he always managed to find time for Dorothea. It is said that their children filled their loving household with beautiful music ever after."
    },{
        code: 'dorotheafelix',
        ending: "After the war, Felix inherited the title of Duke Fraldarius from his late father, Rodrigue. He married Dorothea, and the two began a happy life together. After they had finished restoring Fraldarius territory, Felix traveled across Fodlan as the king's right hand. Dorothea traveled with him always, and even threw herself into battle alongside him every so often. Tales of their bravery endured for generations, thanks in no small part to the operas that Dorothea wrote and composed herself."
    },{
        code: 'codetest',
        ending: "codetetetetet"
    }],
     testiarray: ['tämän', 'pitäisi', 'olla', 'helpompi']
 },
    
    
 mutations: {
  /*   increment (state) {
         state.count++;
     },
    incrementBy (state, n) {
        state.numero = n;
    },   */ 
    firstCharacterID (state, n) {
        state.numero = n;
    },
    rightCharacter: (state) => state.storeid++,
    secondCharacter: (state) => state.secondid++,
    storyEnding: (state) => state.storyid++,
     
    nimeaPairing (state, n) {
        state.pairingname = n;
    },
    nollaa (state, n) {
        state.storeid = n;
    },
    nollaaToinen (state, n) {
        state.secondid = n;
    },
    nollaaStory (state, n) {
        state.storyid = n;
    },
    
    ADD_CHARACTER (state, charastats) {
      state.characters.push(charastats);  
    },
    
    ADD_ENDING(state, codeending){
        state.pairings.push(codeending);
    },
    ADD_PAIR_INDEX(state, e){
        state.addpairindex = e;
    },
    ADD_PAIR(state, pairadder){             
       console.log(state.characters[this.addpairindex].pairs); state.characters[this.addpairindex].pairs.push(pairadder);
    }
 },
    
 getters: {
     //numero: state => state.numero,
     //count: state => state.count,
     storeid: state => state.storeid,
     secondid: state => state.secondid,
     storyid: state => state.storyid,
     characters: state => state.characters,
     pairs: state => state.characters.pairs,
     
     addpairindex: state => state.addpairindex,
     
     pairings: state => state.pairings,
     pairingname: state => state.pairingname,
     i: state => state.i,
     
     testiarray: state => state.testiarray,
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

