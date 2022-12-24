import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    correctMsg: "Nice Work!",
    incorrectMsg: "Better luck next time...",
    completed: false,
    correctAttempts: 0,
    totalAttempts: 0,
    currentQuestion: 0,
    pretest: [
        {
            questionNumber: 1,
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

        },
        {
          questionNumber: 2,
          title: "Question 2",
          statement: "What is this amino acid?",
          imgsrc: "http://clearlyexplained.com/_Media/754px-citric_acid_cycle_wit_med_hr.png",
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

      },
      
      {
        questionNumber: 3,
        title: "Question 3",
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
    // Basically store's version of computed 
    // Useful for whenever multiple components might need the same computed section (keep code dry)
    //
    
  },
  mutations: {
    DISPLAY_ANSWERS(state, question) {
        question.displayAnswers = true
    },
    UPDATE_CORRECT_SCORE (state) {
      state.correctAttempts ++
    },
    UPDATE_ATTEMPTS_SCORE (state) {
      state.totalAttempts ++
    },
    INCREASE_CURRENT_QUESTION (state) {
      if (state.currentQuestion < (state.pretest.length - 1)) {
        state.currentQuestion ++
      }
    },
    DECREASE_CURRENT_QUESTION (state) {
      if (state.currentQuestion > 0)
      state.currentQuestion --
  },
},
  actions: {
  },
  modules: {
  }
})
