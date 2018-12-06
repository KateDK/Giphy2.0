import React from 'react'
import PropTypes from 'prop-types'
import GifCard from './GifCard'

/**
 * COMPONENT
 */
export const GifChunk = props => {
  return (
    <div className="column">
      {props.gifs.map(gif => <GifCard gif={gif} key={gif.title} />)}
    </div>
  )
}

export default GifChunk

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
