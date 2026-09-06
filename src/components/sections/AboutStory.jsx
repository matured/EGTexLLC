import { SectionHeading } from '../ui/SectionHeading';
import styles from './AboutStory.module.css';

export function AboutStory() {
  return (
    <div className={styles.story}>
      <SectionHeading
        eyebrow="Our Story"
        title="A Family Business Built on the Road"
        description={null}
      />
      <p className={styles.paragraph}>
        EGTex LLC started as a family effort to bring honest, dependable
        trucking to Texas shippers — and that hasn't changed. Every load we
        haul carries our name, so we treat it with the same care we'd want
        for our own business. {/* Placeholder narrative — replace with the
        real founding story and year. */}
      </p>
      <p className={styles.paragraph}>
        Today, we're proud to serve customers across the region and beyond,
        combining a small company's personal attention with the reliability
        of a fully licensed, professionally run fleet.
      </p>
    </div>
  );
}
