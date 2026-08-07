import styles from "../program.module.css";
import programData from "@data/program-matrices.json";

export const dynamic = "force-static";

export default function AscensionAidPage() {
  const matrix = programData["ascensionAid"];

  return (
    <div className={styles.container}>
      <h2 className="mystic-heading">Ascension Aid</h2>
      <p className="mystic-subtext">
        The first step in the Souldier’s rise — clarity, elevation, and resonance.
      </p>

      <section className={styles.matrix}>
        <h3>Program Matrix</h3>
        <pre>{JSON.stringify(matrix, null, 2)}</pre>
      </section>
    </div>
  );
}
