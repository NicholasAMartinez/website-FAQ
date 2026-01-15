import styles from "./about.module.css";

export default function About() {
  return (
    // <div className={styles.about}>
    //   <div className={styles.intro}>
    //     <h2 className={styles.introTitle}>
    //       Introducing Our First-Ever Hackathon
    //     </h2>

    //     <div className={styles.cardWrapper}>
    //       <div className={styles.card}></div>
    //       <div className={styles.card}></div>
    //       <div className={styles.card}></div>
    //     </div>
    //   </div>

    //   <aside className={styles.tracks}>
    //     <aside className={styles.tracks}></aside>
    //     <p className={styles.tracksTitle}>Two Tracks</p>
    //     <button className={styles.trackBtn}>CS</button>
    //     <button className={styles.trackBtn}>CE</button>
    //   </aside>
    // </div>

    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Introducing Our First-Ever Hackathon</h2>
          <p className={styles.subtitle}>
            Build, learn, and ship a project in 24 hours — beginners welcome.
          </p>
        </header>

        <div className={styles.marquee}>
          <div className={styles.marqueeTop}>
            <span className={styles.badge}>24 HOURS</span>
            <span className={styles.badgeAlt}>TEAM UP</span>
            <span className={styles.badge}>DEMO NIGHT</span>
          </div>

          <div className={styles.marqueeBody}>
            <ul className={styles.bullets}>
              <li>
                <span className={styles.dot}></span>
                Mentors + workshops to help you build fast.
              </li>
              <li>
                <span className={styles.dot}></span>
                All skill levels welcome — bring friends or find a team.
              </li>
              <li>
                <span className={styles.dot}></span>
                Present your project and compete for prizes.
              </li>
            </ul>

            <div className={styles.ctaRow}>
              <button className={styles.ctaPrimary} type="button">
                Get the Details
              </button>
              <button className={styles.ctaGhost} type="button">
                View Schedule
              </button>
            </div>
          </div>
        </div>

        <div className={styles.tracks}>
          <h3 className={styles.tracksTitle}>Pick Your Track</h3>

          <div className={styles.chipRow}>
            <button className={styles.chip} type="button">
              <span className={styles.chipRing}></span>
              <span className={styles.chipCenter}>
                <span className={styles.chipCode}>CS</span>
                <span className={styles.chipLabel}>Computer Science</span>
              </span>
            </button>

            <button className={styles.chip} type="button">
              <span className={styles.chipRing}></span>
              <span className={styles.chipCenter}>
                <span className={styles.chipCode}>CE</span>
                <span className={styles.chipLabel}>Computer Engineering</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
