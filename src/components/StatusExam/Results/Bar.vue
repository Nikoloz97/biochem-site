<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "PreTestResults",
  components: { Bar },
  data() {
    return {
      chartData: {
        // grab string array of categories from store
        labels: this.$store.getters.getPretestCategories,
        datasets: [
          {
            label: "score",
            // grab integer array of values that correspond to each category from store
            data: this.$store.getters.getPretestValues,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        indexAxis: "y",
      },
    };
  },
};
</script>

<style></style>
