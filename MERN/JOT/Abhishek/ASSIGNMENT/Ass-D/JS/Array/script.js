// Creating Arrays
let numbers = [1, 2, 3, 4];
console.log(numbers);
let names = new Array("Abhi", "Ravi", "Chhavi");
console.log(names);

// Basic Array Operations

let arr = ["A", "B", "C"];
console.log(arr.length);

// Accessing elems
let colors = ["Red", "Green", "Blue"];
console.log(colors[1]);
colors[1] = "Yellow";
console.log(colors);

// Adding and Removing Elements
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);
fruits.unshift("Orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

// Common Array Methods
let findFruits = ["Apple", "Banana", "Mango"];
console.log(findFruits.indexOf("Mango"));
console.log(findFruits.indexOf("Grapes"));
console.log(findFruits.includes("Apple"));
console.log(findFruits.includes("Orange"));

let sliceNumbers = [1, 2, 3, 4, 5];
let part = sliceNumbers.slice(1, 4);
console.log(part);
console.log(sliceNumbers);

let animals = ["Dog", "Cat", "Rabbit"];
animals.splice(1, 1, "Tiger", "Lion");
console.log(animals);

let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);
console.log(result);

let words = ["Hello", "World"];
console.log(words.join(" "));

let numsToReverse = [1, 2, 3];
numsToReverse.reverse();
console.log(numsToReverse);

let numsToSort = [40, 100, 5, 25];
numsToSort.sort();
console.log(numsToSort);
numsToSort.sort((a, b) => a - b);
console.log(numsToSort);

// Looping Through Arrays
let loopFruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < loopFruits.length; i++) {
  console.log(loopFruits[i]);
}
for (let fruit of loopFruits) {
  console.log(fruit);
}
loopFruits.forEach((fruit, index) => {
  console.log(index, fruit);
});

// Advanced Array Methods
let mapNumbers = [1, 2, 3];
let squares = mapNumbers.map((n) => n * n);
console.log(squares);

let filterNums = [10, 20, 30, 40];
let filtered = filterNums.filter((n) => n <= 20);
console.log(filtered);
