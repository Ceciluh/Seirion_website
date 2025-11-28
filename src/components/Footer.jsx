import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={styles.separator}></div>
      <footer className={styles.footer}>
        <p>© Seirion 2025</p>
      </footer>
    </>
  );
}