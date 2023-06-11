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
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}