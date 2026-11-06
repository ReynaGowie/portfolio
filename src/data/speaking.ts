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
    // Reyna confirmed 2026-11-05: fine to post, no credit wanted.
    credit: null as string | null,
  },
};

export const iyc14 = {
  event: '14th International Youth Conference (IYC14)',
  place: 'New York City',
  when: 'September 2026',
  role: 'Delegate',
  statement: 'Delivered a youth statement on September 23.',
  photo: {
    src: '/images/iyc14-youth-statement.jpg',
    alt: 'Reyna Gowie at a podium in front of an International Youth Conference backdrop, delivering a youth statement.',
    caption: 'Delivering my youth statement at IYC14 in New York City.',
    // Reyna confirmed 2026-11-05: fine to post, no credit wanted.
    credit: null as string | null,
  },
};

export const participation = [
  {
    event: 'UN Digital Cooperation Day',
    when: 'September 21, 2026',
    label: 'Attended',
    photo: {
      src: '/images/un-digital-cooperation-day.jpg',
      alt: 'Reyna Gowie wearing an event badge, standing in front of a United Nations Digital Cooperation Day backdrop.',
      caption: 'At UN Digital Cooperation Day in New York, September 21.',
    },
  },
];
