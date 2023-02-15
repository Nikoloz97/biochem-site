<template>
    <div>

    <b-card>
        <b-container v-for="chapter in $store.state.ContentList"  :key="chapter.title">
            <div v-if="chapter.isDisplayed">
                <b-row>
                    <b-col>{{chapter.title}}</b-col>
                    <b-col>{{chapter.desc1}}</b-col>
                    <b-col>{{chapter.desc2}}</b-col>
                </b-row>
                <b-row class="mt-5">
                    <b-col>{{chapter.title}}</b-col>
                    <b-col>{{chapter.desc1}}</b-col>
                    <b-col>{{chapter.desc2}}</b-col>
                </b-row>
            </div>
        </b-container>
        
    </b-card>


    </div>

</template>

<script>
// import blank from ''

export default {
    name: 'Chapter',
    components: {},
    props: [],
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