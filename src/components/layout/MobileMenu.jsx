import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone } from '@phosphor-icons/react';
import { companyInfo } from '../../data/companyInfo';
import styles from './MobileMenu.module.css';

export function MobileMenu({ open, onClose, links, activeId }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    const focusable = panelRef.current?.querySelector('a, button');
    focusable?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          className={styles.panel}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? styles.active : ''}
                  onClick={onClose}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={companyInfo.ceo.phoneHref} className={styles.callLink} onClick={onClose}>
            <Phone size={18} weight="light" aria-hidden="true" />
            <span>{companyInfo.ceo.phone}</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
