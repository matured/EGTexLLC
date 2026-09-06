import { AboutStory } from './AboutStory';
import { AboutValues } from './AboutValues';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`} aria-label="About EGTex LLC">
      <div className="container">
        <AboutStory />
        <AboutValues />
      </div>
    </section>
  );
}
