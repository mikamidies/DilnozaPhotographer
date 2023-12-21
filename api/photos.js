export default {
  async getCertificates(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/certificates')
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
