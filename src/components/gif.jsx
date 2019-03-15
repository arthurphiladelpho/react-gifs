import React, { Component } from 'react';

class Gif extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedGifId: this.props.id
    };
  }

  handleClick = (event) => {
    console.log(event.target);
    console.log(this.props.id);
    // this.setState({
    //   selectedGifId: this.props.id
    // });
    this.props.handler(this.props.id);
  };

  render () {
    const src = `https://media0.giphy.com/media/${this.props.id}/200w.gif`;

    return (
      <img src={src} alt="baller" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
