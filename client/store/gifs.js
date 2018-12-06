import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_GIFS = 'GET_GIFS'

/**
 * INITIAL STATE
 */
const defaultGifs = []

/**
 * ACTION CREATORS
 */
const getGifs = gifs => ({type: GET_GIFS, gifs})

/**
 * THUNK CREATORS
 */
export const fetchGifs = (
  search,
  stickers,
  rating,
  recent
) => async dispatch => {
  try {
    const method = stickers ? 'stickers' : 'gifs'
    let reqStr = `${search}/${method}/?rating=${rating}&recent=${recent}`

    const res = await axios.get(`/api/giphy/${reqStr}`)
    dispatch(getGifs(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultGifs, action) {
  switch (action.type) {
    case GET_GIFS:
      return action.gifs
    default:
      return state
  }
}
