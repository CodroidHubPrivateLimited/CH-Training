const express = require('express')

const app = express();


console.log("1. Callbacks")
console.log("");

// What is Callback Function
// >> A callback is a function >> passed as an argument >> to another function>> which is excluded later >> useually after a task is completed

// Why  Callbacks are Needed?
// >> Javascript is a single Threded language (It Executes one task at a time) 
// >>To Avaoid Blocking Execution
// 1. Long Tasks( Api calls, Db Querries , File Reading)
// 2. Are Executed Asyncroously 
// 3.  Therir result is handles using callbacks

// Basic Call Back Example
function greet(name, callback){
    console.log("2. Example")
    console.log('Good Morning '+ name);
    callback()
}

greet("Dushal", function(){
    console.log("Wellcome to Node.js")
})


console.log("3. Callback in Asynchronous Code")
// 1. Syncronous>> Synchronous means tasks execute one by one, in order, and each task must complete before the next one starts.
// 2. Asyncronous>> Asynchronous  in NodeJS allows tasks to run in the background without blocking execution.

console.log("");



console.log("Step 1")
// setTimeout(()=>{
//     console.log("Step 2 will execute after 2 second")
// },2000)

console.log("Step 3")

console.log("");


console.log("4. Callback With Data")
// function fetchData(callback){
//     setTimeout(()=>{
//         callback("Data fetched from the server")
//     },1000)
// }
// fetchData(function(data){
//     console.log(data);
// })

console.log("");
console.log("5. Callback Drawback")
// Drawback >> Call back Hell> When there is exessive nesting of function it leads to problem known as the callback hell
// >> 1. Difficult to read
// >>2. Hard to debug 
// >>3. Poor Error Handling
// >>4. Not Scalable



// Solution
// 1. Named Functions
// 2. Promises
// 3. AsyncAwait

// console.log("4. Callback With Data")
// function fetchData(callback){
//     setTimeout(()=>{
//         callback("Data fetched from the server")
//         function newData(){
//                 setTimeout(()=>{
//         callback("New Data fetched from the server")
//         function Data(){
            
//         }
//     },3000)
//         }
//     },1000)
// }







console.log("");
console.log("");

console.log("");

console.log("");

console.log("6. Promises ")
// Promises? >> A promise in js object represents >> the eventual complition (of faliure ) of an async opration and its resulting value
// >>Simple Definition>> A promise is a guarntee that a value will be available in future

// >> Why Promisses are needed?
// 1/ Callbacks problems>> 1. Callbackhell; 2. Poor error handling ; 3. Hard to read and maintain code

// >> Promises solve these Problem  by: 1. Makeing code readable>> 2. Error Handling properly; 3.Allow Cleaning



// Promise >> 3 states>> 
// 1. Pending >> Intial State; operation not complete 
// 2. Fullfilled>> operation completed succesfully
// 3. Rejected >> Opration Failed

console.log("6.1 Creating a Promise")

// const myFirstPromise= new Promise((resolve,reject)=>{
//     let success= false
//     if(success){
//         resolve("data dikhega >> operation completed succesfully")
//     }else{
//         reject("Data nahi dikhega>> Opration Failed")
//     }
// }   )

const myFirstPromise= new Promise( (resolve, reject)=>{
    let student = true
if(student){
resolve("Marks Data Dilivered")
}else{
reject("Marks can not be sent as student is unavaiable")
}
} )


// .then() and .catch  >>  Error Handlers
// .then()>> it runs when promise is fullfilled
// .catch()>> it runs when promise is rejected or some error 
myFirstPromise.then( (result) =>{
    console.log("The result is : ",result)
} ).catch((error)=>{
    console.log("The error is >>>>>>>>> ",error)
})


console.log("6.2 Promise Example")
function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data fetched Successfully")
        }, 1000)
    })
}

fetchData().then((datafetched)=>{
    console.log(datafetched)
}).catch((error)=>{
    console.log(error)
})


// promise chaining >> Promise can be chained to perform multiple async tasks in sequence
// >> Avoids nested callbacks
// Cleaner Code flow
fetchData()
.then((datafetched)=>{console.log(datafetched)})
.then((result)=>{console.log(result)})
.then((data)=>{console.log(data)})
.catch((error)=>{ console.log(error)})


// Error Handling
fetchData()
.then((datafetched)=>{
    console.log(datafetched)
    throw new Error("Something Went Wrong")
}).catch((error)=>{
    console.log(error)
})


app.listen(4000,()=>{
    console.log("Hiss the server is running at port 4000 also this is for Callback")
})