import { useEffect, useState } from "react";
import CaseCard from "../components/CaseCard";
import styles from "../styles/Cases.module.css";

export default function Cases() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: cambia esto a tu backend real
    // Por ejemplo: fetch("/api/cases")
    async function loadCases() {
      try {
        // Mock de ejemplo:
        const mock = [
          {
            id: 1,
            title: "Caso 1: Análisis de datos",
            summary: "Descripción corta del caso 1.",
          },
          {
            id: 2,
            title: "Caso 2: Control de robot",
            summary: "Descripción corta del caso 2.",
          },
          {
            id: 3,
            title: "Caso 3: Sistema distribuido",
            summary: "Descripción corta del caso 3.",
          },
        ];
        setCases(mock);

        // Si ya tuvieras backend:
        // const res = await fetch("/api/cases");
        // const data = await res.json();
        // setCases(data);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadCases();
  }, []);

  if (loading) {
    return <p>Cargando casos...</p>;
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Cases</h1>
      <p className={styles.subtitle}>
        Selecciona un caso para ver los detalles.
      </p>

      <div className={styles.grid}>
        {cases.map((c) => (
          <CaseCard
            key={c.id}
            id={c.id}
            title={c.title}
            summary={c.summary}
          />
        ))}
      </div>
    </section>
  );
}
