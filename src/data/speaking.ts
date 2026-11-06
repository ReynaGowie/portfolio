// Speaking and participation. Update `delivered` only after confirming.
export const stateOfState = {
  event: 'State of State 2026',
  host: 'Penn State',
  title: 'What Should a Penn State Degree Mean Now?',
  date: 'November 4, 2026',
  delivered: true, // confirmed by Reyna 2026-11-05
  question:
    'What should a degree demonstrate when AI can produce work that used to count as evidence of learning?',
  capabilities: ['Understand', 'Question', 'Judge', 'Create', 'Contribute'],
  photo: {
    src: '/images/state-of-state-2026.jpg',
    alt: 'Reyna Gowie speaking into a handheld microphone at a clear podium with a laptop, in front of dark stage curtains.',
    caption: 'Giving my State of State 2026 talk at Penn State, November 4.',
    // Photographer not yet confirmed. Add a credit here once known.
    credit: null as string | null,
  },
};

export const iyc14 = {
  event: '14th International Youth Conference (IYC14)',
  place: 'New York City',
  when: 'September 2026',
  role: 'Delegate',
  statement: 'Delivered a youth statement on September 23.',
};

export const participation = [
  {
    event: 'UN Digital Cooperation Day',
    when: 'September 21, 2026',
    label: 'Attended',
  },
];
