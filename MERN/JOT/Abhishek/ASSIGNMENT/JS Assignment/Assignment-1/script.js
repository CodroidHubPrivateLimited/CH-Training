// PART B

// Q1
let myName = "Abhi Namdev";
let age = 20;
let BornIn = 2005;
let isStudent = true;

console.log(`My name is ${myName}, I am ${age} years old.`);
console.log(`Student: ${isStudent}`);

console.log("Born in:", BornIn);

// Q2
let x = 10;
let y = 3;
console.log(`Sum: ${x + y}`);
console.log(`Difference: ${x - y}`);
console.log(`Product: ${x * y}`);
console.log(`Remainder: ${x % y}`);

// Q3
let voterAge = 20;
console.log(`Can vote: ${voterAge >= 18}`);

// Q4
const numbers = [1, 2, 3];
numbers.push(4);
console.log("Modified Array:", numbers);

// Q5
{
  var varVar = "I am var";
  let letVar = "I am let";
  const constVar = "I am const";
}
console.log(varVar);
try {
  console.log(letVar);
} catch (e) {
  console.log("letVar is not accessible");
}
try {
  console.log(constVar);
} catch (e) {
  console.log("constVar is not accessible");
}

//  PART C

// Q6
let a = 5;
let b = "5";
console.log(a == b);
console.log(a === b);

// Q7
{
  var x2 = 1;
  let y2 = 2;
}
console.log(x2);
try {
  console.log(y2);
} catch (e) {
  console.log("y2 is not accessible");
}

// Q8
function test() {
  if (true) {
    var m = "var inside if";
    let n = "let inside if";
  }
  console.log(m); // Works
  try {
    console.log(n);
  } catch (e) {
    console.log("n is not accessible");
  }
}
test();

// PART D

// Q9
let number = 7;
console.log(number % 2 === 0 ? "Even" : "Odd");

// Q10
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);
