<template>
    <div>
        <p>The following are suggested topics to review: </p>
        <ul v-for="(suggestion, index) in $store.getters.getPretestSuggestions" :key="index">
            <li> {{ suggestion.name}}, {{ suggestion.value }}</li>
        </ul>
    </div>

</template>

<script>
// import blank from ''

export default {
    name: 'Summary',
    components: {},
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