import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    // SatusExam
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

    ResultTabs: [
      {
        name: "Score",
        description: "This is your score"
      },
      {
        name: "Stats",
        description:  "This is your stats"
      },
      {
        name: "Summary",
        description:  "This is your summary"
      },
    ],
    
    // Content

    // Content (navs)

    // Content (main)
    ContentList: [
      {
          title: 'Chapter 1',
          isDisplayed: true,
          desc1: 'This is 1 content',
          desc2: 'This is 1 more content',
          Number: "Chapter 1",
          Title: "Amino Acids",
          Description: "Learning the structure, behavior, and functionality of the essential Amino Acids",
          ChapterItems: ["Structure", "Behavior", "Functionality"]
          
      },
      {
          title: 'Chapter 2',
          isDisplayed: false,
          desc1: 'This is 2 content',
          desc2: 'This is 2 more content',
          Number: "Chapter 2",
          Title: "Tacos",
          Description: "Tacos are the best",
          ChapterItems: ["Wheat", "Corn", "Multigrain"]
      },
      {
          title: 'Chapter 3',
          isDisplayed: false,
          desc1: 'This is 3 content',
          desc2: 'This is 3 more content',
          Number: "Chapter 3",
          Title: "Burritos",
          Description: "Burritos come at a close second",
          ChapterItems: ["Beef", "Chicken", "Salsa"]
      }
  ],

  // Flashcards

  currentFlashcard: 0,

  // Decks that the user wants to save
  savedDecks: [
    {
      ChapterNum: 1, 
      // Value zero = user wants all the subchapters from that chapter  
      SubchapterNum: 0
    },
    {
      ChapterNum: 2,
      SubchapterNum: 1
    }
  ],

  // ALL the flashcards
  flashcards: [
    {
    Id: 1,
    ChapterNum:1,
    ChapterName: "Amino acids", 
    SubchapterNum: 1,
    SubchapterName: "Basics of Amino Acids",
    DateAdded: "3/10/2023",
    ImageURL:"https://microbenotes.com/wp-content/uploads/2021/07/Amino-Acids.jpeg",
    Prompt:"The parts of the amino acids are the amino group, hydrogen, carboxyl, and r-group",
    // 0 = low, 1 = mod, 2 = high
    ConfidenceLevel: 1,
    isContHidden: true,
    isBackDisabled: true
    },
    {
      Id: 2,
      ChapterNum: 1,
      ChapterName: "Amino acids",
      SubchapterNum: 2,
      SubchapterName: "pKas of Amino Acids",
      DateAdded: "3/11/2023",
      ImageURL:"https://microbenotes.com/wp-content/uploads/2021/07/Amino-Acids.jpeg",
      Prompt:"Typically, the pka of carboxyl group is around 2-4, while that of amino group is around 9-10",
      // 0 = low, 1 = mod, 2 = high
      ConfidenceLevel: 1,
      isContHidden: true,
      isBackDisabled: true
    },
    {
      Id: 3,
      ChapterNum: 2,
      ChapterName: "Titrations",
      SubchapterNum: 1,
      SubchapterName: "Titration buffers",
      DateAdded: "3/12/2023",
      ImageURL:"https://www.mun.ca/biology/scarr/iGen3_06-03_Figure-Lsmc.jpg",
      Prompt:"The parts of the amino acids are the amino group, hydrogen, carboxyl, and r-group",
      // 0 = low, 1 = mod, 2 = high
      ConfidenceLevel: 1,
      isContHidden: true,
      isBackDisabled: true
    },
    {
      Id: 4,
      ChapterNum: 3,
      ChapterName: "Cell metabolism",
      SubchapterNum: 1,
      SubchapterName: "Glycolysis",
      DateAdded: "3/13/2023",
      ImageURL:"https://o.quizlet.com/sCIsgxuGPtopiHeMa8d3mg.png",
      Prompt:"Typically, the pka of carboxyl group is around 2-4, while that of amino group is around 9-10",
      // 0 = low, 1 = mod, 2 = high
      ConfidenceLevel: 1,
      isContHidden: true,
      isBackDisabled: true
    },

  ],

  FlashcardIndexesUsed: [0],

  
  // Planner
  LogHistory: [],
  Todos: [
    {
      id: 1,
      Header: "Amino acids",
      Priority: 1,
      Date: "02/21/2023",
      Description: "This is some information involving amino acids",
      Links: ["Link 1", "Link 2", "Link 3"]
    },

    {
      id: 2,
      Header: "Acids",
      Priority: 2,
      Date: "02/21/2023",
      Description: "This is some information involving amino acids",
      Links: ["Link 1", "Link 2", "Link 3"]
    },
    {
      id: 3,
      Header: "Bases",
      Priorty: 3,
      Date: "02/21/2023",
      Description: "This is some information involving amino acids",
      Links: ["Link 1", "Link 2", "Link 3"]
    },
    {
      id: 1,
      Header: "Amino acids",
      Priority: 1,
      Date: "02/21/2023",
      Description: "This is some information involving amino acids",
      Links: ["Link 1", "Link 2", "Link 3"]
    },

    {
      id: 2,
      Header: "Acids",
      Priority: 2,
      Date: "02/21/2023",
      Description: "This is some information involving amino acids",
      Links: ["Link 1", "Link 2", "Link 3"]
    },
    {
      id: 3,
      Header: "Bases",
      Priorty: 3,
      Date: "02/21/2023",
      Description: "This is some information involving amino acids",
      Links: ["Link 1", "Link 2", "Link 3"]
    },


  ],

    // state ends here
  },

  // Store's version of computed 
  getters: {
    getChapterDeck(state, chapterNum) {
      const chapterDeck = state.flashcards.filter(FC => FC.ChapterNum == chapterNum);
      return chapterDeck;
    },
    getSubchapterDeck(state, chapterNum, subchapterNum) {
      const subchapterDeck = state.flashcards.filter(FC => FC.ChapterNum == chapterNum && FC.SubchapterNum == subchapterNum);
      return subchapterDeck;
    },
    getPercentCorrect(state) {

      const percentCorrect = (state.correctAttempts / state.totalAttempts) * 100
      console.log(percentCorrect)
      return percentCorrect
    },

    getPercentIncorrect(state, getters) {

      const percentIncorrect = 100 - getters.getPercentCorrect 
      return percentIncorrect
    },

    // Returns an object array of {topic, value} (value = number of questions answered correctly)
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

  // Returns list of {category, value} where value < 2 (i.e. less than 100%), ordered by lowest to highest

  getPretestSuggestions (state, getters) {
    // Filtered list of categories where user missed at least one question
    const Suggestions = getters.getPretestCategoriesValues.filter((object) => object.value < 2);

    // Sort by ascending value property
    const sortedList = Suggestions.sort((a, b) => (a.value > b.value) ? 1 : -1)
    
    return sortedList
  },

},
  mutations: {
    NEXT_RANDOM_CARD(state) {
      let randomValue = 0;
      const flashcardLength = state.flashcards.length;

      if  (state.FlashcardIndexesUsed.length != flashcardLength) {

        while (state.FlashcardIndexesUsed.includes(randomValue))
      {
        randomValue = Math.floor(Math.random() * (flashcardLength- 1)) + 1
      }

      state.FlashcardIndexesUsed.push(randomValue);

      console.log(randomValue)

      state.currentFlashcard = randomValue;

      console.log(state.currentFlashcard)
      }
    },
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

  // Additions come from the statusExam and Content (once add subchapter to flashcard deck)
  ADD_TO_LOG (state, logObj) {
    // adds to the start of the array
    state.LogHistory.unshift(logObj)
  },

  GO_TO_RESULT_TAB (state, event) {
    if (event.target.textContent == "Score") {
      state.currentResultsTab = 0;
    }
    if (event.target.textContent == "Stats") {
      state.currentResultsTab = 1;
    }
    if (event.target.textContent == "Summary") {
      state.currentResultsTab = 2;
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
