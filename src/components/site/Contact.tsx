import { ArrowUp, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profile } from '@/data';
import { Glow, Reveal } from './primitives';

export function Contact() {
  const links = [
    { label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin, external: true },
    { label: 'GitHub', href: profile.github, Icon: Github, external: true },
    { label: profile.phone, href: `tel:${profile.phone}`, Icon: Phone, external: false },
  ];

  return (
    <>
      <section id="contact" className="relative py-24 sm:py-32">
        <div className="site-container">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
              <Glow className="-left-20 -top-20 h-72 w-72 bg-teal/30" />
              <Glow className="-bottom-24 -right-16 h-80 w-80 bg-violet/35" />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Contact</p>
                <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  Let&apos;s build something <span className="text-gradient">great together</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-muted sm:text-lg">
                  I&apos;m open to new roles and collaborations. If you&apos;re building resilient platforms or need a
                  systems-minded engineer, I&apos;d love to hear from you.
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="mt-9 inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3.5 font-semibold text-navy-900 transition-shadow hover:shadow-glow-teal"
                >
                  <Mail size={18} />
                  {profile.email}
                </a>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {links.map(({ label, href, Icon, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-teal/40 hover:text-teal"
                    >
                      <Icon size={16} />
                      {label}
                    </a>
                  ))}
                  <a
                    href={profile.resume}
                    download="Sudheer_Bezawada_Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-violet/40 hover:text-violet"
                  >
                    <Download size={16} />
                    Résumé
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] py-8">
        <div className="site-container flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href="#top" className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-teal">
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}
