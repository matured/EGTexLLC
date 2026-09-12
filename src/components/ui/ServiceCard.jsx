import { motion } from 'framer-motion';
import { ArrowsOutSimple, Buildings, Stack, Stairs, Truck, Umbrella } from '@phosphor-icons/react';
import { cardHover } from '../../animations/revealVariants';
import styles from './ServiceCard.module.css';

const ICONS = { Stack, Stairs, ArrowsOutSimple, Umbrella, Buildings, Truck };

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
