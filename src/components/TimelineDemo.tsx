import { useMemo } from "react";
import { Timeline } from "@/components/ui/timeline";
import { Award, Code, Database, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function TimelineDemo() {
  const data = useMemo(() => [
    {
      title: "Robinhood",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold">Software Engineer · Robinhood</h4>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-gray/80 mt-1 mb-3">June 2024 – Present · San Francisco, CA</p>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              Contributing to the Robinhood Strategies platform, an automated investment solution designed to optimize portfolios and empower retail investors through data-driven decision-making. I architect Spring Boot microservices for order execution, strategy evaluation, and real-time portfolio rebalancing with 99.99% uptime.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Award className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">35% faster API response through optimization</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Event-driven Kafka pipelines for trading systems</span>
            </div>
          </div>
          
          <div className="bg-dark-gray/30 rounded-lg p-4 border border-medium-gray">
            <h5 className="text-accent-white font-medium mb-3">Skills & Technologies</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Java</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Spring Boot</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">AWS</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Kafka</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">GraphQL</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">React</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Microservices</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Cognizant",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold">Software Engineer · Cognizant</h4>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-gray/80 mt-1 mb-3">September 2021 – January 2023 · Remote</p>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              Engineered HIPAA-compliant microservices for healthcare claims processing systems. Built secure RESTful APIs for seamless integration between payer, eligibility, and claims systems, reducing manual escalations by 30%.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Code className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Spring Boot backends with HIPAA compliance</span>
            </div>
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Dell Boomi integrations for payer systems</span>
            </div>
          </div>
          
          <div className="bg-dark-gray/30 rounded-lg p-4 border border-medium-gray">
            <h5 className="text-accent-white font-medium mb-3">Skills & Technologies</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Java</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Spring Boot</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Kafka</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Docker</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Kubernetes</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">HIPAA</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">ReactJS</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Team Tarak Trust",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold">Software Developer · Team Tarak Trust</h4>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-gray/80 mt-1 mb-3">January 2019 – December 2021 · Remote</p>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              Led end-to-end development of a donation and community service platform with Java/React backends and Android/Kotlin mobile app. Achieved 20,000+ app downloads and 150% increase in user retention through thoughtful design and robust infrastructure.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Code className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Android, Web, and iOS development</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Google Maps integration and GPS location services</span>
            </div>
          </div>
          
          <div className="bg-dark-gray/30 rounded-lg p-4 border border-medium-gray">
            <h5 className="text-accent-white font-medium mb-3">Skills & Technologies</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Java</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Android</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">React</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Go</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">MySQL</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Kotlin</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Google Maps API</span>
            </div>
          </div>
        </div>
      ),
    },
  ], []);
  return (
    <div className="container mx-auto px-4">
      <ScrollReveal className="mx-auto mb-12 max-w-4xl px-0 md:px-4 lg:px-6" direction="up" duration={0.7}>
        <h2 className="text-left text-lg md:text-4xl font-bold text-accent-white mb-4">
          Experience
        </h2>
        <p className="text-left text-accent-gray text-sm md:text-base max-w-2xl">
          Roles that shaped my systems thinking—from fintech payments to AI research and large-scale distributed platforms.
        </p>
      </ScrollReveal>
      <div className="mx-auto max-w-6xl px-0 md:px-4 lg:px-6">
        <Timeline data={data} />
      </div>
    </div>
  );
}
