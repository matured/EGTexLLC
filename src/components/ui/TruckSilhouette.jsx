import { useEffect, useRef } from 'react';
import { igniteHeadlights } from '../../animations/truckHeadlights';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './TruckSilhouette.module.css';

// Flat-vector flatbed semi-truck silhouette, built from basic shapes to
// match the site's existing icon/RouteLine aesthetic. `variant="hero"`
// renders the full-size cropped hero graphic with animated headlights
// (see truckHeadlights.js); `variant="accent"` renders a small static
// mark (no lights) reused in the CTA band and Services heading. `tone`
// picks a silhouette fill that reads against the host background: "dark"
// (default) for light sections, "light" for dark sections like the CTA
// band, where a near-black fill would otherwise vanish.
export function TruckSilhouette({ variant = 'accent', tone = 'dark', className = '' }) {
  const glowRef = useRef(null);
  const coreRef = useRef(null);
  const markerRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const isHero = variant === 'hero';

  useEffect(() => {
    if (!isHero) return undefined;
    return igniteHeadlights(
      { glow: glowRef.current, core: coreRef.current, marker: markerRef.current },
      reducedMotion,
    );
  }, [isHero, reducedMotion]);

  return (
    <div
      className={`${styles.wrapper} ${styles[variant]} ${tone === 'light' ? styles.light : ''} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 900 240" preserveAspectRatio="xMinYMax meet" className={styles.svg}>
        {isHero && (
          <defs>
            <filter id="truckHeadlightGlow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        )}

        {/* trailer deck + flatbed cargo bundle with tie-down straps */}
        <rect x="185" y="176" width="640" height="16" rx="2" className={styles.body} />
        <rect x="235" y="118" width="250" height="58" rx="3" className={styles.cargo} />
        <line x1="260" y1="118" x2="232" y2="176" className={styles.strap} />
        <line x1="330" y1="118" x2="302" y2="176" className={styles.strap} />
        <line x1="400" y1="118" x2="372" y2="176" className={styles.strap} />
        <line x1="460" y1="118" x2="432" y2="176" className={styles.strap} />

        {/* trailer tandem wheels */}
        <circle cx="640" cy="212" r="28" className={styles.body} />
        <circle cx="640" cy="212" r="10" className={styles.rim} />
        <circle cx="700" cy="212" r="28" className={styles.body} />
        <circle cx="700" cy="212" r="10" className={styles.rim} />

        {/* tractor hood + cab */}
        <polygon points="18,212 28,152 82,142 82,212" className={styles.body} />
        <rect x="82" y="92" width="92" height="120" rx="6" className={styles.body} />
        <polygon points="90,100 132,100 121,142 90,142" className={styles.glass} />
        <rect x="12" y="197" width="20" height="15" rx="3" className={styles.body} />

        {/* tractor wheels */}
        <circle cx="55" cy="212" r="30" className={styles.body} />
        <circle cx="55" cy="212" r="11" className={styles.rim} />
        <circle cx="150" cy="212" r="30" className={styles.body} />
        <circle cx="150" cy="212" r="11" className={styles.rim} />

        {isHero && (
          <g>
            <circle
              ref={glowRef}
              cx="22"
              cy="195"
              r="22"
              className={styles.glow}
              filter="url(#truckHeadlightGlow)"
              style={{ opacity: 0 }}
            />
            <circle ref={coreRef} cx="22" cy="195" r="8" className={styles.headlightCore} style={{ opacity: 0 }} />
            <circle ref={markerRef} cx="22" cy="178" r="4" className={styles.headlightMarker} style={{ opacity: 0 }} />
          </g>
        )}
      </svg>
    </div>
  );
}
