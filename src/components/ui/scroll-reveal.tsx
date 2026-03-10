import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variant } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Slide direction for the entrance. Default: 'up' */
  direction?: Direction;
  /** Distance in px the element travels. Default: 40 */
  distance?: number;
  /** Animation duration in seconds. Default: 0.6 */
  duration?: number;
  /** Delay before animation starts in seconds. Default: 0 */
  delay?: number;
  /** IntersectionObserver `amount` (0–1). Default: 0.15 */
  viewportAmount?: number;
  /** Animate only the first time the element enters the viewport. Default: true */
  once?: boolean;
  /** HTML element to render. Default: 'div' */
  as?: 'div' | 'section' | 'span' | 'li' | 'article' | 'header' | 'footer';
}

const directionOffset = (direction: Direction, distance: number): { x: number; y: number } => {
  switch (direction) {
    case 'up':
      return { x: 0, y: distance };
    case 'down':
      return { x: 0, y: -distance };
    case 'left':
      return { x: distance, y: 0 };
    case 'right':
      return { x: -distance, y: 0 };
  }
};

export function ScrollReveal({
  children,
  className,
  direction = 'up',
  distance = 40,
  duration = 0.6,
  delay = 0,
  viewportAmount = 0.15,
  once = true,
  as = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: viewportAmount });

  const offset = directionOffset(direction, distance);

  const hidden: Variant = {
    opacity: 0,
    x: offset.x,
    y: offset.y,
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  };

  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ hidden, visible }}
    >
      {children}
    </MotionComponent>
  );
}

/* ── Stagger Container ── */

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child. Default: 0.1 */
  staggerDelay?: number;
  /** IntersectionObserver `amount`. Default: 0.1 */
  viewportAmount?: number;
  /** Animate only the first time. Default: true */
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  viewportAmount = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: viewportAmount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger Item (child of StaggerContainer) ── */

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
  as?: 'div' | 'li' | 'article' | 'span';
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
  distance = 30,
  duration = 0.5,
  as = 'div',
}: StaggerItemProps) {
  const offset = directionOffset(direction, distance);

  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      className={className}
      variants={{
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </MotionComponent>
  );
}
