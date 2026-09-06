import { useEffect, useRef } from 'react';
import { animateRouteLine } from '../../animations/routeLineAnimation';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './RouteLine.module.css';

// Renders the animated "route line" motif. `mode="scrub"` draws the line as
// the section scrolls into view; `mode="loop"` plays a slow ambient loop
// (used in the CTA band).
export function RouteLine({ mode = 'scrub', className = '' }) {
  const pathRef = useRef(null);
  const wrapperRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const cleanup = animateRouteLine(pathRef.current, {
      mode,
      trigger: wrapperRef.current,
      reducedMotion,
    });
    return cleanup;
  }, [mode, reducedMotion]);

  return (
    <div ref={wrapperRef} className={`${styles.wrapper} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className={styles.svg}>
        <path
          ref={pathRef}
          d="M -20 150 C 150 150, 200 40, 380 40 S 560 170, 740 170 S 900 30, 1080 30 S 1200 90, 1220 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
