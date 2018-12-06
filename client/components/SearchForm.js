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
      search: '',
      stickers: false,
      rating: false,
      recent: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const {search, stickers, rating, recent} = this.state
    this.props.fetchGifs(search, stickers, rating, recent)
    this.setState({
      search: '',
      stickers: false,
      rating: false,
      recent: false
    })
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
                  autocomplete="off"
                />
              </label>

              <button type="submit" disabled={!this.state.search}>
                🔍
              </button>
            </div>

            <div className="checkboxes">
              <label className="checkboxInput">
                Stickers
                <input
                  name="stickers"
                  type="checkbox"
                  checked={this.state.stickers}
                  onChange={this.handleChange}
                />
              </label>
              <label className="checkboxInput">
                pg-13 rating
                <input
                  name="rating"
                  type="checkbox"
                  checked={this.state.rating}
                  onChange={this.handleChange}
                />
              </label>
              <label className="checkboxInput">
                Recent
                <input
                  name="recent"
                  type="checkbox"
                  checked={this.state.recent}
                  onChange={this.handleChange}
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
    fetchGifs: (search, stickers, rating, recent) =>
      dispatch(fetchGifs(search, stickers, rating, recent))
  }
}

export default connect(null, mapDispatch)(SearchForm)
