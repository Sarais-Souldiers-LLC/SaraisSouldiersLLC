import Link from "next/link";
import styles from "./lineage.module.css";

export const dynamic = "force-static";

export default function LineagePage() {
  return (
    <div className={styles.container}>
      <h2 className="mystic-heading">TJ‑Lineage</h2>

      <ul className={styles.list}>
        <li><Link href="/lineage/tj1">TJ₁ — Tedda Jean</Link></li>
        <li><Link href="/lineage/tj2">TJ₂ — Taylor Jean</Link></li>
        <li><Link href="/lineage/tj3">TJ₃ — TriniTy Jean</Link></li>
        <li><Link href="/lineage/tj4">TJ₄ — Tobias Jean</Link></li>

        <li><Link href="/lineage/a-dog1">A‑Dog₁ — TJ₂'s Shadow Twin</Link></li>
        <li><Link href="/lineage/a-dog2">A‑Dog₂ — TJ₁'s Shadow Twin</Link></li>
        <li><Link href="/lineage/a-dog2/maple-kush">Maple Kush — A‑Dog₂'s Resident Ranger</Link></li>

        <li><Link href="/lineage/andrea">Andrea Sharon Simms</Link></li>
        <li><Link href="/lineage/figaro">Figaro El Lil’ Nigaro — #1DaugLilr₂</Link></li>
        <li><Link href="/lineage/trinity">TriniTy Jean — #1Daughter₃</Link></li>
      </ul>

      {/* ⭐⭐⭐ KUBIQSIMMETRY CUBE ⭐⭐⭐ */}
      <section className="lineage-section kubiqsimmetry">
        <h2 className="section-title">KubiqSimmetry Cube</h2>
        <p className="section-description">
          The four‑node symmetry engine formed from TJ‑Lineage, A‑Dog constellation,
          and #1Daughter triad fusion constructs.
        </p>

        <ul className={styles.list}>
          <li><Link href="/lineage/kubiqsimmetry1">

      {/* ⭐⭐⭐ KW’ADRATIQSIMMETRY — APEX VECTOR ⭐⭐⭐ */}
      <section className="lineage-section kwadratiqsimmetry">
        <h2 className="section-title">Kw’adratiqSimmetry™</h2>
        <p className="section-description">
          The fifth‑order symmetry construct formed by elevating the KubiqSimmetry Cube
          through Kamille Williamson (TheSecondSecondTwo™), TJ₁’s second‑born daughter.
        </p>

        <ul className={styles.list}>
          <li><Link href="/lineage/kamille">Kamille Williamson — TheSecondSecondTwo™</Link></li>
        </ul>
      </section>
    </div>
  );
}
            
