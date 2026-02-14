import React from 'react'
import styles from './registrationForm.module.css'
import axios from 'axios'
function RegistrationForm(){ 
const [formData, setFormData]=useState({name:",email:",ph:",pass:"})

const handleChange= (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit= (e)=>{

    const postApi = axios.post()

}

return(
    <>
    <div className={styles.maincontainer}>
    <div className={styles.container}>
        <div className={styles.heading}>
        <h1>Hii this is Registration Form</h1>
        </div>

        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.inputs}>
                <input type="text" placeholder='Name' name="name" onChange={handleChange}/>
            </div>

            <div className={styles.inputs}>
                <input type="email" placeholder='Email' name="email" onChange={handleChange}/>
            </div>

            <div className={styles.inputs}>
                <input type="number" placeholder='Phone number'name="ph" onChange={handleChange}/>
            </div>

            <div className={styles.inputs}>
                <input type="text" placeholder='Password' name="pass" onChange={handleChange}/>
            </div>
        </form>

        <div className={styles.button}>
        <button type='submit'>submit</button>
        </div>

    </div>
    </div>
    </>
)
}


export default RegistrationForm;