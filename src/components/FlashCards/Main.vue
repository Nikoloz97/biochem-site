<template>
    <div>
        <!-- Progress bar -->
        <progress-bar :BarState="progressBar"/>

    </div>

</template>

<script>
import ProgressBar from './ProgressBar.vue';

export default {
    name: 'FCMain',
    components: {ProgressBar},
    data() {
        return {
            progressBar: {
                max: this.$store.flashcards.length,
                value: 0,
            }
            
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

