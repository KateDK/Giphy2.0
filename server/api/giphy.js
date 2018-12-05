const router = require('express').Router()
module.exports = router
const GphApiClient = require('giphy-js-sdk-core')
const client = GphApiClient(process.env.GIPHY_API_KEY)

router.get('/', async (req, res, next) => {
  try {
    const gifs = await client.search('gifs', {q: 'cats'})
    const gifList = []
    gifs.data.forEach(gif => {
      const gifInfo = {gifLink: gif.images.original.url, title: gif.title}
      gifList.push(gifInfo)
    })
    res.json(gifList)
  } catch (err) {
    next(err)
  }
})
