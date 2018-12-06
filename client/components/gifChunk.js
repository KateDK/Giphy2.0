import React from 'react'
import GifCard from './GifCard'

/**
 * COMPONENT
 */
export const GifChunk = props => {
  return (
    <div className="column">
      {props.gifs.map(gif => <GifCard gif={gif} key={gif.gifLink} />)}
    </div>
  )
}

export default GifChunk
