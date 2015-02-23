////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    while (!move) {
        move = getInput();
    }
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    if (playerMove === computerMove)
        return 'tie';
    if (playerMove === 'rock' && computerMove === 'scissors')
        return 'player';
    else if (playerMove === 'paper' && computerMove === 'rock')
        return 'player';
    else if (playerMove === 'scissors' && computerMove === 'paper')
        return 'player';
    else
        return 'computer';
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    var scores = {player: 0, computer: 0,tie: 0};
    while (playerWins < 5 && computerWins < 5) {
        var playerMove   = getPlayerMove();
        var computerMove = getComputerMove();
        var winner       = getWinner(playerMove, computerMove);
        scores[winner] += 1;

        console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
        console.log("The score is currently --- Player: " + playerWins + " vs Computer: " + computerWins);
    }
    return [playerWins, computerWins];
}

