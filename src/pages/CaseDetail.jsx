import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/CaseDetail.module.css";

export default function CaseDetail() {
  const { id } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCase() {
      try {
        // TODO: reemplazar por tu backend real
        // const res = await fetch(`/api/cases/${id}`);
        // const data = await res.json();
        // setCaseData(data);

        // Mock temporal:
        const mock = {
          id,
          title: `Caso ${id}: Título de ejemplo`,
          summary: "Resumen breve del caso.",
          body: "Aquí iría una descripción más larga del caso, obtenida de la base de datos.",
        };
        setCaseData(mock);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadCase();
  }, [id]);

  if (loading) {
    return <p>Cargando caso...</p>;
  }

  if (!caseData) {
    return <p>No se encontró el caso.</p>;
  }

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{caseData.title}</h1>
      <p className={styles.summary}>{caseData.summary}</p>
      <div className={styles.body}>
        {caseData.body}
      </div>
    </article>
  );
}
