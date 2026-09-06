import styles from './SectionHeading.module.css';

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`${styles.heading} ${align === 'center' ? styles.center : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
