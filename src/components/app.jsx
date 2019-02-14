import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "lBoSfr97eDG7u"
    }
    this.search("homer thinking");
    this.handler = this.handler.bind(this);
  }

  handler(id) {
    console.log(this.state.selectedGifId);
    console.log('-----')
    console.log(id);
    this.setState({
      selectedGifId: id
    });
    console.log('-----');
    console.log(this.state.selectedGifId);
  }

  search = (query) => {
    // TODO: API CALL.
    giphy('vG6i5dF7USgEm3FWBVcZH8QpGy2kyrKF').search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render () {
    return (
      <div id="app">
        <div className="left-scene">
          < SearchBar searchMethod={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} handler = {this.handler}/>
          </div>
        </div>

        <div className="right-scene">
          <GifList gifs={this.state.gifs} handler = {this.handler}/>
        </div>

      </div>
    );
  }
}

export default App;
