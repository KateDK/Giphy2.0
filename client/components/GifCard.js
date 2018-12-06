import React from 'react'
import PropTypes from 'prop-types'

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

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
