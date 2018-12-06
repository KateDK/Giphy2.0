import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchGifs} from '../store'
import GifCard from './GifCard'
import GifChunk from './GifChunk'

/**
 * COMPONENT
 */
class GifDisplay extends Component {
  async componentDidCatch() {
    //axios call to the backend to fetch gifs
    await this.props.fetchGifs()
  }
  render() {
    const {gifs} = this.props

    if (gifs.length) {
      return (
        <div className="gifDisplay">
          {gifs.map((chunk, index) => <GifChunk gifs={chunk} key={index} />)}
        </div>
      )
    } else {
      return null
    }
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
