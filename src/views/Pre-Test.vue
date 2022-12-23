<template>
<div>

    <!-- TODO: create a "continue button that renders the next card (updates Current Question)"-->
<b-container class="d-flex justify-content-center" v-for="question, index in $store.state.pretest" :key="question.title">
        <b-card 
                v-if="index == $store.state.currentQuestion"
                :img-src="question.imgsrc"
                :img-alt="question.imgalt"
                img-top 
                style="width: 40%; height: 45rem"
                class="mb-5 shadow"
                :title="question.title">
            <b-card-text>
                <p> Current score: {{ $store.state.correctAttempts}}/{{$store.state.totalAttempts}}</p>
                <p class="statement">{{ question.statement }}</p>
                <p class="d-none correct">{{ $store.state.correctMsg }}</p>
                <p class="d-none incorrect">{{ $store.state.incorrectMsg }}</p>
            </b-card-text>
            <b-container class="border d-flex justify-content-around flex-wrap" style=" height: 60%;">
                        <b-col>
                            <!-- Vue = implicitly knows that index = index of item in array -->
                            <div v-for="(choice, index) in question.choices" :key="choice.name">
                                <b-button  v-if="index >= 2"
                                            @click="displayAnswers(question), displayMessage(question, $event), updateCurrentQuestion()"
                                            :class="{'bg-success' : choice.correct && question.displayAnswers, 'font-weight-bolder' : choice.correct && question.displayAnswers,'disabled': !choice.correct && question.displayAnswers}"
                                            class="mt-3"
                                            style="height: 30%; width: 80%;"
                                            variant="primary">{{ choice.name }}</b-button>
                            </div>
                        </b-col>
                
                        <b-col>
                            <div v-for="(choice, index) in question.choices" :key="choice.name">
                                <b-button v-if="index < 2"
                                            @click="displayAnswers(question), displayMessage(question, $event), updateCurrentQuestion()"
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

export default {
    computed: {
        // This is where you can create functions that grabs specific pieces of the state data
        // Downside = function cannot contain a parameter

        
},
    methods: {
        displayAnswers(question) {
            this.$store.commit("DISPLAY_ANSWERS", question)
        },
        displayMessage(question, event) {

            // First, update total score...

            this.updateAttemptsScore()

            // Get button element that was clicked on
            const answerChoice = event.target;

            // Get card-text element
            const cardTextElement = answerChoice.parentElement.parentElement.parentElement.previousSibling;

            
            // If correct answer was picked, display correctMessage, increase correct score...
            if (answerChoice.textContent == question.answer) {

                for (const child of cardTextElement.children) {
                    if (child.classList.contains("statement")) {
                        child.classList.add("d-none")
                    }
                    if (child.classList.contains("correct")) {
                        child.classList.remove("d-none")
                    }
                }
                this.updateCorrectScore()
            }

            // If incorrect asnwer was picked, display incorrectMessage...
            else {
                for (const child of cardTextElement.children) {
                    if (child.classList.contains("statement")) {
                        child.classList.add("d-none")
                    }
                    if (child.classList.contains("incorrect")) {
                        child.classList.remove("d-none")
                    }
                }
            }
        },
        updateCorrectScore() {
            this.$store.commit("UPDATE_CORRECT_SCORE")
        },
        updateAttemptsScore() {
            this.$store.commit("UPDATE_ATTEMPTS_SCORE")
        },
        updateCurrentQuestion() {
            this.$store.commit("UPDATE_CURRENT_QUESTION")
        }
    }
}


</script>

<style>

.delete {
    display: none !important;
}



</style>