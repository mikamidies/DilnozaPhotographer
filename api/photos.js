export default {
  async getPhotos(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/images')
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
