<template>
    <b-container >
            <b-row class="h-100">
                <b-col>
                
                    <b-row class="h-100" align-v="center">
                        <b-col>
                            <b-card><planner-to-dos/></b-card>
                        </b-col>
                    </b-row>
                
                </b-col>
                
                <b-col>
                    <b-row class="h-50" align-v="center">
                        <b-col>
                            <b-card><planner-calendar/></b-card>
                        </b-col>
                    </b-row>
                    <b-row class="h-50" align-v="center">
                        <b-col>
                            <b-card><planner-listing/></b-card>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
    </b-container>


</template>

<script>
import PlannerCalendar from '../components/Planner/Calendar.vue'
import PlannerListing from '../components/Planner/History.vue'
import PlannerToDos from '@/components/Planner/ToDos.vue'


export default {
    name: 'Planner',
    components: {PlannerCalendar, PlannerListing, PlannerToDos},
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
