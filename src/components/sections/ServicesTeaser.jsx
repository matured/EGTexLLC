import { services } from '../../data/services';
import { Button } from '../ui/Button';
import { ServiceCard } from '../ui/ServiceCard';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../animations/useScrollReveal';
import styles from './ServicesTeaser.module.css';

export function ServicesTeaser() {
  const containerRef = useScrollReveal('.service-reveal');
  const preview = services.slice(0, 3);

  return (
    <div className="container">
      <SectionHeading
        eyebrow="What We Do"
        title="Freight Solutions Built Around You"
        description="From standard flatbed loads to oversized, permitted freight, our carrier network has the equipment and experience to move it."
      />
      <div ref={containerRef} className={styles.grid}>
        {preview.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className={styles.linkRow}>
        <Button as="a" href="#services" variant="outline">
          View All Services
        </Button>
      </div>
    </div>
  );
}
