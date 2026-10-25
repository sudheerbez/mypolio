import { ArrowUpRight, BookOpen, GraduationCap } from 'lucide-react';
import { education, publication, skills } from '@/data';
import { Reveal, SectionHeading } from './primitives';

export function Skills() {
  return (
    <section id="skills" className="relative bg-navy-950/60 py-24 sm:py-32">
      <div className="site-container">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit"
          intro="Languages, frameworks and infrastructure I use to build, ship and run production systems."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 0.06}>
              <div className="glass h-full rounded-2xl p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                  <span className={`h-2 w-2 rounded-full ${i % 2 === 0 ? 'bg-teal' : 'bg-violet'}`} />
                  {s.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-ink transition-colors hover:border-teal/50 hover:text-teal"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="glass flex h-full items-start gap-5 rounded-2xl p-6 sm:p-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal">
                <GraduationCap size={24} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">Education</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{education.degree}</h3>
                <p className="mt-1 text-ink">{education.school}</p>
                <p className="mt-1 text-sm text-muted">{education.detail}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <a
              href={publication.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex h-full items-start gap-5 rounded-2xl p-6 transition-all hover:border-violet/40 hover:shadow-glow-violet sm:p-7"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet/10 text-violet">
                <BookOpen size={24} />
              </span>
              <div className="flex-1">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">Publication · {publication.venue}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white">{publication.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-violet">
                  Read on IEEE Xplore
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
