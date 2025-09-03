// Data Manipulation (Local Storage)
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const output = document.querySelector(".output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = nameInput.value;
  localStorage.setItem("storedName", userName);
  const retrievedName = localStorage.getItem("storedName");
  output.textContent = `Helloo👋🏻 ${retrievedName}`;
});

// Arrow Functions

const add = (a, b) => {
  return a + b;
};
console.log(add(5, 3));

const greetName = (name) => {
  return `Hello, ${name}`;
};
console.log(greetName("Abhi"));

// Arrow Function Shorthand

const square = (x) => x * x;
console.log(square(19));

//   Mapping
let numbers = [11, 12, 13, 14, 15];
let squares = numbers.map((num) => num * num);
console.log(squares);

// Try Catch Method

// Without Error
try {
  let num = 10;
  console.log(num / 2);
} catch (error) {
  console.log("An error occurred:", error.message);
}

// With Error

try {
  let result = x + 5;
  console.log(result);
} catch (error) {
  console.log("An error occurred:", error.message);
} finally {
  console.log("This will always run!");
}
