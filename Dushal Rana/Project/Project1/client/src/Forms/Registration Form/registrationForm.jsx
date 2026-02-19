import React, { useState } from "react";
import styles from "./registrationForm.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,});
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/user/registrations", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Account created successfully");

        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  return (
    <>
    <ToastContainer/>
    <div className={styles.container}>
  <form className={styles.card} onSubmit={submitForm}>
    <h1 className={styles.title}>Create Your Account</h1>
    <p className={styles.subtitle}>Join us to make your city better</p>
    
    <label>Full Name</label>
    <input
      type="text"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      className={styles.input}
      required
    />
    
    <label>E-mail</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className={styles.input}
      required
    />
    
    <label>Password</label>
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      className={styles.input}
      required
    />

    <label>Confirm Password</label>
    <input
      type="password"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      className={styles.input}
      required
    />

    <button type="submit" className={styles.button}>
      Create Account
    </button>

    

    <p className={styles.link}>
      Already have an account? <Link to="/login">Sign in</Link>
    </p>
    
          <Link to="/" className={styles.back}>
            ← Back to Home
          </Link>
  </form>
  
</div>
</>

  );
}

export default RegistrationForm;
