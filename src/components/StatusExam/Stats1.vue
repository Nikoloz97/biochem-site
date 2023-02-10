<template>
  <Pie
    id="chartId"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Pie } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "PieChart",
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ["Correct", "Incorrect"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651"],
            data: [
              this.$store.getters.getPercentCorrect,
              this.$store.getters.getPercentIncorrect,
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style></style>
