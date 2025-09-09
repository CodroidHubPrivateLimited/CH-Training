

// part 5
let button = document.getElementById("btn");
let bdy = document.getElementById("body");
button.textContent = "Change background";
button.addEventListener("click",(event) => {
    // event.preventDefault();
    alert("Button Clicked!");
    bdy.style.backgroundColor="red";
});


// Guess the Number Game
    
let num = Math.floor(Math.random() * 100) + 1;
let score = 0;
let reset = document.getElementById("reset");
let form = document.getElementById("numberGuess");

let checkGuess = (guessednum)=>{
    score++;
    if(guessednum === num){
        alert("your guess is correct");
        document.getElementById("scoreDisplay").innerText = score;
    }
    else if(guessednum > num){
        alert(" Higher, try again!");
    }
    else{
         alert(" Lower, try again!");
    }
}

form.addEventListener("submit",(event) => {
    event.preventDefault();
    let guessed = parseInt(document.getElementById("userinput").value);
    if(guessed>0 && guessed<=100){
        checkGuess(guessed);
    }
    else{
        alert("Number is not Valid");
    } 
    document.getElementById("userinput").value = "";   
})
 
reset.addEventListener("click",() =>{
    num = Math.floor(Math.random() * 100) + 1;
    document.getElementById("userinput").value = "";
    score = 0;
    document.getElementById("scoreDisplay").innerText = score; 
    alert("New Game Started!");
})

