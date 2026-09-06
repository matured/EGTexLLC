import { motion } from 'framer-motion';
import styles from './Button.module.css';

export function Button({
  as: Component = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const MotionComponent = motion.create ? motion.create(Component) : motion(Component);
  return (
    <MotionComponent
      className={`${styles.button} ${styles[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
