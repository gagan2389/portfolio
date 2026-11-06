export const PROFILE = {
  name: 'Gagan Gupta',
  first: 'Gagan',
  role: 'Front-End Developer',
  location: 'Ahmedabad, India',
  email: 'gupta.gagan2002@gmail.com',
  github: 'https://github.com/gagan2389',
  linkedin: 'https://www.linkedin.com/in/gagangupta06',
  site: 'https://gagangupta.site',
  resume: '/Gagan_Gupta_Resume.pdf',
};

export const BRANDS = ['CCTech', 'Aumnee', 'Adani Enterprises', 'Createlab', 'Dineq', 'ChaiKhata', 'StockPilot', 'Tirumala Tech'];

export const SKILL_PILLS: { label: string; logo?: string; color: string; glyph?: string }[] = [
  { label: 'React', logo: 'react', color: '#087EA4' },
  { label: 'TypeScript', logo: 'typescript', color: '#3178C6' },
  { label: 'Tailwind CSS', logo: 'tailwindcss', color: '#0891B2' },
  { label: 'Ant Design', logo: 'antdesign', color: '#1677FF' },
  { label: 'shadcn/ui', logo: 'shadcnui', color: '#101210' },
  { label: 'Form Engines', color: '#7FB81C', glyph: '{ }' },
  { label: 'Component Libraries', color: '#7FB81C', glyph: '◧' },
  { label: 'NestJS', logo: 'nestjs', color: '#E0234E' },
  { label: 'Claude Code', logo: 'claude', color: '#D97757' },
];

export const SKILL_GROUPS = [
  { cat: 'Core', items: 'React, TypeScript, JavaScript, HTML/CSS, Tailwind CSS, shadcn/ui, Ant Design, Bootstrap, Claude, GitHub' },
  { cat: 'Libraries & tooling', items: 'Ant Design, RTK Query, Vite, Git/GitHub' },
  { cat: 'Also used', items: 'NestJS, Node.js, Next.js, React Native, MUI, Angular, Nx, Figma, Java' },
  { cat: 'AI tools', items: 'Claude Code, Cursor, GitHub Copilot, OpenAI Codex, Antigravity, Trae, Stitch, Windsurf, ChatGPT' },
];

export const STEPS = [
  { n: '01', title: 'Understand', body: 'Sit with the people who use the product, gather requirements and learn the real pain points.' },
  { n: '02', title: 'Prototype', body: 'A working demo UI fast: first HTML demo from a PRD in half a day, full version in about a day and a half.' },
  { n: '03', title: 'Ship', body: 'Production React and TypeScript with reusable components, schema-driven forms and clean PRs.' },
];

export const CREDS = [
  {
    quote: 'Finalist, Google Cloud Agentic AI Day, recognised for building with agentic AI.',
    av: 'G',
    by: 'Finalist',
    org: 'Google Cloud Agentic AI Day',
  },
  {
    quote: 'Certificate of Recognition (Technical Lead), plus MATLAB, Android Studio and Object-Oriented Java training.',
    av: 'C',
    by: 'Certificate of Recognition',
    org: 'Technical Lead · Training courses',
  },
];

export interface Work {
  title: string;
  desc: string;
  tags: string[];
  href?: string;
  cursor: string;
}

export const WORKS: Work[] = [
  {
    title: 'HOTO · Handover/Takeover',
    desc: 'Plant-commissioning platform for a large renewable-energy company: inspection checklists, punch-point resolution, multi-role approvals and work-area access control. ~228 PRs shipped at CCTech.',
    tags: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui'],
    cursor: 'Case',
  },
  {
    title: 'Loan Origination & Management',
    desc: 'LOS and LMS for financial institutions. Led 3 developers, plus a config-driven form engine (500+ fields) and a 60+ component library.',
    tags: ['React', 'Ant Design', 'RTK Query', 'AJV'],
    cursor: 'Case',
  },
  {
    title: 'Dineq',
    desc: 'Dine-in app for Android, iOS and web: QR menu, table booking, ordering, waiter call and live queue.',
    tags: ['React Native', 'Cloudflare', 'Twilio OTP'],
    href: 'https://dineq.in',
    cursor: 'View',
  },
  {
    title: 'StockPilot',
    desc: 'Multi-tenant inventory management PWA where each business manages its own stock.',
    tags: ['React', 'TypeScript', 'Vite', 'Supabase'],
    href: 'https://stockpilot.createlab.in',
    cursor: 'View',
  },
  {
    title: 'Tirumala Tech',
    desc: 'Interactive 3D scroll-based website for an earthing and lightning arrestor company.',
    tags: ['React', 'React Three Fiber'],
    href: 'https://v2.tirumalatech.in/',
    cursor: 'View',
  },
  {
    title: 'ChaiKhata',
    desc: 'PWA for chai businesses to track customer credit and daily orders.',
    tags: ['React', 'Supabase'],
    href: 'https://chaikhata.createlab.in',
    cursor: 'View',
  },
  {
    title: 'Optron Industries',
    desc: 'Corporate website with product catalog, services and a business inquiry flow.',
    tags: ['Website', 'Inquiry flow'],
    href: 'https://optronindustries.com',
    cursor: 'View',
  },
  {
    title: 'Createlab',
    desc: 'Digital agency I run, building websites, mobile apps and custom software for startups.',
    tags: ['Agency', 'Web', 'Mobile'],
    href: 'https://createlab.in',
    cursor: 'View',
  },
];

export const EXPERIENCE = [
  { role: 'Forward Deployed Engineer', co: 'CCTech', yr: '08/2026 → Now' },
  { role: 'Member of Technical Staff', co: 'CCTech', yr: '04/2026 → 08/2026' },
  { role: 'Software Engineer', co: 'Aumnee', yr: '12/2024 → 01/2026' },
  { role: 'Software Engineer Intern', co: 'Aumnee', yr: '06/2024 → 12/2024' },
  { role: 'Web Development Intern', co: 'Adani Enterprises', yr: '07/2023 → 08/2023' },
  { role: 'B.Tech · Computer Science', co: 'VIT-AP University', yr: '2020 → 2024' },
];
