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
    const {gifs} = this.props
    if (gifs.length) {
      console.log('==>', gifs[0].gifLink)
    }
    return <div>{gifs.length ? <img src={gifs[0].gifLink} /> : null}</div>
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
