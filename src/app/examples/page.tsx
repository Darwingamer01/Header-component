// src/app/examples/page.tsx
"use client"
import Header from "@/components/Header/Header"
import styles from "./examples.module.css"

export default function Examples() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Default Header</h2>
        <p className={styles.description}>Logo + Notification bell + Start A Session button</p>
        <Header variant="default" notificationCount={3} />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Simple Header</h2>
        <p className={styles.description}>Logo + Menu button</p>
        <Header variant="simple" />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Back Only Header</h2>
        <p className={styles.description}>Back button + Menu button</p>
        <Header variant="back-only" />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Back with Title Header</h2>
        <p className={styles.description}>Back button + Page title + Menu button</p>
        <Header variant="back-with-title" title="Patient Information" />
      </div>
    </div>
  )
}
