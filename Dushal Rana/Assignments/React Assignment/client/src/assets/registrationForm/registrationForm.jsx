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

    const [selectedUser,setSelectedUser]=useState()


    const handleSelectedEditUser= (data)=>{

      setSelectedUser(data)
      console.log("Selected User Data ", data)
      setFormData(
        {
        name: data.name,
        email: data.email,
        password:"",
        confirmPassword:""

      }

      )
    }



 

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


        if(selectedUser){

          // console.log()
          const userId= selectedUser._id

          const response = await fetch(`http://localhost:3000/api/user/registration/update/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    );
    const data =  await response.json();
    console.log(data);
      alert("Registration Updation completed")




        }else{
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


        }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    fetchData()


      }
      
      
      
      
      catch(error)  {
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
          <input type="text" name="name" value={formData.name} required onChange={handleChange}/>
        </div>

        <div className={styles.input}>
          <label>Email</label><br />
          <input type="email" name="email" value={formData.email} required onChange={handleChange}/>
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
          
          SelectedEditUser={handleSelectedEditUser}
           />
        </div>
        </div>




        </>
    )
}
export default RegistrationForm;