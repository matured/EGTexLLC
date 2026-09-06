import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from './gsapConfig';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// Applies a batched fade/scale-in ScrollTrigger reveal to the direct
// children of the returned ref's container. Used for card grids
// (value props, services) so entrance work is shared, not re-implemented
// per section.
export function useScrollReveal(selector) {
  const containerRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const targets = container.querySelectorAll(selector);
    if (!targets.length) return undefined;

    if (reducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0, scale: 1 });
      return undefined;
    }

    gsap.set(targets, { opacity: 0, y: 32, scale: 0.96 });

    const triggers = ScrollTrigger.batch(targets, {
      start: 'top 85%',
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.12,
        }),
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [selector, reducedMotion]);

  return containerRef;
}
