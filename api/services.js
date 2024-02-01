export default {
  async getServices(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/services')
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
