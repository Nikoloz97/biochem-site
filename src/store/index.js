import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    correctMsg: "Nice Work!",
    incorrectMsg: "Better luck next time...",
    pretest_completed: false,
    pretest: [
        {
            id: 0,
            title: "Question 1",
            statement: "What is this amino acid?",
            imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
            imgalt: "An amino acid with following R-group: 4-carbons + amine group",
            displayAnswers: false,
            selected: null,
            answer: "Lysine",
            choices: [
                {
                name: "Cysteine",
                correct: false
                }, 
                {
                    name: "Arginine",
                    correct: false
                }, 
                {
                    name: "Lysine",
                    correct: true
                },
                {
                    name: "Histidine",
                    correct: false
                }]

        }
    ]
  },
  getters: {
  },
  mutations: {
    DISPLAY_ANSWERS(state, question) {
        question.displayAnswers = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
