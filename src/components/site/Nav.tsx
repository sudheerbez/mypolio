import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '@/data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-site items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4 ${
          scrolled ? 'glass bg-navy-950/60 shadow-2xl shadow-black/30' : 'border border-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-3 rounded-xl" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal to-violet font-display text-sm font-bold text-navy-900">
            SB
          </span>
          <span className="hidden font-display text-sm font-semibold text-white sm:inline">Sudheer Bezawada</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-navy-900 transition-shadow hover:shadow-glow-teal sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="glass mx-auto mt-2 max-w-site rounded-2xl bg-navy-950/90 p-2 shadow-2xl md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium text-ink hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="p-2">
              <a
                href={`mailto:${profile.email}`}
                className="block rounded-xl bg-teal px-4 py-3 text-center font-semibold text-navy-900"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
