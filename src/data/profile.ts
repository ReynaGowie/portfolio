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
  headshot: null as null | { src: string; alt: string },
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

export const nav = [
  { href: '/about/', label: 'About' },
  { href: '/projects/', label: 'Projects' },
  { href: '/speaking/', label: 'Speaking' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];
