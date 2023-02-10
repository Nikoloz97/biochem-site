<template>

<div>
    <featured/>
    <explore/>
    <about/>
</div>

</template>

<script>
import Featured from '../components/Home/Featured.vue'
import Explore from '../components/Home/Explore.vue'
import About from '../components/Home/About.vue'


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

