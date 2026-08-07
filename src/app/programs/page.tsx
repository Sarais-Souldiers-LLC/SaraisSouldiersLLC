import Link from "next/link";
import styles from "./programs.module.css";

export const dynamic = "force-static";

export default function ProgramsPage() {
  return (
    <div className={styles.container}>
      <h2 className="mystic-heading">Sarais Programs</h2>

      <ul className={styles.list}>
        <li><Link href="/programs/ascension-aid">Ascension Aid</Link></li>
        <li><Link href="/programs/soul-salvage">Soul Salvage</Link></li>
        <li><Link href="/programs/sanctuary-stabilization">Sanctuary Stabilization Strategies</Link></li>
        <li><Link href="/programs/sargent-safety-satisfactory-scores">Sargent‑SafetySatisfactoryScores</Link></li>
      </ul>
    </div>
  );
}
