import { services } from '../../data/services';
import { ServiceCard } from '../ui/ServiceCard';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../animations/useScrollReveal';
import styles from './Services.module.css';

export function Services() {
  const containerRef = useScrollReveal('.service-reveal');

  return (
    <section id="services" className={`section section--alt ${styles.services}`} aria-label="Our Services">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title="Freight Capabilities for Every Load"
          description="As a flatbed specialist, we arrange the equipment and permits your load actually needs — from standard open-deck freight to oversized, permitted hauls."
          align="center"
        />
        <div ref={containerRef} className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
