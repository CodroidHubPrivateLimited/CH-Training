import React from "react";
import styles from "./heroSection.module.css";
import { Link } from "react-router-dom";
import OurMission from "../ourMissionSec/ourMission";
import Header from "../../Header/header";
import WorkSection from "../workSection/workSection";
import ContactSection from "../../Contact Form/contactForm";
import Gallery from "../Gallery Section/gallery";
import Footer from "../../Footer/footer";


function HomePage(){

    return (
        <>
        <Header/>
    <div className={styles.hero}>
    
      <div className={styles.heroContent}>
        <h1>
          Together We Can Build a <br />
          <span>Cleaner Tomorrow</span>
        </h1>

        <p>
          Join thousands of citizens making our city cleaner, greener, and more
          sustainable for future generations.
        </p>

        <div className={styles.heroButtons}>
          <button className={styles.primaryBtn}>
            Join the Movement →
          </button>
          <button className={styles.secondaryBtn}>
            Report an Issue
          </button>
        </div>
      </div>
    </div>

   <OurMission/>
   <WorkSection/>
   <Gallery/>
   <ContactSection/>
   <Footer/>
       </>
    )
}
export default HomePage;


