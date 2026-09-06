import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from '../../animations/gsapConfig';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './StatCounter.module.css';

export function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [display, setDisplay] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    const counter = { val: 0 };
    gsap.to(counter, {
      val: value,
      duration: 1.6,
      ease: 'power2.out',
      onUpdate: () => setDisplay(Math.round(counter.val)),
    });
  }, [isInView, value, reducedMotion]);

  return (
    <motion.div ref={ref} className={styles.stat}>
      <span className={styles.value}>
        {display}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
}
