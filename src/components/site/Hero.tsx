import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { heroStats, marqueeItems, profile } from '@/data';
import { Glow } from './primitives';

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <Glow className="-left-32 top-0 h-[28rem] w-[28rem] bg-teal/25" />
      <Glow className="-right-24 top-40 h-[32rem] w-[32rem] bg-violet/30" />

      <div className="site-container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <motion.p
              {...fade(0)}
              className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-ink"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              Open to new opportunities
            </motion.p>

            <motion.h1
              {...fade(0.08)}
              className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-white"
            >
              Hi, I&apos;m Sudheer.
              <br />
              <span className="text-gradient">I build systems that scale.</span>
            </motion.h1>

            <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Software engineer at <span className="text-ink">Robinhood</span> with 5+ years building backend platforms
              for trading, healthcare and community apps — fast, reliable and secure under real-world load.
            </motion.p>

            <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-3 font-semibold text-navy-900 transition-shadow hover:shadow-glow-teal"
              >
                View my work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={profile.resume}
                download="Sudheer_Bezawada_Resume.pdf"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition-colors hover:border-violet/50"
              >
                <Download size={18} />
                Résumé
              </a>
              <div className="ml-1 flex items-center gap-1">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-xl text-muted transition-colors hover:bg-white/5 hover:text-teal"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-11 w-11 place-items-center rounded-xl text-muted transition-colors hover:bg-white/5 hover:text-teal"
                >
                  <Github size={20} />
                </a>
              </div>
            </motion.div>

            <motion.p {...fade(0.3)} className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={15} /> {profile.location}
            </motion.p>
          </div>

          <motion.div {...fade(0.2)} className="relative">
            <div className="animate-float">
              <CodeCard />
            </div>
          </motion.div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <motion.div key={s.label} {...fade(0.35 + i * 0.06)} className="glass rounded-2xl p-5 sm:p-6">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className={`mt-2 font-display text-3xl font-semibold sm:text-4xl ${i % 2 === 0 ? 'text-teal' : 'text-violet'}`}>
                {s.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-white/[0.07] py-5" aria-hidden>
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center whitespace-nowrap px-6 font-mono text-sm uppercase tracking-[0.15em] text-muted">
              {item}
              <span className={`ml-12 h-1.5 w-1.5 rounded-full ${i % 2 === 0 ? 'bg-teal' : 'bg-violet'}`} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// A small "code editor" card that shows the profile as a config object.
function CodeCard() {
  const k = 'text-violet';
  const v = 'text-teal';
  return (
    <div className="glass relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-xs text-muted">sudheer.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-ink sm:text-sm">
        <code>
          <span className="text-muted">const</span> engineer = {'{'}
          {'\n'}  <span className={k}>name</span>: <span className={v}>&apos;Sudheer Bezawada&apos;</span>,
          {'\n'}  <span className={k}>role</span>: <span className={v}>&apos;Software Engineer&apos;</span>,
          {'\n'}  <span className={k}>company</span>: <span className={v}>&apos;Robinhood&apos;</span>,
          {'\n'}  <span className={k}>focus</span>: [<span className={v}>&apos;backend&apos;</span>, <span className={v}>&apos;distributed&apos;</span>, <span className={v}>&apos;cloud&apos;</span>],
          {'\n'}  <span className={k}>stack</span>: [<span className={v}>&apos;Java&apos;</span>, <span className={v}>&apos;Spring&apos;</span>, <span className={v}>&apos;Kafka&apos;</span>, <span className={v}>&apos;AWS&apos;</span>],
          {'\n'}  <span className={k}>uptime</span>: <span className="text-white">99.99</span>,
          {'\n'}  <span className={k}>openToWork</span>: <span className="text-white">true</span>,
          {'\n'}{'}'};
        </code>
      </pre>
      <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-violet/30 blur-3xl" />
    </div>
  );
}
