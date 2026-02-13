import react,{useEffect, useState} from "react"
import styles from "./registrationForm.module.css"
import Card from "../loginForm/User Card/userCard";
 

function RegistrationForm(){

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const[fetchUserData,setfetcheUserdData]=useState()
     const[edit,setEdit]= useState()

    const [selectedUser,setSelectedUser]=useState()




 

    const handleChange = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    } 


    const fetchData = async()=>{  
      const response = await fetch("http://localhost:3000/api/get/userData");
      const data = await response.json()
      console.log("this data is comming fromm Registration form",data)
      setfetcheUserdData(data)
    }


useEffect(()=>{
fetchData()
},[])

    const handleSubmit = async(e)=>{
    e.preventDefault();
      try{
    const response = await fetch("http://localhost:3000/api/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    );
    const data =  await response.json();
    console.log(data);
      alert("Registration completed")
      }catch{
           console.error(error);
    alert("Something went wrong");
      }

    }



    return (
        <> 
        <div className={styles.mainContainer}> 
          <div>
        <form className={styles.form} onSubmit={handleSubmit}>  

        <div className={styles.input}>
          <label>Name</label><br />
          <input type="text" name="name" required onChange={handleChange}/>
        </div>

        <div className={styles.input}>
          <label>Email</label><br />
          <input type="email" name="email" required onChange={handleChange}/>
        </div>

        <div className={styles.input}>
          <label>Password</label><br />
          <input type="password" name="password" required onChange={handleChange}/>
        </div>

        <div className={styles.input}>
          <label>Confirm Password</label><br />
          <input type="password" name="confirmPassword" required onChange={handleChange}/>
        </div>
        
        <div className={styles.btnMain}>
        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
        </div>

        </form>
</div>
                <div>
          <h1>Here All the Registered user will be displayyed </h1>
          <Card RegisteredUser={fetchUserData} 
           selectedUser={selectedUser}
           setSelectedUser={setSelectedUser} />
        </div>
        </div>




        </>
    )
}
export default RegistrationForm;