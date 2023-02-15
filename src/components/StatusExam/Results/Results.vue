<template>
    <div>
         <!-- Score/stats display -->
      <b-container
        class="d-flex justify-content-center"
        v-if="$store.state.isResultsDisplayed"
      >
        <b-card
          body-class="text-center"
          header-tag="nav"
        >
          <template #header>
            <b-nav
              card-header
              tabs
            >
              <b-nav-item
                :active="$store.state.currentResultsTab == 0"
                @click="goToResultTab($event)"
                >Score</b-nav-item
              >
              <b-nav-item
                :active="$store.state.currentResultsTab == 1"
                @click="goToResultTab($event)"
                >Stats</b-nav-item
              >
            </b-nav>
          </template>
  
          <!-- Results display -->
          <b-container
            v-for="(result, index) in $store.state.results"
            :key="index"
          >
            <b-card-body v-if="index == $store.state.currentResultsTab">
              <b-card-title> {{ result.name }} </b-card-title>
              <b-card-text>
                <pie-score v-if="result.name === 'Score'" />
                <bar-stats v-if="result.name === 'Stats'" />
              </b-card-text>
            </b-card-body>
          </b-container>
        </b-card>
      </b-container>
    </div>

</template>

<script>
// import blank from ''
import PieScore from "@/components/StatusExam/Results/Pie.vue";
import BarStats from "@/components/StatusExam/Results/Bar.vue";

export default {
    name: 'Results',
    components: {PieScore, BarStats},
    data() {
        return {

        }

    },
    computed: {

    },
    methods: {
        goToResultTab(event) {
        this.$store.commit("GO_TO_RESULT_TAB", event);
      },

    }
}

</script>

<style>
</style>