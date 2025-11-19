import { useNavigate } from "react-router-dom";
import styles from "../styles/CaseCard.module.css";

export default function CaseCard({ id, title, summary }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cases/${id}`);
  };

  return (
    <article className={styles.card} onClick={handleClick}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.summary}>{summary}</p>
      <span className={styles.linkHint}>Ver más →</span>
    </article>
  );
}
