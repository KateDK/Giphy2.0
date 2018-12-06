import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGifs} from '../store'

/**
 * COMPONENT
 */
class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const {search} = this.state
    this.props.fetchGifs(search)
    this.setState({search: ''})
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="searchFormDiv">
            <div className="formWrapper">
              <label className="SearchLable">
                Search GIFs
                <input
                  className="searchInput"
                  name="search"
                  type="text"
                  placeholder="Search Example: YOLO"
                  value={this.state.search}
                  onChange={this.handleChange}
                />
              </label>

              <button type="submit">🔍</button>
            </div>

            <div className="checkboxes">
              <label className="checkboxInput">
                Stickers
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange}
                />
              </label>
              <label className="checkboxInput">
                pg-13 rating
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange}
                />
              </label>
              <label className="checkboxInput">
                Recent
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapDispatch = dispatch => {
  return {
    fetchGifs: search => dispatch(fetchGifs(search))
  }
}

export default connect(null, mapDispatch)(SearchForm)
