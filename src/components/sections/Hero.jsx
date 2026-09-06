import { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { RouteLine } from '../ui/RouteLine';
import { initHeroParallax, playHeroEntrance } from '../../animations/heroTimeline';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './Hero.module.css';

export function Hero() {
  const sectionRef = useRef(null);
  const layerBackRef = useRef(null);
  const layerFrontRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    playHeroEntrance({ eyebrowRef, headingRef, subRef, ctaRef }, reducedMotion);

    const cleanup = initHeroParallax(
      sectionRef.current,
      [
        { el: layerBackRef.current, speed: 0.25 },
        { el: layerFrontRef.current, speed: 0.5 },
      ],
      reducedMotion,
    );

    return cleanup;
  }, [reducedMotion]);

  return (
    <section id="home" ref={sectionRef} className={styles.hero}>
      <div ref={layerBackRef} className={styles.layerBack} aria-hidden="true" />
      <div ref={layerFrontRef} className={styles.layerFront} aria-hidden="true">
        <RouteLine mode="scrub" />
      </div>

      <div className={`container ${styles.content}`}>
        <span ref={eyebrowRef} className="eyebrow">
          Family-Owned &bull; DOT &amp; MC Licensed
        </span>
        <h1 ref={headingRef} className={styles.heading}>
          Reliable Freight, Delivered With Family Values
        </h1>
        <p ref={subRef} className={styles.sub}>
          EGTex LLC moves freight across Texas and beyond with dependable
          drivers, modern equipment, and the kind of service you'd expect
          from a company that treats every load like it's their own.
        </p>
        <div ref={ctaRef} className={styles.ctaRow}>
          <Button href="#contact" variant="primary">
            Get a Quote
          </Button>
          <Button href="#services" variant="secondary">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
