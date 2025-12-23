/*
================================================================================
JAVASCRIPT BASICS - COMPLETE LEARNING GUIDE
Session 1: Fundamentals
================================================================================
This is a comprehensive guide for learning JavaScript from scratch.
Follow each section step by step, read the explanations, and try the exercises.
================================================================================
*/

// ============================================================================
// STEP 1: UNDERSTANDING JAVASCRIPT
// ============================================================================
/*
JavaScript is a programming language that makes web pages interactive.
It can:
- Store and manipulate data
- Control webpage behavior
- Respond to user actions
- Perform calculations
- And much more!
*/

// ============================================================================
// STEP 2: COMMENTS IN JAVASCRIPT
// ============================================================================
// Single-line comments start with // (like this line)

/*
Multi-line comments
are written like this
and can span multiple lines
*/

// Comments are ignored by JavaScript - they're notes for humans!

// ============================================================================
// STEP 3: VARIABLES - Storing Data
// ============================================================================
/*
Variables are containers that store data values.
Think of them as labeled boxes where you put things.
*/

// Method 1: Using 'let' (modern way, can be changed)
let studentName = "John";
let studentAge = 20;
let isEnrolled = true;

// Method 2: Using 'const' (for values that won't change)
const pi = 3.14159;
const courseName = "JavaScript Basics";

// Method 3: Using 'var' (older way, still works but not recommended)
var oldWay = "This works but use let/const instead";

// Displaying variables
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("PI Value:", pi);

// PRACTICE EXERCISE 1:
// Create variables for:
// - Your favorite color
// - Your favorite number
// - Whether you like programming (true/false)
// Then display them using console.log()

// ============================================================================
// STEP 4: DATA TYPES - Types of Information
// ============================================================================
/*
JavaScript has different types of data:
*/

// 1. STRING - Text data (always in quotes)
let firstName = "Alice";
let lastName = "Smith";
let message = `Hello, ${firstName}!`; // Template literal (backticks)

// 2. NUMBER - Numeric data
let wholeNumber = 42;
let decimalNumber = 3.14;
let negativeNumber = -10;

// 3. BOOLEAN - True or False
let isActive = true;
let isComplete = false;

// 4. UNDEFINED - Variable declared but no value assigned
let undefinedVar;
console.log(undefinedVar); // Output: undefined

// 5. NULL - Intentionally empty value
let emptyValue = null;

// 6. OBJECT - Collection of related data (we'll learn more later)
let personExample = {
  name: "Bob",
  age: 25,
};

// 7. ARRAY - List of items (we'll learn more later)
let colorsExample = ["red", "green", "blue"];

// Checking data type
console.log(typeof firstName); // "string"
console.log(typeof wholeNumber); // "number"
console.log(typeof isActive); // "boolean"

// PRACTICE EXERCISE 2:
// Create variables of different types:
// - A string with your name
// - A number with your age
// - A boolean for whether you're learning JS
// - Check their types using typeof

// ============================================================================
// STEP 5: BASIC OPERATIONS - Math and More
// ============================================================================

// Arithmetic Operations
let a = 10;
let b = 3;

console.log("Addition:", a + b); // 13
console.log("Subtraction:", a - b); // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b); // 3.333...
console.log("Modulus (remainder):", a % b); // 1
console.log("Exponentiation:", a ** b); // 1000 (10 to the power of 3)

// String Operations
let greeting = "Hello";
let name = "World";
let fullGreeting = greeting + " " + name; // "Hello World"
console.log(fullGreeting);

// Using template literals (easier way)
let templateGreeting = `${greeting}, ${name}!`;
console.log(templateGreeting);

// Comparison Operations (return true/false)
let x = 5;
let y = 10;

console.log("Is x equal to y?", x == y); // false (loose equality)
console.log("Is x equal to y?", x === y); // false (strict equality)
console.log("Is x not equal to y?", x != y); // true
console.log("Is x less than y?", x < y); // true
console.log("Is x greater than y?", x > y); // false
console.log("Is x less or equal?", x <= y); // true
console.log("Is x greater or equal?", x >= y); // false

// Logical Operations
let hasPermission = true;
let isLoggedIn = false;

console.log("AND (both must be true):", hasPermission && isLoggedIn); // false
console.log("OR (at least one true):", hasPermission || isLoggedIn); // true
console.log("NOT (opposite):", !hasPermission); // false

// PRACTICE EXERCISE 3:
// Create two numbers and perform all arithmetic operations
// Create two strings and combine them
// Compare two numbers using comparison operators

// ============================================================================
// STEP 6: VARIABLE REASSIGNMENT AND UPDATES
// ============================================================================

let score = 0;
console.log("Initial score:", score);

// Adding to a variable
score = score + 10; // score is now 10
console.log("After adding 10:", score);

// Shorthand ways to update
score += 5; // Same as: score = score + 5
console.log("After += 5:", score); // 15

score -= 3; // Same as: score = score - 3
console.log("After -= 3:", score); // 12

score *= 2; // Same as: score = score * 2
console.log("After *= 2:", score); // 24

score /= 4; // Same as: score = score / 4
console.log("After /= 4:", score); // 6

// Increment and Decrement
score++; // Add 1 (score is now 7)
console.log("After ++:", score);

score--; // Subtract 1 (score is now 6)
console.log("After --:", score);

// PRACTICE EXERCISE 4:
// Start with a number 100
// Subtract 25, then multiply by 2, then divide by 3
// Display the result

// ============================================================================
// STEP 7: CONDITIONAL STATEMENTS - Making Decisions
// ============================================================================
/*
Conditional statements let your program make decisions.
"If this is true, do that. Otherwise, do something else."
*/

// IF statement - Basic decision making
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside!");
}

// IF-ELSE statement - Two options
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// IF-ELSE IF-ELSE - Multiple options
let grade = 85;

if (grade >= 90) {
  console.log("Grade: A - Excellent!");
} else if (grade >= 80) {
  console.log("Grade: B - Good job!");
} else if (grade >= 70) {
  console.log("Grade: C - Not bad.");
} else if (grade >= 60) {
  console.log("Grade: D - Needs improvement.");
} else {
  console.log("Grade: F - Study harder!");
}

// Nested IF statements
let isRaining = true;
let hasUmbrella = false;

if (isRaining) {
  if (hasUmbrella) {
    console.log("You're safe from the rain!");
  } else {
    console.log("You'll get wet! Find an umbrella.");
  }
} else {
  console.log("No need for an umbrella today.");
}

// Ternary Operator - Shorthand for simple if-else
let status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

// PRACTICE EXERCISE 5:
// Write a program that:
// 1. Checks if a number is positive, negative, or zero
// 2. Checks if a person can vote (age >= 18)
// 3. Determines the day type (weekend or weekday) based on a day name

// ============================================================================
// STEP 8: FUNCTIONS - Reusable Code Blocks
// ============================================================================
/*
Functions are blocks of code that perform specific tasks.
They help you avoid repeating code and organize your program.
*/

// Function Declaration - Basic function
function greet() {
  console.log("Hello, welcome to JavaScript!");
}

// Calling (using) the function
greet();

// Function with Parameters - Functions that accept input
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

greetPerson("Alice");
greetPerson("Bob");

// Function with Multiple Parameters
function introduce(name, age, city) {
  console.log(`Hi! I'm ${name}, ${age} years old, from ${city}.`);
}

introduce("Sarah", 25, "New York");

// Function with Return Value - Functions that give back results
function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(5, 3);
console.log("Sum:", sum); // 8

// Function that calculates area of a rectangle
function calculateArea(length, width) {
  return length * width;
}

let area = calculateArea(10, 5);
console.log("Area:", area); // 50

// Function Expression - Another way to create functions
const multiply = function (a, b) {
  return a * b;
};

console.log("Product:", multiply(4, 7)); // 28

// Arrow Function - Modern shorthand (ES6)
const divide = (a, b) => {
  return a / b;
};

// Arrow function with single expression (even shorter)
const subtract = (a, b) => a - b;

console.log("Quotient:", divide(20, 4)); // 5
console.log("Difference:", subtract(10, 3)); // 7

// PRACTICE EXERCISE 6:
// Create functions for:
// 1. A function that takes a name and returns a greeting message
// 2. A function that calculates the perimeter of a rectangle
// 3. A function that checks if a number is even (returns true/false)
// 4. A function that converts Celsius to Fahrenheit

// ============================================================================
// STEP 9: LOOPS - Repeating Actions
// ============================================================================
/*
Loops let you repeat code multiple times.
Useful when you need to do something many times.
*/

// FOR LOOP - When you know how many times to repeat
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// FOR LOOP - Counting backwards
console.log("Counting backwards:");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// FOR LOOP - Stepping by different amounts
console.log("Counting by 2s:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// WHILE LOOP - Repeat while condition is true
let count = 0;
console.log("While loop example:");
while (count < 3) {
  console.log("Count is:", count);
  count++; // Don't forget to update, or it loops forever!
}

// DO-WHILE LOOP - Runs at least once, then checks condition
let number = 0;
console.log("Do-while loop example:");
do {
  console.log("Number:", number);
  number++;
} while (number < 3);

// Loop with arrays (we'll learn arrays next)
let fruits = ["apple", "banana", "orange"];
console.log("Looping through fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// PRACTICE EXERCISE 7:
// 1. Use a for loop to print numbers 1 to 10
// 2. Use a while loop to print "Hello" 5 times
// 3. Create a loop that prints even numbers from 2 to 20
// 4. Create a loop that calculates the sum of numbers 1 to 100

// ============================================================================
// STEP 10: ARRAYS - Lists of Data
// ============================================================================
/*
Arrays are ordered lists of items.
Think of them as a row of boxes, each containing a value.
*/

// Creating Arrays
let colorList = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, null];

// Accessing Array Elements (index starts at 0)
console.log("First color:", colorList[0]); // "red"
console.log("Second color:", colorList[1]); // "green"
console.log("Third color:", colorList[2]); // "blue"

// Getting Array Length
console.log("Number of colors:", colorList.length); // 3

// Modifying Array Elements
colorList[0] = "purple";
console.log("Updated colors:", colorList);

// Adding Elements
colorList.push("yellow"); // Add to end
console.log("After push:", colorList);

colorList.unshift("orange"); // Add to beginning
console.log("After unshift:", colorList);

// Removing Elements
let lastColor = colorList.pop(); // Remove from end
console.log("Removed:", lastColor);
console.log("After pop:", colorList);

let firstColor = colorList.shift(); // Remove from beginning
console.log("Removed:", firstColor);
console.log("After shift:", colorList);

// Finding Elements
let index = colorList.indexOf("green");
console.log("Index of 'green':", index);

// Checking if element exists
let hasBlue = colorList.includes("blue");
console.log("Has blue?", hasBlue);

// Looping Through Arrays
console.log("All colors:");
for (let i = 0; i < colorList.length; i++) {
  console.log(colorList[i]);
}

// For-of loop (easier way to loop)
console.log("Using for-of:");
for (let color of colorList) {
  console.log(color);
}

// PRACTICE EXERCISE 8:
// 1. Create an array of your favorite foods
// 2. Add a new food to the end
// 3. Remove the first food
// 4. Check if a specific food exists
// 5. Loop through and print all foods

// ============================================================================
// STEP 11: OBJECTS - Storing Related Data
// ============================================================================
/*
Objects store related data as key-value pairs.
Think of them as a filing cabinet with labeled folders.
*/

// Creating Objects
let student = {
  name: "John",
  age: 20,
  grade: "A",
  isActive: true,
};

// Accessing Object Properties
console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("Student grade:", student["grade"]); // Alternative syntax

// Modifying Properties
student.age = 21;
student.grade = "A+";
console.log("Updated student:", student);

// Adding New Properties
student.email = "john@example.com";
student.city = "New York";
console.log("Student with new properties:", student);

// Removing Properties
delete student.city;
console.log("After deleting city:", student);

// Objects with Methods (functions inside objects)
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));

// Nested Objects
let personWithAddress = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Boston",
    zipCode: "02101",
  },
  hobbies: ["reading", "coding", "gaming"],
};

console.log("Person's city:", personWithAddress.address.city);
console.log("First hobby:", personWithAddress.hobbies[0]);

// Looping Through Objects
console.log("All student properties:");
for (let key in student) {
  console.log(key + ":", student[key]);
}

// PRACTICE EXERCISE 9:
// 1. Create an object for a book with title, author, and pages
// 2. Add a property for the year published
// 3. Create an object for a car with make, model, year, and a method to start
// 4. Create a nested object for a person with name and address

// ============================================================================
// STEP 12: STRING METHODS - Working with Text
// ============================================================================

let text = "Hello World JavaScript";

// Getting Length
console.log("Length:", text.length); // 22

// Converting Case
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// Finding Substrings
console.log("Includes 'World'?", text.includes("World")); // true
console.log("Starts with 'Hello'?", text.startsWith("Hello")); // true
console.log("Ends with 'Script'?", text.endsWith("Script")); // true

// Getting Character at Position
console.log("Character at index 0:", text[0]); // "H"
console.log("Character at index 6:", text.charAt(6)); // "W"

// Finding Index
console.log("Index of 'World':", text.indexOf("World")); // 6
console.log("Last index of 'l':", text.lastIndexOf("l")); // 9

// Extracting Parts
console.log("Substring (0-5):", text.substring(0, 5)); // "Hello"
console.log("Slice (6-11):", text.slice(6, 11)); // "World"

// Replacing Text
let newText = text.replace("World", "Universe");
console.log("Replaced:", newText);

// Splitting into Array
let words = text.split(" ");
console.log("Words array:", words); // ["Hello", "World", "JavaScript"]

// Trimming Whitespace
let spacedText = "   Hello   ";
console.log("Trimmed:", spacedText.trim()); // "Hello"

// PRACTICE EXERCISE 10:
// 1. Create a string with your full name
// 2. Convert it to uppercase
// 3. Check if it contains your first name
// 4. Split it into an array of words
// 5. Replace a word in the string

// ============================================================================
// STEP 13: PRACTICAL EXAMPLES - Putting It All Together
// ============================================================================

// Example 1: Grade Calculator
function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Score 95 = Grade", calculateGrade(95));
console.log("Score 75 = Grade", calculateGrade(75));

// Example 2: Shopping Cart Total
let cart = [
  { item: "Apple", price: 1.5, quantity: 3 },
  { item: "Banana", price: 0.75, quantity: 5 },
  { item: "Orange", price: 2.0, quantity: 2 },
];

function calculateTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

console.log("Cart total: $", calculateTotal(cart).toFixed(2));

// Example 3: Number Guessing Game Logic
function checkGuess(secretNumber, guess) {
  if (guess === secretNumber) {
    return "Correct! You win!";
  } else if (guess < secretNumber) {
    return "Too low! Try again.";
  } else {
    return "Too high! Try again.";
  }
}

console.log(checkGuess(42, 30)); // "Too low! Try again."
console.log(checkGuess(42, 50)); // "Too high! Try again."
console.log(checkGuess(42, 42)); // "Correct! You win!"

// Example 4: Student Management
let students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 19, grade: 92 },
  { name: "Charlie", age: 21, grade: 78 },
];

function findTopStudent(students) {
  let topStudent = students[0];
  for (let student of students) {
    if (student.grade > topStudent.grade) {
      topStudent = student;
    }
  }
  return topStudent;
}

let topStudent = findTopStudent(students);
console.log("Top student:", topStudent.name, "with grade", topStudent.grade);

// ============================================================================
// STEP 14: COMMON ERRORS AND DEBUGGING
// ============================================================================
/*
Common mistakes to avoid:
1. Forgetting quotes around strings
2. Using = instead of == or === for comparison
3. Forgetting to update loop counters (infinite loops)
4. Accessing array index that doesn't exist
5. Typos in variable/function names
6. Missing semicolons (though optional, good practice)
7. Forgetting return statement in functions
*/

// Debugging Tips:
// - Use console.log() to see what values variables have
// - Check the browser console for error messages
// - Read error messages carefully - they tell you what's wrong
// - Test your code step by step

// ============================================================================
// STEP 15: FINAL PRACTICE PROJECTS
// ============================================================================

/*
PROJECT 1: Personal Information Card
Create a program that:
- Stores your name, age, city, and hobbies in variables
- Displays them in a formatted way
- Uses functions to organize the code
*/

/*
PROJECT 2: Simple Calculator
Create a calculator that:
- Has functions for add, subtract, multiply, divide
- Takes two numbers as input
- Returns and displays the result
*/

/*
PROJECT 3: Todo List Manager
Create a program that:
- Stores a list of tasks in an array
- Can add new tasks
- Can remove tasks
- Can display all tasks
- Can mark tasks as complete
*/

/*
PROJECT 4: Temperature Converter
Create a program that:
- Converts Celsius to Fahrenheit
- Converts Fahrenheit to Celsius
- Takes user input (you can use prompt() for now)
- Displays the result
*/

/*
PROJECT 5: Number Analyzer
Create a program that:
- Takes a number
- Determines if it's positive, negative, or zero
- Determines if it's even or odd
- Calculates its square
- Displays all information
*/

// ============================================================================
// NEXT STEPS FOR LEARNING
// ============================================================================
/*
After mastering these basics, you can learn:
1. DOM Manipulation (interacting with web pages)
2. Event Handling (responding to clicks, etc.)
3. Async JavaScript (Promises, async/await)
4. ES6+ Features (destructuring, spread operator, etc.)
5. Error Handling (try/catch)
6. More advanced array methods (map, filter, reduce)
7. Classes and Object-Oriented Programming
8. Modules and importing/exporting code
*/

// ============================================================================
// TIPS FOR SUCCESS
// ============================================================================
/*
1. Practice regularly - code every day if possible
2. Type out code yourself - don't just copy/paste
3. Experiment - try changing values and see what happens
4. Break problems into smaller pieces
5. Use console.log() to understand what's happening
6. Read error messages - they're trying to help you!
7. Build projects - apply what you learn
8. Don't give up - programming takes time to master
*/

console.log("\n=== Congratulations! You've completed Session 1 ===");
console.log("Keep practicing and experimenting with these concepts!");
console.log("Happy coding! 🚀\n");
