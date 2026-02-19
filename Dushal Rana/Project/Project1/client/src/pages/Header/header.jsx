import React from "react";
import styles from "./header.module.css";
import Gallery from "../homePage/Gallery Section/gallery"
import { Link } from "react-router-dom";

function Header(){

  return(
        <>
        <div className={styles.navbar}>
              <div className={styles.logo}>
                  Clean City
              </div>
              <div className={styles.headerBar}>
              <ul className={styles.navLinks}>
                  <li><a href="/">Home</a></li>
                  <li><a href="/#About">About</a></li>
                  <li><a href="/#Work">How It Works</a></li>
                  <li><a href="/#Gallery">Gallery</a></li>
                  <li><a href="/#Contact">Contact</a></li>
              </ul>
                 
              <div className={styles.mainBtn}>
                <button className={styles.joinBtn}><Link to = "/login">Login</Link></button>
              </div>
              </div>
         </div>
        </>
    )
}
export default Header;
