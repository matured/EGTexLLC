import { Clock, MapPin, ShieldCheck, Users } from 'lucide-react';
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
    title: 'Licensed & Insured',
    description: 'Fully compliant and covered, verified with DOT and MC numbers.',
  },
  {
    icon: Users,
    title: 'Family-Owned',
    description: 'A hands-on team that treats every customer like a neighbor.',
  },
  {
    icon: MapPin,
    title: 'Regional & Long-Haul',
    description: 'Coverage across Texas and the Gulf region, with national reach.',
  },
];

export function ValueProps() {
  const containerRef = useScrollReveal('.value-reveal');

  return (
    <div className="container">
      <div ref={containerRef} className={styles.grid}>
        {VALUES.map(({ icon: Icon, title, description }) => (
          <div key={title} className={`${styles.card} value-reveal`}>
            <Icon size={26} className={styles.icon} aria-hidden="true" />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
