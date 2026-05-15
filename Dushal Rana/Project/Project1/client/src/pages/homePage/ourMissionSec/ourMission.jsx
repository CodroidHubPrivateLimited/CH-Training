import React from "react";
import styles from "./ourMission.module.css";
import { Recycle, TreePine, Trash2 } from "lucide-react";

function OurMission() {
  return (
    <div id="About" className={styles.missionSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Mission</h2>
        <p className={styles.subtitle}>
          The Clean City Initiative is a community-driven movement dedicated to creating
          cleaner, healthier, and more sustainable urban environments through collective action.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Recycle size={28} />
            </div>
            <h3>Recycling Programs</h3>
            <p>
              We promote and facilitate recycling initiatives across the city
              to reduce waste and conserve resources.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <TreePine size={28} />
            </div>
            <h3>Tree Planting</h3>
            <p>
              Join our tree planting drives to increase green cover and improve
              air quality in urban areas.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Trash2 size={28} />
            </div>
            <h3>Waste Management</h3>
            <p>
              Efficient waste collection and disposal systems to keep our
              streets and neighborhoods clean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
