import styles from "../styles/StarSeparator.module.css";


export default function StarSeparator() {
  return (
    <div className={styles.separator}>
      <span className={styles.star}>✧</span>
    </div>
  );
}