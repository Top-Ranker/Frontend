<template>
  <v-container>
    <v-card class='mt-6 elevation-0 pa-3'>
      <h1 class='text-h3 font-weight-regular mb-3'> {{ problem.name }}</h1>
      <v-row>
        <v-col md='6' sm='12'>
          <v-card class='stats mt-6 ml-4' flat>
            <div class='ma-2'>
              <div> Problem Id :</div>
              {{ problem.id }}
            </div>
            <div class='ma-2'>
              <div>Difficulty :</div>
              {{ problem.difficulty }}
            </div>
            <div class='ma-2'>
              <div>Owner :</div>
              {{ problem.name }},
              <span v-if='problem.country===undefined'>Indiaaaa</span>
              <span v-else>{{ problem.country + ' acha' }}</span>
            </div>
            <div class='ma-2'>
              <div>Type :</div>
              {{ problem.type }}
            </div>
            <div class='ma-2'>
              <div>Submission Date :</div>
              23 Dec 2017
            </div>
            <div class='ma-2'>
              <div>Total Submissions :</div>
              100 {{ problem.participationAll }}
            </div>
          </v-card>
        </v-col>
        <v-col md='6' sm='12'>
          <v-card flat>
            <v-card-title>Top Rankers</v-card-title>
            <v-simple-table class='mx-3'>
              <template #default>
                <thead>
                <tr>
                  <th class='text-left' style='width: 10%'>
                    Rank/Problem Dimension
                  </th>
                  <th class='text-left' style='width: 30%'>
                    1st Position
                  </th>
                  <th class='text-left' style='width: 30%'>
                    2nd Position
                  </th>
                  <th class='text-left' style='width: 30%'>
                    3rd Position
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                  v-for='rank in problem.dimensions'
                  :key='rank.dimension'>
                  <td>For D={{ rank.dimension }}</td>
                  <td>first</td>
                  <td>second</td>
                  <td>third</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-title>Problem Description:</v-card-title>
            <v-card-text>{{ problem.description }}</v-card-text>
            <v-card-text>{{ problem.description }}</v-card-text>
            <v-card-text>{{ problem.description }}</v-card-text>
            <v-card-title>Download Fitness Function Code:
            </v-card-title>
            <v-col>
              <div class='d-flex' style='width: 40%'>
                <v-select :items='lang' :value='language' class='mr-12 pr-12' color='black' outlined solo></v-select>
                <v-btn elevation='4' outlined x-large> Download</v-btn>
              </div>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-simple-table style='width: 100%'>
          <template #default>
            <thead>
            <tr>
              <th class='text-left'>Problem Dimensions</th>
              <th class='text-left'>Your Ranking(Dimension Wise)</th>
              <th class='text-left'>Total Participation(Problem Wise)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <div v-for='dim in problem.dimensions' :key='dim.dimension' class='mb-1 font-weight-light'>
                  <v-row class='mt-1 align-start'>
                    <v-col class='mt-1' cols='3' md='3' sm='8' xs='12'>for D={{ dim.dimension }}
                    </v-col>
                    <v-col md='9' sm='12' xs='12'>
                      <InputField :dimension='dim.dimension' :problemid='problem.id' @handleSolution='handleSolution' />
                    </v-col>
                  </v-row>
                </div>
              </td>
              <td>
                <div v-for='dim in problem.dimensions' :key='dim.dimension'
                     class='mb-1 font-weight-light'>
                  <p v-if='response' class='text-center mr-6'>
                    {{ response.score }}
                    <br>
                    view all my submissions
                  </p>
                  <p v-else class='text-center mr-6'>
                    No Submissions yet
                  </p>
                </div>
              </td>
              <td class='text-center'>200{{ problem.participationAll }}<br>
                <nuxt-link to='/'> View all rankers of the problem</nuxt-link>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-row>
    </v-card>
    <v-card v-if='response' class='pa-3'>
      <v-card-title>Submission:</v-card-title>
      <div class='pa-3 font-weight-light text-body-1'>
        <p>Score: {{ response.score }}</p>
        <p>Solution Description {{ response.solution }}</p>
        <p>Time:{{ response.time }}</p>
        <p>Input: {{ response.input }}</p>
        <p>Dimension for problem {{ problem.name }} {{ response.dimension }}</p>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import InputField from '@/components/Partials/InputField'

export default {
  name: 'ProblemCard',
  components: { InputField },
  props: {
    problem: {
      type: Object,
      default: null,
      required: true
    }
  },
  data() {
    return {
      forceRerender: true,
      lang: ['Python', 'Java', 'C++', 'C'],
      language: 'Python',
      lengthError: false,
      rules: {
        required: value => !!value || 'Required.',
        commaSep: value => !!/^\d+(,\d+)*$/.test(value) || 'Comma Seperated Integers only'
      },
      response: null
    }
  },
  computed: {
    headers() {
      return [
        { text: 'Problem #Id', align: 'start', sortable: true, value: 'id', width: '4%' },
        { text: 'Problem Name', sortable: true, value: 'name', width: '8%' },
        { text: 'Difficulty', sortable: true, value: 'difficulty', width: '5%' },
        { text: 'Type', value: 'type', sortable: true, width: '5%' },
        { text: 'Submit Solution', sortable: false, align: 'start', width: '35%', value: 'participationAll' },
        { text: 'My Ranking (Problem Dimention Wise)', sortable: false, value: 'participationAll' },
        { text: 'Total Participations (Problem Wise)', sortable: false, value: 'participationAll' }
      ]
    },
    messages() {
      if (this.lengthError) {
        return 'Input length does not match expected length'
      } else {
        return null
      }
    }
  },
  methods: {
    async handleSolution(data) {
      if (!this.$auth.loggedIn) {
        this.$router.push('/login')
      } else {
        data.solution = 121212

        const response = await this.$axios.$post('api/addsubmission',
          {
            question_id: data.problemid,
            dimension: data.dimension,
            solution: 'BLAH BLAH',
            input: data.solution
          }
        )
        this.response = response
      }
    }
  }
}
</script>

<style scoped>
.stats div div {
  display: inline-block;
  font-weight: bold;
}

.test {
  background-color: white;
  color: black;
}

.test:hover {
  color: white;
  background-color: black !important;
}

.v-messages__message {
  color: red
}
</style>
