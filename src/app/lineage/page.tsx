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
        <li><Link href="/lineage/a-dog1">A-Dog₁ - TJ₂'s Shadow Twin</Link></li>
        <li><Link href="/lineage/a-dog2">A-Dog₂ - TJ₁'s Shadow Twin</Link>Link></li>
        <li><Link href="/lineage/a-dog2/maple-kush">Maple Kush - A-Dog₂'s Resident Ranger</Link></li>
        
