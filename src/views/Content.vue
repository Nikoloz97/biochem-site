<template>
    <div>
        <b-row align-h="center" class="mt-5"></b-row>
    
        <b-row>
            <b-col cols="2">
                <b-row><content-nav/></b-row>
            </b-col>
            <b-col><content-main/></b-col>
        </b-row>
    </div>

</template>

<script>
import ContentMain from '@/components/ContentMain.vue'
import ContentNav from '@/components/ContentNav.vue'

export default {
    name: 'Content',
    components: {ContentMain, ContentNav},
    data() {
        return {
            displayNav: 2,
            CollapseDisplay: "Hide Nav"
        }

    },
    computed: {

    },
    methods: {
        NavToggle() {
            this.displayNav++
            if (this.displayNav % 2 != 0) {
            this.CollapseDisplay = "Show Nav"
            }
            else {
                this.CollapseDisplay = "Hide Nav"

            }
        }

    }
}

</script>

<style>
</style>