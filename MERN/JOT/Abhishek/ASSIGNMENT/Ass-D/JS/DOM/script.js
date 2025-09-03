// Selecting Elements
console.log("--- Selecting Elements ---");
let elementById = document.getElementById("sample-id");
console.log("Selected by ID:", elementById);

let elementsByClass = document.getElementsByClassName("sample-class");
console.log("Selected by Class:", elementsByClass);

let elementsByTag = document.getElementsByTagName("p");
console.log("Selected by Tag:", elementsByTag);

let querySelector = document.querySelector("#sample-id");
console.log("Selected by querySelector:", querySelector);

let querySelectorAll = document.querySelectorAll(".sample-class");
console.log("Selected by querySelectorAll:", querySelectorAll);

// Changing Content
console.log("--- Changing Content ---");
let contentDiv = document.getElementById("content-change");
contentDiv.textContent = "New text content!";
console.log("Content changed with textContent:", contentDiv.textContent);
contentDiv.innerHTML = "<strong>New HTML content!</strong>";

// Changing Styles
console.log("--- Changing Styles ---");
let styleHeader = document.getElementById("style-change");
styleHeader.style.color = "blue";

// Adding & Removing Elements
console.log("--- Adding & Removing Elements ---");
let newPara = document.createElement("p");
newPara.textContent = "I was added by JavaScript!";
document.body.appendChild(newPara);

let elementToRemove = document.getElementById("remove-me");

elementToRemove.addEventListener("click", () => {
  elementToRemove.remove();
  console.log("An element was removed from the page.");
});

// Event
console.log("--- Event ---");
let myButton = document.getElementById("my-button");
myButton.addEventListener("click", function () {
  alert("Button Clicked!");
  console.log("Button was clicked!");
});
