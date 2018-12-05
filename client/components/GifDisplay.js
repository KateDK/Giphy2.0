import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
class GifDisplay extends Component {
  componentDidCatch() {
    //axios call to the backend to fetch gifs
  }
  render() {
    return (
      <div>
        <h3>Gif List will be rendered here! YAY</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {}
}

export default connect(mapState)(GifDisplay)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
