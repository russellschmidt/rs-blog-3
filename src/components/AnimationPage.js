import React from 'react'

class AnimationPage extends React.Component {
  constructor(props) {
    super(props)
  }
  animateBox() {
    const canvas = document.getElementById('canvas')
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d')

      ctx.fillStyle = 'rgb(200, 0, 0)'
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);

    } else {
      return (
        <p>Animations are fun. Though, if you see this, your browser does not support the 'canvas' tag so you are not having maximum fun.</p>
      )
    }
  }
  componentDidMount() {
    this.animateBox()
  }
  render() {
    return (
      <div className="animation-page">
        <canvas id="canvas" width="300" height="200"></canvas>
      </div>
    );
  }
}

export default AnimationPage
