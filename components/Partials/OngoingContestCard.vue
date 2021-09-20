<template>
  <v-card class="rounded-b" hover>
    <v-card-title class="font-italic text-subtitle-1 font-weight-medium">Ongoing Contests</v-card-title>
    <v-card-text>
      <v-row no-gutters>
        <v-col>
          <ul>
            <li v-for="contest in filteredContests1" :key="contest.id" class="ml-2">
              <nuxt-link :to="`contest/${contest.id}`"> Contest {{ contest.id }} - by {{ contest.by }}
                <br>{{ contest.numberOfProblems + ' numbers' }} | Price {{ contest.price }} |
                Start - {{ contest.startDate }}
              </nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col>
          <ul>
            <li v-for="contest in filteredContests2" :key="contest.id" class="ml-2">
              <nuxt-link :to="`contest/${contest.id}`"> Contest {{ contest.id }} - by {{ contest.by }}
                <br>{{ contest.numberOfProblems + ' numbers' }} | Price {{ contest.price }} |
                Start - {{ contest.startDate }}
              </nuxt-link>
            </li>
            <nuxt-link class="text-body-1 font-weight-black" style="text-align: end" to="contest/">More...</nuxt-link>
          </ul>
        </v-col>
      </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: "OngoingContestCard",
  data() {
    return {
      contests: [{
        id: 1,
        by: ' SocProcs 2018',
        price: '$500 ',
        numberOfProblems: 5,
        startDate: '1 Nov 2021\n'
      }, {
        id: 2,
        by: 'ICPC 2018',
        price: '$500 ',
        numberOfProblems: 10,
        startDate: '1 Nov 2021\n'
      }, {
        id: 3,
        by: 'NNCC 2018',
        price: '$800 ',
        numberOfProblems: 21,
        startDate: '1 Nov 2021\n'
      }, {
        id: 4,
        by: 'NNCC 2018',
        price: '$800 ',
        numberOfProblems: 21,
        startDate: '1 Nov 2021\n'
      }, {
        id: 5,
        by: 'NNCC 2018',
        price: '$800 ',
        numberOfProblems: 21,
        startDate: '1 Nov 2021\n'
      }, {
        id: 6,
        by: 'NNCC 2018',
        price: '$800 ',
        numberOfProblems: 21,
        startDate: '1 Nov 2021\n'
      }]
    }
  },
  computed: {
    filteredContests1() {
      return this.contests.slice(0, this.contests.length / 2)
    },
    filteredContests2() {
      return this.contests.slice(this.contests.length / 2, this.contests.length)
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(75, 75, 75, 0.96);
}

a:hover {
  color: #1d8b9b;
}
</style>
