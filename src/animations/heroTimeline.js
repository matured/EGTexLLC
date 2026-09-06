import { gsap } from './gsapConfig';

// Entrance timeline for the hero: staggered fade-up of eyebrow, headline,
// subheadline, and CTAs. Called once from Hero.jsx with refs to each element.
export function playHeroEntrance({ eyebrowRef, headingRef, subRef, ctaRef }, reducedMotion) {
  const elements = [eyebrowRef, headingRef, subRef, ctaRef]
    .map((ref) => ref?.current)
    .filter(Boolean);

  if (!elements.length) return;

  if (reducedMotion) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }

  gsap.set(elements, { opacity: 0, y: 24 });
  gsap.to(elements, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.15,
  });
}

// Scroll-scrubbed parallax on hero background layers. `layers` is an array
// of { el, speed } where speed is the relative parallax multiplier
// (e.g. 0.3 = slow background, 0.6 = faster foreground).
export function initHeroParallax(sectionEl, layers, reducedMotion) {
  if (reducedMotion || !sectionEl || !layers?.length) return () => {};

  const ctx = gsap.context(() => {
    layers.forEach(({ el, speed }) => {
      if (!el) return;
      gsap.to(el, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, sectionEl);

  return () => ctx.revert();
}
