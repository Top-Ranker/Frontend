<template>
  <v-container>
    <div class="text-center text-h5 font-weight-medium">Problem Set</div>
    <ProblemsTableWithLogin v-if="$auth.loggedIn"></ProblemsTableWithLogin>
    <ProblemsTable v-else/>
  </v-container>
</template>

<script>
import ProblemsTable from "../../components/ProblemsTable";
import ProblemsTableWithLogin from "../../components/ProblemsTableWithLogin";

export default {
  name: 'Problems',
  components: {ProblemsTableWithLogin, ProblemsTable},
  data() {
    return {
      page: 1,
    }
  },
  watch: {},
  created() {
  },
};
</script>

<style>

a {
  text-decoration: none;
  color: black !important;
}

a:hover {
  color: #1d8b9b !important;
}
</style>
