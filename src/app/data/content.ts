import ecosystemMaps from '../../imports/Screenshot_2026-05-02_at_4.00.21 PM.png';
import flightDisruption from '../../imports/Screenshot_2026-05-02_at_4.01.04 PM.png';
import enterpriseWorkscoping from '../../imports/Screenshot_2026-05-02_at_4.01.20 PM.png';
import remoteCareThumb from '../../imports/Screenshot_2026-05-15_at_3.04.29_PM.png';
import aiEhrThumb from '../../imports/ehr-ai-first-design_thumb.png';
import aiProcessThumb from '../../imports/ehr-design-principles.png';
import oncologyJourneyThumb from '../../imports/oncology-journey-thumb.png';

export const services = [
  {
    title: 'Product Strategy & Vision',
    tagline: 'Define what to build—and why it matters.',
    description:
      'I work with teams to shape product direction, align stakeholders, and identify the highest-impact opportunities.',
    bullets: [
      'Product vision and roadmap development',
      'Opportunity identification and prioritization',
      'Translating business goals into product strategy',
      'Cross-functional alignment',
    ],
  },
  {
    title: 'UX & Experience Design',
    tagline: 'Design systems that are intuitive, scalable, and built for real use.',
    description:
      'I specialize in simplifying complex workflows and creating end-to-end experiences that drive adoption.',
    bullets: [
      'User journeys and service design',
      'Complex workflow and enterprise UX',
      'Information architecture and interaction design',
      'High-fidelity prototyping',
    ],
  },
  {
    title: 'Rapid Prototyping & AI-Accelerated Research',
    tagline: 'Move from idea to validated solution—fast.',
    description:
      'Using AI and rapid prototyping, I shorten the cycle between concept, insight, and iteration.',
    bullets: [
      'Rapid concept prototyping (Figma + AI tools)',
      'AI-assisted user research and synthesis',
      'Fast iteration cycles and validation',
      'Turning insights into product-ready solutions',
    ],
  },
  {
    title: 'AI & Innovation Integration',
    tagline: 'Apply AI where it actually improves outcomes.',
    description:
      'I help teams integrate AI (including Ambient AI and automation) into products in ways that are practical, usable, and aligned with business goals.',
    bullets: [
      'AI-driven workflow design',
      'Intelligent system and automation strategy',
      'Reducing administrative and cognitive load',
      'Identifying high-value AI use cases',
    ],
  },
  {
    title: 'Complex Systems & Enterprise Design',
    tagline: 'Bring clarity to high-stakes, complex environments.',
    description:
      'I design for industries where usability, accuracy, and efficiency are critical.',
    bullets: [
      'Data-heavy and regulated systems (e.g., healthcare)',
      'Workflow optimization and decision support',
      'Reducing friction in operational processes',
      'Designing for accuracy, compliance, and scale',
    ],
  },
  {
    title: 'Team Enablement & Leadership',
    tagline: 'Strengthen how teams think, build, and collaborate.',
    description:
      'I work across design, product, and engineering to create alignment and elevate execution.',
    bullets: [
      'UX and product process development',
      'Cross-functional collaboration frameworks',
      'Mentorship and design/product leadership',
      'Scaling design systems and practices',
    ],
  },
];

export const processSteps = ['Understand', 'Define', 'Prototype', 'Validate', 'Refine'];

export const differentiators = [
  {
    title: 'Strategy and execution in one',
    description: 'From vision to delivery, no handoffs required',
  },
  {
    title: 'AI integrated into the actual workflow',
    description: 'Not just theory—practical, embedded AI that accelerates delivery',
  },
  {
    title: 'Deep experience with complex systems',
    description: 'Real-world expertise in healthcare, aviation, and regulated industries',
  },
  {
    title: 'Fast iteration cycles',
    description: 'High-quality output delivered rapidly through proven processes',
  },
  {
    title: 'Focus on outcomes, not deliverables',
    description: 'Results that move the business forward, not just documents',
  },
  {
    title: 'Cross-functional collaboration',
    description: 'Seamlessly bridge design, product, and engineering teams',
  },
];

export const engagementModels = [
  {
    title: 'Product Strategy & Discovery Sprints',
    description: 'Rapid alignment on direction, opportunities, and roadmap',
  },
  {
    title: 'End-to-End Product & UX Design',
    description: 'Full-cycle engagements from concept to launch',
  },
  {
    title: 'Innovation & AI Integration',
    description: 'Strategic AI implementation and workflow optimization',
  },
  {
    title: 'Advisory & Fractional Leadership',
    description: 'Ongoing strategic guidance and team enablement',
  },
];

export type McKessonCaseId = 'remote-care' | 'ai-ehr' | 'ai-process' | 'oncology-journey';

export type McKessonCase = {
  id: McKessonCaseId;
  title: string;
  tagline: string;
  shortDesc: string;
  thumb: string;
  tag: string;
};

export const mckessonCases: McKessonCase[] = [
  {
    id: 'remote-care',
    title: 'Remote Care Management',
    tagline: 'Enterprise Healthcare Transformation',
    shortDesc:
      'Led UX-driven discovery and program definition for a Remote Care Management initiative supporting oncology patient care coordination, ePROs, triage, and integration across internal and partner platforms.',
    thumb: remoteCareThumb,
    tag: 'Healthcare · Enterprise UX',
  },
  {
    id: 'ai-ehr',
    title: 'AI-Enabled EHR of the Future',
    tagline: 'From Documentation System to Clinical Intelligence Partner',
    shortDesc:
      'Reimagining the oncology EHR from a documentation system into an AI-enabled clinical workspace that supports providers in the moment of care—reducing administrative burden and surfacing insight when it matters.',
    thumb: aiEhrThumb,
    tag: 'Healthcare · AI · Clinical Workflows',
  },
  {
    id: 'ai-process',
    title: 'AI Process Improvement',
    tagline: 'Reframing how UX, AI, and the Design System accelerate delivery',
    shortDesc:
      'Two initiatives that compress the gap between intent and execution: treating rapid prototyping as a core SDLC capability, and reimagining the McKesson Design System as an AI-enabled delivery platform rather than static documentation.',
    thumb: aiProcessThumb,
    tag: 'AI · Process · Design System',
  },
  {
    id: 'oncology-journey',
    title: 'Gradual Improvements Across the Patient Journey in Oncology',
    tagline: 'Connecting fragmented clinical workflows into a safer, more coordinated experience',
    shortDesc:
      'Two Ontada initiatives that reframed technical asks as workflow and patient safety opportunities: integrating infusion pump hardware with the oncology EHR, and untangling the scheduling complexity that surrounds modern oncology care.',
    thumb: oncologyJourneyThumb,
    tag: 'Healthcare · Oncology · Workflow Design',
  },
];

export type AviationProject = {
  id: string;
  image: string;
  title: string;
  shortDesc: string;
  body: string;
  tags: string[];
};

export const aviationGroups: { heading: string; projects: AviationProject[] }[] = [
  {
    heading: 'Service Design & Discovery',
    projects: [
      {
        id: 'service-design-discovery',
        image: ecosystemMaps,
        title: 'Service Design & Discovery Workshops',
        shortDesc:
          'Ecosystem mapping, cross-group participatory workshops, and storyboards with low-fi wireframes that aligned five GE Aviation groups around a shared service-design framework.',
        body: 'Three discovery activities anchored the service design work at GE Aviation: ecosystem maps and task analysis that traced parts forecasting and the vendor network; participatory design workshops across five groups that surfaced objectives for streamlined maintenance planning; and storyboards paired with use cases and low-fidelity wireframes that validated user flows before high-fidelity investment.',
        tags: ['Service Design', 'Ecosystem Mapping', 'Workshop Facilitation', 'Storyboards', 'Low-Fidelity Wireframes'],
      },
    ],
  },
  {
    heading: 'Aviation Applications',
    projects: [
      {
        id: 'flight-disruption',
        image: flightDisruption,
        title: 'Flight Disruption Management',
        shortDesc:
          'Operations dashboard with conceptual wireframes for the Duty Manager flow and a usability study validating learnability, efficiency, and memorability.',
        body: 'The application surfaces flight data and status across an airline\'s network and fleet so operations teams can spot issues before they become active disruptions. Conceptual wireframes explored multiple solution directions for the Duty Manager flow, and a usability study measured learnability, efficiency, and memorability—producing concrete acceptance criteria for development.',
        tags: ['Heuristic Evaluation', 'Usability Testing', 'Data Visualization', 'Wireframes', 'Acceptance Criteria'],
      },
      
      {
        id: 'digital-mro',
        image: enterpriseWorkscoping,
        title: 'Digital MRO at GE Aviation',
        shortDesc:
          'Workscoping platform aggregating repair history, parts ordering, compliance, and approvals into a single decision surface for engine and component shops.',
        body: 'Workscoping sits at the heart of GE Aviation\'s services business. The application aggregates repair history, maintenance records, parts ordering, compliance, and approval workflows into a single platform—giving shops the insights they need to scope work accurately and move it through to completion.',
        tags: ['Enterprise Application', 'Workflow Design', 'Data Aggregation'],
      },
    ],
  },
];
