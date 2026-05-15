const express = require("express");
const Mongoose = require("Mongodb");
const app = express();


//Task 1
const student = {
    name : "dushal",
    grade : "A+",
    address : {
        city : "Ambala",
        state : "Haryana",
    }
}

//Task 2
console.log("Print vaue using Dot Notation :");
console.log(student.name);
console.log(student.grade);
console.log(student.address.city);

console.log("Print vaue using Bracket Notation :");
console.log(student["name"]);
console.log(student["grade"]);
console.log(student["address"]["city"]);

//Task 3
console.log(typeof(student));
console.log(typeof(student.name));
console.log(typeof(student.address));

//Task 4
const data = {
    "name" : "dushal",
    "address" : {
        "city" : "Ambala",
        "state" : "Haryana",
    }
}
console.log("Type before conversion :", typeof(data));
console.log("Type After conversion :", typeof(JSON.stringify(data)));

// Task 5
const alls = JSON.stringify(data);
console.log("Type before conversion :", typeof(alls));
console.log("Type After conversion :", typeof(JSON.parse(alls)));

//Task 6
const data4 = `{
    "name" : "dushal",
    "address" : {
        "city" : "Ambala",
        "state" : "Haryana"
    }
}`;

console.log(typeof(JSON.parse(data4)));
console.log(JSON.parse(data4));




app.listen(3400,()=>{
    console.log("server is run on port no. 3400");
})