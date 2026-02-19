import React from "react";
import styles from "./footer.module.css";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.col}>
          <div className={styles.logo}>
            
            <h2>Clean City</h2>
          </div>

          <p className={styles.desc}>
            Building cleaner, greener, and more sustainable communities through
            collective action.
          </p>

          <div className={styles.socials}>
            <span><Facebook size={18} /></span>
            <span><Twitter size={18} /></span>
            <span><Instagram size={18} /></span>
          </div>
        </div>

        <div className={styles.col}>
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>How It Works</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Get Involved</h3>
          <ul>
            <li>Donate</li>
            <li>Partner With Us</li>
            <li>Report Issue</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>News</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
