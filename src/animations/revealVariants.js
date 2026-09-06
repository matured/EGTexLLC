// Framer Motion variants shared across components for scroll/entry reveals.
// Reduced-motion-safe variants swap translation for a plain opacity fade.

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const fadeUpReduced = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

export function getFadeUpVariant(reducedMotion) {
  return reducedMotion ? fadeUpReduced : fadeUp;
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.02, transition: { duration: 0.25, ease: 'easeOut' } },
};
