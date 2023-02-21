<template>
    <div>
        <b-card header="Calendar">
            <b-calendar  v-model="value" @context="onContext" locale="en-US"/>
        </b-card>

        <!-- This is how values are attained -->
        <p> {{ context.selectedYMD}}</p>
    </div>

</template>

<script>
// import blank from ''

export default {
    name: 'PlannerCalendar',
    components: {},
    data() {
        return {
            value: '',
            context: ''
        }

    },
    computed: {

    },
    methods: {
        onContext(ctx) {
        this.context = ctx
      }
    }
}

</script>

<style>
</style>