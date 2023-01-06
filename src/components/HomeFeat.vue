<template>

<div>
    <b-row align-h="center" class="mt-5"> <h1>Featured</h1></b-row>

    <b-row align-h="around" class="mt-5">
        <b-card title="Planner"
                  img-src="https://www.techrepublic.com/wp-content/uploads/2022/07/only-display-outlook-calendar.jpeg"
                  img-height="50%"
                  img-alt="Biochemistry stock photo"
                  style="max-width:20rem"
                  class="mb-2">
              <b-card-text>
                  <p>Create and update a custom planner for upcoming exams/projects</p>
              </b-card-text>
              <router-link to="/planner"><b-button class="btn-md"
                                                    variant="primary">Planner</b-button></router-link>
          </b-card>

          <b-card title="Flashcards"
                  img-src="https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/online%20classes.jpeg"
                  img-alt="Biochemistry stock photo"
                  img-height="50%"
                  style="max-width:20rem"
                  class="mb-2">
              <b-card-text>
                  <p>Make some progress in your flashcard deck</p>
              </b-card-text>
              <router-link to="/flashcards"><b-button class="btn-md"
                                                    variant="primary">Study </b-button></router-link>
    
          </b-card>
          <b-card title="Status Exam"
                  img-src="https://catalog.ndsu.edu/gallery/Biochem.jpg"
                  img-height="50%"
                  img-alt="Biochemistry stock photo"
                  style="max-width:20rem"
                  class="mb-2">
              <b-card-text>
                  <p>Take a short assessment to analyze where you sit</p>
              </b-card-text>
              <router-link to="/statusExam"><b-button class="btn-md"
                                                    variant="primary">Take Quiz</b-button></router-link>
          </b-card>

    </b-row>


</div>

</template>

<script>
// import blank from ''

export default {
    name: 'HomeFeat',
    components: {},
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