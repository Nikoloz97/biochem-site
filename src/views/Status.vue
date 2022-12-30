<template>
  <div>
    <!-- Status Exam display -->
    <b-container
      class="d-flex justify-content-center"
      v-for="(question, index) in $store.state.pretest"
      :key="index"
    >
      <b-card
        v-if="
          index == $store.state.currentQuestion &&
          !$store.state.isResultsDisplayed
        "
        :img-src="question.imgsrc"
        :img-alt="question.imgalt"
        img-top
        style="width: 40%; height: 45rem"
        class="mb-5 shadow"
        :title="question.title"
      >
        <b-card-text>
          <p>
            Current score: {{ $store.state.correctAttempts }}/{{
              $store.state.totalAttempts
            }}
          </p>
          <p class="statement">{{ question.statement }}</p>
          <p class="d-none correct">{{ $store.state.correctMsg }}</p>
          <p class="d-none incorrect">{{ $store.state.incorrectMsg }}</p>
          <b-container class="d-flex justify-content-between">
            <b-button
              :class="{ 'd-none': question.isBackContHidden }"
              :disabled="question.isBackDisabled"
              @click="decCurrentQuestion()"
              >Back</b-button
            >

            <!-- v-b-popover = special v-bind mechanism -->
            <b-badge
              :class="{ 'd-none': question.isBackContHidden }"
              v-b-popover.hover.top="question.explanation"
              :title="question.topic"
              class="p-3"
              pill
              variant="info"
              >Explanation</b-badge
            >

            <b-button
              v-if="index != $store.state.pretest.length - 1"
              :class="{ 'd-none': question.isBackContHidden }"
              :disabled="question.isForwardDisabled"
              @click="incCurrentQuestion()"
              >Continue</b-button
            >

            <b-button
              v-if="index == $store.state.pretest.length - 1"
              :class="{ 'd-none': question.isBackContHidden }"
              @click="displayResults()"
              >Results</b-button
            >
          </b-container>
        </b-card-text>
        <b-container
          class="border d-flex justify-content-around flex-wrap"
          style="height: 60%"
        >
          <b-col>
            <!-- Vue = implicitly knows that index = index of item in array -->
            <div
              v-for="(choice, index) in question.choices"
              :key="choice.name"
            >
              <b-button
                v-if="index >= 2"
                @click="
                  displayAnswer(question),
                    disableBack(question),
                    displayMessage(question, $event)
                "
                :disabled="question.displayAnswers"
                :class="{
                  'bg-success': choice.correct && question.displayAnswers,
                  'font-weight-bolder':
                    choice.correct && question.displayAnswers,
                }"
                class="mt-3"
                style="height: 30%; width: 80%"
                variant="primary"
                >{{ choice.name }}</b-button
              >
            </div>
          </b-col>

          <b-col>
            <div
              v-for="(choice, index) in question.choices"
              :key="choice.name"
            >
              <b-button
                v-if="index < 2"
                @click="
                  displayAnswer(question),
                    disableBack(question),
                    displayMessage(question, $event)
                "
                :disabled="question.displayAnswers"
                :class="{
                  'bg-success': choice.correct && question.displayAnswers,
                }"
                class="mt-3"
                style="height: 30%; width: 80%"
                variant="primary"
                >{{ choice.name }}</b-button
              >
            </div>
          </b-col>
        </b-container>
      </b-card>
    </b-container>

    <b-container
      class="d-flex justify-content-center"
      v-if="$store.state.isResultsDisplayed"
    >
      <b-card
        body-class="text-center"
        header-tag="nav"
      >
        <template #header>
          <b-nav
            card-header
            tabs
          >
            <b-nav-item
              :active="$store.state.currentResultsTab == 0"
              @click="goToResultTab($event)"
              >Score</b-nav-item
            >
            <b-nav-item
              :active="$store.state.currentResultsTab == 1"
              @click="goToResultTab($event)"
              >Stats</b-nav-item
            >
          </b-nav>
        </template>

        <!-- Results display -->
        <b-container
          v-for="(result, index) in $store.state.results"
          :key="index"
        >
          <b-card-body v-if="index == $store.state.currentResultsTab">
            <b-card-title> {{ result.name }} </b-card-title>
            <b-card-text>
              <pie-score v-if="result.name === 'Score'" />
              <bar-stats v-if="result.name === 'Stats'" />
            </b-card-text>
          </b-card-body>
        </b-container>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import PieScore from "@/components/StatusScore.vue";
import BarStats from "@/components/StatusStats.vue";
// imported lodash
import { random } from "lodash";

export default {
  // For some reason, name should be "multiword" (i.e. multiple caps)
  name: "PreTest",
  components: { BarStats, PieScore },

  data() {
    return {};
  },

  // This is where you can create functions that grabs specific pieces of the state/store data. Functions = CANNOT hold parameters
  computed: {},

  // Lifecycle hooks = things to do at each stage of component creation/update
  beforeCreate() {
    // alert("beforeCreate");
  },
  // Created = creation of component, but before its thrown into the DOM
  created() {
    // alert("created");
  },
  beforeMount() {
    // alert("beforeMount");
  },
  // Mounted = component is thrown on DOM
  mounted() {
    // alert("mounted");
  },
  beforeUpdate() {
    // alert("beforeUpdate");
  },
  updated() {
    // alert("updated");
    // console.log(this.$el.textContent);
  },

  methods: {
    displayAnswer(question) {
      console.log(random(0, 5));
      this.$store.commit("DISPLAY_ANSWERS", question);
    },
    displayBackCont(question) {
      this.$store.commit("DISPLAY_BACK_CONTINUE", question);
    },
    //indexOf = returns the index of an object in obj array
    disableBack(question) {
      if (this.$store.state.pretest.indexOf(question) == 0) {
        this.$store.commit("DISABLE_BACK", question);
      }
    },

    displayMessage(question, event) {
      // First, update total score...

      this.updateAttemptsScore();

      // Then, display back-continue buttons...

      this.displayBackCont(question);

      // Get button element that was clicked on
      const answerChoice = event.target;

      // Get card-text element
      const cardTextElement =
        answerChoice.parentElement.parentElement.parentElement.previousSibling;

      // If correct answer was picked, display correctMessage, display back and continue buttons, increase correct score, set isAnsweredCorrect to true...
      if (answerChoice.textContent == question.answer) {
        for (const child of cardTextElement.children) {
          if (child.classList.contains("statement")) {
            child.classList.add("d-none");
          }
          if (child.classList.contains("correct")) {
            child.classList.remove("d-none");
          }
        }
        this.setAnsweredCorrect(question);
        this.updateCorrectScore();
      }

      // If incorrect answer was picked, display incorrectMessage, set isAnsweredCorrect to false...
      else {
        for (const child of cardTextElement.children) {
          if (child.classList.contains("statement")) {
            child.classList.add("d-none");
          }
          if (child.classList.contains("incorrect")) {
            child.classList.remove("d-none");
          }
        }
        this.setAnsweredIncorrect(question);
      }
    },
    setAnsweredCorrect(question) {
      this.$store.commit("SET_ANSWERED_CORRECT", question);
    },
    setAnsweredIncorrect(question) {
      this.$store.commit("SET_ANSWERED_INCORRECT", question);
    },
    updateCorrectScore() {
      this.$store.commit("UPDATE_CORRECT_SCORE");
    },
    updateAttemptsScore() {
      this.$store.commit("UPDATE_ATTEMPTS_SCORE");
    },
    incCurrentQuestion() {
      this.$store.commit("INCREASE_CURRENT_QUESTION");
    },
    decCurrentQuestion() {
      this.$store.commit("DECREASE_CURRENT_QUESTION");
    },

    displayResults() {
      this.$store.commit("DISPLAY_RESULTS");
    },

    goToResultTab(event) {
      this.$store.commit("GO_TO_RESULT_TAB", event);
    },
  },
};
</script>

<style></style>
