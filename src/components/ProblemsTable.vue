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
        <template v-if='loading' #progress>
          <v-progress-linear
            :height='100'
            color='purple'
            indeterminate
          ></v-progress-linear>
        </template>
        <template #body='{ items }'>
          <tbody>
          <tr
            v-for='item in items'
            :key='item.id'>
            <td>
              <nuxt-link :to="'/problems/' + item.id"> {{ item.id }}</nuxt-link>
            </td>
            <td>
              <nuxt-link :to='`/problems/${item.id}`'> {{ item.name }}</nuxt-link>
            </td>
            <td>{{ item.difficulty }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.country }}</td>
            <td>
              <nuxt-link style='color: black' to='/'>{{ item.contributor }}</nuxt-link>
            </td>
            <td>
              <div v-for='dim in item.dimensions' :key='dim' class='mb-1 ma-2 font-weight-light'>
                <span>for D={{ dim }}</span>
              </div>
            </td>
            <td>
              <div v-for='dim in item.dimensions' :key='dim' class='mb-1 font-weight-light'>
                <span>100</span>
              </div>
            </td>
            <td>150<br>
              <span>
              <nuxt-link to='/'> View all rankers of the problem</nuxt-link>

            </span>
            </td>
            <!--            <td>
                          <v-btn outlined
                                 shaped
                                 @click="$router.push('/login')">Solve!
                          </v-btn>
                        </td>-->
          </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ProblemsTable',
  data() {
    //IMPLEMENT FILTER

    return {
      page: 1,
      pageCount: 2,
      itemsPerPage: 15,
      loading: true,
      search: null,
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
      return ['Multi Model', 'Constraint', 'Multi Dimensional']
    },
    headers(){
      return [ { text: 'Problem #Id', align: 'start', sortable: true, value: 'id', width: '8%' },
        { text: 'Problem Name', value: 'name', width: '13%' },
        { text: 'Difficulty', value: 'difficulty', width: '8%' },
        { text: 'Type', value: 'type', width: '8%' },
        { text: 'Country', sortable: false, value: 'country', width: '4%' },
        { text: 'Owner', sortable: false, value: 'owner', width: '12%' },
        { text: 'Problem Dimensions ', sortable: false, align: 'start', value: 'participationAll', width: '10%' },
        { text: 'Total Participations (Dimension wise)', sortable: false, value: 'participationAll', width: '10%' },
        { text: 'Total Participations (Problem Wise)', sortable: false, value: 'participationAll' }
      ]
    }
  },
  methods: {
//  IMPLEMENT FILTER

    test(filter) {

    }
  }
  /*  async created() {
      const problems = await this.$axios.$get('/api/problems', { data: { 'filter': 'Any' } })
      this.$store.commit('problems', problems)
    }*/
}
</script>

<style>
.v-data-table-header th {
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: black;
  font-weight: bolder;
}
</style>
