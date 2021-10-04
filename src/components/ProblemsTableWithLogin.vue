<template>
  <v-container fluid>
    <div class='text-center pb-4'>
      <v-pagination
        v-model='page'
        :length='pageCount'
        color='cyan accent-4'>
      </v-pagination>
    </div>
    <v-card flat>

      <v-row>
        <v-col>
          <v-text-field
            v-model='search'
            append-icon='mdi-magnify'
            class='mx-auto'
            color='cyan lighten-3'
            dense label='Search'
            outlined
            single-line
            solo
          ></v-text-field>
        </v-col>
        <v-col>
          <v-row>
            <v-col>

              <!--              IMPLEMENT FILTER     -->
              <v-select :items='difficulty' class='mx-auto' clearable color='cyan' dense outlined prefix='Difficulty'
                        single-line
                        solo @change='test'>
              </v-select>
            </v-col>
            <v-col>
              <v-select :items='type' class='mx-auto' clearable color='cyan' dense outlined prefix='Type' single-line
                        solo @change='test'>
              </v-select>
              <!--              IMPLEMENT FILTER     -->

            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-data-table
        :headers='headers'
        :items='problems'
        :items-per-page='itemsPerPage'
        :page.sync='page'
        :search='search'
        class='elevation-1'
        hide-default-footer
        @page-count='pageCount = $event'>
        <template v-if='$auth.loggedIn'
                  #body='{ items }'>
          <tbody>
          <tr
            v-for='item in items'
            :key='item.id'>
            <td>
              <nuxt-link :to='`/problems/${item.id}`'> {{ item.id }}</nuxt-link>
            </td>
            <td>
              <nuxt-link :to='`/problems/${item.id}`'> {{ item.name }}</nuxt-link>
            </td>
            <td>{{ item.difficulty }}</td>
            <td>{{ item.type }}</td>

            <td>
              <div v-for='(dim,index) in item.dimension' :key='index' class='mb-1 font-weight-light'>
                <v-row class='mt-1 align-start'>
                  <v-col class='mt-1' cols='3' md='3' sm='8' xs='12'>for D={{ dim.dimension }}
                  </v-col>
                  <v-col md='9' sm='12' xs='12'>
                    <v-form :ref="'p' + item.id + 'd' + index">
                      <v-row>
                        <v-col md='8' sm='12' xs='12'>
                          <v-text-field v-if='forceRerender' v-model='solutions[item.id][index]' :messages='message'
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
                                 @click="validate('p'+item.id+'d'+index)">Solve
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-col>
                </v-row>
              </div>
            </td>
            <td>
              <div v-for='dim in item.dimension' :key='dim.dimension'
                   class='mb-1 font-weight-light'>
                <p class='text-center mr-6'>
                  35/{{ dim.participationD }}
                  <br>
                  view all my submissions
                </p>
              </div>
            </td>
            <td class='text-center'>{{ item.participationAll }}<br>
              <nuxt-link to='/'> View all rankers of the problem</nuxt-link>
            </td>
          </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
//import Button from "./Partials/Button";

export default {
  name: 'ProblemsTableWithLogin',
  /*  components: {Button},*/
  data() {
    return {
      page: 1,
      lengthError: false,
      forceRerender: true,
      pageCount: 2,
      search: null,
      itemsPerPage: 15,
      rules: {
        required: value => !!value || 'Required.',
        commaSep: value => !!/^\d+(,\d+)*$/.test(value) || 'Comma Seperated Integers only'
      },
      solutions: [
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        },
        {
          'solution0': '',
          'solution1': '',
          'solution2': ''
        }
      ]
    }
  },
  computed: {
    problems() {
      return this.$store.getters.getAllProblems
    },
    difficulty() {
      return ['Easy', 'Medium', 'Hard', 'None']
    },
    type() {
      return ['Multi Model', 'Constraint', 'Multi Dimensional', 'None']
    },
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
      } else
        return null
    }
  },
  methods: {
    validate(ref) {
      const problemId = ref.substring(ref.indexOf('p') + 1, ref.lastIndexOf('d'))
      const dimensionIndex = ref.substring(ref.indexOf('d') + 1, ref.length)
      if (this.$refs[ref][0].validate()) {
        const solution = this.solutions[problemId][dimensionIndex]
        for (let i = 0; i < solution.length; i++) {
          if (solution.split(',').length === this.problems[problemId].dimension[dimensionIndex].dimension) {
            //CONTINUE
            this.lengthError = false
          } else {
            //SHOW ERROR THAT INPUT LENGTH DOES NOT MATCH EXPECTED LENGTH
            this.lengthError = true
            return
          }
        }
        this.$store.commit('addSolution', {
          problemId,
          dimensionIndex,
          'solution': this.solutions[problemId][dimensionIndex]
        })
      }
    }
  }

}
</script>

<style>
.v-data-table-header th {
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: black;
  font-weight: bolder;

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
