import React from 'react';
import { css } from "glamor";

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoNumber: 0,
      portraitCarousel: [
        'https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-1.jpg',
        'https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-2.jpg',
        'https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-3.jpg',
        'https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-4.jpg',
        'https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-5.jpg',
      ],
      captionCarousel: [
        'Photo courtesy of my wife and the iPhone CE, in an elevator',
        'A portrait of me with my mother',
        'My 137th and final space walk after repairing Hubble with a pair of pliers',
        'Lobster shirt and fauxhawk, outfit of the consumate professional',
        'Separated at birth',
      ]
    };
  }

  advancePhoto = () => {
    let photoNumber = this.state.photoNumber
    photoNumber++
    if (photoNumber >= this.state.portraitCarousel.length) {
      photoNumber = 0
    }

    this.setState(
      { photoNumber: photoNumber}
    )
  }

  reversePhoto = () => {
    let photoNumber = this.state.photoNumber
    photoNumber--
    if (photoNumber <= 0) {
      photoNumber = this.state.portraitCarousel.length - 1
    }

    this.setState(
      { photoNumber: photoNumber}
    )
  }

  render() {
    return (
      <figure css={{
        marginBottom: 0
      }}>
        <img src={this.state.portraitCarousel[this.state.photoNumber]}/>
        <div css={{
          display: `flex`,
          flexFlow: `row nowrap`,
          justifyContent: `space-between`,
          position: `relative`,
          top: -50,
          '@media (min-width: 768px)': {
            top: -42,
          }
        }}>
          <button css={{
            border: `none`,
            background: `rgba(200,200,200, 0.6)`,
            width: `40%`,
            cursor: `pointer`,
            '@media (min-width: 768px)': {
              width: `20%`,
              fontSize: 14,
            }
          }} onClick={this.reversePhoto}>Previous</button>
          <button css={{
            border: `none`,
            background: `rgba(200,200,200, 0.6)`,
            width: `40%`,
            cursor: `pointer`,
            '@media (min-width: 768px)': {
              width: `20%`,
              fontSize: 14,
            }
          }}onClick={this.advancePhoto}>Next</button>
        </div>
        <figcaption css={{
          minHeight: `3.2rem`,
          fontSize: `1rem`,
          lineHeight: 1.2,
          marginTop: `-1.5rem`
        }}>{this.state.captionCarousel[this.state.photoNumber]}</figcaption>
      </figure>
    )
  }
}

export default ImageCarousel