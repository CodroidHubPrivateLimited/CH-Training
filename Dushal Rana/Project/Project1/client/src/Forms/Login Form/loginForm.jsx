import React, { useState } from "react";
import styles from "./loginForm.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Login successful");
      } else {
        console.log(data.message);
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

        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>
          Sign in to your account to continue
        </p>

        <label>Email Address</label>
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

        <button type="submit" className={styles.button}>
          Sign In
        </button>

        {message && <p className={styles.message}>{message}</p>}

        <p className={styles.signup}>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>

        <Link to="/" className={styles.back}>
          ← Back to Home
        </Link>
      </form>
    </div>
    </>
  );
}

export default LoginForm;
