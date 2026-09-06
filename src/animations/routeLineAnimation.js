import { gsap } from './gsapConfig';

// "Self-drawing" route line: animates stroke-dashoffset from fully hidden
// to fully drawn. `mode: 'scrub'` ties progress to scroll position;
// `mode: 'loop'` plays a slow ambient loop (used in the CTA band).
export function animateRouteLine(pathEl, { mode = 'scrub', trigger, reducedMotion } = {}) {
  if (!pathEl) return () => {};

  const length = pathEl.getTotalLength();
  gsap.set(pathEl, { strokeDasharray: length, strokeDashoffset: length });

  if (reducedMotion) {
    gsap.set(pathEl, { strokeDashoffset: 0, opacity: 0.5 });
    return () => {};
  }

  if (mode === 'loop') {
    const tween = gsap.to(pathEl, {
      strokeDashoffset: 0,
      duration: 6,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
    return () => tween.kill();
  }

  const ctx = gsap.context(() => {
    gsap.to(pathEl, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger || pathEl,
        start: 'top 90%',
        end: 'bottom 40%',
        scrub: true,
      },
    });
  });

  return () => ctx.revert();
}
