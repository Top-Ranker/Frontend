<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="6">
          <OngoingContestCard class="mb-5"/>
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

export default {
  name: "Index",
  components: {StatisticsCard, OngoingContestCard, LoginSignup},
  methods: {
    something(event) {
      console.log('hahah',event)
    }
  },
}
</script>

<style scoped>

</style>
