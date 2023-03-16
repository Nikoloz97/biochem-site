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

            <b-container class="d-flex justify-content-between">

              <b-button
                v-if="index != $store.state.flashcards.length - 1"
                :class="{ 'd-none': flashcard.isContHidden }"
                :disabled="flashcard.isForwardDisabled"
                @click="nextRandomCard(); progressBar.value++"
                >Continue</b-button
              >
  
            </b-container>
        </b-card-text>

        <!-- Answer options -->
       

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
        nextRandomCard() {
            this.$store.commit("NEXT_RANDOM_CARD")
        },




    }
}

</script>

<style>
</style>

