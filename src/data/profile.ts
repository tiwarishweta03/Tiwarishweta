const asset = (path: string) => {
  const base = import.meta.env.BASE_URL || '/'
  const normalized = path.replace(/^\/+/, '')
  return `${base}${normalized}`
}

export const profile = {
  name: 'Shweta Tiwari',
  brand: 'Shweta',
  title: 'HR Business Partner',
  subtitle: 'Organizational Development & Employee Engagement Specialist',
  tagline: 'People strategy that moves business forward',
  availability: 'Open to multinational HRBP · OD · Talent roles',
  location: 'Open to relocate · hybrid · remote-friendly',
  phone: '+91 9368504295',
  phoneHref: 'tel:+919368504295',
  email: 'tiwarishweta1103@gmail.com',
  emailHref: 'mailto:tiwarishweta1103@gmail.com?subject=Opportunity%20%E2%80%94%20HR%20Business%20Partner',
  resumePath: asset('ShwetaTiwariResume2026.pdf'),
  resumeUrl: asset('ShwetaTiwariResume2026.pdf'),
  whatsappHref: `https://wa.me/919368504295?text=${encodeURIComponent('Hi Shweta, I found your portfolio and would like to discuss an HR opportunity.')}`,
  portraitClose: asset('portraits/portrait-close.png'),
  portraitFull: asset('portraits/portrait-full.png'),
  summary:
    'HR Business Partner with 4+ years driving talent management, organizational development, employee engagement, and learning across manufacturing and corporate environments. Partners with business leaders on people strategies that support growth, capability, and retention — currently deepening Digital HR & AI-driven analytics at XLRI Jamshedpur.',
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'shweta-tiwari-0308',
      href: 'https://www.linkedin.com/in/shweta-tiwari-0308/',
      url: 'https://www.linkedin.com/in/shweta-tiwari-0308/',
      thumbnail: asset('social/linkedin.svg'),
      description:
        'The professional home for her HRBP journey — leadership notes, OD thinking, campus talent work, and updates recruiters actually scan. Follow for signal, not noise.',
      blurb: 'Career, capability, and people leadership in public.',
      cta: 'View full profile',
      accent: '#0A66C2',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@ishraq_______',
      href: 'https://www.instagram.com/ishraq_______/',
      url: 'https://www.instagram.com/ishraq_______/',
      thumbnail: asset('social/instagram.svg'),
      description:
        'A quieter lens beyond the boardroom — culture, calm, and the human texture that makes great workplaces feel real.',
      blurb: 'Personal rhythm, visual storytelling, everyday presence.',
      cta: 'Follow along',
      accent: '#E1306C',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      handle: 'shweta.tiwari.3572',
      href: 'https://www.facebook.com/shweta.tiwari.3572',
      url: 'https://www.facebook.com/shweta.tiwari.3572',
      thumbnail: asset('social/facebook.svg'),
      description:
        'Community updates, celebrations, and long-form connections with colleagues, campus cohorts, and people who have built teams with her.',
      blurb: 'Network, milestones, and community threads.',
      cta: 'Connect here',
      accent: '#1877F2',
    },
  ],
} as const

export const languages = [
  { name: 'English', level: 'Proficient' },
  { name: 'Hindi', level: 'Native' },
] as const

export const metrics = [
  { value: '4+', label: 'Years in HRBP', detail: 'Manufacturing & corporate people leadership' },
  { value: '1', label: 'Excellence Award', detail: 'Young talent & campus pipelines' },
  { value: '3+', label: 'Flagship L&D programs', detail: 'EKCAP · Udaan · Campus Capability' },
  { value: 'XLRI', label: 'Digital HR track', detail: 'AI-driven HR analytics in progress' },
] as const

export const achievements = [
  {
    title: 'Excellence Award',
    subtitle: 'Young talent & campus pipelines',
    body: 'Recognized for promoting young talent and leading campus development initiatives that strengthened future leadership pipelines across the organization.',
    tone: 'gold' as const,
    image: asset('portraits/portrait-full.png'),
  },
  {
    title: 'Leadership Connect',
    subtitle: 'Employee engagement',
    body: 'Delivered Leadership Connect, Career Pathing, and Aspirational Achievement programs that lifted employee experience and workforce engagement.',
    tone: 'mist' as const,
    image: asset('portraits/portrait-close.png'),
  },
  {
    title: 'EKCAP · Udaan · Campus Capability',
    subtitle: 'Capability building',
    body: 'Led capability development programs that improved workforce readiness and business performance across functions.',
    tone: 'clay' as const,
    image: asset('portraits/portrait-full.png'),
  },
  {
    title: 'Diversity & Inclusion',
    subtitle: 'Inclusive culture',
    body: 'Drove DEI initiatives focused on workplace inclusivity and diverse talent representation — culture work that shows up in retention and belonging.',
    tone: 'ember' as const,
    image: asset('portraits/portrait-close.png'),
  },
]

export const experience = {
  role: 'Manager – Human Resources Business Partner',
  company: 'Escorts Kubota Limited',
  period: 'Jul 2022 – Present',
  programs: [
    'Leadership Connect',
    'Career Pathing',
    'Aspirational Achievement',
    'EKCAP',
    'Udaan',
    'Campus Capability',
  ],
  bullets: [
    'Partner with business leaders on engagement, workforce planning, performance management, and talent development.',
    'Design and deliver learning interventions aligned to business capability needs.',
    'Manage employee lifecycle — onboarding, engagement, performance reviews, and employee support.',
    'Support DEI, policy implementation, compliance, and organizational effectiveness.',
    'Enable cultural integration and change management during transformation programs.',
    'Use LMS platforms and workforce analytics to track learning effectiveness and development outcomes.',
  ],
} as const

export const education = [
  {
    school: 'XLRI Jamshedpur',
    degree:
      'Executive Development Programme — Digital HR Transformation & AI-Driven HR Analytics',
    period: '2026 – 2027',
    place: 'Jamshedpur, India',
    note: 'Building fluency in digital HR systems, people analytics, and AI-assisted workforce decisions — the next layer for enterprise HRBP work.',
  },
  {
    school: 'Amity University',
    degree: 'MBA — Human Resource Management',
    period: '2022',
    place: 'Noida, India',
    note: 'Graduate foundation in talent systems, organizational behavior, and strategic HR — translated quickly into manufacturing HRBP practice.',
  },
  {
    school: 'MIET',
    degree: 'Bachelor of Technology (B.Tech)',
    period: '2019',
    place: 'India',
    note: 'Engineering discipline that still shapes her approach: structured problem-solving, process clarity, and comfort with operational environments.',
  },
] as const

export const skills = [
  'HR Business Partnering',
  'Talent Management',
  'Organizational Development',
  'Employee Engagement',
  'Workforce Planning',
  'Learning & Development',
  'Performance Management',
  'Employee Lifecycle',
  'Change Management',
  'Diversity & Inclusion',
  'Employee Relations',
  'Succession Planning',
  'Leadership Development',
  'HR Analytics',
  'Power BI',
  'Stakeholder Management',
  'Employer Branding',
  'Cross-Functional Collaboration',
] as const
