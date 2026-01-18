import styles from "./tracks.module.css";


export default function Tracks() {
 

  return (
    <section id="tracks" className={styles.tracksSection}>
      <div className={styles.tracksContainer}>
        <header className={styles.tracksHeader}>
          <h2 className={styles.tracksTitle}>Tracks</h2>

          <p className={styles.tracksSubtitle}>
            Choose the track that best matches your experience and project type.
          </p>
        </header>

        <div className={styles.tracksGrid}>
          {/* Beginner Software */}
          <div className={styles.trackCard}>
            <h2 className={styles.trackName}>Software</h2>
            <p className={styles.trackDesc}>
              For teams building a software-only project who have not completed
              their milestone course yet.
              <span className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100px"
                  viewBox="0 -960 960 960"
                  width="100px"
                >
                  <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
                </svg>
              </span>
            </p>
          </div>

          {/* Beginner Hardware */}
          <div className={styles.trackCard}>
            <h2 className={styles.trackName}>Hardware</h2>
            <p className={styles.trackDesc}>
              For new builders creating a project with electronics or a physical
              component.{" "}
              <span className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100px"
                  viewBox="0 -960 960 960"
                  width="100px"
                >
                  <path d="M150-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v60h60v60h-60v150h60v60h-60v150h60v60h-60v60q0 24-18 42t-42 18H150Zm0-60h600v-600H150v600Zm60-60h253v-200H210v200Zm283-336h197v-144H493v144ZM210-470h253v-250H210v250Zm283 230h197v-306H493v306ZM150-780v600-600Z" />
                </svg>
              </span>
            </p>
          </div>

          {/* Grand Track
          <div className={`${styles.trackCard} ${styles.trackCardGrand}`}>
            <h2 className={styles.trackName}>Grand Track</h2>
            <p className={styles.trackDesc}>
              Awarded to the best project of the entire hackathon, regardless of
              track or category.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
