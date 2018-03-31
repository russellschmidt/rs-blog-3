---
path: "/portfolio/connect4emoji/"
date: "2017-12-11T17:12:33.962Z"
title: "connect4emoji"
type: "portfolio"
image: "https://storage.googleapis.com/russellmschmidt-net-portfolio/portfolio/connect4emoji-1.png"
---

### Description
<https://connect4emoji.herokuapp.com>

### Stack
Ruby on Rails 5,
jQuery,
JavaScript,
HTML5,
CSS,
Heroku,
PostgreSQL

### Features
Game,
Single Page Application,
Emojis

### Style
Bare bones, this was born out of a school project where I had to create a ConnectFour style game. I didn't want anything boring so I decided that the players ought to use Emojis. It was a timed exercise so I never implemented an emoji picker, but I vowed to remake this in React and implement it then.

![default](https://storage.googleapis.com/russellmschmidt-net-portfolio/portfolio/connect4emoji-1.png)
![default](https://storage.googleapis.com/russellmschmidt-net-portfolio/portfolio/connect4emoji-2.png)
![default](https://storage.googleapis.com/russellmschmidt-net-portfolio/portfolio/connect4emoji-3.png)

### Repo 
<https://github.com/russellschmidt/connectfourrailsfive>

### Code
The logic for the application is interesting - the tricky part is getting the application to know when someone has won the game. The app needs to check the matrix of positions for a win condition or a full board condition.

```javascript
var CONNECT4 = (function(){
  // vars
  const COLUMNS = 7;
  const ROWS = 6;
  var connect4 = {};
  var gameboard = [
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0]
                  ]
  var player1score = 0;
  var player2score = 0;
  var player1name = "player1";
  var player2name = "player2";
  var currentPlayer = 0;
  var player1symbol = "🖕";
  var player2symbol = "😀";

  // functions
  connect4.placeChip = function(column) {
    var placedChip = false;
    var row = 0;
    $('.random-message').hide();
    while (!placedChip && row < ROWS) {
      if (gameboard[column][row] === 0) {
        if (currentPlayer === 1) {
          gameboard[column][row] = player1symbol;
          displayChip(row, column, player1symbol);
        } else {
          gameboard[column][row] = player2symbol;
          displayChip(row, column, player2symbol);
        }
        placedChip = true;
        setTimeout(function() {
          if (!didWin(row, column)){
            nextTurn();
          }
        }, 125);
      } else {
        row++;
      }
    }
  }

  function displayChip (row, col, symbol) {
    $(".row"+ row + " .col" + col).html(symbol);
  }

  function checkColumn (row, column) {
    var symbolCount = 0;
    var sym = gameboard[column][row];
    for (var i = 0; i < ROWS; i++) {
      if (gameboard[column][i] === sym) {
        symbolCount++;
        if (symbolCount >= 4) {
          return true;
        }
      } else {
        symbolCount = 0;
      }
    }
    return false;
  }

  function checkRow (row, column) {
    var symbolCount = 0;
    var sym = gameboard[column][row];
    for (var i = 0; i < COLUMNS; i++) {
      if (gameboard[i][row] === sym) {
        symbolCount++;
        if (symbolCount >= 4) {
          return true;
        }
      } else {
        symbolCount = 0;
      }
    }
    return false;
  }

  function checkDiagonalLowLeftHighRight (row, column) {
    var r = row;
    var c = column;
    var symbolCount = 0;
    var sym = gameboard[column][row];

    // hit the x or y axis
    while (r > 0 && c > 0) {
      r--;
      c--;
    }
    // check the diagonal from the x- or y-intercept
    while (r < ROWS && c < COLUMNS) {
      if (gameboard[c][r] === sym) {
        symbolCount++;
        if (symbolCount >= 4) {
          return true;
        }
      } else {
        symbolCount = 0;
      }
      r++;
      c++;
    }

    return false;
  }

  function checkDiagonalHighLeftLowRight (row, column) {
    var r = row;
    var c = column;
    var symbolCount = 0;
    var sym = gameboard[column][row];

    // hit the x or y axis
    while (r < ROWS && c > -1) {
      r++;
      c--;
    }
    if (c < 0) {c = 0;} else {c++;}
    if (r > ROWS) {r = ROWS - 1;} else { r--;}

    // check the diagonal from the y-intercept or x-ceiling
    while(r > -1 && c < COLUMNS) {
      if (gameboard[c][r] === sym) {
        symbolCount++;
        if (symbolCount >= 4) {
          return true;
        }
      } else {
        symbolCount = 0;
      }
      r--;
      c++;
    }
    return false;
  }

  function didWin (row, column) {
    if (checkColumn(row, column) || checkRow(row, column) ||
          checkDiagonalLowLeftHighRight(row, column) ||
          checkDiagonalHighLeftLowRight(row, column)) {
      alert("winrar "+ (currentPlayer === 1 ? player1symbol : player2symbol));
      $("tfoot").hide();
      $(".player-turn-panel").hide();
      updateScore();
    }
    return false;
  }

  function replay () {
    const result = window.confirm("Care to play again?");
    if (result) {
      // clear matrix and gameboard
      for (var i = 0; i < COLUMNS; i++) {
        for (var j = 0; j < ROWS; j++) {
          gameboard[i][j]=0;
          displayChip(j, i, "");
        }
      }
      setFirstMover();
      $("tfoot").show();
      $(".player-turn-panel").show();
    } else {
      endginningMessage()
    }
  }

  function endginningMessage () {
    if (player1score > player2score) {
      $('.scoreboard').html("<h1>" + player1name + " is the WINRAR</h1>");
      $('.scoreboard').append("<h3>Final score. "+ player1name + " (" + player1symbol+ ")" + " with " + player1score + " to "+ player2name +" (" + player2symbol+ ")'s" + player2score +"</h3>")
    } else if (player2score > player1score) {
      $('.scoreboard').html("<h1>" + player2name + " is the WINRAR</h1>");
      $('.scoreboard').append("<h3>Final score. "+ player2name + " (" + player2symbol+ ")" + " with " + player2score + " to "+ player1name +" (" + player1symbol+ ")'s" + player1score +"</h3>")
    } else {
      $('.scoreboard').html("<h1>Tie game. boooooo.</h1>")
      $('.scoreboard').append("<h3>Even at " + player1score + " for (" + player1symbol+ ")" + " to " + player2score + " for (" + player2symbol+ ")" + "</h3>");
    }
  }

  function updateScore () {
    if (currentPlayer === 1) {
      player1score++;
      $('.player-one.player-score').html("Score: " + player1score);
    } else {
      player2score++;
      $('.player-two.player-score').html("Score: " + player2score);
    }
    replay();
  }

  function makeMove (player) {
    if(player === 1) {
      $('.player-turn').html(player1name + "\'s Turn");
      $('.player-turn').append("<p>You are the " + player1symbol + "</p>");
      currentPlayer = 1;
    } else {
      $('.player-turn').html(player2name + "\'s Turn");
      $('.player-turn').append("<p>You are the " + player2symbol + "</p>");
      currentPlayer = 2;
    }
  }

  function nextTurn () {
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    makeMove(currentPlayer);
  }

  function setFirstMover () {
    $('.player-turn-panel').append("<h5 class='random-message'>Randomly assigning first player...</h5>");
    setTimeout(function() {
      $('.player-turn-panel').append("<h5 class='random-message'>Assigned.</h5>");
      makeMove(Math.floor(Math.random()*2) + 1)
    }, 500);
  }

  function setName (playerNumber) {
    var player = null;
    if (playerNumber === 1) {
      player = $('#player1').val();
      if (!player || player.val === ""){
        player = "Player One";
      }
      player1name = player;
      $(".player-one.player-name").html(player + " " + player1symbol);
      $(".player-one.player-score").html("Score: "+player1score);
    } else {
      player = $('#player2').val();
      if (!player || player.val === ""){
        player = "Player Two";
      }
      player2name = player;
      $(".player-two.player-name").html(player + " " + player2symbol);
      $(".player-two.player-score").html("Score: "+player2score);
    }
  }

  function reallyStartGame () {
    $('.game').show();
    $('.player-info').hide();
    setFirstMover();
  }

  connect4.setPlayerTwoEmoji = function () {
    // show emoji board
    // disable player 1's emoji so we dont have duplicate markers
    reallyStartGame();
  }

  connect4.setPlayerTwo = function () {
    setName(2);
    reallyStartGame();
  }

  connect4.setPlayerOneEmoji = function (id) {
    const emojiArray = $('.emoji-picker').data('emojis').replace(/"/g,"").replace("[","").replace("]","").split(",");
    player1symbol = emojiArray[id];
    $('.selected-emoji p').html(`${player1symbol}`);
  }

  connect4.setPlayerOne = function () {
    setName(1);
    $('.player-one-info').hide();
    $('.player-two-info').show();
  }

  connect4.startGame = function() {
    $('.player-info').show();
    $('.player-two-info').hide();
    $('.intro').hide();
  }

  return connect4;
}());


$(document).ready(function() {
  $('.intro').show();
  $('.game').hide();
  $('.player-info').hide();

  $('#start-game').on('click', function() {CONNECT4.startGame()});
  $('#player-one-name').on('click', function() {CONNECT4.setPlayerOne()});
  $('#player-two-name').on('click', function() {CONNECT4.setPlayerTwo()});
  $('.emoji-button').on('click', function() {
    CONNECT4.setPlayerOneEmoji($(this).data('emoji'));
  });

})
```
