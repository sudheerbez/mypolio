import { Brain, Cloud, Code2, Database, Network } from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const skillsTimeline = [
  {
    id: 1,
    title: 'Programming Languages',
    date: 'Core Stack',
    content:
      'Proficient across Java, Python, Scala, and modern web technologies with 5+ years of production experience building microservices, backend systems, and responsive frontends.',
    category: 'Languages',
    icon: Code2,
    relatedIds: [2, 4, 5],
    status: 'completed' as const,
    energy: 95,
    skills: ['Java', 'Python', 'Scala', 'JavaScript', 'TypeScript', 'C#', 'C++', 'Bash'],
  },
  {
    id: 2,
    title: 'Frameworks & Platforms',
    date: 'Application Layer',
    content:
      'Expert in Spring ecosystem for building scalable microservices, plus React/Redux for dynamic frontends. Proficient with event-driven architectures and modern API design.',
    category: 'Frameworks',
    icon: Brain,
    relatedIds: [1, 3, 5],
    status: 'completed' as const,
    energy: 96,
    skills: [
      'Spring Boot',
      'Spring Framework',
      'Hibernate',
      'React',
      'Redux',
      'Node.js',
      'Express.js',
      'GraphQL',
      'REST APIs',
      'Apache Kafka',
    ],
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    date: 'Infrastructure & Deployment',
    content:
      'Own full release pipelines with cloud-native patterns. Expertise in AWS, Docker, Kubernetes, and infrastructure-as-code with Terraform for automated, scalable deployments.',
    category: 'DevOps',
    icon: Cloud,
    relatedIds: [2, 5],
    status: 'completed' as const,
    energy: 94,
    skills: ['AWS (EC2, Lambda, RDS, S3, CloudWatch)', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD Pipelines'],
  },
  {
    id: 4,
    title: 'Databases & Data',
    date: 'Data Layer',
    content:
      'Design robust data architectures from OLTP systems to analytics pipelines. Experience with relational databases, NoSQL, and data warehousing solutions.',
    category: 'Data',
    icon: Database,
    relatedIds: [1, 2],
    status: 'completed' as const,
    energy: 92,
    skills: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'DynamoDB', 'Cassandra', 'Redis', 'Tableau', 'Power BI'],
  },
  {
    id: 5,
    title: 'Architecture & Systems',
    date: 'Engineering DNA',
    content:
      'Deep expertise in microservices architecture, distributed systems, and scalable platform design. Lead technical initiatives with systems-first thinking and collaborative practices.',
    category: 'Systems',
    icon: Network,
    relatedIds: [1, 2, 3],
    status: 'completed' as const,
    energy: 94,
    skills: [
      'Microservices Architecture',
      'Event-Driven Design',
      'API Security (OAuth 2.0, RBAC)',
      'HIPAA Compliance',
      'Git/SVN',
      'Agile/Scrum',
      'Linux',
      'TDD/BDD',
      'Load Testing',
      'Observability (CloudWatch, ELK)',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-dark-gray bg-pure-black py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal className="mx-auto mb-12 max-w-6xl text-center" direction="up" duration={0.7}>
          <span className="text-sm uppercase tracking-[0.4em] text-accent-gray">Skills</span>
          <h2 className="mt-4 text-4xl font-bold text-accent-white sm:text-5xl">Technical Orbit</h2>
          <p className="mt-4 text-accent-gray">
            A systems-first toolkit honed across payment platforms, real-time analytics, and AI-assisted customer experiences.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-6xl" direction="up" delay={0.15} duration={0.6}>
          <RadialOrbitalTimeline timelineData={skillsTimeline} />
        </ScrollReveal>

      </div>
    </section>
  );
}

export default Skills;
