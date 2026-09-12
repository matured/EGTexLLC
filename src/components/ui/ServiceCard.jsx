import { motion } from 'framer-motion';
import { Stack, Clock, MapPin, Package, ShieldCheck, Truck } from '@phosphor-icons/react';
import { cardHover } from '../../animations/revealVariants';
import styles from './ServiceCard.module.css';

const ICONS = { Truck, Stack, Clock, MapPin, Package, ShieldCheck };

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
        <Icon size={28} weight="light" aria-hidden="true" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
}
