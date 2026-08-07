import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/typography.css";
import "../styles/themes.css";

export const metadata: Metadata = {
  title: "Sarais Souldiers LLC™",
  description:
    "Mystic portal for restoration, resonance, and resurrection — powered by ChamberofCodexes™, TJ‑Lineage, and the Khaos2KlarityKw’adratiqKonquest™ engine."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="ssllc-body">
        <header className="ssllc-header">
          <h1 className="ssllc-title">
