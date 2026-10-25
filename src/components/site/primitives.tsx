import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Accent } from '@/data';

export const accentText: Record<Accent, string> = {
  teal: 'text-teal',
  violet: 'text-violet',
};

export const accentDot: Record<Accent, string> = {
  teal: 'bg-teal shadow-glow-teal',
  violet: 'bg-violet shadow-glow-violet',
};

export const accentHover: Record<Accent, string> = {
  teal: 'hover:border-teal/40 hover:shadow-glow-teal',
  violet: 'hover:border-violet/40 hover:shadow-glow-violet',
};

// Fades content up as it scrolls into view. Skipped for reduced-motion users.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-teal">
        <span className="h-px w-6 bg-teal" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </Reveal>
  );
}

// Soft blurred color blobs placed behind a section.
export function Glow({ className }: { className: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-full blur-[120px] ${className}`} />;
}
