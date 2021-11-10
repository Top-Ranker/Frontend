//STATE
export const state =
  () => ({
    // allProblems: [
    //   {
    //     'id': 0,
    //     'name': 'Problem Name 0',
    //     'difficulty': 'Easy',
    //     'type': 'Constraint',
    //     'country': 'US',
    //     'owner': 'Owner Name 0',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 100
    //   },
    //   {
    //     'id': 1,
    //     'name': 'Problem Name 1',
    //     'difficulty': 'Easy',
    //     'type': 'Multi Model',
    //     'country': 'India',
    //     'owner': 'Owner Name 1',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 101
    //   },
    //   {
    //     'id': 2,
    //     'name': 'Problem Name 2',
    //     'difficulty': 'Medium',
    //     'type': 'Multi Model',
    //     'country': 'Poland',
    //     'owner': 'Owner Name 2',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 102
    //   },
    //   {
    //     'id': 3,
    //     'name': 'Problem Name 3',
    //     'difficulty': 'Easy',
    //     'type': 'Multi Model',
    //     'country': 'Poland',
    //     'owner': 'Owner Name 3',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 103
    //   },
    //   {
    //     'id': 4,
    //     'name': 'Problem Name 4',
    //     'difficulty': 'Medium',
    //     'type': 'Multi Model',
    //     'country': 'US',
    //     'owner': 'Owner Name 4',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 104
    //   },
    //   {
    //     'id': 5,
    //     'name': 'Problem Name 5',
    //     'difficulty': 'Easy',
    //     'type': 'Constraint',
    //     'country': 'India',
    //     'owner': 'Owner Name 5',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 105
    //   },
    //   {
    //     'id': 6,
    //     'name': 'Problem Name 6',
    //     'difficulty': 'Easy',
    //     'type': 'Multi Dimensional',
    //     'country': 'US',
    //     'owner': 'Owner Name 6',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 106
    //   },
    //   {
    //     'id': 7,
    //     'name': 'Problem Name 7',
    //     'difficulty': 'Medium',
    //     'type': 'Multi Model',
    //     'country': 'China',
    //     'owner': 'Owner Name 7',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 107
    //   },
    //   {
    //     'id': 8,
    //     'name': 'Problem Name 8',
    //     'difficulty': 'Hard',
    //     'type': 'Constraint',
    //     'country': 'India',
    //     'owner': 'Owner Name 8',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 108
    //   },
    //   {
    //     'id': 9,
    //     'name': 'Problem Name 9',
    //     'difficulty': 'Hard',
    //     'type': 'Multi Dimensional',
    //     'country': 'China',
    //     'owner': 'Owner Name 9',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 109
    //   },
    //   {
    //     'id': 10,
    //     'name': 'Problem Name 10',
    //     'difficulty': 'Hard',
    //     'type': 'Multi Model',
    //     'country': 'China',
    //     'owner': 'Owner Name 10',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 110
    //   },
    //   {
    //     'id': 11,
    //     'name': 'Problem Name 11',
    //     'difficulty': 'Medium',
    //     'type': 'Multi Dimensional',
    //     'country': 'Poland',
    //     'owner': 'Owner Name 11',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 111
    //   },
    //   {
    //     'id': 12,
    //     'name': 'Problem Name 12',
    //     'difficulty': 'Easy',
    //     'type': 'Multi Dimensional',
    //     'country': 'US',
    //     'owner': 'Owner Name 12',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 112
    //   },
    //   {
    //     'id': 13,
    //     'name': 'Problem Name 13',
    //     'difficulty': 'Medium',
    //     'type': 'Multi Dimensional',
    //     'country': 'Poland',
    //     'owner': 'Owner Name 13',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 113
    //   },
    //   {
    //     'id': 14,
    //     'name': 'Problem Name 14',
    //     'difficulty': 'Easy',
    //     'type': 'Multi Model',
    //     'country': 'US',
    //     'owner': 'Owner Name 14',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 114
    //   },
    //   {
    //     'id': 15,
    //     'name': 'Problem Name 15',
    //     'difficulty': 'Medium',
    //     'type': 'Multi Model',
    //     'country': 'India',
    //     'owner': 'Owner Name 15',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 115
    //   },
    //   {
    //     'id': 16,
    //     'name': 'Problem Name 16',
    //     'difficulty': 'Hard',
    //     'type': 'Constraint',
    //     'country': 'India',
    //     'owner': 'Owner Name 16',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 116
    //   },
    //   {
    //     'id': 17,
    //     'name': 'Problem Name 17',
    //     'difficulty': 'Easy',
    //     'type': 'Multi Dimensional',
    //     'country': 'Poland',
    //     'owner': 'Owner Name 17',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 117
    //   },
    //   {
    //     'id': 18,
    //     'name': 'Problem Name 18',
    //     'difficulty': 'Hard',
    //     'type': 'Multi Dimensional',
    //     'country': 'India',
    //     'owner': 'Owner Name 18',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 118
    //   },
    //   {
    //     'id': 19,
    //     'name': 'Problem Name 19',
    //     'difficulty': 'Easy',
    //     'type': 'Constraint',
    //     'country': 'India',
    //     'owner': 'Owner Name 19',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 119
    //   },
    //   {
    //     'id': 20,
    //     'name': 'Problem Name 20',
    //     'difficulty': 'Easy',
    //     'type': 'Multi Dimensional',
    //     'country': 'Poland',
    //     'owner': 'Owner Name 20',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 120
    //   },
    //   {
    //     'id': 21,
    //     'name': 'Problem Name 21',
    //     'difficulty': 'Hard',
    //     'type': 'Constraint',
    //     'country': 'India',
    //     'owner': 'Owner Name 21',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 121
    //   },
    //   {
    //     'id': 22,
    //     'name': 'Problem Name 22',
    //     'difficulty': 'Medium',
    //     'type': 'Multi Dimensional',
    //     'country': 'China',
    //     'owner': 'Owner Name 22',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 122
    //   },
    //   {
    //     'id': 23,
    //     'name': 'Problem Name 23',
    //     'difficulty': 'Medium',
    //     'type': 'Multi Model',
    //     'country': 'US',
    //     'owner': 'Owner Name 23',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 123
    //   },
    //   {
    //     'id': 24,
    //     'name': 'Problem Name 24',
    //     'difficulty': 'Easy',
    //     'type': 'Multi Model',
    //     'country': 'India',
    //     'owner': 'Owner Name 24',
    //     'dimension': [
    //       {
    //         'dimension': 20,
    //         'participationD': 40
    //       },
    //       {
    //         'dimension': 50,
    //         'participationD': 50
    //       },
    //       {
    //         'dimension': 120,
    //         'participationD': 60
    //       }
    //     ],
    //     'participationAll': 124
    //   }
    // ]
  })

//GETTERS
export const getters = {
  getAllProblems: (state) => {
    return state.allProblems
  },
  //_______Temp Getter_______
  getProblem: (state) => (problemId) => {
    return state.allProblems.find(problem => problem.id === problemId)
  }/*
  getProblemwithFilter:(state)=> (filter)=>{
    if(filter==="Difficulty"){
      return state.allProblems.filter((element){
        return
      })
    }
  }*/
}

//ACTIONS
//actions are asynchronous. used to fetch or send data from or to an api
//we commit to mutations which then updates the state in return
export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    /*    if (req.session.user) {
          commit('user', req.session.user)
        }*/
    //Get all the problems sorted by EASY, MEDIUM ,HARD
    const problems = await this.$axios.$get('/api/problems', { data: { 'filter': 'Any' } })
    commit('problems', problems)
  }
}


//MUTATIONS
export const mutations = {
  problems(state, data) {
    state.allProblems = data
  }
  /*  addSolution(state, data) {
      state.allProblems[data.problemId].dimension[data.dimensionIndex].solution = data.solution
    }*/
}


/*
#Problem API {
  "id": 0,
  "name": "Problem Name 0",
  "difficulty": "Easy",
  "country": "India",
  "visibility": true,
  "description": "BLAH BLAH",
  "contributor": "contributor Name 0",
  "type": "Multi Model, Constraint, Multi Dimensional",
  "domain": "dsfsdfsdsdfsdfsdf",
  "fitness_function": "a = int(input())\r\nprint(a)",
  "language": "Python"
  "dimension": [{
    "dimension": 20,
    "participationD": 40
  },{
    "dimension": 50,
    "participationD": 50
  },{
    "dimension": 120,
    "participationD": 60
  }
],
  "participationAll": 100
  }
#SubmissionApi
{
    "id": 1,
    "question_id": "CHECK",
    "user_id": "admin",
    "dimension": 1,
    "solution": "sdfsdfsssdfdfsdfdf",
    "time": "22:39:14.057667",
    "submissionDesc": "dsfsdfdsfsdf",
    "score": 12,
    "input": null
  }*/
