// Single source of truth for public profile facts. Edit here, not in pages.
export const profile = {
  name: 'Reyna Gowie',
  headline: 'I build AI and ask who it’s built for.',
  shortBio:
    'Enterprise Technology Integration student at Penn State and AI Engineer Co-Op at IBM.',
  school: 'Penn State University',
  major: 'Enterprise Technology Integration, B.S.',
  expectedGraduation: 'Spring 2028',
  certificate: 'Smeal College Business Fundamentals Certificate (in progress)',
  scholar: 'Millennium Scholar',
  ibmTitle: 'AI Engineer Co-Op at IBM',
  ibmSentence: 'I apply AI to business problems.',
  linkedin: 'https://www.linkedin.com/in/reyna-gowie',
  // Leave null until Reyna supplies an approved public email.
  email: null as string | null,
  // Set to the real file path once an approved headshot is added to
  // public/images/. While null, a clearly marked development placeholder shows.
  headshot: {
    src: '/images/reyna-gowie-headshot.jpg',
    alt: 'Reyna Gowie smiling in a black blazer, standing outside a glass building on a sunny day.',
  } as null | { src: string; alt: string },
};

// Course details change, so they live in one place.
export const guessWho = {
  code: 'PHIL 197-002',
  title: 'Guess Who? Identity, Recognition, and Representation',
  term: 'Spring 2027',
  schedule: 'Thursdays, 1–3 p.m.',
  seats: 20,
  advisor: 'Professor John Christman',
};

// Press coverage. Link only; don't copy the article text onto the site.
export const press = [
  {
    outlet: 'Onward State',
    title: 'Penn State Student Reyna Gowie Turns Classic Board Game Into Philosophy Course Through Students Teaching Students',
    url: 'https://onwardstate.com/2026/10/16/penn-state-student-turns-classic-board-game-into-philosophy-course-through-students-teaching-students/',
    date: 'October 16, 2026',
  },
];

export const nav = [
  { href: '/about/', label: 'About' },
  { href: '/projects/', label: 'Projects' },
  { href: '/speaking/', label: 'Speaking' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];
