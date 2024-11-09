import { type MotionProps } from 'framer-motion';

export const animations: Record<string, MotionProps> = {
  fadeInOut: {
    animate: { opacity: [0, 1] },
    exit: { opacity: [0] }
  },
  hoverY: {
    animate: ['hover'],
    variants: {
      hover: {
        y: [-20, 20],
        transition: {
          delay: 0.2,
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse'
        }
      }
    }
  },
  popInFade: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  },
  popFadeInOut: {
    animate: { opacity: [0, 1], scale: [0.7, 1] },
    exit: { opacity: [0], scale: [0] }
  },
  slideUpAndDown: {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    transition: { duration: 0.2 },
    exit: { height: 0, opacity: 0 }
  },
  rotateRightToLeft: {
    initial: { rotateY: -90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    transition: { duration: 0.5 },
    exit: { rotateY: 90, opacity: 0, scale: 0 }
  },
  rotateLeftToRight: {
    initial: { rotateY: 90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    transition: { duration: 0.5 },
    exit: { rotateY: -90, opacity: 0 }
  },
  slideFromRightToLeft: {
    initial: 'hidden',
    animate: 'visible',
    transition: { type: 'spring', stiffness: 100, damping: 10 },
    variants: {
      hidden: { x: '100%' },
      visible: { x: 0 }
    }
  }
};
