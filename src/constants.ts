/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Consultant {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Competency {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Phase {
  num: string;
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  description: string;
}

export const CONSULTANTS: Consultant[] = [
  {
    id: 'marcus',
    name: 'Marcus Thorne',
    role: 'Chief Strategist',
    description: 'Expert in distributed systems and autonomous agent orchestration.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS3PCL7tTRmmjOo8O-t65zfW3qo2tXYMnlakKUb4T7PjtVW1tuZIcFBpf5byY_PTTzQP3SabRtcFJ4o8fH5Fw9ARcvaxQZEBzO7P0LzvPzhKXum_yx4AAUu13W5PrwA3iVnDdqdu1NDjYxrWWgY6_1dF90gBqognUIsCmt0E0La5zZaiCN-7yDVsjCQri46W04Oiw5vdlvNf13OhElvc23D2zsWAx4Ltnw_swjIQvuY5cs5fPQsV0ZUZ0-dCPMqvvI_aGshErYtABC'
  },
  {
    id: 'elena',
    name: 'Dr. Elena Voss',
    role: 'Head of Engineering Integrity',
    description: 'Specializing in automated verification and large-scale code quality.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBkCcyEnzGOYE1B7HjEX02VQhJErT6aqsd9D88ZCrj8xt_yUVw8A-orWRa-C1MT4JKod8Z7-82wG-6VpurbPcHfA3XTyh0VfGHAZivV36zQW8w1fl0UDFzUGV7ZizdNHI8cC2erMomprbxHgmSJUOaoMBdQYFQFztHVSb5tukntWVxwbbNaLEDHwzGoqsNLLOWoOvtPl83x9nTDv1UH1Dzx7e1ABbv7C31GPu9djOrZcx2PKYMYEu_9MAJ9X-1hOHr7S95-vGTWd6K'
  },
  {
    id: 'julian',
    name: 'Julian Chen',
    role: 'Infrastructure Architect',
    description: 'Pioneer in agentic multi-cloud deployment and resilience protocols.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhn9TXEk-RYL5lmLUKJ7WBX0q_lr6hxkXzLNYrsA_ywW0uGjURkuClBiNBlz37YWDanV5Ei9AN90tG2C_vbfSLa28TqHftygH2vZvJVmkNtcpJVTCr2MtZiVoJmkRdFZGY6fRpy7QO85PsCYoWvCXXvIyjRn86NpZhD5j8OnRLyQGfzaVg68greWUVrJNV5x3DBLkdK703z-POIX7FLJ7SOoawN4Z49ZBRvh1zb1OxTYkwGsTqSAHFKup-DGgcqpYbWH5M7kOxq3eT'
  },
  {
    id: 'sarah',
    name: 'Sarah Khel',
    role: 'SecOps Lead',
    description: 'Expert in secure-by-default delivery and enterprise threat neutralization.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABlbuOZJH5ecAPU2rmM2-9qe1Zr0KcNgQXxm2Txxlnc60Vu8ZhRFNgY5-fL5_YqffDVLA9XA__hYLdQOs06yJF5N6_xQCsn2A8ZmiS87jwh7TFGGZDw1MR7ZZC9Rnox1VmTNHlYMtXBmgRtwI_u2emeh52o0tog3iFqiFvGA0luEIZZBgEk5gXnRIIbT9t31PiGkmLEZ3Dr4W3EGOokgRuz7rBqNhYr54qnmYDh2S0f4_Qq89UP3ggwyt2fZiQpP10vFDLwOwjqEeU'
  }
];

export const COMPETENCIES: Competency[] = [
  {
    id: 'app-dev',
    title: 'Custom App Development',
    description: 'Greenfield projects built on modern, cloud-native foundations. We utilize agent-assisted CI/CD pipelines to achieve 3x industry standard deployment speeds.',
    icon: 'Rocket',
    tags: ['Cloud-Native Architecture', 'Multi-Tenant SaaS Engine', 'Real-Time Sync Protocols']
  },
  {
    id: 'legacy',
    title: 'Legacy Modernization',
    description: 'Systematic refactoring of monolithic architectures. Our agents map dependencies with 99.9% accuracy, ensuring seamless transitions.',
    icon: 'History',
    tags: ['Monolith Decoupling', 'Data Schema Migration', 'API Encapsulation']
  },
  {
    id: 'infra',
    title: 'Scalable Infrastructure',
    description: 'Elastic environments designed for agentic workloads. Automated scaling, self-healing nodes, and sovereign data governance.',
    icon: 'Hub',
    tags: ['Kubernetes Orchestration', 'Edge Computing Deployment', 'Zero-Trust Security']
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'fintech',
    name: 'Fintech & Banking',
    description: 'Ship compliant, secure financial platforms faster — from payment rails to fraud tooling — without expanding headcount.',
    icon: 'Landmark'
  },
  {
    id: 'health',
    name: 'Healthcare & Life Sciences',
    description: 'Build privacy-aware patient and provider software with auditable, agent-assisted delivery pipelines.',
    icon: 'HeartPulse'
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    description: 'Stand up storefronts, inventory systems, and real-time pricing engines at the pace your market moves.',
    icon: 'ShoppingCart'
  },
  {
    id: 'saas',
    name: 'SaaS & Technology',
    description: 'Accelerate product roadmaps — new features, integrations, and platform scale delivered on demand.',
    icon: 'Boxes'
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    description: 'Automate routing, tracking, and warehouse systems with resilient, observable services.',
    icon: 'Truck'
  },
  {
    id: 'public',
    name: 'Public Sector & Enterprise',
    description: 'Modernize legacy estates with traceable, governed engineering that satisfies procurement and security.',
    icon: 'Building2'
  }
];

export const PROCESS_PHASES: Phase[] = [
  {
    num: '00',
    title: 'Discovery & Scoping',
    description: 'Our senior consultants learn your domain, define objectives, and translate them into a precise backlog of agent-ready tasks with clear success metrics.',
    icon: 'Search'
  },
  {
    num: '01',
    title: 'Architecture & Planning',
    description: 'We design the system blueprint, choose the stack, and set the guardrails, constraints, and review gates the agent workforce will operate within.',
    icon: 'PencilRuler'
  },
  {
    num: '02',
    title: 'Agent-Assisted Build',
    description: 'Parallel agent chains implement features against the blueprint while engineers steer, pair, and unblock — compressing delivery from weeks to days.',
    icon: 'Zap'
  },
  {
    num: '03',
    title: 'Review & Hardening',
    description: 'Automated test agents and human audits verify every change for correctness, security, and performance before it merges.',
    icon: 'ShieldCheck'
  },
  {
    num: '04',
    title: 'Deployment & Integration',
    description: 'We ship to your environment with automated CI/CD, wiring the software into your existing systems, data, and workflows.',
    icon: 'Rocket'
  },
  {
    num: '05',
    title: 'Monitoring & Iteration',
    description: 'We instrument, observe, and continuously improve — scaling the system against your evolving roadmap and handing over full ownership.',
    icon: 'Activity'
  }
];

export const AI_SERVICES: Service[] = [
  {
    id: 'custom-app',
    title: 'Custom App Development',
    description: 'Greenfield web and mobile applications built on modern, cloud-native foundations. Agent-assisted pipelines deliver production-grade features at a fraction of the usual timeline.'
  },
  {
    id: 'legacy',
    title: 'Legacy Modernization',
    description: 'Systematic refactoring of monolithic codebases. Our agents map dependencies, untangle coupling, and migrate systems with minimal disruption to your business.'
  },
  {
    id: 'api',
    title: 'API & Integration Engineering',
    description: 'Robust APIs and third-party integrations that connect your stack. We design the contracts, build the services, and document everything for long-term maintainability.'
  },
  {
    id: 'qa',
    title: 'Automated QA & Testing',
    description: 'Comprehensive coverage generated and maintained by dedicated testing agents — unit, integration, and end-to-end — so regressions are caught before they reach production.'
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD Automation',
    description: 'Self-healing pipelines, infrastructure-as-code, and zero-downtime deployments. We automate the entire path from commit to production.'
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Elastic, observable environments designed for modern workloads — automated scaling, cost controls, and resilient, multi-region architecture.'
  },
  {
    id: 'review',
    title: 'Code Review & Refactoring',
    description: 'Continuous, agent-driven review that enforces standards, reduces technical debt, and keeps your codebase clean as it grows.'
  },
  {
    id: 'data',
    title: 'Data & Analytics Platforms',
    description: 'Pipelines, warehouses, and dashboards that turn raw data into decisions — engineered for reliability and scale.'
  },
  {
    id: 'security',
    title: 'Security & Compliance Engineering',
    description: 'Zero-trust architecture, automated dependency auditing, and traceable change history to satisfy your security and compliance requirements.'
  },
  {
    id: 'advisory',
    title: 'Technical Architecture & Advisory',
    description: 'Senior architects who design the system, set the standards, and lead the agent workforce — keeping delivery aligned to your goals.'
  }
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'TypeScript', description: 'Type-safe foundations for large, maintainable codebases across the stack.' },
  { name: 'React', description: 'Modern, component-driven interfaces with the ecosystem to back them.' },
  { name: 'Node.js', description: 'High-throughput services and APIs on a fast, battle-tested runtime.' },
  { name: 'Python', description: 'Automation, data, and backend services where libraries and expressiveness matter.' },
  { name: 'Kubernetes', description: 'Orchestrated, self-healing deployments that scale with demand.' },
  { name: 'AWS', description: 'Cloud infrastructure with the breadth to run anything you build.' },
  { name: 'PostgreSQL', description: 'Reliable, relational data storage trusted at scale.' },
  { name: 'Docker', description: "Reproducible environments from a developer's laptop to production." }
];
