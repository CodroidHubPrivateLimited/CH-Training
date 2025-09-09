// part 1
// let Name = "Asmit";
// let age = 55;
// let isstudent = true;
// console.log("your name:",Name,"\nyour age:",age,"\nyou are student:",isstudent);


// part 2
// let num = 3;
// if(num % 2 == 0){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }

// if(num > 50){
//     console.log("number is greater than 50");
// }
// else{
//     console.log("number is not greater than 50");
// }

// part3
// for(let i = 0;i < 20;i++){
//     console.log(i+1);
// }

// let i = 1;
// let sum = 0;
// while(i<=10){
//     sum = sum+i;
//     i++;
// }
// console.log("sum of numbers from 1 to 10:",sum);


// part 4
// let sum = (num1,num2) => num1+num2;
// console.log("sum of numbers:",sum(7,8));

// let word = "naman";
// let palindrome = (word) => {
//     if(word == word.split('').reverse().join('')){
//     // console.log("word is palindrome");
//     return true;
//     }
//     else{
//     // console.log("word is not palindrome");
//     return false;
//     }
// };
// console.log(palindrome(word));


// part 5
// let button = document.getElementById("btn");
// let bdy = document.getElementById("body");
// button.textContent = "Change background";
// button.addEventListener("click",(event) => 
//     {
//         // event.preventDefault();
//         alert("Button Clicked!");
//         bdy.style.backgroundColor="red";
//     });


// part 6
// setTimeout((){
//     console.log('hello')
// },3000);

// let time = new Date();
// let hours = time.getHours();
// let minutes = time.getMinutes();
// let seconds = time.getSeconds();

// let count = 0;
// let interval = setInterval(()=>{
//     // console.log(time.toLocaleTimeString());
//     console.log(`${hours}:${minutes}:${seconds}`);
//     count++;
//     if (count == 5){
//     clearInterval(interval);
//     }
// },2000)



// let num = Math.floor(Math.random() * 100) + 1;
// let score = 0;
// let reset = document.getElementById("reset");
// let form = document.getElementById("numberGuess");

// let checkGuess = (guessednum)=>{
//     if(guessednum === num){
//         alert("your guess is correct");
//         score++;
//         document.getElementById("scoreDisplay").innerText = score; 
//     }
//     else if(guessednum > num){
//         alert(" Higher, try again!");
//     }
//     else{
//          alert(" Lower, try again!");
//     }
// }

// form.addEventListener("submit",(event) => {
//     event.preventDefault();
//     let guessed = parseInt(document.getElementById("userinput").value);
//     if(guessed>0&&guessed<=100){
//         checkGuess(guessed);
//     }
//     else{
//         alert("Number is not Valid");
//     }   
// })
 
// reset.addEventListener("click",() =>{
//     num = Math.floor(Math.random() * 100) + 1;
//     document.getElementById("userinput").value = "";
//     score = 0;
//     document.getElementById("scoreDisplay").innerText = score; 
//     alert("New Game Started!");
// })

