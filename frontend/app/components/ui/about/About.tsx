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

        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {"</>"}
            </div>
            <h3 className={styles.cardTitle}>Build</h3>
            <p className={styles.cardText}>
              Create a software or hardware project from scratch with mentors
              nearby.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {"⚡"}
            </div>
            <h3 className={styles.cardTitle}>Learn</h3>
            <p className={styles.cardText}>
              Workshops + teammates = rapid growth. Leave with new skills and
              confidence.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {"🏆"}
            </div>
            <h3 className={styles.cardTitle}>Present</h3>
            <p className={styles.cardText}>
              Demo your work, get feedback, and compete for prizes.
            </p>
          </article>
        </div>

        <section className={styles.tracks} aria-labelledby="tracks-title">
          <h3 id="tracks-title" className={styles.tracksTitle}>
            Two Tracks
          </h3>

          <div className={styles.trackGrid}>
            <button className={styles.trackCard} type="button">
              <div className={styles.trackTop}>
                <span className={styles.trackPill}>CS</span>
                <span className={styles.trackName}>Computer Science</span>
              </div>
              <p className={styles.trackText}>Web, apps, AI, software tools.</p>
            </button>

            <button className={styles.trackCard} type="button">
              <div className={styles.trackTop}>
                <span className={styles.trackPill}>CE</span>
                <span className={styles.trackName}>Computer Engineering</span>
              </div>
              <p className={styles.trackText}>
                Embedded, hardware, IoT, robotics.
              </p>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
