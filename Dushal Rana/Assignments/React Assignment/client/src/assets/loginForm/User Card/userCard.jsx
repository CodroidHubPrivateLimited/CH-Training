import react, { useState } from "react"
import styles from "./userCard.module.css"

function Card({RegisteredUser, SelectedEditUser}) {
    console.log("This Data is comming from User Card not from Resitratiion Form", RegisteredUser)
   


const handleDelete = async(id)=>{
     
console.log("sending id to Delete",id)
    try{
    const res = await fetch(`http://localhost:3000/api/delete/userData/${id}`, {
      method: "Delete",
    }
    );
     const data =  await res.json();
      console.log(data);
      alert("User Deleted Sucessfully")
     }catch{
        console.error(error);
        alert("Something went wrong");
     }
    }




    return(
        <div>

            <div>

    <div className={styles.container}>
      {RegisteredUser && RegisteredUser.length > 0 ? (
        RegisteredUser.map((data) => (
          <div key={data._id} className= {styles.displayContainer}>
            <div>
            <p>My Name is {data.name}</p>
            <p>My Email is {data.email}</p>
            {/* <p>My Password is {data.password}</p> */}
            </div>

            <div className= {styles.action}>
            <button onClick={()=>{SelectedEditUser(data)}}>Edit</button>
           <button onClick={()=>{handleDelete(data._id)}}>delete</button>
           </div>
          </div>

     
        ))
      ) : (
        <p>No registered users found</p>
      )}
    </div>


            </div>

        </div>
    )
}

export default Card




