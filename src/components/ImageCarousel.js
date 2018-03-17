import React from 'react';
import { css } from "glamor";

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.handleAdvancePhoto = this.handleAdvancePhoto.bind(this)
    this.handleReversePhoto = this.handleReversePhoto.bind(this)
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

  handleAdvancePhoto () {
    if (this.state.photoNumber >= this.state.portraitCarousel.length - 1) {
      this.setState(() => {
        return {
          photoNumber: 0
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          photoNumber: prevState.photoNumber + 1
        }
      })
    }
  }

  handleReversePhoto () {
    if (this.state.photoNumber <= 0) {
      this.setState(() => {
        return {
          photoNumber: this.state.portraitCarousel.length - 1
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          photoNumber: prevState.photoNumber - 1
        }
      })
    }
  }

  render() {
    return (
      <figure css={{
        marginBottom: 0
      }}>
        <img css={{
          display: `inline-block`,
          margin: `0 auto`,
          '@media (min-width: 768px)': {
            padding: `0 25px 25px 0`,
          },
        }} src={this.state.portraitCarousel[this.state.photoNumber]}/>
        <div css={{
          display: `flex`,
          flexFlow: `row nowrap`,
          justifyContent: `space-between`,
          position: `relative`,
          top: -50,
          '@media (min-width: 768px)': {
            top: -67,
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
              marginLeft: 0,
            }
          }} onClick={this.handleReversePhoto}>Previous</button>
          <button css={{
            border: `none`,
            background: `rgba(200,200,200, 0.6)`,
            width: `40%`,
            cursor: `pointer`,
            '@media (min-width: 768px)': {
              width: `20%`,
              fontSize: 14,
              marginRight: 25,
            }
          }}onClick={this.handleAdvancePhoto}>Next</button>
        </div>
        <figcaption css={{
          minHeight: `3.2rem`,
          fontSize: `1rem`,
          lineHeight: 1.2,
          marginTop: -35,
          '@media (min-width: 768px)': {
            marginTop: -55,
          },
        }}>{this.state.captionCarousel[this.state.photoNumber]}</figcaption>
      </figure>
    )
  }
}

export default ImageCarousel