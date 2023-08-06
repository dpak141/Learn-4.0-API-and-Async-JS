// const btnEl = document.getElementById("new-deck");
// function handelClick() {
//   console.log("Clicked");
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

// // ----------------------------------------

// const people = [
//   { name: "Deepak", hasPet: true },
//   { name: "Finzo", hasPet: true },
//   { name: "Suman", hasPet: false },
//   { name: "Rakesh", hasPet: true },
//   { name: "Navin", hasPet: false },
//   { name: "Pinto", hasPet: false },
// ];

// function gimmeThePets(person) {
//   return person.hasPet;
// }

// const peopleWithPets = people.filter(gimmeThePets);
// console.log(peopleWithPets);

// const peoples = [
//   { name: "Jill", hasPet: true, age: 18 },
//   { name: "Alson", hasPet: true, age: 17 },
//   { name: "Bob", hasPet: false, age: 18 },
// ];

// function gimmeAdult(person) {
//   return person.age >= 18;
// }

// const age = peoples.filter(gimmeAdult);
// console.log(age);

const people = [
  { name: "Deepak", hasPet: true },
  { name: "Finzo", hasPet: true },
  { name: "Suman", hasPet: false },
  { name: "Rakesh", hasPet: false },
];

function filterArray(array, callback) {
  const resultingArray = [];
  for (let item of array) {
    const shouldBeIncluded = callback(item);
    if (shouldBeIncluded) {
      resultingArray.push(item);
    }
  }
  return resultingArray;
}

const peopleWithPets = filterArray(people, function (person) {
  return person.hasPet;
});

console.log(peopleWithPets);
