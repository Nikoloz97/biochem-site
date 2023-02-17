<template>
    <div>

    <div  v-for="chapter, index1 in this.$store.state.ContentList" :key="index1">
        <div v-if="chapter.isDisplayed">
                <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">{{ chapter.title }}</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                        <div v-for="section, index2 in chapter.ChapterItems" :key="index2">
                            <b-nav-item @click="addToLog(section)" href="#">{{section}}</b-nav-item>
                        </div>
                  </b-navbar-nav>
                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                      <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                      <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                  </b-navbar-nav>
                </b-collapse>
                  </b-navbar>
        </div>
    </div>

    </div>

</template>

<script>
// import blank from ''

export default {
    name: 'ContentNav',
    components: {},
    data() {
        return {

        }

    },
    computed: {

    },
    methods: {
        addToLog(section) {
        // Get the date
        const date = new Date();


        // Create log object
        const logObj = {
          Date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
          Type: "FlashCards",
          Suggested: section,
        }
        
        console.log(logObj)


        // Add to log list in store
        this.$store.commit("ADD_TO_LOG", logObj)
      }

    }
}

</script>

<style>
</style>
