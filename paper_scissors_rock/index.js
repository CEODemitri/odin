const choices = ["Paper", "Scissors", "Rock"];
const result = document.querySelector("#result");

let playerScore = 0;
let lokiScore = 0;

// collect user input and store as userChoice when hit submit button
const submitButton = document.querySelector("button");
const userInput = document.getElementById("user-choice");
submitButton.addEventListener("click", function () {
  const userChoice = userInput.value;
  // add your code to handle the userChoice here
  // lowercase input
  const userChoiceLower = userChoice.toLowerCase();
  // capitalize first letter of input
  const userChoiceCapital =
    userChoiceLower.charAt(0).toUpperCase() + userChoiceLower.slice(1);
  console.log(userChoiceCapital);
  // clear input
  userInput.value = "";

  // check if userChoiceCapital is in choices array
  if (choices.includes(userChoiceCapital)) {
    // if it is, then run the game
    console.log("User choice is valid");
    // generate random Loki choice
    const randomIndex = Math.floor(Math.random() * choices.length);
    const lokiChoice = choices[randomIndex];
    console.log(lokiChoice);

    // display choices
    const playerChoice = document.querySelector("#player-choice");
    const lokiChoiceDisplay = document.querySelector("#loki-choice");

    playerChoice.textContent = userChoiceCapital;
    lokiChoiceDisplay.textContent = lokiChoice;

    // compare choices
    if (userChoiceCapital === lokiChoice) {
      // if choices are the same, display tie
      result.textContent = "Tie!";
    } else if (
      (userChoiceCapital === "Paper" && lokiChoice === "Rock") ||
      (userChoiceCapital === "Scissors" && lokiChoice === "Paper") ||
      (userChoiceCapital === "Rock" && lokiChoice === "Scissors")
    ) {
      // if user wins
      result.textContent = "You win!";
      playerScore++;
      document.querySelector("#player-score").textContent = playerScore;
      if (playerScore === 5) {
        alert("You win the game!");
        playerScore = 0;
        lokiScore = 0;
        result.textContent = "";
        document.querySelector("#player-score").textContent = playerScore;
        document.querySelector("#loki-score").textContent = lokiScore;
      }
    } else {
      // loki wins
      result.textContent = "Loki wins!";
      lokiScore++;
      document.querySelector("#loki-score").textContent = lokiScore;
      if (lokiScore === 5) {
        alert("Loki wins the game!");
        playerScore = 0;
        lokiScore = 0;
        result.textContent = "";
        document.querySelector("#player-score").textContent = playerScore;
        document.querySelector("#loki-score").textContent = lokiScore;
      }
    }
  } else {
    // if it is not, then alert user that their choice is invalid
    console.log("User choice is invalid");
  }

  // reset game when one player reaches 5 points

  // for (let i = 0; i < 5; i++) {
  //   if (playerScore === 5) {
  //     alert("You win the game!");
  //     playerScore = 0;
  //     lokiScore = 0;
  //     document.querySelector("#player-score").textContent = playerScore;
  //     document.querySelector("#loki-score").textContent = lokiScore;
  //   } else {
  //     alert("Loki wins the game!");
  //     playerScore = 0;
  //     lokiScore = 0;
  //     document.querySelector("#player-score").textContent = playerScore;
  //     document.querySelector("#loki-score").textContent = lokiScore;
  //   }
  // }
});
