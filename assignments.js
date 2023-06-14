/*
// Lecture: Values and Variables
const country = "Portugal";
const continent = "Europe";
let population = 10;

// console.log(country);
// console.log(continent);
// console.log(population);

// Lecture: Data types

const isIsland = false;
let language = "";;
console.log(isIsland);
console.log(population);
console.log(country);
// Lecture: let, const and var ;
language = "Portuguese";

console.log(language);

const averagePopulation = 33;

console.log(population / 2);
population++
console.log(population);
console.log(population > 6);
console.log(population > averagePopulation);

// const description = country + " " + "is in Europe, and its " + population + " millions people speak " + language;
// console.log(description);

const newDescription = `${country} is in Europe, and its ${population} millions people speak ${language}`;
console.log(newDescription);

if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// console.log("9" - "5"); //4
// console.log("19" - "13" + "17") //617
// console.log("19" - "13" + 17) //23
// console.log("123" < 57) //false
// console.log(5 + 6 + "4" + 9 - 4 - 2);//1143

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// console.log(numNeighbours);

// if (numNeighbours === 1) {
//     console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }

if (language === "English" && population < 50 && !isIsland) {
    console.log("You should live in Portugal :)");
} else {
    console.log("Portugal does not meet your criteria :(");
}

*/