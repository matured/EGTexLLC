import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyInfo } from '../../data/companyInfo';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './MobileStickyCTA.module.css';

// Mobile-only persistent path to the primary conversion action (Fitts's
// Law / minimize target distance) — on desktop the navbar's own CTA and
// phone button already serve this purpose, so this stays hidden there.
// Appears once the hero's own CTA has scrolled out of view so the two
// never compete for attention at the same time.
export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.bar}
          initial={reducedMotion ? { opacity: 0 } : { y: '100%' }}
          animate={reducedMotion ? { opacity: 1 } : { y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { y: '100%' }}
          transition={{ duration: reducedMotion ? 0.15 : 0.3, ease: 'easeOut' }}
        >
          <a href={companyInfo.ceo.phoneHref} className={styles.callButton} aria-label={`Call ${companyInfo.ceo.phone}`}>
            <Phone size={20} aria-hidden="true" />
          </a>
          <Button href="#contact" variant="primary" className={styles.quoteButton}>
            Get a Quote
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
