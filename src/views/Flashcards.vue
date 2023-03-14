<template>

<div>
    <b-container class="vh-100">
        <b-row class = "h-100">
            <b-col class="h-50" cols = "4" align-self="center">
                    <b-row align-v="center">
                        <b-col><decks/></b-col>
                    </b-row>
            </b-col>
            <b-col class="h-100" align-v="center" cols="8" >
                <flashcard/>
            </b-col>
        </b-row>
    </b-container>


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