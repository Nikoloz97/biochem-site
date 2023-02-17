<template>


<div>
    <b-row align-h="center" class="mt-5"></b-row>
    
            <b-row>
                <b-col cols="2">
                    <b-row><side-nav/></b-row>
                </b-col>
    
                <b-col><chapter/></b-col>
    
            </b-row>
</div>


</template>

<script>
import Chapter from '@/components/Content/Main/Content.vue'
import SideNav from '@/components/Content/SideNav.vue'


export default {
    name: 'ContentView',
    components: {Chapter, SideNav},
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