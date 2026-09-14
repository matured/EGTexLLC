import { gsap } from './gsapConfig';

// One-time "headlights turning on" reveal for the hero truck illustration.
// Fires after the hero text entrance stagger settles (~1s) so it reads as
// a deliberate capping moment rather than competing with the heading
// fade-in. A brief flicker before holding steady sells the "ignition"
// feel without looping indefinitely.
export function igniteHeadlights({ glow, core, marker }, reducedMotion) {
  const elements = [glow, core, marker].filter(Boolean);
  if (!elements.length) return () => {};

  if (reducedMotion) {
    gsap.set(elements, { opacity: 1 });
    return () => {};
  }

  const tl = gsap.timeline({ delay: 1.05 });
  tl.set(elements, { opacity: 0 })
    .to(core, { opacity: 1, duration: 0.12, ease: 'power1.in' })
    .to(marker, { opacity: 1, duration: 0.1 }, '<')
    .to(core, { opacity: 0.15, duration: 0.08 })
    .to([core, marker], { opacity: 1, duration: 0.35, ease: 'power2.out' })
    .to(glow, { opacity: 1, duration: 0.5, ease: 'power2.out' }, '<');

  return () => tl.kill();
}
