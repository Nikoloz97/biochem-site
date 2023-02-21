<template>
    <div>

<b-card header="RoadMap">
    <b-list-group v-for="todo in Todos" :key="todo.id">

      <b-list-group-item href="#" class="flex-column align-items-start">

        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ todo.Header }}</h5>
          <small class="text-muted">{{ todo.Date }}</small>
          
        </div>
    
        <p class="mb-1">{{ todo.Description }}</p>
    
        <small v-for="link,index in todo.Links" :key="index">{{ link }}</small>

      </b-list-group-item>
    
    </b-list-group>

</b-card>
        


    </div>

</template>

<script>
// import blank from ''

export default {
    name: 'PlannerToDo',
    components: {},
    data() {
        return {
            Todos: this.$store.state.Todos
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
