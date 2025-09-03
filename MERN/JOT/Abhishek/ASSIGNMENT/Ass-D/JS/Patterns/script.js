// horizontal
let horizontalStars = "";
for (let i = 1; i <= 5; i++) {
  horizontalStars += "*";
}
document.getElementById("horizontal-pattern").textContent = horizontalStars;
console.log("horizontalStars");
console.log(horizontalStars);

// vertical
let verticalStars = "";
for (let i = 1; i <= 5; i++) {
  verticalStars += "*\n";
}

document.getElementById("vertical-pattern").textContent = verticalStars;

console.log("verticalStars");
console.log(verticalStars);
// Triangle

let trianglePattern = "";
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "⚡";
  }
  trianglePattern += row + "\n";
}
document.getElementById("triangle-pattern").textContent = trianglePattern;
console.log("trianglePattern");
console.log(trianglePattern);

// Reverse Triangle

let reverseTrianglePattern = "";
for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "💡";
  }
  reverseTrianglePattern += row + "\n";
}
document.getElementById("reverse-triangle-pattern").textContent =
  reverseTrianglePattern;
console.log("reverseTrianglePattern");
console.log(reverseTrianglePattern);
// Numbers

let numberPattern = "";
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  numberPattern += row + "\n";
}
document.getElementById("number-pattern").textContent = numberPattern;
console.log("numberPattern");
console.log(numberPattern);
