import NavButton from "./NavButton";
import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}><h2>Seirion</h2></div>

      {/* Contenedor de botones */}
      <nav className={styles.nav}>
        <NavButton label="Inicio" to="/" />
        <NavButton label="About"  to="/about" />
        <NavButton label="Cases"  to="/cases" />
        <NavButton label="Map"    to="/visualizations" />
      </nav>
    </header>
  );
}