<template>
<div>

<!-- TODO: create a explanation badge, once hovered over, creates a popper -->
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
                <b-container class="d-flex justify-content-between">
                    <b-button :class= "{'d-none' : question.isBackContHidden}"
                              :disabled="question.isBackDisabled"
                               @click="decCurrentQuestion()">Back</b-button>

                               <!-- v-b-popover = special v-bind mechanism -->
                    <b-badge :class= "{'d-none' : question.isBackContHidden}"
                              v-b-popover.hover.top="question.explanation" 
                              :title="question.topic"
                              class="p-3"
                              pill
                              variant = "info"
                              >Explanation</b-badge>

                    <b-button :class= "{'d-none' : question.isBackContHidden}"
                              :disabled="question.isForwardDisabled"
                              @click="incCurrentQuestion()">Continue</b-button>
                </b-container>
            </b-card-text>
            <b-container class="border d-flex justify-content-around flex-wrap" style=" height: 60%;">
                        <b-col>
                            <!-- Vue = implicitly knows that index = index of item in array -->
                            <div v-for="(choice, index) in question.choices" :key="choice.name">
                                <b-button  v-if="index >= 2"
                                            @click="displayAnswer(question), disableBack(question), disableCont(question), displayMessage(question, $event)"
                                            :disabled = "question.displayAnswers"
                                            :class="{'bg-success' : choice.correct && question.displayAnswers, 'font-weight-bolder' : choice.correct && question.displayAnswers}"
                                            class="mt-3"
                                            style="height: 30%; width: 80%;"
                                            variant="primary">{{ choice.name }}</b-button>
                            </div>
                        </b-col>
                
                        <b-col>
                            <div v-for="(choice, index) in question.choices" :key="choice.name">
                                <b-button v-if="index < 2"
                                            @click="displayAnswer(question), disableBack(question), disableCont(question), displayMessage(question, $event)"
                                            :disabled = "question.displayAnswers"
                                            :class="{'bg-success': choice.correct && question.displayAnswers}"
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
        displayAnswer(question) {
            // Set displayAnswer property for question to true... 
            this.$store.commit("DISPLAY_ANSWERS", question)
        },
        displayBackCont(question) {
            this.$store.commit("DISPLAY_BACK_CONTINUE", question)
        },
        disableBack(question) {
            if (this.$store.state.pretest.indexOf(question) == 0)  {
                this.$store.commit("DISABLE_BACK", question)
            }
        },
        disableCont(question) {
            if (this.$store.state.pretest.indexOf(question) == (this.$store.state.pretest.length - 1) ) {
                this.$store.commit("DISABLE_CONT", question)
            }
        },
        displayMessage(question, event) {

            // First, update total score...

            this.updateAttemptsScore()

            // Then, display back-continue buttons...

            this.displayBackCont(question)

            // Get button element that was clicked on
            const answerChoice = event.target;

            // Get card-text element
            const cardTextElement = answerChoice.parentElement.parentElement.parentElement.previousSibling;

            
            // If correct answer was picked, display correctMessage, display back and continue buttons, increase correct score...
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
        

            // If incorrect answer was picked, display incorrectMessage...
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

            //  // Back and continue buttons -- 
            //  const backContinueButtons = cardTextElement.getElementsByTagName("button")
            //  for (const button of backContinueButtons) {

            //     // if were at the last question...
            //     if (this.$store.state.currentQuestion == (this.$store.state.pretest.length - 1)) {
            //         // Disable the continue button
            //         if (button.textContent == "Continue") {
            //             button.setAttribute("disabled", "")
            //         }
            //     }
                
            //     // if were at the first question...
            //     if (this.$store.state.currentQuestion == 0) {
            //         // Disable the back button
            //         if (button.textContent == "Back") {
            //             button.setAttribute("disabled", "")
            //         }
            //     } 
                
                
            //  }

        },
        updateCorrectScore() {
            this.$store.commit("UPDATE_CORRECT_SCORE")
        },
        updateAttemptsScore() {
            this.$store.commit("UPDATE_ATTEMPTS_SCORE")
        },
        incCurrentQuestion() {
            this.$store.commit("INCREASE_CURRENT_QUESTION")
        },
        decCurrentQuestion() {
            this.$store.commit("DECREASE_CURRENT_QUESTION")
        } 
    }
}


</script>

<style>

.delete {
    display: none !important;
}



</style>