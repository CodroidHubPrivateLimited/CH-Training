    console.log("Class 5: Async Await");

    // Async and Await ? 
    // >> Ye Jo DO words hain ye humare mordern JS Keywords hain >> 
    // >> jiski kaddat sai hum apane asynchronous operations ko handle krte hain>> 
    // >> Async/Await allow use to write asynchronous code as if it were synchronous code.


    //  Why Asyc and Await?
    // >> Before Async and Await>> Callbacks use krte the>> Callbackhell mai fas jate the>> Promisses aaye >>but hum promise chaining mai fas jate the>> In dono drawbacks ko solve krne kai liye humara Async and Await aya 
    // >> After Async and Await>> Code Zyada easy to read and maintain hogaye>> Error handling easy hogayi or acchi hoagyi; easly debbugkr saktehain; 

    // Keyword Async:
    // >> It makes a function always return a promise
    // >> Allow use of Await within the function


    // Example of Async Function:

    async function fetchData(){
        return "Hello Async"
    }

    const newData = async () => {
        const data = await fetchData();
        console.log(data);
    }

    fetchData().then(res => console.log(res))


    // Await Keyword:
    // >> Pause function execution (pending )
    // >> Wait for a promise to resolve (fullfilled or rejected) 
    // >> returnd resolved/ fullfilled value 



    // Example of Async/Await Keyword:


    console.log("Start");

    async function test(){
        await new Promise(resolve=>
            setTimeout(resolve, 2000));
            console.log("In Test Function after 2 seconds");
    
    }





    // Async Await + Error Handling:

    async function getData(){
        const data =await getDataFromServer();
        return data;
    }

    // Error Handling>> Try Catch Method


    async function getData(){
        try{
        const data = await getDataFromServer();
        console.log("Data received from server:", data);
        return data;
        }catch(error){
            console.log("Error occurred while fetching data:", error);
        }
    }



    test();
    console.log("End");



    // Await ka direct use kr sakte hain? without makeing function async?
    // >> Nahi kr sakte hain>> kyuki Await sirf async function kai andar hi use ho sakta hai>> warna syntax error aayega>> "SyntaxError: await is only valid in async function"


    //  Await kya return krta hai>>  Promise










    // Destructuring
    // Destructuring hoti kya hai?
    //  Ye JS ka ek feature hai >> it allows us to extract the values from arrays or objects . 
    // It Stores into seprate variables in a short and readable way

    // >> Destructuring Means>> unpacking values from arrays or objects into variables


    // [1,2,3,4,5]>> const[a,b,c,d,e]= [1,2,3,4,5]



    // Why Destructuing is neded?
    // 1. Readuse the code length
    // 2. Imporves Readbility
    // 3. Makes code clean and professional

    // Object Destructuring:
    // Basic Example:
    const person={
        name:"Dushal",
        age: 22,
        role: "Student",
        address:{
            city:"Dheradun",
            state:"Uttrakhand"
        }
    }


    // console.log(person.role)
    // const {name, age, role, instructor="Dikshant", address:{city,state} }=person;
    // console.log(name,age, instructor, city, state)


    // function + destructuing
    function intro({name, age,  address:{city} }){
        console.log("Hii My name is :"+name + " And My age is :"+age+ " i belong to: "+city)
    }

    intro(person)



