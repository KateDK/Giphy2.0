import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const SearchForm = props => {
  return (
    <div>
      <h3>Form</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {}
}

export default connect(mapState)(SearchForm)
