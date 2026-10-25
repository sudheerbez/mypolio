import { Gauge, HeartHandshake, Rocket, ShieldCheck } from 'lucide-react';
import { Glow, Reveal, SectionHeading } from './primitives';

const strengths = [
  {
    Icon: Gauge,
    title: 'Performance',
    text: '35% faster APIs and 24% more scalable trading apps through caching, query tuning and microservices.',
    accent: 'text-teal',
  },
  {
    Icon: Rocket,
    title: 'Delivery',
    text: 'CI/CD and Terraform automation that cut merge-to-production time by over 50%.',
    accent: 'text-violet',
  },
  {
    Icon: ShieldCheck,
    title: 'Security',
    text: 'OAuth 2.0, RBAC and HIPAA-compliant data handling across fintech and healthcare systems.',
    accent: 'text-teal',
  },
  {
    Icon: HeartHandshake,
    title: 'Impact',
    text: 'Led a nonprofit platform to 20,000+ downloads and a 150% lift in user retention.',
    accent: 'text-violet',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Glow className="-left-40 top-1/3 h-96 w-96 bg-violet/15" />
      <div className="site-container relative grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                Engineering that stays <span className="text-gradient">calm under load</span>
              </>
            }
          />
          <Reveal delay={0.08} className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I&apos;m a software engineer with 5+ years of experience building microservices, event streams and cloud
              infrastructure with Java, Spring Boot, React and AWS.
            </p>
            <p>
              At Robinhood I work on the Strategies platform, which automates investing for retail customers. Before that I
              built HIPAA-compliant claims systems at Cognizant and led a nonprofit donation platform.
            </p>
            <p>
              I enjoy the hard parts — latency budgets, failure modes and getting the data model right — and I care about
              clean code, clear docs and mentoring.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map(({ Icon, title, text, accent }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-6 transition-colors hover:border-white/20">
                <span className={`grid h-11 w-11 place-items-center rounded-xl bg-white/5 ${accent}`}>
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
