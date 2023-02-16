<template>
    <div>
        {{ text }}
        <b-table sticky-header striped hover :items="items"></b-table>
    </div>

    

</template>

<script>
// import blank from ''

export default {
    name: 'PlannerListing',
    components: {},
    data() {
        return {
            text: "This is the History",
            items: [
                {Date: '1/1/2022', Type: "Status Exam", Suggested: "Amino acids, Thermodynamics" },
                {Date: '1/2/2022', Type: "Flashcard Addition", Suggested: "Acid-base, Ksp"},
                {Date: '1/2/2022', Type: "Status Exam", Suggested: "Amino acids, Thermodynamics" },
                {Date: '1/2/2022', Type: "Flashcard Addition", Suggested: "Acid-base, Ksp"},
                {Date: '1/4/2022', Type: "Status Exam", Suggested: "Amino acids, Thermodynamics" },
                {Date: '1/7/2022', Type: "Flashcard Addition", Suggested: "Acid-base, Ksp"},
                {Date: '1/5/2022', Type: "Status Exam", Suggested: "Amino acids, Thermodynamics" },
                {Date: '1/2/2022', Type: "Flashcard Addition", Suggested: "Acid-base, Ksp"},
                {Date: '1/6/2022', Type: "Status Exam", Suggested: "Amino acids, Thermodynamics" },
                {Date: '1/2/2022', Type: "Flashcard Addition", Suggested: "Acid-base, Ksp"},
                {Date: '1/8/2022', Type: "Status Exam", Suggested: "Amino acids, Thermodynamics" },
                {Date: '1/2/2022', Type: "Flashcard Addition", Suggested: "Acid-base, Ksp"},
                
            ]
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