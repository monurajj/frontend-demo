"use client";

import React from 'react';
import styles from '../tab.module.css';

export default function Tabs({ setComponent }) {  // Destructure props to get setComponent directly
  return (
    <div className={styles.tabsSection}>
      <button className={styles.tabBtn} onClick={() => setComponent("Schemes")}>Schemes</button>
      <button className={styles.tabBtn} onClick={() => setComponent("Job Openings")}>Job Openings</button>
      <button className={styles.tabBtn} onClick={() => setComponent("Scholarships")}>Scholarships</button>
    </div>
  );
}
