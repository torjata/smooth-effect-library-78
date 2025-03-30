
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Custom hook to detect if an element is in view
 */
export function useAnimateInView(options = { once: true, amount: 0.3 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return {
    ref,
    isInView,
    inViewProps: {
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.5 }
    }
  };
}

/**
 * Animation variants for common animations
 */
export const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  slideIn: {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }
};

/**
 * Transition presets for common animations
 */
export const transitions = {
  easeInOut: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  spring: { type: "spring", stiffness: 300, damping: 30 },
  bounce: { type: "spring", stiffness: 300, damping: 10 },
  gentle: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] }
};
