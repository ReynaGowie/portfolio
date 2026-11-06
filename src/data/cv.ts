// Public-safe facts from Reyna's Fall 2026 CV. IBM project names/details,
// internal links, GPA, and Dean's List are intentionally excluded.

export const experience = [
  {
    role: 'AI Engineer Co-Op',
    org: 'IBM · Financial Services Market',
    when: 'May 2026–present',
    // From Reyna's public LinkedIn and CV. No project names or internal details.
    bullets: [
      'Support applied AI solution development for Financial Services Market clients within IBM Client Engineering, turning client needs into technical concepts, demos, and proof-of-value work.',
      'Collaborate with technical sales, engineering, and market teams to translate client needs into AI-enabled workflows and demonstrations.',
      'Apply Python, AI-assisted development tools, and technical documentation practices to prototype, evaluate, and communicate enterprise technology solutions.',
    ],
  },
  {
    role: 'Project Engineering Intern',
    org: 'Whiting-Turner Contracting Company · Morristown, NJ',
    when: 'June–August 2024',
    bullets: [
      'Performed quantity takeoffs on architectural drawings for material and cost estimation.',
      'Developed and updated project schedules to meet deadlines and track progress.',
      'Coordinated and led site walks with stakeholders to address concerns.',
    ],
  },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'SQL', 'JavaScript', 'HTML/CSS', 'Node.js', 'Linux/command line'] },
  { group: 'Tools', items: ['Git and GitHub', 'Supabase', 'Figma', 'Claude Code', 'Cisco Packet Tracer', 'CloudShark', 'AI-assisted development'] },
  { group: 'Research and communication', items: ['Quantitative research', 'Data analysis', 'Literature review', 'Research synthesis', 'Technical documentation', 'Public speaking'] },
];

export const certifications = [
  { name: 'watsonx.governance Sales Foundation', issuer: 'IBM', when: 'October 2026' },
  { name: 'IBM Bob Intermediate', issuer: 'IBM', when: 'July 2026' },
  { name: 'Enterprise Design Thinking Practitioner', issuer: 'IBM', when: 'July 2026' },
  { name: 'Social and Behavioral Human Subjects Research (IRB)', issuer: 'CITI Program', when: 'March 2026' },
  { name: 'Product Management: Building AI-Powered Products', issuer: 'Skillshare', when: 'January 2026' },
  { name: 'IBM AI Foundations for Business', issuer: 'IBM', when: 'October 2025' },
];

// Official public name NEEDS VERIFICATION (see Affiliations notes).
export const committee = {
  name: 'Student Advisory Committee on AI',
  org: 'Penn State Office of the Provost',
  role: 'Advisor',
  when: 'October 2026–present',
  bullets: [
    'Invited by the Provost to serve on a committee of student leaders, faculty, and staff advising how Penn State responds to AI.',
    'Focus on AI in teaching and learning, including how AI skills are built into the curriculum and how students demonstrate what they’ve learned.',
  ],
};

export const technicalProjects = [
  {
    id: 'network-strain-monitor',
    title: 'Network Strain Monitor',
    kind: 'Python systems project',
    when: 'April 2026',
    summary:
      'A packet-analysis tool that reads PCAP files and turns raw network traffic into readable signals, such as protocol mix, host concentration, DNS activity, and repeated connection attempts. A System Strain Index flags concentrated load and retry patterns, and the tool writes CSV, JSON, and Markdown reports.',
    link: { label: 'Code on GitHub', url: 'https://github.com/ReynaGowie/network-strain-monitor' },
  },
  {
    id: 'crunch',
    title: 'Crunch',
    kind: 'Web app (React, TypeScript, Supabase)',
    when: 'September 2025',
    summary:
      'A restaurant discovery prototype for seed-oil-free and diet-conscious dining. I built it with React, Vite, TypeScript, and Supabase and deployed it on Vercel, with dynamic filtering and database-backed restaurant profiles.',
    link: { label: 'Try the live app', url: 'https://crunch-liart.vercel.app/' },
  },
  {
    id: 'operating-density-dashboard',
    title: 'Operating Density Dashboard',
    kind: 'Python and Vite analytics project',
    when: 'March 2026',
    summary:
      'An interactive dashboard comparing public companies on labor productivity, profitability, operating margin, and market value per employee. A story layer explains what it means when a company’s metrics disagree, without making investment recommendations.',
    link: null as null | { label: string; url: string },
  },
  {
    id: 'reliability-premium',
    title: 'The Reliability Premium: Capacity-Constrained Models of Labor Productivity',
    kind: 'Independent research',
    when: 'January–May 2026',
    summary:
      'Research on how working hours, sleep, health, and changing capacity affect productivity and participation. I analyzed more than 337,000 observations from macroeconomic, American Time Use Survey, and physiological datasets in Python, with reproducible analyses and recommendations for health-aware AI tools and workplaces.',
    link: { label: 'Research repository on GitHub', url: 'https://github.com/ReynaGowie/reliability-premium-synthesis' },
  },
  {
    id: 'empowering-women-at-work',
    title: 'Empowering Women at Work',
    kind: 'Literature review',
    when: 'July–October 2024',
    summary:
      'A literature review on how menstrual cycle hormonal changes relate to energy, productivity, and well-being at work, connected to UN Sustainable Development Goals 3, 5, and 8. I turned the findings into a poster presented at SACNAS NDiSTEM 2024.',
    link: null as null | { label: string; url: string },
  },
];

export const presentations = [
  {
    title: 'From Optimization to Capacity Support: Rethinking AI Assistants for Health-Aware Work',
    venue: 'AIxPH 2026, Artificial Intelligence and Public Health Conference, Baltimore, MD',
    when: 'October 2026',
    kind: 'Poster',
  },
  {
    title: 'Empowering Women at Work: A Literature Review of the Intersection Between Menstrual Health, Sustainable Productivity, and United Nations’ Sustainable Development Goals 3, 5, and 8',
    venue: 'SACNAS NDiSTEM Conference, Phoenix, AZ',
    when: '2024',
    kind: 'Poster',
  },
  {
    title: 'Autism Discrimination and Special Needs Integration in American Classrooms',
    venue: 'SACNAS NDiSTEM Conference, Portland, OR',
    when: '2023',
    kind: 'Poster',
  },
  {
    title: 'Autism Discrimination and Special Needs Integration in American Classrooms',
    venue: 'Mount Saint Dominic Academy Research Symposium, West Caldwell, NJ',
    when: '2023',
    kind: 'Poster',
  },
];

// Writing published elsewhere (linked, not copied). Substack posts were
// checked 2026-11-06: only posts with no personal medical details or Auralis
// mentions are listed.
export const substack = {
  name: 'Work in Mind',
  url: 'https://reynasimone.substack.com/',
};

export const elsewhere = [
  {
    title: 'What AIxPH showed me about the people side of AI in public health',
    outlet: 'LinkedIn',
    when: 'October 2026',
    url: 'https://www.linkedin.com/pulse/what-aixph-showed-me-people-side-ai-public-health-reyna-simone-gowie-5onne/',
  },
  {
    title: 'Who Gets to Define Success for AI? Notes from UNGA 81',
    outlet: 'LinkedIn',
    when: 'September 2026',
    url: 'https://www.linkedin.com/pulse/who-gets-define-success-ai-notes-from-unga-81-reyna-simone-gowie-l7fsc/',
  },
  {
    title: 'An Open Bed Isn’t Shelter',
    outlet: 'Work in Mind (Substack)',
    when: 'September 2026',
    url: 'https://reynasimone.substack.com/p/an-open-bed-isnt-shelter',
  },
  {
    title: 'Your Calendar Is Always the Last to Know',
    outlet: 'Work in Mind (Substack)',
    when: 'April 2026',
    url: 'https://reynasimone.substack.com/p/the-earliest-sign-youre-heading-toward',
  },
  {
    title: 'Welcome to the Meme-ification of Thought: Are Quick Takes Killing Depth?',
    outlet: 'Work in Mind (Substack)',
    when: 'April 2026',
    url: 'https://reynasimone.substack.com/p/welcome-to-the-meme-ification-of',
  },
];
