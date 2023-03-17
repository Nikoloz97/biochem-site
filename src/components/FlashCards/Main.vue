<template>
    <div>
        <!-- Progress bar -->
        <progress-bar :BarState="progressBar"/>

        <!-- Card -->
        <b-container v-for="(flashcard, index) in $store.state.flashcards"
            :key="index" >
            <b-card v-if="index == $store.state.currentFlashcard"
                    :img-src="flashcard.ImageURL"
                    img-top
                    style="height: 45rem"
                    class="mb-5 shadow"
                    :title="flashcard.ChapterName"
            >

            <b-card-text>
            
            <p class="statement">{{ flashcard.Prompt }}</p>

            <b-container class="d-flex justify-content-between">
 
            <!-- :class="{ 'd-none': flashcard.isContHidden }" -->
              <b-button
                v-if="$store.state.FlashcardIndexesUsed.length != 4"
                :disabled="flashcard.isForwardDisabled"
                @click="nextRandomCard(); progressBar.value++"
                > Continue
                </b-button>

            </b-container>
        </b-card-text>

        <!-- Answer options -->
       

        </b-card>
        </b-container>

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

