<template>
<div>
  adsads {{problemId}}
</div>
</template>

<script>
export default {
  name: "Id",

  asyncData({params}) {
    const problemId = params.id // When calling /abc the slug will be "abc"
    return {problemId}
  }
}
</script>

<style scoped>

</style>
