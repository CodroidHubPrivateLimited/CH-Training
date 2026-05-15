const express=require("express");
const app=express();
//Section B


let student={
    name:"dushal",
    class:"MCA",
    age:20,
    address:{
        city:"Ambala",
        state:"Haryana"
    }
}
console.log(student["address"]["state"]);

console.log(typeof(JSON.stringify(student)));

const datas=JSON.stringify(student);
console.log(typeof(JSON.parse(datas)));
console.log(datas);





app.listen(3000,()=>{
    console.log("server is run on port no. 3000");
});