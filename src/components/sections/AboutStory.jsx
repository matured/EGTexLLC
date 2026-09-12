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
        EGTex Broker LLC started in 2014 as a family effort to bring
        honest, dependable freight solutions to Texas shippers. That
        hasn&rsquo;t changed. Every load we arrange carries our name, so
        we treat it like it&rsquo;s our own.
      </p>
      <p className={styles.paragraph}>
        These days, we serve all 49 states. We&rsquo;re still small
        enough to answer the phone ourselves, but our carrier network is
        fully licensed and professionally managed. You&rsquo;ll get
        real-time tracking on every load, too.
      </p>
    </div>
  );
}
