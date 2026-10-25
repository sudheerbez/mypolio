import { projects } from '@/data';
import { Glow, Reveal, SectionHeading, accentHover, accentText } from './primitives';

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-24 sm:py-32">
      <Glow className="-right-40 top-20 h-[30rem] w-[30rem] bg-teal/10" />
      <div className="site-container relative">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Platforms <span className="text-gradient">built to scale</span>
            </>
          }
          intro="A few of the systems I've designed and shipped, and the results they delivered."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={(i % 2) * 0.08} className="h-full">
                <article
                  className={`glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${accentHover[p.accent]}`}
                >
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                      p.accent === 'teal' ? 'via-teal' : 'via-violet'
                    } to-transparent opacity-60 transition-opacity group-hover:opacity-100`}
                  />
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className={`font-mono text-xs uppercase tracking-[0.15em] ${accentText[p.accent]}`}>{p.kind}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-white">{p.title}</h3>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className={`font-display text-3xl font-semibold sm:text-4xl ${accentText[p.accent]}`}>{p.metric}</p>
                      <p className="mt-1 text-xs text-muted">{p.metricLabel}</p>
                    </div>
                  </div>
                  <p className="mt-5 flex-1 leading-relaxed text-muted">{p.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-xs text-ink">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
