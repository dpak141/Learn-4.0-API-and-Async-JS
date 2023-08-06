// const btnEl = document.getElementById("new-deck");

// function handelClick() {
//   fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// btnEl.addEventListener("click", handelClick);

// // setTimeOut ------------------------------
// function callback() {
//   console.log("I finally ran");
// }

// setTimeout(callback, 2000);

document.getElementById("new-deck").addEventListener("click", function () {
  console.log("Clicked");
});

const voters = [
  { name: "Deepak", email: "deepak@gmail.com", voted: true },
  { name: "Mahi", email: "mahi@gmail.com", voted: true },
  { name: "Neha", email: "neha@gmail.com", voted: false },
  { name: "Human", email: "human@gmail.com", voted: true },
  { name: "Animal", email: "animal@gmail.com", voted: false },
];

let voterEmail = voters
  .filter((voter) => voter.voted)
  .map((voter) => voter.email);
console.log(voterEmail);
