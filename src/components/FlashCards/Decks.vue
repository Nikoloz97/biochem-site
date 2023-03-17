<template>
    <div>
        <b-card header="Decks">
    <b-list-group v-for="deck in Decks" :key="deck.id">

      <b-list-group-item href="#" class="flex-column align-items-start">

        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ deck.DateAdded }}</h5>
          <small class="text-muted">{{ deck.ChapterName }}</small>
        </div>

      </b-list-group-item>
    
    </b-list-group>

</b-card>

    </div>
</template>

<script>
    export default {
        name:"Decks",
        components: {},
        data() {
        return {
            Decks: this.$store.state.decks

        }},
    }
</script>

<style scoped>

</style>