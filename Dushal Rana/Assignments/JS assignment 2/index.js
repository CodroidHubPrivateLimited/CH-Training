let para=document.getElementsByTagName("p");
para[0].style.color="red";


let hd=document.getElementsByClassName("head2");
hd[0].style.background="blue";

let chngtxt = document.querySelector("span");
chngtxt.innerText=("Change the Txt by querySelector");

let head=document.querySelectorAll("h1");
console.log(head);

//
let count = 0;
const display = document.getElementById("display");
display.innerText=count;

const btn = document.getElementsByTagName("button");



btn[0].addEventListener("click", function(){
    count++;
    display.innerText=count;
    console.log("increase");
});
btn[1].addEventListener("click", function(){
    count--;
    display.innerText=count;
    console.log("decrease");
});
btn[2].addEventListener("click", function(){
    count=0;
    display.innerText=count;
    console.log("reset");
});
//

function submit(){
    alert("this is a function event handler");
}

let btn1 = document.getElementsByClassName("btn")
btn1[0].addEventListener("click", function(){
    alert("this is a event listner");
})

//
let input = document.getElementsByClassName("input")[0];
let btn2 = document.getElementById("btn2");
let result = document.getElementById("result");
btn2.addEventListener("click", function(){
    if (input.value === "") {
        alert("enter text");
    } else {
        result.innerText = input.value.toUpperCase();
    }
});
//

const paragraph=document.getElementsByClassName("container")[0];

const pgraph=document.createElement("p");
pgraph.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis id.";

paragraph.appendChild(pgraph);

setTimeout(() => {
    pgraph.innerText = "Paragraph text has been changed after 2 seconds.";
  }, 2000);

setTimeout(() => {
    pgraph.remove();
  }, 4000);

let inpt= document.getElementById("inpt");
let btn77=document.getElementById("btn77");
btn77.addEventListener("click", function(){
    if(inpt.type==="password"){
        inpt.type="text";
    }else{
        inpt.type="password";
    }
})

let btn7=document.getElementById("btn77");
btn77.addEventListener("mouseover", function(){
    btn7.style.background="lightblue";
})


let input1=document.getElementById("inpt");
inpt.addEventListener("keyup", function(){
    console.log(event.key);
})

let btn66=document.getElementsByClassName("btn66")[0];
btn66.tabIndex=0;
btn66.focus();
btn66.addEventListener("mouseover", function(){
    btn66.style.background="yellow";
});

btn66.addEventListener("mouseout", function(){
    btn66.style.background="transparent";
});

btn66.addEventListener("keydown", function(event){
    console.log(event.key);
});

window.onload = function () {
    console.log("Page Loaded Successfully");

    document.getElementById("footer")
    footer.innerText ="This page was last loaded on: " + Date();
};
