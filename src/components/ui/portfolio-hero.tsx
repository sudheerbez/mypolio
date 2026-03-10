import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Code, Github, Linkedin } from "lucide-react";


// Custom X Logo Component matching X branding
const XLogo = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="X logo"
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill="currentColor"
    />
  </svg>
);

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}: BlurTextProps) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(
    () => (animateBy === "words" ? text.split(" ") : text.split("")),
    [text, animateBy],
  );

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0)"
              : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export function PortfolioHero() {
  const isDark = true;
  const socialIcons = useMemo(
    () => [
      { Icon: Linkedin, href: "https://www.linkedin.com/in/sudheerbez", label: "LinkedIn profile", isX: false },
      { Icon: Github, href: "https://github.com/sudheerbez", label: "GitHub profile", isX: false },
      { Icon: Code, href: "mailto:sudheerbez9@gmail.com", label: "Email", isX: false },
    ],
    [],
  );

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen transition-colors"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <main className="relative flex min-h-screen flex-col">
        <div className="pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
          <div className="relative text-center">
            <BlurText
              text="SUDHEER"
              delay={90}
              animateBy="letters"
              direction="top"
              className="justify-center whitespace-nowrap font-bold leading-[0.75] tracking-tighter text-[110px] text-lime-300 sm:text-[160px] md:text-[210px] lg:text-[240px]"
              style={{ fontFamily: "'Fira Code', monospace" }}
            />
            <BlurText
              text="BEZAWADA"
              delay={90}
              animateBy="letters"
              direction="top"
              className="justify-center whitespace-nowrap font-bold leading-[0.75] tracking-tighter text-[110px] text-lime-300 sm:text-[160px] md:text-[210px] lg:text-[240px]"
              style={{ fontFamily: "'Fira Code', monospace" }}
            />


          </div>
        </div>

        <div className="absolute left-1/2 bottom-4 z-20 w-full -translate-x-1/2 px-6 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20">
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center">
              <BlurText
                text="Software Engineer | Fintech & Scalable Systems"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-center text-[15px] text-neutral-400 transition-colors duration-300 hover:text-white sm:text-[18px] md:text-[20px] lg:text-[22px]"
                style={{ fontFamily: "'Antic', sans-serif" }}
              />
            </div>
            <motion.div
              className="flex flex-wrap justify-center gap-3 relative z-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {socialIcons.map(({ Icon, href, label, isX }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="relative z-30 pointer-events-auto flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-black/60 text-neutral-300 hover:border-white/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isX ? (
                    <XLogo size={18} className="text-current" />
                  ) : (
                    Icon && <Icon size={18} />
                  )}
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll-down indicator */}
            <motion.div
              className="mt-2 flex flex-col items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">Scroll</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-500"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
