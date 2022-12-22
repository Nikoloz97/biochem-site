<template>
<div>

    <!-- TODO: Display correctMsg if user clicks on correct option (vice versa w incorrect) -->
<b-container class="d-flex justify-content-around flex-wrap" v-for="question in $store.state.pretest" :key="question.title">
        <b-card :title= "question.title"
                :img-src="question.imgsrc"
                :img-alt="question.imgalt"
                img-top 
                style="width: 40%; height: 45rem"
                class="mb-5 shadow">
            <b-card-text>
                <p>{{ question.statement }}</p>
            </b-card-text>
                <b-container class="border d-flex justify-content-around flex-wrap" style=" height: 60%;">
                        <b-col>
                            <!-- Vue = implicitly knows that index = index of item in array -->
                            <div v-for="(choice, index) in question.choices" :key="choice.name">
                                <b-button  v-if="index >= 2"
                                            @click="displayAnswers(question)"
                                            :class="{'bg-success' : choice.correct && question.displayAnswers, 'font-weight-bolder' : choice.correct && question.displayAnswers,'disabled': !choice.correct && question.displayAnswers}"
                                            class="mt-3"
                                            style="height: 30%; width: 80%;"
                                            variant="primary">{{ choice.name }}</b-button>
                            </div>
                        </b-col>
                
                        <b-col>
                            <div v-for="(choice, index) in question.choices" :key="choice.name">
                                <b-button v-if="index < 2"
                                            @click="displayAnswers(question)"
                                            :class="{'bg-success': choice.correct && question.displayAnswers, 'disabled': !choice.correct && question.displayAnswers}"
                                            class="mt-3"
                                            style="height: 30%; width: 80%;"
                                            variant="primary">{{ choice.name }}</b-button>
                            </div>
                        </b-col>

                </b-container>
        </b-card>
</b-container>

</div>

</template>


<script>


// TODO: Continue where you left off with quiz youtube video

// const SetAnswer = e => {
//     this.$store.state.pretest.value
// }

export default {
    computed: {
        // This is where you can create functions that grabs specific pieces of the state data
        // Downside = function cannot contain a parameter

        updateScore() {
            let score = 0
            this.$store.state.pretest.value.map(card => {
                if (card.selected == card.answer) {
                    score++
                }
            })
            return score
    }
},
    methods: {
        displayAnswers(question) {
            this.$store.commit("DISPLAY_ANSWERS", question)
        },

      
    }
}


</script>

<style>

.delete {
    display: none !important;
}



</style>