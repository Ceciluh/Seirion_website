import { useNavigate } from "react-router-dom";
import styles from "../styles/NavButton.module.css"

export default function NavButton({ label, to }) {
  const navigate = useNavigate();

  return (
    <button className={styles.button} onClick={() => navigate(to)}>
      {label}
    </button>
  );
}
