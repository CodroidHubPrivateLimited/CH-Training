// Assignment
let name = "drishti";
let age = 21;
let isStudent = "true";

console.log("My name is:",name,"I am :",age, "Student :",isStudent);


//number is even or odd
let number =5;
if(number%2==0){
    console.log("even");
}
else {
    console.log("odd");
}
//greater than50 or not
let num=30;
if(num>50){
    console.log("true no is greater than 50");
}
else{
    console.log("no is less than 50");
}

//use for loop to print num 1 to 20
for(let i=1;i<=20;i++){
    console.log(+i);
}

// while loop 
let i =1;
let sum = 0;
while(i<=10){
    sum += i;
    i++;
}
console.log("sum of numbers is:", sum);

//Function 
function add(a,b) {
    return a+b;
}
let submission = add(10,20);
console.log("sum is:", submission);

