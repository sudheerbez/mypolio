import { memo } from 'react';
import type { ReactNode } from 'react';
import { ArrowUpRight, Brain, Database, Server, TrendingUp } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/scroll-reveal';

interface ProjectCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  link: string;
  highlight: string;
}

const projects: ProjectCardProps[] = [
  {
    title: "Robinhood Strategies Platform",
    description: "Architected and developed Java/Spring Boot microservices for order execution, strategy evaluation, and portfolio rebalancing. Integrated data-driven investment models with 22% improved accuracy and built responsive React dashboards with TypeScript.",
    icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
    tags: ["Java", "Spring Boot", "React", "Trading"],
    highlight: "99.99% uptime, 35% faster API performance",
    link: "#"
  },
  {
    title: "HIPAA-Compliant Healthcare Platform",
    description: "Built secure microservices for claims processing and healthcare eligibility systems using Spring Boot. Integrated Kafka event streams and Dell Boomi connectors to sync data between payers and internal systems with HIPAA compliance.",
    icon: <Database className="w-4 h-4 text-cyan-500" />,
    tags: ["Java", "Healthcare", "Kafka", "HIPAA"],
    highlight: "30% reduction in manual escalations",
    link: "#"
  },
  {
    title: "Donation & Community Service Platform",
    description: "Led full-stack development of cross-platform donation platform with Android/Kotlin apps, React web frontend, and Java/Go backend services. Integrated Google Maps API for location-based services and push notifications.",
    icon: <Server className="w-4 h-4 text-blue-500" />,
    tags: ["Java", "React", "Android", "Google Maps"],
    highlight: "20,000+ downloads, 150% user retention increase",
    link: "#"
  },
  {
    title: "Shopify E-Commerce Prototype",
    description: "Built e-commerce application using JavaScript, TypeScript, Angular, and Spring Boot. Implemented Apache Kafka for asynchronous microservice communication and used Spring Boot actuator for comprehensive monitoring.",
    icon: <Brain className="w-4 h-4 text-purple-500" />,
    tags: ["Angular", "Spring Boot", "Kafka", "MySQL"],
    highlight: "20% increase in reliability, 22% better scalability",
    link: "#"
  }
];

export function Projects() {
  return (
    <section className="section py-24 bg-pure-black" id="projects">
      <div className="container mx-auto px-4">
        <ScrollReveal className="mb-12 max-w-4xl" direction="up" duration={0.7}>
          <span className="text-sm uppercase tracking-[0.4em] text-accent-gray">Recent Builds</span>
          <h2 className="mt-4 text-4xl font-bold text-accent-white sm:text-5xl">
            Systems I&apos;m excited to have shipped
          </h2>
          <p className="mt-4 text-accent-gray text-sm md:text-base max-w-2xl">
            Distributed rails, real-time engines, and AI copilots that keep teams calm when the load spikes.
          </p>
        </ScrollReveal>
        
        <StaggerContainer className="projects-content grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.12}>
          {projects.map((project) => (
            <StaggerItem key={project.title} as="div" direction="up" distance={40} duration={0.55}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

const ProjectCard = memo(function ProjectCard({
  icon,
  title,
  description,
  tags,
  link,
  highlight,
}: ProjectCardProps) {
  return (
    <li className="list-none">
      <div className="group relative flex h-full flex-col rounded-[1.25rem] border border-border/60 bg-background/60 p-3 backdrop-blur md:rounded-2xl md:p-4">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
          <div className="relative z-10 flex h-full flex-col gap-6 overflow-hidden rounded-xl border border-border/60 bg-background/80 p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent-white/40 group-hover:bg-background dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className="h-24 w-full rounded-lg bg-gradient-to-br from-accent-white/10 via-dark-gray/40 to-transparent ring-1 ring-inset ring-border/30 transition-transform duration-500 group-hover:scale-[1.02]" />
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted">
                {icon}
              </div>
              <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-accent-white md:text-2xl">
                {title}
              </h3>
            </div>
            <p className="text-sm text-accent-gray md:text-base">{description}</p>
            <div className="rounded-lg border border-border/60 bg-dark-gray/40 px-4 py-2 text-xs font-medium uppercase tracking-widest text-accent-gray">
              {highlight}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-gray"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 pointer-events-auto mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent-white transition-colors hover:text-accent-gray focus:outline-none focus:ring-2 focus:ring-accent-white/50 focus:ring-offset-2 focus:ring-offset-pure-black rounded-md px-2 py-1 cursor-pointer"
              aria-label={`View ${title} repository on GitHub`}
            >
              View Repository
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
});
