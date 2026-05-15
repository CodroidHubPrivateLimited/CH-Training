//Question 1
//a) javascript is used to perform actions and it is a object oriented language where operations are performed.
// uses: it used for problem solving and perform some operations.

//a) synchronous: In synchronous javascript compiler is work step by step format 
// when the one problem is solved then it goes to second. asynchronous: In asynchronous javascript compiler is work with
// the short time problem if the problem time is more than another then it solve the next problem and show output.

//b) let reassigned the value of already declare but do not redeclare the variable.
//  where var reassigned and redeclare the value of already declare variable.

//d) In a callback hell the main problem is function will be assigned in a function 
// where its very difficult to solve it.

//e) promises help to solve the function  where callback hell function is used

//f)async key word help to solve promises limitation and it helps easy to code write and read.
//  and help th javascript to asynchronous.

//g)CRUD operation
// C(create)= insert data(Get method)
// R(read)= Read data (Post method)
// U(update)= update data (Put method)
// D(delete)= delete data (Delete method)
 
//h) JSON.stringify() used to convert the data from object to the JSON format.

//i) SQL= In a SQL database all data is stored in a relational form. 
// NoSQL= In a NoSQL database all data is stored in a non-relational form.




//Question 2
let a = 10;
let b = 21;
console.log("sum of no.", a+b);
console.log("Subtraction of no.", a-b);
console.log("Multiplication of no.", a*b);
console.log("Divide no.", a/b);
console.log("a is grater than b", a>b);
console.log("a is less than b", a<b);
console.log("a equal to b", a=b);

let c = "42";
let d = 42;
console.log(c==d);
console.log(c===d);

//Question 3
let marks=82;
if(marks>=90){
    console.log("Grade A");
}else if (marks>=80) {
    console.log("Grade B");
}else if (marks>=70) {
    console.log("Grade C");
}else {
    console.log("fail");
}

//Question 4
for(let a=1; a<=10; a++){
    console.log(a);
}

for(let b=1; b<=7; b+=2){
    console.log(b);
}

// Question 5
function greet(a,b){
   console.log(a+b);
}
greet(10,22);


const multiply = (x, y) => {
    console.log(x * y);
};
multiply(10,12);

//Question 6
const input1 = document.getElementById("input1");  

input1.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input1.value);
});

const input2 = document.getElementById("input2");

input2.addEventListener("submit", function (event) {
  event.preventDefault();
  const age = Number(input2.value);
  if(age <= 18) {
    alert ("Age 18+ compulsory");
  } else {
    console.log(age);
  }
});



//Question 7
let count=0;
const Counter= document.getElementsByClassName("counter")[0]
Counter.innerText=count;
const btn= document.getElementsByClassName("btn");

btn[0].addEventListener("click",function(){
    count++;
    Counter.innerText=count;
    console.log("Clicked to increase");
})


btn[1].addEventListener("click",function(){
    count--;
    Counter.innerText=count;
    console.log("Clicked to decrease");
})

btn[2].addEventListener("click",function(){
    count=0;
    Counter.innerText=count;
    console.log("Clicked to reset");
})
