import React from 'react'
import GamePageTitle from './GamePageTitle'

class GamePage extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div className="game-page__main">
        <GamePageTitle />
      </div>
    )
  }
}

export default GamePage