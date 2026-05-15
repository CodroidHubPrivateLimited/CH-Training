import React from "react";
import styles from "./gallery.module.css";


function Gallery() {
  return (
    <div id="Gallery" className={styles.section}>
      <h2 className={styles.heading}>Our Success Stories</h2>
      <p className={styles.subtext}>
        See the remarkable transformation in our city through before and after
        images of our cleanup initiatives.
      </p>

    </div>
  );
}

export default Gallery;
