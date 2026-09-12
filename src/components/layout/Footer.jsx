import { MapPin, ChatCircle, Phone } from '@phosphor-icons/react';
import logo from '../../assets/logo/egtex-logo-placeholder.svg';
import { companyInfo, fullAddress } from '../../data/companyInfo';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <img
            src={logo}
            alt={`${companyInfo.name} logo`}
            className={styles.logo}
            width={174}
            height={44}
          />
          <p className={styles.tagline}>{companyInfo.tagline}</p>
        </div>

        <div className={styles.col}>
          <h3>Contact</h3>
          <ul>
            <li>
              <MapPin size={16} weight="light" aria-hidden="true" />
              <span>{fullAddress}</span>
            </li>
            <li>
              <Phone size={16} weight="light" aria-hidden="true" />
              <a href={companyInfo.ceo.phoneHref}>{companyInfo.ceo.phone} ({companyInfo.ceo.title})</a>
            </li>
            <li>
              <ChatCircle size={16} weight="light" aria-hidden="true" />
              <a href={companyInfo.operationsManager.whatsappHref} target="_blank" rel="noreferrer">
                {companyInfo.operationsManager.whatsapp} ({companyInfo.operationsManager.title}, WhatsApp)
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Licensed &amp; Bonded</h3>
          <ul>
            <li>DOT: {companyInfo.credentials.dot}</li>
            <li>MC: {companyInfo.credentials.mc}</li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          &copy; {year} {companyInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
