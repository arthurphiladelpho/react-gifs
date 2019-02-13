import React, { Component } from 'react';

import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render () {

    const gifs = [
      { id: 'lBoSfr97eDG7u' },
      { id: '3oEhn3WPTMT9p6pLFu' },
      { id: 'l378dm915Jwx0nd0A' }
    ];

    return (
      <div id="app">
        <div className="left-scene">
          < SearchBar />
          <div className="selected-gif">
            <Gif id="lBoSfr97eDG7u"/>
          </div>
        </div>

        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>

      </div>
    );
  }
}

export default App;
