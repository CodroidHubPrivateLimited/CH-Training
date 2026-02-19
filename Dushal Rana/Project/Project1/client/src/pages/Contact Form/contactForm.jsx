import React, { useState } from "react";
import styles from "./contactForm.module.css";
import { Mail, Phone, MapPin } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';


function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,[e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      toast.success("Message sent successfully")

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      toast.error("Error sending message");
      console.log(error);
    }
  };

  return (
    <>
    <ToastContainer/>
    <div id="Contact" className={styles.container}>

      <h2 className={styles.heading}>Get in Touch</h2>
      <p className={styles.subtext}>Have questions or want to get involved? We'd love to hear from you.</p>
      
    <div className={styles.contactBox}>
      <div className={styles.formCard}>
        <h2>Send us a Message</h2>

        <form onSubmit={handleSubmit}>

          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className={styles.btn}>
            Send Message
          </button>

        </form>
      </div>
  <div className={styles.rightSide}>
  <div className={styles.infoCard}>
    <h2>Contact Information</h2>

    <div className={styles.infoItem}>
      <div className={styles.icon}>
        <Mail size={20} />
      </div>
      <div>
        <h4>Email</h4>
        <p>ambala@gmail.com</p>
      </div>
    </div>

    <div className={styles.infoItem}>
      <div className={styles.icon}>
        <Phone size={20} />
      </div>
      <div>
        <h4>Phone</h4>
        <p>+91 99999 99999</p>
      </div>
    </div>

    <div className={styles.infoItem}>
      <div className={styles.icon}>
        <MapPin size={20} />
      </div>
      <div>
        <h4>Address</h4>
        <p>#88 Mahesh Nagar, Ambala (Haryana)</p>
      </div>
    </div>

  </div>
</div>
</div>
    </div>
    </>
  );
};

export default ContactSection;
