import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    correctMsg: "Nice Work!",
    incorrectMsg: "Better luck next time",
    pretest: [
        {
            title: "Question 1",
            statement: "What is this amino acid?",
            imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
            imgalt: "An amino acid with following R-group: 4-carbons + amine group",
            displayAnswers: false,
            choices: [
                {
                name: "Cysteine",
                correct: false,
                column: 1
                }, 
                {
                    name: "Arginine",
                    correct: false,
                    column: 1,
                }, 
                {
                    name: "Lysine",
                    correct: true,
                    column: 2

                },
                {
                    name: "Histidine",
                    correct: false,
                    column: 2
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
