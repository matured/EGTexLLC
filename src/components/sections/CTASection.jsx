import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { RouteLine } from '../ui/RouteLine';
import { companyInfo } from '../../data/companyInfo';
import styles from './CTASection.module.css';

export function CTASection() {
  return (
    <section className={styles.cta}>
      <RouteLine mode="loop" className={styles.routeLine} />
      <div className={`container ${styles.content}`}>
        <h2 className={styles.heading}>Ready to Move Your Freight?</h2>
        <p className={styles.sub}>
          Call our CEO directly or message our Operations Manager on WhatsApp —
          we'll get your shipment scheduled fast.
        </p>
        <div className={styles.buttonRow}>
          <Button href={companyInfo.ceo.phoneHref} variant="primary">
            <Phone size={18} aria-hidden="true" />
            Call {companyInfo.ceo.phone}
          </Button>
          <Button
            href={companyInfo.operationsManager.whatsappHref}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
