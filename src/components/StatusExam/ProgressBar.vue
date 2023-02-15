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
// import blank from ''

export default {
    name: 'template',
    components: {},
    props: ['BarState'],
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
