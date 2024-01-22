const buttons = {
  paperBlue: document.getElementById("paper"),
  scissorsRed: document.getElementById("scissors"),
  rockPurple: document.getElementById("rock"),
};

const playArena = document.getElementById("play-arena");
const playerScore = document.getElementById("player-score");
const lokiScore = document.getElementById("loki-score");
const round = document.getElementById("round");

const winnerText = document.createElement("p");
winnerText.textContent = "Winner: ";
winnerText.setAttribute("class", "title");
winnerText.setAttribute("style", "padding: 10px 0 0 10px; font-size: 1.5rem;");
const winnerElement = document.createElement("p");
winnerElement.setAttribute(
  "style",
  "padding: 10px 0 0 10px; font-size: 1.5rem;"
);
playArena.insertAdjacentElement("afterend", winnerElement);
playArena.insertAdjacentElement("afterend", winnerText);

const playGame = (event) => {
  const selectedButton = event.target;
  playArena.style.backgroundColor = window
    .getComputedStyle(selectedButton)
    .getPropertyValue("background-color");
  //buttons.paperBlue.removeEventListener('click', playGame);
  //buttons.scissorsRed.removeEventListener('click', playGame);
  //buttons.rockPurple.removeEventListener('click', playGame);

  const img = document.createElement("img");
  img.setAttribute(
    "style",
    "width: 100px; height: 100px; border-radius: 100%;"
  );
  const vsText = document.createElement("p");
  vsText.setAttribute("class", "title");
  vsText.setAttribute("style", "font-size: 2rem;");

  if (selectedButton === buttons.paperBlue) {
    img.src = "paper.png";
  } else if (selectedButton === buttons.scissorsRed) {
    img.src = "scissors.png";
  } else if (selectedButton === buttons.rockPurple) {
    img.src = "rock.png";
  }

  vsText.textContent = "vs";

  const lokiGuess = document.createElement("img");
  lokiGuess.src = "default_image.png";
  lokiGuess.setAttribute(
    "style",
    "width: 100px; height: 100px; border-radius: 100%;"
  );

  playArena.appendChild(img);
  playArena.appendChild(vsText);
  playArena.appendChild(lokiGuess);

  playArena.style.display = "flex";
  playArena.style.justifyContent = "space-around";
  playArena.style.alignItems = "center";

  const choices = ["paper", "scissors", "rock"];
  const lokiChoice = choices[Math.floor(Math.random() * choices.length)];
  if (lokiChoice === "paper") {
    lokiGuess.src = "paper.png";
  } else if (lokiChoice === "scissors") {
    lokiGuess.src = "scissors.png";
  } else {
    lokiGuess.src = "rock.png";
  }

  if (lokiChoice === "paper" && selectedButton.id === "scissors") {
    winnerElement.textContent = "You!";
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (lokiChoice === "paper" && selectedButton.id === "rock") {
    winnerElement.textContent = "Loki!";
    lokiScore.textContent = parseInt(lokiScore.textContent) + 1;
  } else if (lokiChoice === "paper" && selectedButton.id === "paper") {
    winnerElement.textContent = "Draw!";
  } else if (lokiChoice === "scissors" && selectedButton.id === "paper") {
    winnerElement.textContent = "Loki!";
    lokiScore.textContent = parseInt(lokiScore.textContent) + 1;
  } else if (lokiChoice === "scissors" && selectedButton.id === "rock") {
    winnerElement.textContent = "You!";
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (lokiChoice === "scissors" && selectedButton.id === "scissors") {
    winnerElement.textContent = "Draw!";
  } else if (lokiChoice === "rock" && selectedButton.id === "paper") {
    winnerElement.textContent = "You!";
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (lokiChoice === "rock" && selectedButton.id === "scissors") {
    winnerElement.textContent = "Loki!";
    lokiScore.textContent = parseInt(lokiScore.textContent) + 1;
  } else if (lokiChoice === "rock" && selectedButton.id === "rock") {
    winnerElement.textContent = "Draw!";
  }

  round.textContent = parseInt(round.textContent) + 1;

  const countDown = document.createElement("p");
  countDown.textContent = "5";
  countDown.setAttribute(
    "style",
    "font-size: 50px; color: red; text-align: center;"
  );
  winnerElement.insertAdjacentElement("afterend", countDown);
  const countDownInterval = setInterval(() => {
    countDown.textContent = parseInt(countDown.textContent) - 1;
    if (parseInt(countDown.textContent) === 0) {
      clearInterval(countDownInterval);
      countDown.remove();
    }
  }, 1000);

  setTimeout(() => {
    playArena.innerHTML = "";
    playArena.setAttribute("style", "background-color: white;");
    winnerElement.textContent = "";

    if (parseInt(playerScore.textContent) === 5) {
      alert("You win!");
      playerScore.textContent = 0;
      lokiScore.textContent = 0;
      round.textContent = 0;
    } else if (parseInt(lokiScore.textContent) === 5) {
      alert("Loki wins!");
      playerScore.textContent = 0;
      lokiScore.textContent = 0;
      round.textContent = 0;
    }
  }, 5000);

  // iff loki wins spread his face all over ..play arena? or all over body
};

buttons.paperBlue.addEventListener("click", playGame);
buttons.scissorsRed.addEventListener("click", playGame);
buttons.rockPurple.addEventListener("click", playGame);
