import type { ContactInfo, EducationItem, ExperienceItem, Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'prehoto',
    name: 'PreHOTO — HOTO Module',
    sub: 'Plant-commissioning platform · Adani Green Energy · CCTECH',
    tags: ['React 19', 'TypeScript (strict)', 'Vite 6', 'Tailwind CSS v4', 'shadcn/ui'],
    bullets: [
      'Built the complete Handover/Takeover (HOTO) module end-to-end — inspection checklists, punch-point resolution, multi-role approvals and work-area-based access control.',
      'Built an Excel/CSV bulk-import pipeline (ExcelJS + Web Worker) for punch-point checklists.',
      'Extended the Pre-Commissioning Clearance (PCC) flow into HOTO: PCC-CFT checklist section, O&M approve/resend actions, a remarks timeline, and work-area-based PCC resolution.',
      'Shipped ~70 PRs across a 20+ engineer monorepo.',
    ],
  },
  {
    id: 'los',
    name: 'Loan Origination System (LOS)',
    sub: 'Aumnee · Financial institutions',
    tags: ['React', 'Ant Design', 'Vite', 'Tailwind CSS', 'RTK Query'],
    bullets: [
      'Owned the end-to-end development of a Loan Origination System, leading a team of 3 developers.',
      'Drove an 80% increase in monthly loan disbursements for clients.',
      'Built with React, Ant Design, Vite, Tailwind CSS and RTK Query.',
    ],
  },
  {
    id: 'marvin',
    name: 'Marvin — Co-Lending Platform',
    sub: 'Aumnee · Omni UI · Banks × NBFCs',
    tags: ['React', 'Ant Design', 'i18next', 'JSON Schema'],
    bullets: [
      'Co-lending platform enabling collaboration between banks and NBFCs.',
      'Developed key modules: LMS Config, LOS Config, Rules Management, Collections & Repayments, POS Error UI.',
      'Integrated i18next and a JSON Schema Viewer to enhance localization and schema visualisation.',
    ],
  },
  {
    id: 'dineq',
    name: 'Dineq',
    sub: 'FoodTech POS & Restaurant Management System',
    tags: ['QR Ordering', 'POS', 'Queue Mgmt', 'Inventory', 'Staff Mgmt'],
    bullets: [
      'Self-service restaurant platform covering QR ordering, queue management, POS, inventory, staff scheduling and valet — end to end, for a seamless dine-in experience.',
      'QR Menu: touchless, dynamic digital menu with real-time pricing/availability, plus integrated in-menu ordering and payments.',
      'Queue Management: smart waitlist with guest notifications to cut wait times and improve seating efficiency.',
      'Order Management: unified, automated tracking for dine-in, takeaway and delivery from placement to delivery.',
      'POS Management: fast, error-free billing with digital payments and automated receipts.',
      'Inventory & Staff Management: real-time stock tracking with reorder alerts, plus automated scheduling and performance tracking.',
      'Measurable impact: operations streamlined by up to 70%, with 95% customer satisfaction.',
    ],
  },
  {
    id: 'optron',
    name: 'Optron Industries',
    sub: 'Corporate website · Product showcase',
    tags: ['Responsive Website'],
    bullets: ['Built a responsive website for Optron Industries to showcase products and boost brand visibility.'],
  },
  {
    id: 'oneinflu',
    name: 'OneInflu',
    sub: 'Influencer marketing platform · Brands × Creators',
    tags: ['Responsive Website'],
    bullets: ['Created a responsive website for an influencer marketing platform connecting brands and creators.'],
  },
  {
    id: 'northstar',
    name: 'NorthStar',
    sub: 'NorthStar Academy · CMA (USA) programs',
    tags: ['Responsive Website'],
    bullets: [
      'Built a responsive website for NorthStar Academy to promote CMA (USA) programs and drive lead conversions.',
    ],
  },
];

export const SKILLS: SkillCategory[] = [
  { cat: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'XML', 'PHP', 'Java'] },
  { cat: 'Frameworks & Libraries', items: ['React', 'Ant Design', 'MUI', 'Tailwind CSS', 'Angular', 'Bootstrap', 'Chart.js', 'NestJS'] },
  { cat: 'Tools', items: ['GitHub', 'Vite', 'Nx', 'Figma', 'Npm'] },
  { cat: 'AI Tools', items: ['Cursor', 'Antigravity', 'Trae', 'GitHub Copilot', 'Stitch', 'Claude Code', 'OpenAI Codex', 'ChatGPT', 'Windsurf'] },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Member of Technical Staff',
    org: 'CCTECH',
    meta: '04/2026 – Present · Ahmedabad, Gujarat',
    body: 'Building the HOTO module on PreHOTO, a plant-commissioning platform for Adani Green Energy, plus supporting NestJS backend changes.',
  },
  {
    role: 'Software Engineer 1',
    org: 'Aumnee',
    meta: '12/2024 – 01/2026 · Bengaluru, Karnataka',
    body: 'Led a 3-person team on a Loan Origination System, and built a config-driven form engine and 60+ component design system.',
  },
  {
    role: 'Software Developer Intern',
    org: 'Aumnee',
    meta: '06/2024 – 12/2024 · Bengaluru, Karnataka',
    body: 'Built responsive React/Ant Design interfaces for Omni UI and Marvin, a bank × NBFC co-lending platform.',
  },
];

export const EDUCATION: EducationItem[] = [
  { school: 'Vellore Institute of Technology', degree: 'B.Tech, Computer Science & Engineering', years: '2020 – 2024' },
  { school: 'Sri Chaitanya Junior College', degree: 'Class XII', years: '2018 – 2020' },
];

export const CONTACT: ContactInfo = {
  name: 'Gagan Gupta',
  role: 'Front-End Developer',
  msg: "Got an idea? A bug to squash? Or just wanna talk tech? I'm in.",
  email: 'gupta.gagan2002@gmail.com',
  phone: '+91 8247555493',
  github: 'gagan2389',
};
