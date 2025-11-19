import { useState } from "react";
import styles from "../styles/Visualizations.module.css";

export default function Visualizations() {
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showPoints, setShowPoints] = useState(true);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Visualizaciones</h1>
        <p>Activa o desactiva las capas que quieras ver.</p>
      </header>

      {/* Controles */}
      <div className={styles.controls}>
        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={showHeatmap}
            onChange={() => setShowHeatmap((v) => !v)}
          />
          <span>Mostrar mapa de calor</span>
        </label>

        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={showPoints}
            onChange={() => setShowPoints((v) => !v)}
          />
          <span>Mostrar puntos</span>
        </label>
      </div>

      {/* Contenedor principal de visualización */}
      <div className={styles.viewport}>
        {showHeatmap && (
          <div className={`${styles.layer} ${styles.heatmap}`}>
            <span>Mapa de calor (placeholder)</span>
          </div>
        )}

        {showPoints && (
          <div className={`${styles.layer} ${styles.points}`}>
            <span>Capa de puntos (placeholder)</span>
          </div>
        )}

        {!showHeatmap && !showPoints && (
          <div className={styles.empty}>
            No hay capas activas. Activa al menos una arriba.
          </div>
        )}
      </div>
    </section>
  );
}
