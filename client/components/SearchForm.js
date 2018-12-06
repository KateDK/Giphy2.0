import React, {Component} from 'react'
import {connect} from 'react-redux'

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
    // this.props.createBuyStocks(ticker, quantity)
    // this.setState({ticker: '', quantity: 0})
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <div className="formWrapper">
            <label>Search GIFs </label>
            <input
              name="search"
              type="text"
              placeholder="Example: YOLO"
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button type="submit">🔍</button>
          </div>
        </form>
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

export default connect(mapState)(SearchForm)
