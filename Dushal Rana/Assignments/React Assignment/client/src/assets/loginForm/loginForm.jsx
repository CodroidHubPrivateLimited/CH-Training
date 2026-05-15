import React, { useEffect, useState } from "react";
import styles from "./loginForm.module.css";

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData,[e.target.name]: e.target.value,});
  };

  
  const fetchData = async()=>{  
    const response = await fetch("http://localhost:3000/api/user/login");
    console.log(response.json())
  }
  
  useEffect(()=>{
    fetchData()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("successful");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.input}>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.btnMain}>
          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
