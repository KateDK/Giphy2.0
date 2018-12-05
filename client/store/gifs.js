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
export const fetchGifs = () => async dispatch => {
  try {
    const res = await axios.get('/giphy')
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
