import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from '@phosphor-icons/react';
import logo from '../../assets/logo/egtex-logo-placeholder.svg';
import { companyInfo } from '../../data/companyInfo';
import { useActiveSection } from '../../hooks/useActiveSection';
import { MobileMenu } from './MobileMenu';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand} aria-label={`${companyInfo.name} home`}>
          <img
            src={logo}
            alt={`${companyInfo.name} logo`}
            className={styles.logo}
            width={166}
            height={42}
          />
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? styles.active : ''}
                  aria-current={activeId === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={companyInfo.ceo.phoneHref}
          className={styles.callButton}
        >
          <Phone size={18} weight="light" aria-hidden="true" />
          <span>{companyInfo.ceo.phone}</span>
        </a>

        <button
          type="button"
          className={styles.hamburger}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
        activeId={activeId}
      />
    </motion.header>
  );
}
