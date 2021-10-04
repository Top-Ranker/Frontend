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
              {{ problem.owner }}, {{ problem.country }}
            </div>
            <div class='ma-2'>
              <div>Type :</div>
              Multi Model, Constraint, Multi Dimensional
            </div>
            <div class='ma-2'>
              <div>Submission Date :</div>
              23 Dec 2017
            </div>
            <div class='ma-2'>
              <div>Submissions :</div>
              {{ problem.participationAll }}
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
                  v-for='rank in ranks'
                  :key='rank.dimension'>
                  <td>For D ={{ rank.dimension }}</td>
                  <td>{{ rank.first }}</td>
                  <td>{{ rank.second }}</td>
                  <td>{{ rank.third }}</td>
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
              <v-select :items='lang' :value='language' color='black' outlined solo style='width:20%'></v-select>
              <v-btn elevation='4' outlined x-large> Download</v-btn>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-simple-table style='width: 100%'>
          <template #default>
            <thead>
            <tr>
              <th class='text-left'>Country</th>
              <th class='text-left'>Owner</th>
              <th class='text-left'>Problem Dimensions</th>
              <th class='text-left'>Total Participation(Dimension Wise)</th>
              <th class='text-left'>Total Participation(Problem Wise)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{ problem.country }}</td>
              <td>{{ problem.owner }}</td>
              <td>
                <div v-for='(dim,index) in problem.dimension' :key='index' class='mb-1 font-weight-light'>
                  <v-row class='mt-1 align-start'>
                    <v-col class='mt-1' cols='3' md='3' sm='8' xs='12'>for D={{ dim.dimension }}
                    </v-col>
                    <v-col md='9' sm='12' xs='12'>
                      <v-form ref='submission'>
                        <v-row>
                          <v-col md='8' sm='12' xs='12'>
                            <v-text-field v-if='forceRerender' v-model='solution[index]'
                                          :messages='message'
                                          :rules='[rules.required,rules.commaSep]' dense
                                          flat outlined solo>
                              <template #message='{ message }'>
                                <span >{{ message }}</span>
                                <span v-if='lengthError'></span>
                              </template>
                            </v-text-field>

                          </v-col>
                          <v-col md='4' sm='12' xs='12'>
                            <v-btn class='test' elevation='1' outlined small solo
                                   @click='validate(index)'>Solve
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-col>
                  </v-row>
                </div>
              </td>
              <td>
                <div v-for='dim in problem.dimension' :key='dim.dimension'
                     class='mb-1 font-weight-light'>
                  <p class='text-center mr-6'>
                    35/{{ dim.participationD }}
                    <br>
                    view all my submissions
                  </p>
                </div>
              </td>
              <td class='text-center'>{{ problem.participationAll }}<br>
                <nuxt-link to='/'> View all rankers of the problem</nuxt-link>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'ProblemCard',
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
      solution: [
        null,
        null,
        null],
      ranks: [
        {
          'dimension': 20,
          'first': 'One',
          'second': 'Two',
          'third': 'Third',
          'participationD': 40
        },
        {
          'dimension': 50,
          'first': 'One',
          'second': 'Two',
          'third': 'Third',
          'participationD': 50
        },
        {
          'dimension': 120,
          'first': 'One',
          'second': 'Two',
          'third': 'Third',
          'participationD': 60
        }],
      lang: ['Python', 'Java', 'C++', 'C'],
      language: 'Python',
      lengthError: false,
      rules: {
        required: value => !!value || 'Required.',
        commaSep: value => !!/^\d+(,\d+)*$/.test(value) || 'Comma Seperated Integers only'
      },
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
    message() {
      if (this.lengthError) {
        return 'Input length does not match expected length'
      } else {
        return null
      }
    }
  },
  methods: {
    validate(index) {
      if (this.$refs.submission[index].validate()) {
        const s = this.solution[index]
        for (let i = 0; i < s.length; i++) {
          if (s.split(',').length === this.problem.dimension[index].dimension) {
            //CONTINUE
            this.lengthError = false
          } else {
            //SHOW ERROR THAT INPUT LENGTH DOES NOT MATCH EXPECTED LENGTH
            this.lengthError = true
            return
          }
        }
        this.$store.commit('addSolution', {
          problemId: this.problem.id,
          dimensionIndex: index,
          'solution': this.solution[index]
        })
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
