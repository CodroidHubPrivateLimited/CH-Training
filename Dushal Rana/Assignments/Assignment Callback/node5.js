const express = require("express");
const app=express();



console.log("Hello node.js");


// Tast 1

function users(username,callback){
    console.log("user", username ,"is login");
    callback();
}
function callmsg(){
    console.log("login successful");
}
users("dushal",callmsg);

// Task 2

function greet(callback){
    setTimeout(()=>{
        callback("profile loaded successfully");
    },2000);
}
greet(function(message){
    console.log(message);
});

// Task 3

function orderDetails(callback){
    setTimeout(()=>{
        const order={orderid: 101,
        orderAmount: 2500}
        callback(order);
    },1000);
}
function detail(order){

    console.log("Order ID=", order.orderid);  
    console.log("Order Amount=", order.orderAmount);  
}
orderDetails(detail);


// Task 4 
function user(callback){
    console.log("user data");
    callback();
    
function payment(callback){
    console.log("user payment");
    callback();
    
function order(callback){
    console.log("user orders");
    callback();
}
}
}

// Task 5
function checkServer(ServerOk) {
  return new Promise(function (resolve, reject) {
    if (ServerOk) {
      resolve("Server is online");
    } else {
      reject("Server is down");
    }
  });
}


checkServer(true)
  .then( (msg)=> {
    console.log(msg);
  })
  .catch( (error)=> {
    console.log(error);
  });


// Task 6
function fetchUserData() {
  return new Promise(function(resolve, reject)  {
    setTimeout(()=>  {
      resolve("User data fetched");
    }, 1500);
  });
}


fetchUserData()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error)  {
    console.log(error);
  });

//Task 7
function stepOne() {
  return new Promise(function(resolve, reject) {
    resolve("Step 1 done");
  });
}

function stepTwo() {
  return new Promise(function(resolve, reject){
    resolve("Step 2 done");
  });
}

function stepThree() {
  return new Promise(function(resolve, reject) {
    resolve("Step 3 done");
  });
}


stepOne()
  .then(function(result1) {
    console.log(result1);
    return stepTwo();
  })
  .then(function(result2) {
    console.log(result2);
    return stepThree();
  })
  .then(function(result3) {
    console.log(result3);
    console.log("steps completed");
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

//Task 8
function stepO() {
  return new Promise(function(resolve, reject) {
    resolve("Step 1 completed");
  });
}

function stepT() {
  return new Promise(function(resolve, reject){
    reject("error aa gya");
  });
}

function stepTh() {
  return new Promise(function(resolve, reject) {
    resolve("Step 3 completed");
  });
}


stepO().then(function(){
    return stepT();
  })
  .then(function(){
   return stepTh();
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

  // Task 9

  function getUser() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log("User fetched");
            resolve("Dushal");
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log("Orders fetched for", user);
            resolve(["Order 1", "Order 2"]);
        }, 1000);
    });
}

function getPayment(orders) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log("Payment done for", orders);
            resolve("Payment Successful");
        }, 1000);
    });
}
getUser()
    .then(function (user) {
        return getOrders(user);
    })
    .then(function (orders) {
        return getPayment(orders);
    })
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log("Error:", err);
    });

app.get("/meriApi", (req, res)=>{
  res.send("get method call");
  console.log("call Get MEthod");
});

app.listen(3300,()=>{
    console.log("server is running on port 3300");
})

