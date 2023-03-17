<template>

<div>
    <b-container class="vh-100">
        <b-row class = "h-100">
            <b-col cols = "4" align-self="center">
                    <b-row align-v="center">
                        <b-col><decks/></b-col>
                    </b-row>
            </b-col>
            <b-col align-self="center" cols="8" >
                <b-row align-v="center">
                    <b-col><flashcard/></b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>


</div>

</template>

<script>
import decks from '../components/FlashCards/Decks.vue'
import flashcard from '../components/FlashCards/Main.vue'

export default {
    name: 'FlashcardsView',
    components: {flashcard, decks},
    data() {
        return {
            
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