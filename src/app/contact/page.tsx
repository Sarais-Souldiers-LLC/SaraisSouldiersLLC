import styles from "./contact.module.css";

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h2 className="mystic-heading">Contact Sarais Souldiers LLC™</h2>
      <p className="mystic-subtext">
        Reach the Sanctuary Stabilization Division for consultations, cosmology alignment, or program enrollment.
      </p>

      <form className={styles.form}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="phone" placeholder="Your Mobile #" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
