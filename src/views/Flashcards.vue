<template>

<div>
    <b-row>
        <b-col cols = "4">
            <decks/>
        </b-col>
        <b-col cols="8" >
            <flashcard/>
        </b-col>
    </b-row>
</div>

</template>

<script>
import decks from '../components/FlashCards/Decks.vue'
import flashcard from '../components/FlashCards/Main.vue'

export default {
    name: 'FlashCards',
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