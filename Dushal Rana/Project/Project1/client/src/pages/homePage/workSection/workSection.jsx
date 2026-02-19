import React from "react";
import styles from "./workSection.module.css";
import { AlertCircle, Users, TrendingUp } from "lucide-react";

function WorkSection() {
  return (
    <>
    <div id="Work" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>How It Works</h2>
        <p className={styles.subtitle}>
          Making a difference is simple. Follow these three easy steps to contribute
          to a cleaner city.
        </p>

        <div className={styles.steps}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <AlertCircle size={30} />
            </div>
            <span className={styles.stepNumber}>1</span>
            <h3>Report</h3>
            <p>
              Identify and report issues like littering, illegal dumping, or areas
              needing cleanup in your neighborhood.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <Users size={30} />
            </div>
            <span className={styles.stepNumber}>2</span>
            <h3>Participate</h3>
            <p>
              Join scheduled cleanup events, volunteer programs, and community
              initiatives in your area.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <TrendingUp size={30} />
            </div>
            <span className={styles.stepNumber}>3</span>
            <h3>Improve</h3>
            <p>
              See the positive impact of collective action as our city becomes
              cleaner and more sustainable.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WorkSection;
