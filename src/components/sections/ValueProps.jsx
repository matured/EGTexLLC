import { Clock, MapPin, ShieldCheck, Users } from '@phosphor-icons/react';
import { useScrollReveal } from '../../animations/useScrollReveal';
import styles from './ValueProps.module.css';

const VALUES = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Dependable schedules your business can plan around.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Bonded',
    description: 'Verified DOT and MC numbers — look us up.',
  },
  {
    icon: Users,
    title: 'Family-Owned',
    description: 'Call anytime, day or night — we answer in English or Spanish.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description: 'We run loads to all 49 states, big or small.',
  },
];

export function ValueProps() {
  const containerRef = useScrollReveal('.value-reveal');

  return (
    <div className="container">
      <div ref={containerRef} className={styles.grid}>
        {VALUES.map(({ icon: Icon, title, description }) => (
          <div key={title} className={`${styles.card} value-reveal`}>
            <Icon size={26} weight="light" className={styles.icon} aria-hidden="true" />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
