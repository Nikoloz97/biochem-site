<template>
<div> 
<b-row align-h="around" class="mt-5">
      <b-card title="Diagnostic Exam"
              img-src="https://catalog.ndsu.edu/gallery/Biochem.jpg"
              img-height="50%"
              img-alt="Biochemistry stock photo"
              style="max-width:20rem"
              class="mb-2">
          <b-card-text>
              <p>Take a short, 10 question assessment to analyze where you're at.</p>
          </b-card-text>
          <router-link to="/pretest"><b-button class="btn-md"
                                                variant="primary">Take Quiz</b-button></router-link>
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
</b-row>
</div>
</template>

<script>

</script>

<style> 

</style>
