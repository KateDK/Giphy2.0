import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchGifs} from '../store'

/**
 * COMPONENT
 */
class GifDisplay extends Component {
  async componentDidCatch() {
    //axios call to the backend to fetch gifs
    await this.props.fetchGifs()
  }
  render() {
    console.log('==>', this.props.gifs)
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
  return {
    gifs: state.gifs
  }
}

const mapDispatch = () => dispatch => {
  return {
    fetchGifs: dispatch(fetchGifs())
  }
}

export default connect(mapState, mapDispatch)(GifDisplay)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
