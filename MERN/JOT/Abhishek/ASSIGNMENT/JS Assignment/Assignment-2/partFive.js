console.log("PART FIVE :");
console.log("Tap Button");
// ON CLICKING BUTTON CHNAGE BG AND SHOWS AN ALERT

let btn = document.getElementById("colorBtn");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightblue";
  alert("Button Clicked!");
});
