import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const SearchForm = props => {
  return (
    <div>
      <form>
        <div className="formWrapper">
          <label>Search GIFs </label>
          <input name="search" type="text" placeholder="Example: YOLO" />
          <button type="submit">🔍</button>
        </div>
      </form>
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
