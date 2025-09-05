
let name = "Komal";   
let age = 22;         
let isStudent = true; 


console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);




let number = 60;

if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}


if (number > 50) {
    console.log(number + " is greater than 50");
} else {
    console.log(number + " is not greater than 50");
}




for (let i = 1; i <= 20; i++) {
  console.log(i);
}



let num = 1;
let sum = 0;

while (num <= 10) {
  sum += num; 
  num++;      
}

console.log("The sum of numbers from 1 to 10 is:", sum);



function addNumbers(a, b) {
  return a + b;
}


console.log(addNumbers(5, 7))





function isPalindrome(word) {

  let str = word.toLowerCase();


  let reversed = str.split("").reverse().join("");

 
  return str === reversed;
}


console.log(isPalindrome("madam"));   
console.log(isPalindrome("hello"));



setTimeout(function() {
  console.log("Hello after 3 seconds");
}, 3000); 


setInterval(function() {
  let now = new Date(); 
  console.log("Current Time:", now.toLocaleTimeString());
}, 2000);
