import { Handshake, HandHeart, ShieldCheck, Sparkle } from '@phosphor-icons/react';
import { StatCounter } from '../ui/StatCounter';
import { useScrollReveal } from '../../animations/useScrollReveal';
import { stats } from '../../data/stats';
import styles from './AboutValues.module.css';

const VALUES = [
  { icon: ShieldCheck, title: 'Safety', description: 'Every carrier vetted, every load protected.' },
  { icon: Handshake, title: 'Reliability', description: "We show up and deliver when we say we will." },
  { icon: Sparkle, title: 'Integrity', description: "Straight pricing, no surprises." },
  { icon: HandHeart, title: 'Customer-First', description: 'We treat small shippers like big accounts.' },
];

export function AboutValues() {
  const containerRef = useScrollReveal('.value-card-reveal');

  return (
    <div>
      <div ref={containerRef} className={styles.valuesGrid}>
        {VALUES.map(({ icon: Icon, title, description }) => (
          <div key={title} className={`${styles.valueCard} value-card-reveal`}>
            <Icon size={24} weight="light" className={styles.icon} aria-hidden="true" />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>

      <div className={styles.statsBand}>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <StatCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
