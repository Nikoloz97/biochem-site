<template>
    <div>

        <b-row align-h="center" class="mt-5"></b-row>
    
        <b-row>
            <b-col cols="2">
                <b-row><side-nav/></b-row>
            </b-col>

            <b-col><chapter></chapter></b-col>
            
        </b-row>

    </div>

</template>

<script>
// import blank from ''
import Chapter from './Chapter.vue';
import SideNav from './SideNav.vue';

export default {
    name: 'Content',
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