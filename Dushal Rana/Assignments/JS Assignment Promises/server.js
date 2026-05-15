const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())




//Question 1
console.log("Process Started");

setTimeout(() => {
  console.log("Task Finished");
}, 2000);

console.log("Process Ended");

//Question 2
function loadUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = {
        name: "dushal",
        age: 21
      };
      resolve(userData);
    }, 3000);
  });
}

loadUserData()
.then((data) => {
    console.log("User Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
});

//Question 3
function stepOne() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Step One Completed");
    }, 1000);
  });
}

function stepTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error in Step Two");   
    }, 1000);
  });
}

function stepThree() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Step Three Completed");
    }, 1000);
  });
}


stepOne()
  .then((result1) => {
    console.log(result1);
    return stepTwo();
  })
  .then((result2) => {
    console.log(result2);
    return stepThree();
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.log("Caught Error:", error);
  });

//Question 4

async function fetchOrderDetails() {
  return new Promise((resolve, reject) => {
      resolve("Order Details Fetched");
  });
}

async function processOrder() {
  try {
    const order = await fetchOrderDetails(); 
    console.log(order);
    console.log("Order Processed Successfully");
  } catch (error) {
    console.log("error:", error);
  }
}

processOrder();



//Question 5


app.post("/employeData",(req,res)=>{
    res.json()
    console.log()
})



//Question 6

// db.testData.find({
//   age: { $gt: 25 },
//   status: "Active"
// })


// db.testData.aggregate([
//   {
//     $group: {
//       _id: "$department",
//       totalStudents: { $sum: 1 }
//     }
//   },
//   {
//     $project: {
//       _id: 0,
//       department: "$_id",
//       totalStudents: 1
//     }
//   }
// ]

//Question 7

mongoose.connect("mongodb://localhost:27017/testDB")
.then(()=>{
    console.log("mongoose is connected")
}).catch((error)=>{
    console.log(error)
})

app.use("/api", require("./routers/router"));



app.listen(3000, ()=>{
    console.log("server is run on port no 3000")
})
