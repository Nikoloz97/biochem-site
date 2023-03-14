<template>
    <div>
        <!-- Progress bar -->
        <progress-bar :BarState="progressBar"/>
        <div v-for="(flashcard, index) in flashcards"
            :key="index" >
            <b-card v-if="index == currentFlashcard"
                    :img-src="flashcard.ImageURL"
                    img-top
                    style="width: 40%; height: 45rem"
                    class="mb-5 shadow"
                    :title=""
            >
            
            
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

    }
}

</script>

<style>
</style>

