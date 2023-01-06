<template>

<div>
    <featured/>
    <explore/>
    <about/>
</div>

</template>

<script>
import Featured from '../components/HomeFeat.vue'
import Explore from '../components/HomeExplore.vue'
import About from '../components/HomeAbout.vue'


export default {
    name: 'Home',
    components: {Featured, Explore, About},
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

