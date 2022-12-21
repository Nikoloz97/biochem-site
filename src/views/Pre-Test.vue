<template>
<div>
    
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
                            <b-button v-for="choice in question.choices" :key="choice.name"  
                                        @click="displayAnswers(question)"
                                        :class="{'delete': choice.column == 1, 'correct': choice.correct && question.displayAnswers, 'incorrect': !choice.correct && question.displayAnswers}"
                                        class="mt-3"
                                        style="height: 30%; width: 80%;"
                                        variant="primary">{{ choice.name }}</b-button>
                        </b-col>
                
                        <b-col>
                            <b-button v-for="choice in question.choices" :key="choice.name"
                                        @click="displayAnswers(question)"
                                        :class="{'delete': choice.column == 2, 'correct': choice.correct && question.displayAnswers, 'incorrect': !choice.correct && question.displayAnswers}" 
                                        class="mt-3"
                                        style="height: 30%; width: 80%;"
                                        variant="primary">{{ choice.name }}</b-button>
                        </b-col>

                </b-container>
        </b-card>
</b-container>

</div>

</template>


<script>
export default {
    methods: {
        displayAnswers(question) {
            this.$store.commit("DISPLAY_ANSWERS", question)
        }
    }
}


</script>

<style>

.delete {
    display: none !important;
}

.correct {
    background-color: rgb(145 217 35) !important;
}

.incorrect {
    background-color: #adb5bd !important;
}

</style>