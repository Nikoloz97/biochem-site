<template>
  <div>
    <exam/>
    <results/>

  </div>

</template>

<script>
// import blank from ''
import Results from '@/components/StatusExam/Results/Results.vue';
import Exam from '@/components/StatusExam/Exam.vue';

export default {
  name: 'StatusExamView',
  components: {Results, Exam},
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
