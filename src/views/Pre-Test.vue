<template>
<div>
    <!-- TODO: Create an object list of content for each card in the store, and create a v-for + v-bind for each card -->
<b-container class="d-flex justify-content-around flex-wrap">
        <b-card title="Question 1"
                img-src="https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg"
                img-alt="Amino acid"
                img-top 
                style="width: 40%; height: 45rem"
                class="mb-5 shadow">
            <b-card-text>
                <p>What is this amino acid?</p>
            </b-card-text>
                <b-container class="border d-flex justify-content-around flex-wrap" style=" height: 60%;">
                        <b-col>
                            <b-button class="mt-3"
                                        style="height: 30%; width: 80%;"
                                        variant="primary">Cysteine</b-button>
                            <b-button class="mt-3"
                                        style="height: 30%; width: 80%;"
                                        variant="primary">Alanine</b-button>
                        </b-col>
                
                        <b-col>
                            <b-button class="mt-3"
                                        style="height: 30%; width: 80%;"
                                        variant="primary">Arginine</b-button>
                            <b-button class="mt-3"
                                       style="height: 30%; width: 80%;"
                                      variant="primary">Histidine</b-button>
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