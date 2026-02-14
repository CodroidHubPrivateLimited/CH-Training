import React from 'react'
import styles from '../Registration Form/registrationForm.module.css'

function LoginForm(){ 
return(
    <>
    <div className={styles.maincontainer}>
    <div className={styles.container}>
        <div className={styles.heading}>
        <h1>Hii this is Login Form</h1>
        </div>

        <div className={styles.formContainer}>

            <div className={styles.inputs}>
                <input type="email" placeholder='Email' onChange={handleChange} />
            </div>

            <div className={styles.inputs}>
                <input type="text" placeholder='Password'onChange={handleChange} />
            </div>
        </div>

        <div className={styles.button}>
        <button>Login</button>
        </div>

    </div>
    </div>
    </>
)
}


export default LoginForm;