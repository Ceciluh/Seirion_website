import { useNavigate } from "react-router-dom";
import styles from "../styles/HButton.module.css";

export default function HButton({ label, to }) {
  const navigate = useNavigate();

  return (
    <button className={styles.button} onClick={() => navigate(to)}>
      {label}
    </button>
  );
}