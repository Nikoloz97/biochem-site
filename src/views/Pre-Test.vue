<template>
<div>
    <!-- TODO: Create an object list of content for each card in the store, and create a v-for + v-bind for each card -->
<b-container class="d-flex justify-content-around flex-wrap" v-for="pre_question in $store.state.pretest" :key="pre_question">
        <b-card :title= "pre_question.title"
                :img-src="pre_question.imgsrc"
                :img-alt="pre_question.imgalt"
                img-top 
                style="width: 40%; height: 45rem"
                class="mb-5 shadow">
            <b-card-text>
                <p>{{ pre_question.question }}</p>
            </b-card-text>
                <b-container class="border d-flex justify-content-around flex-wrap" style=" height: 60%;">
                        <b-col v-for="choice in pre_question.choices" :key="choice">
                            <b-button v-if="choice.column == 1"
                                        class="mt-3"
                                        style="height: 30%; width: 80%;"
                                        variant="primary">{{ choice.name }}</b-button>
                           
                        </b-col>
                
                        <b-col v-for="choice in pre_question.choices" :key="choice">
                            <b-button v-if="choice.column == 2"
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


</script>

<style>



</style>