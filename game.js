(function() {
    "use strict";
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    let playerScore = 0;
    let computerScore = 0;
    let message = "";
  
    function computerPlay() {
      const randInt = Math.floor(Math.random() * 3);
      if (randInt === 1) {
        return "Rock";
      } else if (randInt === 2) {
        return "Paper";
      } else {
        return "Scissors";
      }
    }
  
    function playRound(playerSelection, computerSelection) {
      document.querySelector(".winner").textContent = "";
      if (playerSelection === computerSelection) {
        message = "Tie!";
      } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
          computerScore += 1;
          message = "Paper beats Rock.";
        } else {
          playerScore += 1;
          message = "Rock beats Scissors.";
        }
      } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
          playerScore += 1;
          message = "Paper beats Rock.";
        } else {
          computerScore += 1;
          message = "Scissors beats Paper.";
        }
      } else {
        if (computerSelection === "Rock") {
          computerScore += 1;
          message = "Rock beats Scissors.";
        } else {
          playerScore += 1;
          message = "Scissors beats Paper.";
        }
      }
      const playerChoice = document.querySelector(".playerChoice");
      playerChoice.textContent = playerSelection;
      const computerChoice = document.querySelector(".computerChoice");
      computerChoice.textContent = computerSelection;
      const result = document.querySelector(".result");
      result.textContent = message;
      const player = document.querySelector(".player");
      player.textContent = playerScore;
      const computer = document.querySelector(".computer");
      computer.textContent = computerScore;
      gameOver(playerScore, computerScore);
    }
  
    function gameOver(playerScore, computerScore) {
      if (playerScore === 5) {
        document.querySelector(".winner").textContent = "YOU WON!";
        replay();
      }
      if (computerScore === 5) {
        document.querySelector(".winner").textContent = "YOU LOST!";
        replay();
      }
    }
  
    function replay() {
      playerScore = 0;
      computerScore = 0;
      message = "";
    }
  
    function game() {
      rock.addEventListener("click", () => playRound("Rock", computerPlay()));
      paper.addEventListener("click", () => playRound("Paper", computerPlay()));
      scissors.addEventListener("click", () => playRound("Scissors", computerPlay()));
    }
    document.addEventListener("DOMContentLoaded", function() {
      game();
    });
  }());
  