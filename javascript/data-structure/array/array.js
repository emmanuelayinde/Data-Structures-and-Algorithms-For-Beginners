// Creating arrays in JavaScript

// Array literal notation
let fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];

// Array constructor
let fruitsConstructor = new Array("Apple", "Banana", "Orange", "Mango", "Kiwi");

// Accessing and modifying array elements
console.log(fruits[0]); // Output: 'Apple'
console.log(fruits[2]); // Output: 'Orange'
console.log(fruits[fruits.length - 1]); // Output: 'Kiwi'
console.log(fruits[fruits.length - 2]); // Output: 'Mango'

// Modifying elements
fruits[1] = "Grape";
console.log(fruits); // Output: ['Apple', 'Grape', 'Orange', 'Mango', 'Kiwi']

// Common array methods

// push()
fruits.push("Pineapple");
console.log(fruits); // Output: ['Apple', 'Grape', 'Orange', 'Mango', 'Kiwi', 'Pineapple']

// pop()
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'Pineapple'
console.log(fruits); // Output: ['Apple', 'Grape', 'Orange', 'Mango', 'Kiwi']

// unshift()
fruits.unshift("Strawberry");
console.log(fruits); // Output: ['Strawberry', 'Apple', 'Grape', 'Orange', 'Mango', 'Kiwi']

// shift()
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: 'Strawberry'
console.log(fruits); // Output: ['Apple', 'Grape', 'Orange', 'Mango', 'Kiwi']

// slice()
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['Grape', 'Orange']

// splice()
fruits.splice(2, 1, "Lemon", "Lime");
console.log(fruits); // Output: ['Apple', 'Grape', 'Lemon', 'Lime', 'Mango', 'Kiwi']

// indexOf()
let bananaIndex = fruits.indexOf("Grape");
console.log(bananaIndex); // Output: 1

// find()
let foundFruit = fruits.find((fruit) => fruit.startsWith("A"));
console.log(foundFruit); // Output: 'Apple'

// includes()
let hasMango = fruits.includes("Mango");
console.log(hasMango); // Output: true

// sort()
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Grape', 'Kiwi', 'Lemon', 'Lime', 'Mango']

// join()
let fruitString = fruits.join(", ");
console.log(fruitString); // Output: 'Apple, Grape, Kiwi, Lemon, Lime, Mango'

// Iterating through arrays

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// forEach method
fruits.forEach(function (fruit) {
    console.log(fruit);
});

// for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

// Nested arrays (multi-dimensional arrays)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1]); // Output: 5

// Iterating through multi-dimensional arrays
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}