import { useCallback, useState } from 'react';

import { AnimatedDownload } from './ui/animated-download';
import { Button } from './ui/button';
import { ReadingTextReveal } from './ui/reading-text-reveal';

const aboutSegments = [
  'I am a results-driven Software Engineer with 5+ years of expertise in building scalable, high-performance systems. My passion lies in designing microservices architectures, cloud infrastructure, and full-stack solutions that solve real-world problems across fintech, healthcare, and community impact domains.',
  'My technical journey spans Java/Spring Boot backends, React frontends, AWS cloud infrastructure, and DevOps automation. I have successfully increased application scalability by 24%, improved API performance by 35%, and reduced deployment times by over 50% through thoughtful engineering and continuous optimization.',
  'Beyond code, I am driven by the impact that technology can create. I led the development of a donation platform that achieved 20,000+ downloads and 150% user retention increase, demonstrating how engineering excellence can amplify meaningful social change.',
  'Today, at Robinhood, I steward payment and trading platforms that power investment decisions for millions. I thrive in collaborative environments where systems thinking, clean code, and mentorship create the foundation for reliable, scalable solutions that users can trust.'
];

export function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleStartDownload = useCallback(() => {
    setIsDownloading(true);
  }, []);

  const handleAnimationComplete = useCallback(async () => {
    setIsDownloading(false);

    const tryDownload = async (target: string) => {
      try {
        const res = await fetch(target);
        if (!res.ok) return false;
        const blob = await res.blob();
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = 'Sudheer_Bezawada_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objectUrl);
        return true;
      } catch {
        return false;
      }
    };

    const buildResumeUrls = () => {
      const rawBase = (import.meta.env?.BASE_URL ?? '/') as string;
      const withLeadingSlash = rawBase.startsWith('/') ? rawBase : `/${rawBase}`;
      const normalizedBase = withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
      const relativeUrl = `${normalizedBase}Resume.pdf`;

      if (typeof window === 'undefined') {
        return { absoluteUrl: null, relativeUrl, fallbackRelative: 'Resume.pdf' };
      }

      const origin = window.location.origin;
      const absoluteUrl = origin && origin !== 'null' ? `${origin}${relativeUrl}` : null;
      const fallbackRelative = relativeUrl.startsWith('/') ? relativeUrl.slice(1) : relativeUrl;

      return { absoluteUrl, relativeUrl, fallbackRelative };
    };

    const { absoluteUrl, relativeUrl, fallbackRelative } = buildResumeUrls();

    const candidates = Array.from(
      new Set(
        [
          absoluteUrl,
          relativeUrl,
          fallbackRelative,
          '/Resume.pdf',
          'Resume.pdf',
        ].filter(Boolean),
      ),
    ) as string[];

    for (const url of candidates) {
      // eslint-disable-next-line no-await-in-loop
      const ok = await tryDownload(url);
      if (ok) return;
    }

    // Fallback: open in new tab (lets browser try to resolve)
    const fallbackUrl = candidates[0] ?? 'Resume.pdf';
    if (typeof window !== 'undefined') {
      try {
        const popup = window.open(fallbackUrl, '_blank', 'noopener');
        if (!popup) {
          window.location.href = fallbackUrl;
        }
      } catch {
        window.location.href = fallbackUrl;
      }
    }
  }, []);

  return (
    <section className="section py-24 bg-pure-black" id="about">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-4xl pl-6 sm:pl-8 md:pl-12 lg:pl-16">
          <span className="text-sm uppercase tracking-[0.4em] text-accent-gray">About</span>
          <h2 className="mt-4 text-4xl font-bold text-accent-white sm:text-5xl">
            How I build calm in complex systems
          </h2>
          <p className="mt-4 max-w-2xl text-accent-gray text-sm md:text-base">
            Systems engineer, strategist, and teammate focused on making backend platforms feel reliable, no matter how much chaos is happening behind the curtain.
          </p>
        </div>

        <div className="mx-auto max-w-4xl px-0 md:px-4 lg:px-6">
          <ReadingTextReveal
            segments={aboutSegments}
            className="bg-transparent"
            contentClassName="px-0 md:px-0 lg:px-0 pt-2 pb-2"
            textClassName="text-base md:text-lg leading-relaxed text-accent-gray font-normal"
            paragraphSpacingClassName="space-y-6"
            minHeight="60vh"
            showFooter={false}
            bottomSpacerHeight="0"
          />

          <div className="mt-8 w-full max-w-xl space-y-5 rounded-2xl border border-border/60 bg-background/40 p-5 sm:p-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-gray">Resume</h3>
              <p className="text-sm text-accent-gray">
                Want the full backstory? Trigger the download animation and grab the latest resume to dive deeper.
              </p>
            </div>
            <Button
              onClick={handleStartDownload}
              disabled={isDownloading}
              className="relative inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border/60 bg-background/70 px-5 py-3 text-sm font-medium text-accent-white transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:border-accent-white/40 focus:outline-none focus:ring-2 focus:ring-accent-white/50 focus:ring-offset-2 focus:ring-offset-pure-black"
              variant="outline"
            >
              {isDownloading ? (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
              {isDownloading ? 'Preparing download…' : 'Download Resume'}
            </Button>
            <AnimatedDownload
              className="w-full"
              width="100%"
              isAnimating={isDownloading}
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
