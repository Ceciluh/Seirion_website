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
        <NavButton label="Nosotros"  to="/about" />
        <NavButton label="Casos"  to="/cases" />
        <NavButton label="Mapa"    to="/visualizations" />
      </nav>
    </header>
  );
}