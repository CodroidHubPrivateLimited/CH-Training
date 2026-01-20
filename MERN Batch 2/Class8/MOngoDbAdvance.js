// Humne Abhi tak dekha tha ki Kaise CRUD Operations Perform hote hain MongoDB Mai
//  AAb HUm dekhenge ki kaise Hum Advance Features use kr sakte hain MOngoDb main



// 1. Query Operators & Projection  
// Query Operators wo hote hain jo Humare Queries ko aur Bhi Powerful banate hain
// Jaise ki Comparison Operators ($eq, $ne, $gt, $lt, $in, $nin) aur Logical Operators ($and, $or, $not, $nor)


// Comparison Operators 
// $eq >> Eqaual To
//  $ne >> Not Equal To
//  $gt >> Greater Than
//  $lt >> Less Than
//  $in >>In
//  $nin >> Not In


// Logical Operators 
// $and>> And>>Agr dono condition true hui tab hi statement true hogi varna false >> Multiplication>> true  false = false; false true= false; false false = false, true true = true
// $or >> Or>> Agr ek bhi condition true hui tab statement true hogi >> Addition >> true false = true; false true= true; false false = false, true true = true
// $not >> Not >> Negation >> Jo condition true hai usse false kr dega aur jo false hai usse true kr dega>> Condition ko just ulta kr deta hai>> True = False>> False = True 
// $nor >> Nor >> Negatiion of OR>> Humko Jo Output Or mai nikalenge or usmai hum Not laga denge. 

// 1 0 1 0
// 0 0 1 0
// --------
// 0 0 1 0 //AND>> Multiplication
// 1 0 1 0// OR>> Addition
// 0 1 0 1// just upr vali output ko NOt mai conver kiya
// --------
// 0 1 0 1    // Not Nikalenge

// 0 1 0 1>> Nor Value 




// 0 0 1 0  
// 1 0 1 0
// --------
// 1 0 1 0>> OR
// --------
// 0 1 0 1>> NOR


// >> Usage Mongo DB 
// Comparaision Operator
// db.class7.find({age:{$eq:10}})

// In Operator
// db.class7.find({ city: { $in: ["Amabala","Kurukshetra"] } })

// Logical Operator
// db.class7.find({$or:{city:"Ambala",city:"Haldwani"}})









// Aggrigation >> Framework >> In MongodB>> Aggrigates >> used to process the data records and return computed results
// This Aggrigation Framework>> ye humara data processsing pipeline ki tarah kam krta hai
// >> Theoritical Explaination>> humne koi document pass kiya >> or jo ye document hai ye iss data processsing pipelin mai jakai multiple staages pass hoga>> and then ye hume har ek stage convert krkai dega
// Aggrigates are advanced analytics inside the MongoDb itself .
// >> SQL's GroupBy , SUM , COUNT. >>> But Aggrates inn sab sai jyada powerful hai 



// Why use Aggrigation?
// Jab bhi humko ye sab use krna hota hai hum aggrigates ko use krte hai:
// 1. Group data 
// 2. Calcultate totals, avgs and counts
// 3. Filter Data 
// 4. JOIN Collection
// 5. Documents Tranformation


// >> Basic Syntax 
// db.collection.axggrigate({
// {stage1},
// {stage2},
// {stage3}
// })



// Common Aggrigation Stages
// 1. $match >> Document Filter (WHERE) >>   {$match:{age:{$gt:25}}}
// 2. $group>> Group documents >> (same like GROUP BY) >>    {$group:{
    //   _id:{ 
    //     name:"$name"
    //   },
    //   totalStudents:{$sum:1}
    // }}
//3. $project>> Display limited data>>  {$project:{_id:0, name:1, class:1, age:1}}
// 4. $Sort>>    {$group:{
    //   _id:{ 
    //     name:"$name"
    //   },
    //   totalStudents:{$sum:1}
    // }}

//5. $limit>> Ye limit krdeta hai jitna hume limiter set krenge>>  {$limit:5}
// 6. $skip>>  {$skip:5} 
// 7. $unwind>> basically it breaks the array into documents>>{$unwind:"$fruitNames"}
// 8. $lookup>> join Collection>> Ek data humara ek collection or dusra data dusre collection >> Abb hum  connect jo b krte hain vo lookup ki madat sai krte hain
// db.class7.aggrigate({
// {
// $lookup:{
//     from: "users",
//     localfeild:"studentId",
//     foreinFeild:"Id",
//     as:"StudentDetails"
// }
// }
// })