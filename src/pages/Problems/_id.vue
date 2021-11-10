<template>
  <div>
    <ProblemCard :problem='problem' />
  </div>
</template>

<script>
import ProblemCard from '../../components/ProblemCard'

export default {
  name: 'ProblemId',
  components: { ProblemCard },
  async asyncData({ params, $axios }) {
    // When calling /abc the slug will be "abc"
    //Replaced by Actual route to get problem with id
    const problem = await $axios.get('http://localhost:8000/api/problems/' + params.id + '/')
    console.log(typeof (problem.data))
    return { problem: problem.data }
  }
}
</script>

<style scoped>
</style>
