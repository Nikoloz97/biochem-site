<template>
    <div>
        <!-- Progress bar -->
        <progress-bar :BarState="progressBar"/>

        <!-- Card -->
        <div v-for="(flashcard, index) in flashcards"
            :key="index" >
            <b-card v-if="index == currentFlashcard"
                    :img-src="flashcard.ImageURL"
                    img-top
                    style="height: 45rem"
                    class="mb-5 shadow"
                    :title="flashcard.ChapterName"
            >

            <b-card-text>
            
            <p class="statement">{{ flashcard.Prompt }}</p>
            <p class="d-none correct">{{ $store.state.correctMsg }}</p>
            <p class="d-none incorrect">{{ $store.state.incorrectMsg }}</p>
            <b-container class="d-flex justify-content-between">
              <b-button
                :class="{ 'd-none': flashcard.isBackContHidden }"
                :disabled="flashcard.isBackDisabled"
                @click="decCurrentFlashcard()"
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
                @click="incCurrentFlaschard(); progressBar.value++"
                >Continue</b-button
              >
  
              <b-button
                v-if="index == $store.state.pretest.length - 1"
                :class="{ 'd-none': question.isBackContHidden }"
                @click="displayResults(); progressBar.value++; addToLog()"
                >Results</b-button
              >
            </b-container>
        </b-card-text>

        <!-- Answer options -->
        <b-container
            class="border d-flex justify-content-around flex-wrap"
            style="height: 60%"
          >
            <b-col>
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
        </div>

    </div>

</template>

<script>
import ProgressBar from './ProgressBar.vue';

export default {
    name: 'FCMain',
    components: {ProgressBar},
    data() {
        return {
            progressBar: {
                max: this.$store.state.flashcards.length,
                value: 0,
            },
            flashcards: this.$store.state.flashcards,
            currentFlashcard: this.$store.state.currentFlashcard
        }

    },
    computed: {

    },
    methods: {
        incCurrentFlashcard() {
            this.$store.commit("INC_FLASHCARD_NUMBER")
        },
        decCurrentFlashcard() {
            this.$store.commit("DEC_FLASHCARD_NUMBER")
        },



    }
}

</script>

<style>
</style>

