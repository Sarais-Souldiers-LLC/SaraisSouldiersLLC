import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h2 className="mystic-heading">Welcome, Souldier.</h2>
        <p className="mystic-subtext">
          Step into the ChamberofCodexes™ and begin your Khaos2KlarityKw’adratiqKonquest™.
        </p>
      </section>

      <section className={styles.links}>
        <Link href="/programs" className={styles.linkCard}>
          <h3>Programs</h3>
          <p>Ascension Aid • Soul Salvage • Sanctuary Stabilization • Sargent‑SafetySatisfactoryScores</p>
        </Link>

        <Link href="/cosmology" className={styles.linkCard}>
          <h3>Cosmology</h3>
          <p>Glyphs • Constellations • Matrices • A⁵ AstroAnthology</p>
        </Link>

        <Link href="/lineage" className={styles.linkCard}>
          <h3>TJ‑Lineage</h3>
          <p>TJ₁ • TJ₂ • TJ₃ • Maple Kush • Tobias Jean</p>
        </Link>

        <Link href="/contact" className={styles.linkCard}>
          <h3>Contact</h3>
          <p>Reach the Sarais Souldiers LLC™ Sanctuary Division</p>
        </Link>
      </section>
    </div>
  );
}
