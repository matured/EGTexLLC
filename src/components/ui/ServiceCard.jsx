import { motion } from 'framer-motion';
import { Boxes, Clock, MapPin, PackageCheck, ShieldCheck, Truck } from 'lucide-react';
import { cardHover } from '../../animations/revealVariants';
import styles from './ServiceCard.module.css';

const ICONS = { Truck, Boxes, Clock, MapPin, PackageCheck, ShieldCheck };

export function ServiceCard({ icon, title, description, className = '' }) {
  const Icon = ICONS[icon] || Truck;

  return (
    <motion.div
      className={`${styles.card} service-reveal ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHover}
    >
      <div className={styles.iconWrap}>
        <Icon size={28} strokeWidth={2} aria-hidden="true" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
}
