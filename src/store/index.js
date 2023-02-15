import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// TODO: Get rid of a lot of this stuff? Store material = should be stuff that is reusable by a lot of components 
// Its going to be a lot of work. If you're not up for it, rename stuff so its more specific to pretest stuff (e.g. totalAttempts -> pretest_totalAttempts)

export default new Vuex.Store({
  state: {
    correctMsg: "Nice Work!",
    incorrectMsg: "Better luck next time...",
    completed: false,
    correctAttempts: 0,
    totalAttempts: 0,
    currentQuestion: 0,
    currentResultsTab: 0,
    isResultsDisplayed: false,
    pretest: [
        {
            title: "Question 1",
            topic: 'Amino Acids',
            explanation: 'Lysine is a base that contains and R-group that consists of an amine followed by four carbons',
            statement: "What is this amino acid?",
            imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
            imgalt: "An amino acid with following R-group: 4-carbons + amine group",
            displayAnswers: false,
            isBackContHidden: true,
            isBackDisabled: false,
    
            isAnsweredCorrect: null,
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
          title: "Question 2",
          topic: 'Amino Acids',
          explanation: 'Lysine is a base that contains and R-group that consists of an amine followed by four carbons',        
          statement: "What is this amino acid?",
          imgsrc: "http://clearlyexplained.com/_Media/754px-citric_acid_cycle_wit_med_hr.png",
          imgalt: "An amino acid with following R-group: 4-carbons + amine group",
          displayAnswers: false,
          isBackContHidden: true,
          isBackDisabled: false,
  
          isAnsweredCorrect: null,
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
        title: "Question 3",
        topic: 'Acid-Bases',
        explanation: 'Lysine is a base that contains and R-group that consists of an amine followed by four carbons',
        statement: "What is this amino acid?",
        imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
        imgalt: "An amino acid with following R-group: 4-carbons + amine group",
        displayAnswers: false,
        isBackContHidden: true,
        isBackDisabled: false,

        isAnsweredCorrect: null,
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
      title: "Question 4",
      topic: 'Acid-Bases',
      explanation: 'Lysine is a base that contains and R-group that consists of an amine followed by four carbons',
      statement: "What is this amino acid?",
      imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
      imgalt: "An amino acid with following R-group: 4-carbons + amine group",
      displayAnswers: false,
      isBackContHidden: true,
      isBackDisabled: false,
      isAnsweredCorrect: null,
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
      title: "Question 5",
      topic: 'Metabolism',
      explanation: 'Lysine is a base that contains and R-group that consists of an amine followed by four carbons',
      statement: "What is this amino acid?",
      imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
      imgalt: "An amino acid with following R-group: 4-carbons + amine group",
      displayAnswers: false,
      isBackContHidden: true,
      isBackDisabled: false,
      isAnsweredCorrect: null,
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
    title: "Question 6",
    topic: 'Metabolism',
    explanation: 'Lysine is a base that contains and R-group that consists of an amine followed by four carbons',
    statement: "What is this amino acid?",
    imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
    imgalt: "An amino acid with following R-group: 4-carbons + amine group",
    displayAnswers: false,
    isBackContHidden: true,
    isBackDisabled: false,
    isAnsweredCorrect: null,
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
  title: "Question 7",
  topic: 'Unit Conversion',
  explanation: 'Lysine is a base that contains and R-group that consists of an amine followed by four carbons',
  statement: "What is this amino acid?",
  imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
  imgalt: "An amino acid with following R-group: 4-carbons + amine group",
  displayAnswers: false,
  isBackContHidden: true,
  isBackDisabled: false,
  isAnsweredCorrect: null,
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
  title: "Question 8",
  topic: 'Unit Conversion',
  explanation: 'Lysine is a base that contains and R-group that consists of an amine followed by four carbons',
  statement: "What is this amino acid?",
  imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
  imgalt: "An amino acid with following R-group: 4-carbons + amine group",
  displayAnswers: false,
  isBackContHidden: true,
  isBackDisabled: false,
  isAnsweredCorrect: null,
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
  title: "Question 9",
  topic: 'Thermodynamics',
  explanation: 'Lysine is a base that contains and R-group that consists of an amine followed by four carbons',
  statement: "What is this amino acid?",
  imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
  imgalt: "An amino acid with following R-group: 4-carbons + amine group",
  displayAnswers: false,
  isBackContHidden: true,
  isBackDisabled: false,
  isAnsweredCorrect: null,
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
  title: "Question 10",
  topic: 'Thermodynamics',
  explanation: 'Lysine is a base that contains and R-group that consists of an amine followed by four carbons',
  statement: "What is this amino acid?",
  imgsrc: "https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",
  imgalt: "An amino acid with following R-group: 4-carbons + amine group",
  displayAnswers: false,
  isBackContHidden: true,
  isBackDisabled: false,
  isAnsweredCorrect: null,
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


    ],
    results: [
      {
        name: "Score",
        description: "This is your score"


      },
      {
        name: "Stats",
        description:  "This is your stats"

      },
    ],
    ContentList: [
      {
          title: 'Chapter 1',
          isDisplayed: true,
          desc1: 'This is 1 content',
          desc2: 'This is 1 more content',
          
      },
      {
          title: 'Chapter 2',
          isDisplayed: true,
          desc1: 'This is 2 content',
          desc2: 'This is 2 more content',
      },
  ],
    // state ends here
  },
  getters: {
    // Store's version of computed 

    getPercentCorrect(state) {

      const percentCorrect = (state.correctAttempts / state.totalAttempts) * 100
      console.log(percentCorrect)
      return percentCorrect
    },

    getPercentIncorrect(state, getters) {

      const percentIncorrect = 100 - getters.getPercentCorrect 
      return percentIncorrect
    },

    getPretestCategoriesValues(state) {

       // From question object, extracts the topic property and creates a string (with duplicates)
       const TopicsArray = state.pretest.map((question) => question.topic)

       // To remove duplicates, convert to a Set
       // [...new foo] = converts that thing (Set) back to an array 
       const uniqueTopicsArray = [...new Set(TopicsArray)]
      
      // Convert string array to an array of objects
      let uniqueTopicsObjectArray = uniqueTopicsArray.map((topic) => { 
        return {name: topic, value: 0}
      })

      // Iterate through the pretest, and for each question.topic that matches object.name, if question.isAnsweredCorrect is true, increment value
      state.pretest.forEach((question) => {
        uniqueTopicsObjectArray.forEach((object) => {
          if (object.name == question.topic && question.isAnsweredCorrect) {
            object.value ++ 
          }
        })
      })
      return uniqueTopicsObjectArray
  },

  getPretestCategories(state, getters) {
    const uniqueTopicsObjectArray = getters.getPretestCategoriesValues
    const pretestCategories = uniqueTopicsObjectArray.map((object) => {
      return object.name
    })

    return pretestCategories
    
  },
  getPretestValues(state, getters) {
    const uniqueTopicsObjectArray = getters.getPretestCategoriesValues
    const pretestValues = uniqueTopicsObjectArray.map((object) => {
      return object.value
    })

    return pretestValues
  },

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
  DISPLAY_BACK_CONTINUE (state, question) {
    question.isBackContHidden = !question.isBackContHidden
  },
  DISABLE_BACK (state, question) {
    question.isBackDisabled = true
  },
  DISPLAY_RESULTS (state) {
    state.isResultsDisplayed = true;
  },
  GO_TO_RESULT_TAB (state, event) {
    if (event.target.textContent == "Score") {
      state.currentResultsTab = 0;
    }
    if (event.target.textContent == "Stats") {
      state.currentResultsTab = 1;
    }
  },
  SET_ANSWERED_CORRECT(state, question) {
    question.isAnsweredCorrect = true;
  },
  SET_ANSWERED_INCORRECT(state, question) {
    question.isAnsweredCorrect = false;
  },
  SET_DISPLAY(state, index) {
    for (let i = 0; i < state.ContentList.length; i++) {
      if (i == index) {
        state.ContentList[index].isDisplayed = true;
      }
      else {
        state.ContentList[i].isDisplayed = false;
      }

    }

  }
  
},

  // this is where API calls are placed (equivalent of component's created method)
  actions: {
  },
  modules: {
  }
})
