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
        EGTex Broker LLC started as a family effort to bring honest,
        dependable freight solutions to Texas shippers — and that hasn&rsquo;t
        changed. Every load we arrange carries our name, so we treat it
        with the same care we&rsquo;d want for our own business. {/* Placeholder
        narrative — replace with the real founding story and year. */}
      </p>
      <p className={styles.paragraph}>
        Today, we&rsquo;re proud to serve customers across the region and beyond,
        combining a small company&rsquo;s personal attention with the reliability
        of a fully licensed, professionally managed carrier network.
      </p>
    </div>
  );
}
