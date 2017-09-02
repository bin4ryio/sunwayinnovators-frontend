<template>
  <div>

  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData ({ params, error }) {
    try {
      const { data } = await httpPost.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
