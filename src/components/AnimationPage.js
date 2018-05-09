import React from 'react'

class AnimationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasGameStarted: false,
      hasSeenInstructions: false,
    }
  }
  startGame() {
    this.setState({hasGameStarted: true})
    this.showInstructions()
  }
  beginGame() {
    alert('hello')
  }
  showInstructions() {
    return (
      <div>
        <div className>
          <h2>Onboarding</h2>
          <p>Welcome aboard, we are pleased to have you on the team.</p>
          <p>Your task will be to type in the words that appear reversed on screen.</p>
          <p>You will be provided with a score and feedback. You will have the opportunity to give us feedback as well.</p>
          <p>Again, we are very happy to have you onboard.</p>
          <button onClick={() => this.beginGame()}>I am ready</button>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="animation-page">
        {this.state.hasGameStarted ? ( 
          {showInstructions}
        ) : (
          <button onClick={() => this.startGame()}>Start Game</button>
        )}
      </div>
    );
  }
}

export default AnimationPage


// class AnimationPage extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       words: [
//         "insight",
//         "practice",
//         "compartmentalization"
//       ],
//       gameStarted: false
//     }
//   }
//   startGame() {
//     this.setState({gameStarted: true})
//     this.animateBox()
//   }
//   drawWord(ctx, round) {
//     const word = this.state.words[round - 1]
//     ctx.translate(canvas.width, 0)
//     ctx.scale(-1, 1)
//     ctx.font = '48px serif';
//     ctx.fillText(word, 0, 50);
//     this.drawBlankSpaces(ctx, word)
//   }
//   drawBlankSpaces(ctx, word) {
//     ctx.fillStyle = 'rgb(0, 0, 0)'
//     ctx.strokeRect(canvas.width-51, 100, 50, 50);
//   }
//   animateBox() {
//     var ctx = document.getElementById('canvas').getContext('2d')
//     let round = 1
//     if (canvas.getContext) {
//       this.drawWord(ctx, round)
//     } else {
//       return (
//         <p>Animations are fun. Though, if you see this, your browser does not support the 'canvas' tag so you are not having maximum fun.</p>
//       )
//     }
//   }
//   componentDidMount() {
    
//   }
//   render() {
//     return (
//       <div className="animation-page">
//         {(!this.state.gameStarted) && <button onClick={() => this.startGame()}>Start Game</button>}
//         {this.state.gameStarted && <canvas id="canvas" width="300" height="400"></canvas>}
//       </div>
//     );
//   }
// }