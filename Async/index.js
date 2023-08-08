let deckId;
let computerScore = 0;
let myScore = 0;
const cardContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");
const headerEl = document.getElementById("header");
const remainingEl = document.getElementById("remaining");
const computerScoreEl = document.getElementById("computer-score");
const myScoreEl = document.getElementById("my-score");

function handelClick() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      deckId = data.deck_id;
    });
}

newDeckBtn.addEventListener("click", handelClick);

drawCardBtn.addEventListener("click", () => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      remainingEl.textContent = `Remaining Cards: ${data.remaining}`;

      cardContainer.children[0].innerHTML = `
      <img src=${data.cards[0].image} class="card" />`;

      cardContainer.children[1].innerHTML = `
      <img src=${data.cards[1].image} class="card" />`;

      const winnerText = determineCardWinner(data.cards[0], data.cards[1]);
      console.log(winnerText);

      headerEl.textContent = winnerText;

      if (data.remaining === 0) {
        drawCardBtn.disabled = true;
        if (computerScore > myScore) {
          headerEl.textContent = "Computer Won the Game!";
        } else if (myScore > computerScore) {
          headerEl.textContent = "You Won the Game!";
        } else {
          headerEl.textContent = "WAR";
        }
      }
    });
});

function determineCardWinner(card1, card2) {
  const valueOption = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  const card1valueIndex = valueOption.indexOf(card1.value);
  const card2valueIndex = valueOption.indexOf(card2.value);
  console.log("Card 1:", card1valueIndex);
  console.log("Card 2:", card2valueIndex);

  if (card1valueIndex > card2valueIndex) {
    computerScore++;
    computerScoreEl.textContent = `Computer Score:${computerScore}`;
    return "Computer Wins!";
  } else if (card2valueIndex > card1valueIndex) {
    myScore++;
    myScoreEl.textContent = `My Score:${myScore}`;
    return "You Win!";
  } else {
    return "WAR!";
  }
}
