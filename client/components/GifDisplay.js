import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGifs} from '../store';
import GifChunk from './GifChunk';
import NoSearchRes from './NoSearchRes';

/**
 * COMPONENT
 */
class GifDisplay extends Component {
  async componentDidMount() {
    await this.props.fetchGifs('cats', false, false, false);
  }
  render() {
    const {gifs} = this.props;

    return (
      <div className="gifDisplay">
        {gifs.length ? (
          gifs.map((chunk, index) => (
            <GifChunk gifs={chunk} key={index.toString()} />
          ))
        ) : (
          <NoSearchRes />
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    gifs: state.gifs
  };
};

const mapDispatch = () => dispatch => {
  return {
    fetchGifs: (search, stickers, rating, recent) =>
      dispatch(fetchGifs(search, stickers, rating, recent))
  };
};

export default connect(mapState, mapDispatch)(GifDisplay);
