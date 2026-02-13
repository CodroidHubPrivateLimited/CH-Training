//console.log( "hello world")

/* What is your name*/

let studentName = "Dushal";
console.log(studentName);

const institute = "codroidHub";
console.log(institute);

var course = "javaScript";
console.log(course);

{
    const a="20";
    console.log(a);
   
    let b="40";
    b="33";
    console.log(b);
    
    var c="30";
    console.log(c);

    var c="50";
    console.log(c);
}

{
    let a=20;
    console.log("number", a);

    let b="dushal";
    console.log("string", b);
    
    let c="true";
    console.log("boolean", c);
    
    let d="--";
    console.log("undefined", d);
    
    let e="";
    console.log("null", e);

}

{
    let a = 15; 
    let b = 4; 
    console.log("sum", a+b);
    console.log("subtract", a-b);
    console.log("multiple", a*b);
    
    console.log("greater than", a>b);
    console.log("Less than", a<b);
    console.log("not equal to", a!=b);
    
    let c= 7;
    let d="7";
    console.log("Equality", c==d);
    console.log("strict Equality", c===d);

    console.log("increment", ++c);
    console.log("decrement", --d);
  
}


let number=-2;
if (number<0) {
    console.log(number, "is a negitive number")
}else if(number>0) {
    console.log(number, "is a  positive number" )
}else {
    console.log(number, "is a zero")
}


/*let marks=85;
if (marks>=90){
    console.log(marks, "Grade A")
}else if (marks>=80){
    console.log(marks, "Grade B")
}else if (marks>=70){
    console.log(marks, "Grade C")
}else if (marks>=60){
    console.log(marks, "Grade D")
}else {
    console.log(marks, "Fail")
}*/

/*let num=1;
while (num<=10) {
    console.log("number", num);
    num++;
}*/
for (num=1; num<=10; ++num){
     console.log("number is", num);
}  

let x=1;
while (x<=20) {
    console.log(x);
    x += 2;
}  

function greetuser()
{
    console.log("Hi dushal")
}
greetuser()


function sum(a,b)
{
    console.log("sum is", a+b)
}
sum(4,8)

function h(name)
{
    console.log("Hi", name)
}
h("Codroid");

let arrow=(a,b)=>{
    console.log("arrowSum", a+b);
}
arrow(2,9);
