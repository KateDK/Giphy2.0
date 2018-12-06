import React from 'react'
import {connect} from 'react-redux'
import SearchForm from './SearchForm'
import GifDisplay from './GifDisplay'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div>
      <SearchForm />
      <GifDisplay />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {}
}

export default connect(mapState)(UserHome)
