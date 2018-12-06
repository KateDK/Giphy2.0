import React from 'react'

/**
 * COMPONENT
 */
export const GifCard = props => {
  const {gifLink, title} = props.gif
  return (
    <div className="gifCard">
      <img src={gifLink} alt={title} />
    </div>
  )
}

export default GifCard
