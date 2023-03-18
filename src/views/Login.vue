<template>
    <div>

        <b-container>
            <b-row class="vh-100" align-v="center">
                <b-col>
                    <b-card>
                        <login/>
                    </b-card>
                </b-col>
            </b-row>

        </b-container>
        
    </div>

</template>

<script>
import Login from  '../components/Login/Main.vue'

export default {
    name: 'UserLoginView',
    components: {Login},
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