import { MapPin, ChatCircle, EnvelopeSimple, Phone, ShieldCheck } from '@phosphor-icons/react';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { companyInfo, fullAddress } from '../../data/companyInfo';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className="section" aria-label="Contact Us">
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let’s Get Your Freight Moving"
          description="Call, email, WhatsApp, or use the form below. We respond in English and Español, 24/7."
        />

        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <ul className={styles.infoList}>
              <li>
                <MapPin size={20} weight="light" aria-hidden="true" />
                <div>
                  <strong>Address</strong>
                  <span>{fullAddress}</span>
                </div>
              </li>
              <li>
                <Phone size={20} weight="light" aria-hidden="true" />
                <div>
                  <strong>{companyInfo.ceo.title} — Call</strong>
                  <a href={companyInfo.ceo.phoneHref}>{companyInfo.ceo.phone}</a>
                </div>
              </li>
              <li>
                <ChatCircle size={20} weight="light" aria-hidden="true" />
                <div>
                  <strong>{companyInfo.operationsManager.title} — WhatsApp</strong>
                  <a href={companyInfo.operationsManager.whatsappHref} target="_blank" rel="noreferrer">
                    {companyInfo.operationsManager.whatsapp}
                  </a>
                </div>
              </li>
              <li>
                <EnvelopeSimple size={20} weight="light" aria-hidden="true" />
                <div>
                  <strong>{companyInfo.owner.name} ({companyInfo.owner.title}) — Email</strong>
                  <a href={companyInfo.owner.emailHref}>{companyInfo.owner.email}</a>
                </div>
              </li>
            </ul>

            <div className={styles.credentials}>
              <ShieldCheck size={20} weight="light" aria-hidden="true" />
              <span>
                DOT: {companyInfo.credentials.dot} &middot; MC: {companyInfo.credentials.mc}
              </span>
            </div>
          </div>

          <div className={styles.formCard}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
