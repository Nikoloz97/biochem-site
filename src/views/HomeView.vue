<template>
<div> 
<b-container>
    <b-row align-h="around">
      <b-card title="Diagnostic Exam"
              img-src="https://catalog.ndsu.edu/gallery/Biochem.jpg"
              img-alt="Biochemistry stock photo"
              img-top style="max-width:20rem"
              class="mb-2" d-flex align-self="center">
          <b-card-text>
              <p>Take a short, 10 question assessment to analyze where you're at.</p>
          </b-card-text>
          <router-link to="/pretest"><b-button class="btn-md"
                                                variant="primary">Take Quiz</b-button></router-link>
      </b-card>

      <b-card title="Flashcards"
              img-src="https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/online%20classes.jpeg"
              img-alt="Biochemistry stock photo"
              img-top style="max-width:20rem"
              class="mb-2">
          <b-card-text>
              <p>Make some progress in your flashcard deck</p>
          </b-card-text>
          <router-link to="/flashcards"><b-button class="btn-md"
                                                variant="primary">Study </b-button></router-link>

      </b-card>

      </b-row>

</b-container>
    </div>
</template>

<script>

</script>

<style> 

</style>
