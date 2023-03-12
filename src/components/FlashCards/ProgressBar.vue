<template>
    <div>
        <b-progress :max="BarState.max" height="rem" show-progress >
        <b-progress-bar :value="BarState.value">
          <span v-if="BarState.value != BarState.max">Progress: {{ BarState.value }} / {{ BarState.max}}</span>
          <span v-if="BarState.value == BarState.max">Completed!</span>
        </b-progress-bar>
      </b-progress>
    </div>
</template>

<script>

export default {
    name: 'FCProgress',
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

<style scoped>

</style>