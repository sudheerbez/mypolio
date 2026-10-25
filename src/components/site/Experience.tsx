import { CheckCircle2 } from 'lucide-react';
import { experience } from '@/data';
import { Reveal, SectionHeading, accentDot, accentText } from './primitives';

export function Experience() {
  return (
    <section id="experience" className="relative bg-navy-950/60 py-24 sm:py-32">
      <div className="site-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped"
          intro="Three teams and three domains, with the same habit of making critical systems faster and more reliable."
        />

        <ol className="relative mt-16 space-y-10 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-teal before:via-violet before:to-transparent sm:space-y-12 md:before:left-[calc(16rem+7px)]">
          {experience.map((job, i) => (
            <li key={job.company} className="relative grid gap-4 pl-10 md:grid-cols-[16rem_1fr] md:gap-0 md:pl-0">
              <span
                aria-hidden
                className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full ring-4 ring-navy-900 md:left-64 ${accentDot[job.accent]}`}
              />
              <Reveal className="md:pr-10 md:pt-0.5 md:text-right">
                <p className={`font-mono text-xs uppercase tracking-[0.15em] ${accentText[job.accent]}`}>{job.period}</p>
                <p className="mt-2 text-sm text-muted">{job.domain}</p>
              </Reveal>

              <Reveal delay={0.06 + i * 0.02} className="md:pl-10">
                <article className="glass rounded-2xl p-6 transition-colors hover:border-white/20 sm:p-8">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {job.company}
                    <span className="mt-1 block text-base font-normal text-muted sm:ml-2 sm:mt-0 sm:inline sm:align-middle">
                      <span className="hidden sm:inline">· </span>
                      {job.role}
                    </span>
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{job.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink sm:text-[15px]">
                        <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${accentText[job.accent]}`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <li key={s} className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-xs text-muted">
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
