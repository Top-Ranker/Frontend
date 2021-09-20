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
        <template
          #body="{ items }">
          <tbody>
          <tr
            v-for="item in items"
            :key="item.id">
            <td>
              <nuxt-link to="/"> {{ item.id }}</nuxt-link>
            </td>
            <td>
              <nuxt-link to="/"> {{ item.name }}</nuxt-link>
            </td>
            <td>{{ item.difficulty }}</td>
            <td>{{ item.country }}</td>
            <td>
              <nuxt-link style="color: black" to="/">{{ item.owner }}</nuxt-link>
            </td>
            <td>
          <tr>
            <div v-for="dim in item.dimension" :key="dim.dimension" class="mb-1 font-weight-light">
              <td>for D={{ dim.dimension }}</td>
            </div>
          </tr>
          </td>
          <td>
            <tr>
              <div v-for="dim in item.dimension" :key="dim.dimension" class="mb-1 font-weight-light">
                <td>{{ dim.participationD }}</td>
              </div>
            </tr>
          </td>
          <td>{{ item.participationAll }}<br>
            <nuxt-link to="/"> View all rankers of the problem</nuxt-link>
          </td>
          <td>
            <v-btn dark elevation="2" small>Solve Problem</v-btn>
          </td>
          </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ProblemsTable",
  data() {
    return {
      page: 1,
      pageCount: 2,
      itemsPerPage: 12,
      headers: [
        {text: 'Problem #Id', align: 'start', sortable: true, value: 'id',},
        {text: 'Problem Name', value: 'name'},
        {text: 'Difficulty', value: 'difficulty'},
        {text: 'Country', sortable: false, value: 'country'},
        {text: 'Owner', sortable: false, value: 'owner'},
        {text: 'Problem Dimensions ', sortable: false, value: 'participationAll'},
        {text: 'Total Participations (Dimension wise)', sortable: false, value: 'participationAll'},
        {text: 'Total Participations (Problem Wise)', sortable: false, value: 'participationAll'},

      ],
      problems: [
        {
          "id": 0,
          "name": "Problem Name 0",
          "difficulty": "Easy",
          "country": "India",
          "owner": "Owner Name 0",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 100
        },
        {
          "id": 1,
          "name": "Problem Name 1",
          "difficulty": "Hard",
          "country": "China",
          "owner": "Owner Name 1",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 101
        },
        {
          "id": 2,
          "name": "Problem Name 2",
          "difficulty": "Easy",
          "country": "US",
          "owner": "Owner Name 2",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 102
        },
        {
          "id": 3,
          "name": "Problem Name 3",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 3",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 103
        },
        {
          "id": 4,
          "name": "Problem Name 4",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 4",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 104
        },
        {
          "id": 5,
          "name": "Problem Name 5",
          "difficulty": "Medium",
          "country": "India",
          "owner": "Owner Name 5",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 105
        },
        {
          "id": 6,
          "name": "Problem Name 6",
          "difficulty": "Hard",
          "country": "US",
          "owner": "Owner Name 6",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 106
        },
        {
          "id": 7,
          "name": "Problem Name 7",
          "difficulty": "Hard",
          "country": "India",
          "owner": "Owner Name 7",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 107
        },
        {
          "id": 8,
          "name": "Problem Name 8",
          "difficulty": "Easy",
          "country": "Poland",
          "owner": "Owner Name 8",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 108
        },
        {
          "id": 9,
          "name": "Problem Name 9",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 9",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 109
        },
        {
          "id": 10,
          "name": "Problem Name 10",
          "difficulty": "Hard",
          "country": "China",
          "owner": "Owner Name 10",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 110
        },
        {
          "id": 11,
          "name": "Problem Name 11",
          "difficulty": "Hard",
          "country": "US",
          "owner": "Owner Name 11",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 111
        },
        {
          "id": 12,
          "name": "Problem Name 12",
          "difficulty": "Hard",
          "country": "China",
          "owner": "Owner Name 12",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 112
        },
        {
          "id": 13,
          "name": "Problem Name 13",
          "difficulty": "Easy",
          "country": "China",
          "owner": "Owner Name 13",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 113
        },
        {
          "id": 14,
          "name": "Problem Name 14",
          "difficulty": "Medium",
          "country": "China",
          "owner": "Owner Name 14",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 114
        },
        {
          "id": 15,
          "name": "Problem Name 15",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 15",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 115
        },
        {
          "id": 16,
          "name": "Problem Name 16",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 16",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 116
        },
        {
          "id": 17,
          "name": "Problem Name 17",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 17",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 117
        },
        {
          "id": 18,
          "name": "Problem Name 18",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 18",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 118
        },
        {
          "id": 19,
          "name": "Problem Name 19",
          "difficulty": "Hard",
          "country": "China",
          "owner": "Owner Name 19",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 119
        },
        {
          "id": 20,
          "name": "Problem Name 20",
          "difficulty": "Easy",
          "country": "India",
          "owner": "Owner Name 20",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 120
        },
        {
          "id": 21,
          "name": "Problem Name 21",
          "difficulty": "Medium",
          "country": "China",
          "owner": "Owner Name 21",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 121
        },
        {
          "id": 22,
          "name": "Problem Name 22",
          "difficulty": "Easy",
          "country": "Poland",
          "owner": "Owner Name 22",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 122
        },
        {
          "id": 23,
          "name": "Problem Name 23",
          "difficulty": "Hard",
          "country": "China",
          "owner": "Owner Name 23",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 123
        },
        {
          "id": 24,
          "name": "Problem Name 24",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 24",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 124
        },
        {
          "id": 25,
          "name": "Problem Name 25",
          "difficulty": "Easy",
          "country": "China",
          "owner": "Owner Name 25",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 125
        },
        {
          "id": 26,
          "name": "Problem Name 26",
          "difficulty": "Hard",
          "country": "India",
          "owner": "Owner Name 26",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 126
        },
        {
          "id": 27,
          "name": "Problem Name 27",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 27",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 127
        },
        {
          "id": 28,
          "name": "Problem Name 28",
          "difficulty": "Hard",
          "country": "China",
          "owner": "Owner Name 28",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 128
        },
        {
          "id": 29,
          "name": "Problem Name 29",
          "difficulty": "Easy",
          "country": "China",
          "owner": "Owner Name 29",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 129
        },
        {
          "id": 30,
          "name": "Problem Name 30",
          "difficulty": "Easy",
          "country": "Poland",
          "owner": "Owner Name 30",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 130
        },
        {
          "id": 31,
          "name": "Problem Name 31",
          "difficulty": "Hard",
          "country": "India",
          "owner": "Owner Name 31",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 131
        },
        {
          "id": 32,
          "name": "Problem Name 32",
          "difficulty": "Easy",
          "country": "US",
          "owner": "Owner Name 32",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 132
        },
        {
          "id": 33,
          "name": "Problem Name 33",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 33",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 133
        },
        {
          "id": 34,
          "name": "Problem Name 34",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 34",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 134
        },
        {
          "id": 35,
          "name": "Problem Name 35",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 35",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 135
        },
        {
          "id": 36,
          "name": "Problem Name 36",
          "difficulty": "Hard",
          "country": "US",
          "owner": "Owner Name 36",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 136
        },
        {
          "id": 37,
          "name": "Problem Name 37",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 37",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 137
        },
        {
          "id": 38,
          "name": "Problem Name 38",
          "difficulty": "Hard",
          "country": "US",
          "owner": "Owner Name 38",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 138
        },
        {
          "id": 39,
          "name": "Problem Name 39",
          "difficulty": "Hard",
          "country": "US",
          "owner": "Owner Name 39",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 139
        },
        {
          "id": 40,
          "name": "Problem Name 40",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 40",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 140
        },
        {
          "id": 41,
          "name": "Problem Name 41",
          "difficulty": "Hard",
          "country": "US",
          "owner": "Owner Name 41",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 141
        },
        {
          "id": 42,
          "name": "Problem Name 42",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 42",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 142
        },
        {
          "id": 43,
          "name": "Problem Name 43",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 43",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 143
        },
        {
          "id": 44,
          "name": "Problem Name 44",
          "difficulty": "Easy",
          "country": "Poland",
          "owner": "Owner Name 44",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 144
        },
        {
          "id": 45,
          "name": "Problem Name 45",
          "difficulty": "Hard",
          "country": "India",
          "owner": "Owner Name 45",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 145
        },
        {
          "id": 46,
          "name": "Problem Name 46",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 46",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 146
        },
        {
          "id": 47,
          "name": "Problem Name 47",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 47",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 147
        },
        {
          "id": 48,
          "name": "Problem Name 48",
          "difficulty": "Medium",
          "country": "China",
          "owner": "Owner Name 48",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 148
        },
        {
          "id": 49,
          "name": "Problem Name 49",
          "difficulty": "Easy",
          "country": "Poland",
          "owner": "Owner Name 49",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 149
        },
        {
          "id": 50,
          "name": "Problem Name 50",
          "difficulty": "Easy",
          "country": "Poland",
          "owner": "Owner Name 50",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 150
        },
        {
          "id": 51,
          "name": "Problem Name 51",
          "difficulty": "Easy",
          "country": "China",
          "owner": "Owner Name 51",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 151
        },
        {
          "id": 52,
          "name": "Problem Name 52",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 52",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 152
        },
        {
          "id": 53,
          "name": "Problem Name 53",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 53",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 153
        },
        {
          "id": 54,
          "name": "Problem Name 54",
          "difficulty": "Medium",
          "country": "China",
          "owner": "Owner Name 54",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 154
        },
        {
          "id": 55,
          "name": "Problem Name 55",
          "difficulty": "Hard",
          "country": "India",
          "owner": "Owner Name 55",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 155
        },
        {
          "id": 56,
          "name": "Problem Name 56",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 56",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 156
        },
        {
          "id": 57,
          "name": "Problem Name 57",
          "difficulty": "Hard",
          "country": "US",
          "owner": "Owner Name 57",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 157
        },
        {
          "id": 58,
          "name": "Problem Name 58",
          "difficulty": "Easy",
          "country": "China",
          "owner": "Owner Name 58",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 158
        },
        {
          "id": 59,
          "name": "Problem Name 59",
          "difficulty": "Easy",
          "country": "China",
          "owner": "Owner Name 59",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 159
        },
        {
          "id": 60,
          "name": "Problem Name 60",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 60",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 160
        },
        {
          "id": 61,
          "name": "Problem Name 61",
          "difficulty": "Hard",
          "country": "US",
          "owner": "Owner Name 61",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 161
        },
        {
          "id": 62,
          "name": "Problem Name 62",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 62",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 162
        },
        {
          "id": 63,
          "name": "Problem Name 63",
          "difficulty": "Hard",
          "country": "India",
          "owner": "Owner Name 63",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 163
        },
        {
          "id": 64,
          "name": "Problem Name 64",
          "difficulty": "Hard",
          "country": "US",
          "owner": "Owner Name 64",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 164
        },
        {
          "id": 65,
          "name": "Problem Name 65",
          "difficulty": "Medium",
          "country": "China",
          "owner": "Owner Name 65",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 165
        },
        {
          "id": 66,
          "name": "Problem Name 66",
          "difficulty": "Easy",
          "country": "India",
          "owner": "Owner Name 66",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 166
        },
        {
          "id": 67,
          "name": "Problem Name 67",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 67",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 167
        },
        {
          "id": 68,
          "name": "Problem Name 68",
          "difficulty": "Easy",
          "country": "China",
          "owner": "Owner Name 68",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 168
        },
        {
          "id": 69,
          "name": "Problem Name 69",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 69",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 169
        },
        {
          "id": 70,
          "name": "Problem Name 70",
          "difficulty": "Easy",
          "country": "US",
          "owner": "Owner Name 70",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 170
        },
        {
          "id": 71,
          "name": "Problem Name 71",
          "difficulty": "Easy",
          "country": "Poland",
          "owner": "Owner Name 71",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 171
        },
        {
          "id": 72,
          "name": "Problem Name 72",
          "difficulty": "Hard",
          "country": "US",
          "owner": "Owner Name 72",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 172
        },
        {
          "id": 73,
          "name": "Problem Name 73",
          "difficulty": "Easy",
          "country": "Poland",
          "owner": "Owner Name 73",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 173
        },
        {
          "id": 74,
          "name": "Problem Name 74",
          "difficulty": "Easy",
          "country": "Poland",
          "owner": "Owner Name 74",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 174
        },
        {
          "id": 75,
          "name": "Problem Name 75",
          "difficulty": "Hard",
          "country": "China",
          "owner": "Owner Name 75",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 175
        },
        {
          "id": 76,
          "name": "Problem Name 76",
          "difficulty": "Hard",
          "country": "China",
          "owner": "Owner Name 76",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 176
        },
        {
          "id": 77,
          "name": "Problem Name 77",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 77",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 177
        },
        {
          "id": 78,
          "name": "Problem Name 78",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 78",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 178
        },
        {
          "id": 79,
          "name": "Problem Name 79",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 79",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 179
        },
        {
          "id": 80,
          "name": "Problem Name 80",
          "difficulty": "Easy",
          "country": "US",
          "owner": "Owner Name 80",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 180
        },
        {
          "id": 81,
          "name": "Problem Name 81",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 81",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 181
        },
        {
          "id": 82,
          "name": "Problem Name 82",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 82",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 182
        },
        {
          "id": 83,
          "name": "Problem Name 83",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 83",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 183
        },
        {
          "id": 84,
          "name": "Problem Name 84",
          "difficulty": "Medium",
          "country": "China",
          "owner": "Owner Name 84",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 184
        },
        {
          "id": 85,
          "name": "Problem Name 85",
          "difficulty": "Easy",
          "country": "Poland",
          "owner": "Owner Name 85",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 185
        },
        {
          "id": 86,
          "name": "Problem Name 86",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 86",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 186
        },
        {
          "id": 87,
          "name": "Problem Name 87",
          "difficulty": "Medium",
          "country": "US",
          "owner": "Owner Name 87",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 187
        },
        {
          "id": 88,
          "name": "Problem Name 88",
          "difficulty": "Hard",
          "country": "India",
          "owner": "Owner Name 88",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 188
        },
        {
          "id": 89,
          "name": "Problem Name 89",
          "difficulty": "Medium",
          "country": "Poland",
          "owner": "Owner Name 89",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 189
        },
        {
          "id": 90,
          "name": "Problem Name 90",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 90",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 190
        },
        {
          "id": 91,
          "name": "Problem Name 91",
          "difficulty": "Easy",
          "country": "US",
          "owner": "Owner Name 91",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 191
        },
        {
          "id": 92,
          "name": "Problem Name 92",
          "difficulty": "Medium",
          "country": "India",
          "owner": "Owner Name 92",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 192
        },
        {
          "id": 93,
          "name": "Problem Name 93",
          "difficulty": "Easy",
          "country": "US",
          "owner": "Owner Name 93",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 193
        },
        {
          "id": 94,
          "name": "Problem Name 94",
          "difficulty": "Easy",
          "country": "US",
          "owner": "Owner Name 94",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 194
        },
        {
          "id": 95,
          "name": "Problem Name 95",
          "difficulty": "Easy",
          "country": "China",
          "owner": "Owner Name 95",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 195
        },
        {
          "id": 96,
          "name": "Problem Name 96",
          "difficulty": "Medium",
          "country": "China",
          "owner": "Owner Name 96",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 196
        },
        {
          "id": 97,
          "name": "Problem Name 97",
          "difficulty": "Hard",
          "country": "Poland",
          "owner": "Owner Name 97",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 197
        },
        {
          "id": 98,
          "name": "Problem Name 98",
          "difficulty": "Hard",
          "country": "China",
          "owner": "Owner Name 98",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 198
        },
        {
          "id": 99,
          "name": "Problem Name 99",
          "difficulty": "Medium",
          "country": "China",
          "owner": "Owner Name 99",
          "dimension": [
            {
              "dimension": 20,
              "participationD": 40
            },
            {
              "dimension": 50,
              "participationD": 50
            },
            {
              "dimension": 120,
              "participationD": 60
            }
          ],
          "participationAll": 199
        }
      ],
    }
  },
  methods: {},
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
