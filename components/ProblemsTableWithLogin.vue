<template>
  <v-container fluid>
    <div class="fluffy text-center pb-4">
      <v-pagination
        v-model="page"
        :length="pageCount"
        color="cyan accent-4">
      </v-pagination>
    </div>
    <v-card flat>
      <v-data-table
        :headers="headers"
        :items="problems"
        :items-per-page="itemsPerPage"
        :page.sync="page"
        class="elevation-1"
        hide-default-footer
        @page-count="pageCount = $event">
        <template v-if="$auth.loggedIn"
                  #body="{ items }">
          <tbody>
          <tr
            v-for="item in items"
            :key="item.id">
            <td>
              <nuxt-link :to="`/problems/${item.id}`"> {{ item.id }}</nuxt-link>
            </td>
            <td>
              <nuxt-link :to="`/problems/${item.id}`"> {{ item.name }}</nuxt-link>
            </td>
            <td>{{ item.difficulty }}</td>
            <td>{{ item.country }}</td>
            <td>
              <nuxt-link style="color: black" to="/">{{ item.owner }}</nuxt-link>
            </td>
            <td>
              <div v-for="(dim,index) in item.dimension" :key="index" class="mb-1 font-weight-light">
                <v-row class="mt-1 align-start">
                  <v-col class="mt-1" cols="3" md="3" sm="8" xs="12">for D={{ dim.dimension }}
                  </v-col>
                  <v-col md="9" sm="12" xs="12">
                    <v-form :ref="'p' + item.id + 'd' + index">
                      <v-row>
                        <v-col md="8" sm="12" xs="12">
                          <v-text-field v-model="solutions[item.id][index]" :rules='[rules.required,rules.commaSep]'
                                        dense flat
                                        outlined solo/>
                        </v-col>
                        <v-col md="4" sm="12" xs="12">
                          <v-btn class="test" elevation="1" outlined small solo
                                 @click="validate('p'+item.id+'d'+index)">Solve {{ index }}
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-col>
                </v-row>
              </div>
            </td>
            <td>
              <div v-for="dim in item.dimension" :key="dim.dimension"
                   class="mb-1 font-weight-light">
                <p class="text-center mr-6">
                  35/{{ dim.participationD }}
                  <br>
                  view all my submissions
                </p>
              </div>
            </td>
            <td class="text-center">{{ item.participationAll }}<br>
              <nuxt-link to="/"> View all rankers of the problem</nuxt-link>
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
  name: "ProblemsTableWithLogin",
  /*  components: {Button},*/
  data() {
    return {
      page: 1,
      test: "",
      pageCount: 2,
      itemsPerPage: 15,
      rules: {
        required: value => !!value || "Required.",
        commaSep: value => !!/^\d+(,\d+)*$/.test(value) || "Comma Seperated Integers only"
      },
      headers: [
        {text: 'Problem #Id', align: 'start', sortable: true, value: 'id', width: '4%'},
        {text: 'Problem Name', value: 'name', width: '8%'},
        {text: 'Difficulty', value: 'difficulty', width: '5%'},
        {text: 'Country', sortable: false, value: 'country', width: '5%'},
        {text: 'Owner', sortable: false, value: 'owner', width: '5%'},
        {text: 'Submit Solution', sortable: false, align: 'start', width: '35%', value: 'participationAll'},
        {text: 'My Ranking (Problem Dimention Wise)', sortable: false, value: 'participationAll'},
        {text: 'Total Participations (Problem Wise)', sortable: false, value: 'participationAll'},
      ],
      solutions: [
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        },
        {
          "solution0": "",
          "solution1": "",
          "solution2": ""
        }
      ]
    }
  },
  computed: {
    problems() {
      return this.$store.getters.getAllProblems
    }
  },
  methods: {
    validate(ref) {
      let problemId = ref.substring(ref.indexOf("p") + 1, ref.lastIndexOf("d"));

      let dimensionIndex = ref.substring(ref.indexOf('d') + 1, ref.length)
      // 20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20
      if (this.$refs[ref][0].validate()) {
        this.$store.commit('addSolution', {
          problemId,
          dimensionIndex,
          'solution': this.solutions[problemId][dimensionIndex]
        })
      }
    }
  },

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
</style>
