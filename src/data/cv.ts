// Public-safe facts from Reyna's Fall 2026 CV. IBM project names/details,
// internal links, GPA, and Dean's List are intentionally excluded.

export const experience = [
  {
    role: 'AI Engineer Co-Op',
    org: 'IBM',
    when: 'May 2026–present',
    note: 'I apply AI to business problems.',
  },
  {
    role: 'Project Engineering Intern',
    org: 'Whiting-Turner Contracting Company',
    when: 'Summer 2024',
    note: 'Estimated materials and costs from architectural drawings, kept project schedules current, and led site walks with stakeholders.',
  },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'SQL', 'JavaScript', 'HTML/CSS', 'Node.js', 'Linux/command line'] },
  { group: 'Tools', items: ['Git and GitHub', 'Supabase', 'Figma', 'Claude Code', 'Cisco Packet Tracer', 'CloudShark', 'AI-assisted development'] },
  { group: 'Research and communication', items: ['Quantitative research', 'Data analysis', 'Literature review', 'Research synthesis', 'Technical documentation', 'Public speaking'] },
];

export const certifications = [
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
  role: 'Member',
  when: 'October 2026–present',
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
