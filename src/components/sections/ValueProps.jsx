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
    description: 'Fully compliant broker authority, verified with DOT and MC numbers.',
  },
  {
    icon: Users,
    title: 'Family-Owned',
    description: 'Personalized dispatch support, 24/7, in English and Spanish.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description: 'Delivering freight to all 49 states, with the capacity to handle high volumes.',
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
