import styles from '../styles/FeatureCard.module.css';

export default function FeatureCard({ title, description, imageSrc }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {imageSrc ? (
          <img src={imageSrc} alt={title} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}></div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}