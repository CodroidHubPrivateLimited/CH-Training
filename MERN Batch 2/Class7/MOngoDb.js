// Objects?
// >>An object in JavaScript is a collection of data in key-value pairs.It allows you to store related information together.



// const person={
//     name:"john",
//     class:"12th",
//     address:{
//         city:"ambala",
//         state:"haryana"
//     }
// }




// name>> Key ; John >> Value
// 2 types of extraction>> 1. Dot Notation 2. Bracket Notation
// 1. Dot Notation 
// console.log("Acessing the Object using Dot Notation and the value is: ",person.class)
// console.log(person.name)
// console.log(person.address.city)
// console.log(person.address.state)



// CodrodiHub Ka Data Store in Objects 
const CodrodiHubData= {
    // key: Value 
    companyName:"CodroidHub",
    established: 2015,
    // address: "MaheshNagar"
    address: {
        city: "Ambala",
        state: "Haryana"

    }
}

console.log("Extracted Data useing Dot Notation: ",CodrodiHubData.address)
console.log("Extracted Data useing Bracket Notation: ",CodrodiHubData["established"])
console.log("Extracted Data useing Dot Notation: ",CodrodiHubData["address"]["state"])

// 2. Bracket Noattion 
// console.log("Acessing the Object using Bracket Notation and the value is: ",person['class'])
// console.log(person['name'])
// console.log(person['address']['city'])
// console.log(person['address']['state'])



// typeof()
// console.log(typeof(person))




// Json >> Javascript Object Notation.
// It is a lightweight data format >> It is used to store and echange data btw a server and client.
// JSON is a way to store and transfer data in text format.
//  It looks like a JavaScript object, but everything is a string (keys and values if text).

// Explamle of JSON: 
// const jsonData=`{
//     "name":"Alice",
//     "age":30,
// }
// `
// console.log(jsonData["name"])
// console.log(jsonData.age)


const CodrodiHub= {
    // key: Value 
    companyName:"CodroidHub",
    established: 2015,
    // address: "MaheshNagar"
    address: {
        city: "Ambala",
        state: "Haryana"

    }
}


//  object ko Json mai convert krna >> JSON.Stringify()
//  Json ko object mai convert Krna >> JSON.parse()

console.log("Data Consoled before Coneversion", CodrodiHub)
console.log("Data Type: ", typeof(CodrodiHub))

console.log("Converting to JSON Format")
const conversiontojson= JSON.stringify(CodrodiHub)
console.log(conversiontojson)
console.log("Data Type", typeof(conversiontojson))


const conversiontoObject= JSON.parse(conversiontojson)
console.log("After COnversion to Oject", conversiontoObject )
console.log("Data Type: ", typeof(conversiontoObject))




// console.log("Conversion Json to Object and Object to Json")
// 1 Object to json 
// const personData={
//     name:"john",
//     class:"12th",
//     address:{
//         city:"ambala",
//         state:"haryana"
//     }
// }

// JSON.stringify>> iski madat sai hum apne object ko json mai convert krr rahe hain.
// console.log("Type of  Before conversion: ", typeof(personData))
// const jsonString= JSON.stringify(personData)
// console.log("Type of After conversion: ", typeof(jsonString))

// Json.parse>> iski madat sai hum ane json ko object mai convert krte hain.
// console.log("converting to object format again ", typeof(JSON.parse(jsonString)))



// ` `>> Templete Litrals

// const jsonExample=` {
//         "name":"john",
//     "class":"12th",
//     "address":{
//         "city":"ambala",
//         "state":"haryana"
//     }
// },

// `;
// console.log("Type of  Before conversion: ", typeof(jsonExample))
// console.log("Coverting JSOn Example to Object direct", typeof(JSON.parse(jsonExample)))
// console.log("vapis sai hum json mai hi convert krre hain", typeof(JSON.stringify(jsonExample)))






// DB>> Database >> Jismai hum apna sara data store krte hain.
//  DB types:> 2 > SQL and NoSQL
// 1. SQL >> Structued Querry Language>> It is used to manage and manipulate relational databases. 
// >>  It is based on a sturctud format >> where data us stored in Table format>> rows and Columns
// >> Example : SQL, MYSQL, POSTGRESS etc. 
// Wthat is MONGO DB?

// 2. NOSQL >> Not  only SQL >> It is used to manage and manipulate non - relation databasess.
// >> It is bases on a non-structured format >> where data is stored in various format like document, object , key value pairs etc.
//  >> Example: MongoDB; Cassandra, Redis etc.


// MONGODB 
// >> Ye humara NoSQL Database hain jo ki document/Object oriented database hain 
//>> Issmai jo b humara data hota hai wo hum Json format mai save krte hain>> 

// Bahut sare Documents mil kai ek collection banate hain.
// Aur Bahut sare collections mil kai ek Database banate hain.

// MongoDb commands: 
// show dbs >> to show all databases
// use <db name> >> to use a particular database
// show collections >> to show all collections in a database


// Crud Operation in Mongodb:
// C>> Create >> insertOne(), insertMany()>> 
// insertOne()>> db.class7.insertOne( {name:"Dushal", age:22})
// insertMany()>> db.class7.insertMany( [ {name:"Ankit", age:21}, {name:"Rohit", age:23} ] )

// R>> Read >> find(), findOne()
// find()>>db.class7.find()
// findOne()>> db.class7.findOne( {name:"Ankit"} )

// U>> Update >> updateOne(), updateMany()
// updateOne()>> db.class7.updateOne( {name:"Ankit"}, {$set: {age:22}} )
// Updatemany()>> db.class7.updateMany( {age:{$gt:22}}, {$set: {status:"senior"}} )

// D>> Delete >> deleteOne(), deleteMany()  

