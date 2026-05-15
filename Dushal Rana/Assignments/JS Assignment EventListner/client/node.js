const express=require("express");
const app=express();



//Question 8
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; 

    if (success) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected");
    }
  }, 2000);
});

myPromise
  .then((message) => {
    console.log(message);
  })

.catch((error) => {
    console.error(error);
  });



//Question 9

app.get("/get/api", (req, res)=>{
  res.send("get method call");
  console.log("call Get MEthod");
});


app.post("/post/api", (req, res)=>{
  res.send("post method call");
  console.log("call Post MEthod");
});


app.put("/put/api", (req, res)=>{
  res.send("put method call");
  console.log("call Put MEthod");
});


app.delete("/delete/api", (req, res)=>{
  res.send("delte method call");
  console.log("call Delete MEthod");
});



//Question 10
let student = {
    "name": "dushal",
    "age": 20,
    "address": {
        "city": "Ambala",
        "state": "Haryana"
    }
}
console.log(student);
console.log(typeof(student));
console.log(typeof(JSON.stringify(student)));

let students = JSON.stringify(student);
console.log(typeof(JSON.parse(students)));




app.listen(3000,()=>{
    console.log("server is run on port no. 3000");
}); 