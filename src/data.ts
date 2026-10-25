// All site copy lives here so it can be edited in one place.

export const profile = {
  name: 'Sudheer Bezawada',
  role: 'Software Engineer',
  location: 'Chicago, IL',
  email: 'sudheerbez9@gmail.com',
  phone: '316-351-8027',
  linkedin: 'https://www.linkedin.com/in/sudheerbez',
  github: 'https://github.com/sudheerbez',
  resume: `${import.meta.env.BASE_URL}Resume.pdf`,
};

export const heroStats = [
  { value: '5+', label: 'Years shipping production code' },
  { value: '99.99%', label: 'Uptime on trading services' },
  { value: '35%', label: 'Faster API responses' },
  { value: '20K+', label: 'App downloads on a nonprofit platform' },
];

export const marqueeItems = [
  'Java',
  'Spring Boot',
  'Kafka',
  'AWS',
  'React',
  'TypeScript',
  'GraphQL',
  'Kubernetes',
  'Terraform',
  'PostgreSQL',
  'Microservices',
  'Event-driven systems',
];

export type Accent = 'teal' | 'violet';

export const experience: {
  company: string;
  role: string;
  period: string;
  domain: string;
  accent: Accent;
  summary: string;
  highlights: string[];
  stack: string[];
}[] = [
  {
    company: 'Robinhood',
    role: 'Software Engineer',
    period: 'Jun 2024 — Present',
    domain: 'Fintech · Trading platform',
    accent: 'teal',
    summary:
      'Building the Robinhood Strategies platform, an automated investing product that rebalances portfolios and surfaces personalized trading insights for retail investors.',
    highlights: [
      'Designed Java / Spring Boot microservices for order execution, strategy evaluation and real-time portfolio rebalancing.',
      'Cut API response time ~35% across REST and GraphQL APIs with caching and query tuning.',
      'Built Kafka event pipelines that raised message throughput and system responsiveness.',
      'Shipped models with data science that lifted recommendation accuracy ~22%.',
      'Reduced merge-to-production time by over 50% with Docker, Jenkins and GitHub Actions on AWS.',
    ],
    stack: ['Java', 'Spring Boot', 'Kafka', 'GraphQL', 'React', 'TypeScript', 'AWS', 'Terraform', 'PostgreSQL', 'Redis'],
  },
  {
    company: 'Cognizant',
    role: 'Software Engineer',
    period: 'Sep 2021 — Jan 2023',
    domain: 'Healthcare · Claims & eligibility',
    accent: 'violet',
    summary:
      'Engineered HIPAA-compliant microservices and integrations connecting payer, eligibility and claims systems for healthcare operations teams.',
    highlights: [
      'Built secure Spring Boot services and REST APIs for document workflows and claims processing.',
      'Connected internal claim systems to external payer APIs with Dell Boomi, reducing manual escalations by 30%.',
      'Streamed real-time healthcare task updates through Kafka.',
      'Automated AWS provisioning with Terraform and ran services on Docker and Kubernetes.',
      'Added AI/ML features with Spring AI for patient risk analytics.',
    ],
    stack: ['Java', 'Spring Boot', 'Kafka', 'Dell Boomi', 'Docker', 'Kubernetes', 'Terraform', 'MongoDB', 'Oracle', 'React'],
  },
  {
    company: 'Team Tarak Trust',
    role: 'Software Developer',
    period: 'Jan 2019 — Dec 2021',
    domain: 'Nonprofit · Community & donations',
    accent: 'teal',
    summary:
      'Led development of a cross-platform donation and community service platform that connects people in need with local donors.',
    highlights: [
      'Grew the platform to 20,000+ app downloads and a 150% increase in user retention.',
      'Built the Android app (Java, Kotlin, NDK), React web front end and Java / Go backend.',
      'Integrated Google Maps, GPS and push notifications for location-based donation requests and blood drives.',
      'Improved application efficiency by 30% through MySQL schema and query work.',
    ],
    stack: ['Java', 'Kotlin', 'Android', 'Go', 'React', 'MySQL', 'Google Maps API', 'FCM'],
  },
];

export const projects: {
  title: string;
  kind: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  accent: Accent;
}[] = [
  {
    title: 'Robinhood Strategies',
    kind: 'Fintech platform',
    description:
      'Microservices for order execution, strategy evaluation and portfolio rebalancing, with React dashboards for investors.',
    metric: '99.99%',
    metricLabel: 'service uptime',
    tags: ['Java', 'Spring Boot', 'Kafka', 'React'],
    accent: 'teal',
  },
  {
    title: 'HIPAA Claims Platform',
    kind: 'Healthcare systems',
    description:
      'Secure claims and eligibility services syncing payer data through Kafka streams and Dell Boomi connectors.',
    metric: '−30%',
    metricLabel: 'manual escalations',
    tags: ['Spring Boot', 'Kafka', 'HIPAA', 'AWS'],
    accent: 'violet',
  },
  {
    title: 'Community Donation App',
    kind: 'Social impact',
    description:
      'Android, web and backend services that match donors with local needs using maps, GPS and push notifications.',
    metric: '20K+',
    metricLabel: 'downloads',
    tags: ['Kotlin', 'React', 'Go', 'MySQL'],
    accent: 'teal',
  },
  {
    title: 'Shopify Prototype',
    kind: 'E-commerce',
    description:
      'Angular and Spring Boot storefront with Kafka and RabbitMQ messaging between services and Actuator monitoring.',
    metric: '+22%',
    metricLabel: 'scalability',
    tags: ['Angular', 'Spring Boot', 'Kafka', 'Docker'],
    accent: 'violet',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'Python', 'Scala', 'TypeScript', 'JavaScript', 'Go', 'C#', 'SQL', 'Bash'] },
  { group: 'Backend', items: ['Spring Boot', 'Spring Security', 'Hibernate', 'Node.js', 'Express', 'GraphQL', 'REST', 'Kafka'] },
  { group: 'Frontend', items: ['React', 'Redux', 'Angular', 'Tailwind CSS', 'Material-UI'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'DynamoDB', 'Cassandra', 'Redis', 'Tableau'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'] },
  { group: 'Practices', items: ['Microservices', 'Event-driven design', 'OAuth 2.0 / RBAC', 'HIPAA', 'TDD', 'Agile'] },
];

export const education = {
  degree: 'M.S. Computer Science',
  school: 'Wichita State University',
  detail: 'Wichita, Kansas · CGPA 3.97 / 4.0',
};

export const publication = {
  title: 'Remote Medical Assistance for Marine Fishermen through OceanNet',
  venue: 'IEEE ICCCNT 2021',
  href: 'https://doi.org/10.1109/ICCCNT51525.2021.9579678',
};
