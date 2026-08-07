import Link from "next/link";
import styles from "./cosmology.module.css";

export const dynamic = "force-static";

export default function CosmologyPage() {
  return (
    <div className={styles.container}>
      <h2 className="mystic-heading">Cosmology Codex</h2>

      <ul className={styles.list}>
        <li><Link href="/cosmology/chamberofcodexes">ChamberofCodexes™</Link></li>
        <li><Link href="/cosmology/glyph-library">Glyph Library</Link></li>
        <li><Link href="/cosmology/constellations">Constellations</Link></li>
        <li><Link href="/cosmology/matrices">Matrices</Link></li>
        <li><Link href="/cosmology/astroanthology-a5">A⁵ AstroAnthology</Link></li>
      </ul>
    </div>
  );
}
