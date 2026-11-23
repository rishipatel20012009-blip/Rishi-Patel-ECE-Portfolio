export interface ProjectItem {
  id: string;
  number: string;
  category: 'Hackathon' | 'Foundations';
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
  badgeLabel: string;
  accentLabel: string;
  certificateUrl?: string;
  certificateId?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  details: string;
  period: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  duration?: string;
  certificateId?: string;
  skillsCovered: string[];
  pdfUrl?: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  iconName: 'search' | 'lightbulb' | 'pentool' | 'cpu' | 'presentation';
}

export interface SkillGroup {
  id: 'Technical' | 'AI & ML' | 'Tools' | 'Soft Skills' | 'Languages';
  label: string;
  items: string[];
}

export const PROFILE = {
  fullName: 'Rishi Patel',
  firstName: 'RISHI',
  lastName: 'PATEL',
  roleLabel: 'B.Tech ECE Student · Engineering & AI',
  greeting: "Hello, I'm",
  tagline: 'Turning ideas into practical engineering & AI.',
  location: 'Ahmedabad, Gujarat, India',
  shortLocation: 'Ahmedabad, Gujarat',
  availability: 'Open to Collaborations',
  phone: '+91 93134 71763',
  email: 'rishipatel20012009@gmail.com',
  bio: 'First-year B.Tech student in Electronics and Communication Engineering at Karnavati University. Interested in technology, problem-solving, and collaborative project work, with introductory experience in C programming and Arduino.',
  resumePdfUrl: '/assets/aistudio/Rishi_Patel_Resume_7ac93b12.pdf',
  quote:
    'Engineering begins with curiosity—understanding real problems deeply, mastering the fundamentals, and building practical solutions together.',
  quoteFooter: "LET'S BUILD SOMETHING MEANINGFUL TOGETHER.",
};

export const HERO_STATS = [
  { value: 'Top 100', label: 'SIH 2026 Team' },
  { value: '5+', label: 'LinkedIn Certs' },
  { value: '3', label: 'Languages Spoken' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'kisan-setu',
    number: '01',
    category: 'Hackathon',
    title: 'Kisan Setu',
    subtitle: 'Smart India Hackathon 2026 · Problem ID 26033',
    period: 'Sept 2026',
    badgeLabel: 'PROBLEM ID 26033',
    accentLabel: 'TEAM CELESTIAL',
    summary:
      'Participated in the internal college round of Smart India Hackathon (SIH) 2026 as a Team Member of Team Celestial, addressing agricultural supply chain inefficiencies.',
    highlights: [
      'Tackled Problem ID 26033 examining how multiple intermediaries reduce farmers’ earnings and increase consumer prices.',
      'Contributed directly to structured problem research, gap analysis, and solution framing.',
      'Authored project documentation and co-crafted the hackathon pitch presentation.',
    ],
    tags: ['SIH 2026', 'Problem Research', 'Documentation', 'Team Celestial'],
    certificateUrl: '/assets/aistudio/Rishi_Patel_-_Celestial_adedd3b1.pdf',
    certificateId: 'KU-SIH36H-ACH-2026-0389',
  },
  {
    id: 'team-celestial',
    number: '02',
    category: 'Hackathon',
    title: 'Team Celestial (Top 100)',
    subtitle: 'Preliminary SIH 2026 · Karnavati University',
    period: 'Sept 10–11, 2026',
    badgeLabel: 'TOP 100 NOMINATED',
    accentLabel: 'KARNAVATI UNIVERSITY',
    summary:
      'Nominated among the Top 100 Teams representing Karnavati University, Gandhinagar in the Preliminary Round of Smart India Hackathon 2026.',
    highlights: [
      'Recognized for dedication, creativity, and collaborative problem-solving during the 36-hour preliminary hackathon event.',
      'Awarded Certificate of Appreciation by Karnavati Innovation & Incubation Foundation (KIIF) and Unitedworld Institute of Technology.',
      'Verified Certificate ID: KU-SIH36H-ACH-2026-0389.',
    ],
    tags: ['Top 100 Teams', 'KIIF', 'Gandhinagar', 'Hackathon'],
    certificateUrl: '/assets/aistudio/Rishi_Patel_-_Celestial_adedd3b1.pdf',
    certificateId: 'KU-SIH36H-ACH-2026-0389',
  },
  {
    id: 'technical-ai-foundations',
    number: '03',
    category: 'Foundations',
    title: 'Technical & AI Foundations',
    subtitle: 'C · Arduino · SOLIDWORKS · AI/ML',
    period: 'Nov 2026',
    badgeLabel: 'ENGINEERING & AI',
    accentLabel: 'HANDS-ON LEARNING',
    summary:
      'Structured foundational learning across core embedded electronics, CAD modeling, procedural programming, and modern Artificial Intelligence concepts.',
    highlights: [
      'Completed 5 hours 52 minutes of C Programming Foundations covering core syntax and structured logic.',
      'Completed 10 hours of SOLIDWORKS 2024 Essential Training for mechanical and enclosure CAD fundamentals.',
      'Completed AI Foundations coursework on Intelligent Systems, Machine Learning, Generative AI, and Thinking Machines, plus a Jio AI Workshop.',
    ],
    tags: ['C Programming', 'Arduino', 'SOLIDWORKS 2024', 'AI & ML'],
    certificateUrl:
      '/assets/aistudio/KU202605636_Rishi_Patel_CertificateOfCompletion_Complete_Guide_to_C_Programming_Foundations_43cdcead.pdf',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech., Electronics and Communication Engineering',
    institution: 'Unitedworld Institute of Technology, Karnavati University',
    details: 'Semester 1',
    period: 'Exp. 2030',
  },
  {
    degree: 'Class XII (CBSE)',
    institution: 'St. Anns School, Bopal',
    details: 'Score: 74.06%',
    period: '2026',
  },
  {
    degree: 'Class X (CBSE)',
    institution: 'Asia English School',
    details: 'Score: 84.56%',
    period: '2024',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'sih-celestial',
    title: 'Preliminary Smart India Hackathon 2026 — Top 100 Team (Celestial)',
    issuer: 'Karnavati University · KIIF · MoE Innovation Cell',
    date: 'Sept 10–11, 2026',
    certificateId: 'KU-SIH36H-ACH-2026-0389',
    skillsCovered: ['Problem Solving', 'Teamwork', 'Hackathon Pitching'],
    pdfUrl: '/assets/aistudio/Rishi_Patel_-_Celestial_adedd3b1.pdf',
  },
  {
    id: 'ai-thinking-machines',
    title: 'Artificial Intelligence Foundations: Thinking Machines',
    issuer: 'LinkedIn Learning',
    date: 'Nov 20, 2026',
    duration: '1 hr 36 min',
    skillsCovered: ['Machine Learning', 'Artificial Intelligence (AI)', 'AI Foundations'],
    pdfUrl:
      '/assets/aistudio/KU202605636_RISHI_PATEL_CertificateOfCompletion_Artificial_Intelligence_Foundations_Thinking_Machines_c2232057.pdf',
  },
  {
    id: 'c-programming',
    title: 'Complete Guide to C Programming Foundations',
    issuer: 'LinkedIn Learning',
    date: 'Nov 19, 2026',
    duration: '5 hr 52 min',
    skillsCovered: ['C (Programming Language)', 'Programming Foundations'],
    pdfUrl:
      '/assets/aistudio/KU202605636_Rishi_Patel_CertificateOfCompletion_Complete_Guide_to_C_Programming_Foundations_43cdcead.pdf',
  },
  {
    id: 'solidworks-2024',
    title: 'SOLIDWORKS 2024 Essential Training',
    issuer: 'LinkedIn Learning',
    date: 'Nov 19, 2026',
    duration: '10 hr',
    skillsCovered: ['SOLIDWORKS', '3D CAD Modeling'],
    pdfUrl:
      '/assets/aistudio/KU202605636_Rishi_Patel_CertificateOfCompletion_SOLIDWORKS_2024_Essential_Training_0bdad46b.pdf',
  },
  {
    id: 'ai-intelligent-systems',
    title: 'Artificial Intelligence Foundations: Getting Started with Intelligent Systems',
    issuer: 'LinkedIn Learning',
    date: 'Nov 18, 2026',
    duration: '1 hr 25 min',
    skillsCovered: ['Machine Learning', 'Artificial Intelligence (AI)', 'Generative AI'],
    pdfUrl:
      '/assets/aistudio/KU202605636_Rishi_Patel_CertificateOfCompletion_Artificial_Intelligence_Foundations_Getting_Started_with_Intelligent_Systems_36f6ba93.pdf',
  },
  {
    id: 'leadership-feedback',
    title: 'Leadership through Feedback',
    issuer: 'LinkedIn Learning',
    date: 'Nov 15, 2026',
    duration: '1 hr 21 min',
    skillsCovered: ['Constructive Feedback', 'Leadership'],
    pdfUrl:
      '/assets/aistudio/KU202605636_Rishi_Patel_CertificateOfCompletion_Leadership_through_Feedback_31648578.pdf',
  },
  {
    id: 'jio-ai-workshop',
    title: 'AI Workshop Participation',
    issuer: 'Jio',
    date: '2026',
    skillsCovered: ['Artificial Intelligence', 'Practical AI Applications'],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description:
      'Identifying real-world bottlenecks—like agricultural intermediary gaps—and clarifying core problem constraints.',
    iconName: 'search',
  },
  {
    number: '02',
    title: 'RESEARCH & IDEATE',
    description:
      'Investigating root causes, evaluating hardware and AI concepts, and aligning on practical team approaches.',
    iconName: 'lightbulb',
  },
  {
    number: '03',
    title: 'DESIGN & PROTOTYPE',
    description:
      'Drafting CAD concepts in SOLIDWORKS, testing introductory Arduino circuits, and structuring solution flows.',
    iconName: 'pentool',
  },
  {
    number: '04',
    title: 'BUILD & ITERATE',
    description:
      'Writing foundational C logic, refining technical documentation, and improving through constructive feedback.',
    iconName: 'cpu',
  },
  {
    number: '05',
    title: 'PRESENT & DELIVER',
    description:
      'Communicating project impact clearly with structured decks, accountability, and collaborative teamwork.',
    iconName: 'presentation',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'Technical',
    label: 'Technical',
    items: ['C Programming (Beginner)', 'Arduino (Beginner)', 'SOLIDWORKS'],
  },
  {
    id: 'AI & ML',
    label: 'AI & ML Foundations',
    items: [
      'Artificial Intelligence (Foundations)',
      'Machine Learning (Foundations)',
      'Generative AI (Foundations)',
    ],
  },
  {
    id: 'Tools',
    label: 'Software & AI Tools',
    items: ['Canva', 'ChatGPT', 'Gemini', 'Claude'],
  },
  {
    id: 'Soft Skills',
    label: 'Soft Skills',
    items: [
      'Teamwork',
      'Communication',
      'Decision-Making',
      'Responsibility',
      'Accountability',
      'Leadership',
      'Constructive Feedback',
    ],
  },
  {
    id: 'Languages',
    label: 'Languages',
    items: ['Gujarati', 'Hindi', 'English'],
  },
];
