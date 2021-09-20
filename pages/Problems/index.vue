<template>
  <v-container>
    <div class="text-center text-h5 font-weight-medium">Problem Set</div>
    <ProblemsTable/>
  </v-container>
</template>

<script>
import ProblemsTable from "../../components/ProblemsTable";

export default {
  name: 'Problems',
  components: {ProblemsTable},
  data() {
    return {
      page: 1,
    }
  },
  watch: {
    page(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  created() {
  },
};
</script>

<style>
a{
  text-decoration: none;
  color: black !important;
}
a:hover {
  color: #1d8b9b !important;
}
</style>
