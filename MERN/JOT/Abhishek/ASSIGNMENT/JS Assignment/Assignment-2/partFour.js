console.log("PART FOUR :");

//  SUM TWO NUMS FUNCTION
function addNums(a, b) {
  return a + b;
}
console.log("Sum:", addNums(5, 10));

//  SUM TWO NUMS VIA ARROW FUNCTION
const add = (a, b) => {
  return a + b;
};
console.log("Sum Via Arrow Function", add(10, 15));

// CHECK PALINDROME FUNCTION

function Palindrome(a) {
  let reverse = a.split("").reverse().join("");
  return a === reverse;
}

console.log(Palindrome("Naman"));
console.log(Palindrome("Abhi"));
