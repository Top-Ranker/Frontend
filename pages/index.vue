<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="6">
          <OngoingContestCard class="mb-5"/>
          <TopRankTables class="mb-5"/>
            <StatisticsCard></StatisticsCard>
        </v-col>
        <v-col cols="6">
          <LoginSignup></LoginSignup>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoginSignup from "../components/LoginSignup";
import OngoingContestCard from "../components/Partials/OngoingContestCard";
import StatisticsCard from "../components/Partials/StatisticsCard";
import TopRankTables from "../components/Partials/TopRankTables";

export default {
  name: "Index",
  components: {TopRankTables, StatisticsCard, OngoingContestCard, LoginSignup},
  methods: {
  },
}
</script>

<style scoped>

</style>
