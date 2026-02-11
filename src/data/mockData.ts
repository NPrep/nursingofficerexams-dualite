// This file simulates a CMS database
export interface Exam {
  id: string;
  title: string;
  category: 'Central' | 'State' | 'Institutional';
  description: string;
  conductingBody: string;
  vacancies: string;
  eligibility: string;
  salary: string;
  syllabus: string[];
  pattern: { subject: string; questions: number; marks: number }[];
  importantDates: { event: string; date: string }[];
}

export const exams: Exam[] = [
  {
    id: 'aiims-norcet',
    title: 'AIIMS NORCET',
    category: 'Central',
    description: 'Recruitment for Nursing Officers in all AIIMS institutes.',
    conductingBody: 'AIIMS New Delhi',
    vacancies: '3000+ (Expected)',
    eligibility: 'B.Sc Nursing / Post Basic B.Sc Nursing OR GNM with 2 years experience.',
    salary: 'Level 7 (₹44,900 - ₹1,42,400)',
    syllabus: ['Medical Surgical Nursing', 'Pediatrics', 'OBG', 'Psychiatry', 'Community Health', 'Fundamentals of Nursing'],
    pattern: [
      { subject: 'Nursing Subjects', questions: 180, marks: 180 },
      { subject: 'General Knowledge & Aptitude', questions: 20, marks: 20 }
    ],
    importantDates: [
      { event: 'Notification Release', date: 'April 2025' },
      { event: 'Exam Date', date: 'June 2025' }
    ]
  },
  {
    id: 'rrb-staff-nurse',
    title: 'RRB Staff Nurse',
    category: 'Central',
    description: 'Staff Nurse posts in Indian Railways hospitals.',
    conductingBody: 'Railway Recruitment Board',
    vacancies: '1200+ (Zone wise)',
    eligibility: 'GNM / B.Sc Nursing from recognized institution.',
    salary: 'Level 7 (7th CPC)',
    syllabus: ['Anatomy', 'Physiology', 'Nutrition', 'Biochemistry', 'Psychology', 'Microbiology', 'General Awareness'],
    pattern: [
      { subject: 'Professional Ability', questions: 70, marks: 70 },
      { subject: 'General Science', questions: 10, marks: 10 },
      { subject: 'General Arithmetic', questions: 10, marks: 10 },
      { subject: 'General Intelligence', questions: 10, marks: 10 }
    ],
    importantDates: [
      { event: 'Notification Release', date: 'Expected 2026' },
      { event: 'Exam Date', date: 'TBA' }
    ]
  },
  {
    id: 'esic-nursing-officer',
    title: 'ESIC Nursing Officer',
    category: 'Central',
    description: 'Nursing Officers for ESIC hospitals and dispensaries.',
    conductingBody: 'ESIC / UPSC',
    vacancies: '1930 (Recent)',
    eligibility: 'B.Sc Nursing or GNM with 1 year experience.',
    salary: 'Level 7',
    syllabus: ['Nursing Foundation', 'MSN', 'Pediatrics', 'Mental Health', 'Sociology'],
    pattern: [
      { subject: 'Nursing Subjects', questions: 100, marks: 100 },
      { subject: 'General Ability', questions: 25, marks: 25 }
    ],
    importantDates: [
      { event: 'Application Start', date: 'March 2025' }
    ]
  },
  {
    id: 'dsssb-nursing-officer',
    title: 'DSSSB Nursing Officer',
    category: 'State',
    description: 'Recruitment for Delhi Govt hospitals like LNJP, GTB.',
    conductingBody: 'DSSSB',
    vacancies: '1500+',
    eligibility: 'GNM / B.Sc Nursing + Nursing Council Registration.',
    salary: 'Level 7',
    syllabus: ['Nursing Tech', 'General Awareness', 'Reasoning', 'Maths', 'Hindi', 'English'],
    pattern: [
      { subject: 'Section A (General)', questions: 100, marks: 100 },
      { subject: 'Section B (Nursing)', questions: 100, marks: 100 }
    ],
    importantDates: []
  },
  {
    id: 'jipmer-nursing-officer',
    title: 'JIPMER Nursing Officer',
    category: 'Institutional',
    description: 'Institute of National Importance recruitment.',
    conductingBody: 'JIPMER',
    vacancies: 'Varies Yearly',
    eligibility: 'B.Sc Nursing or GNM + 2 Years Exp.',
    salary: 'Level 7',
    syllabus: ['Related to Nursing', 'General English', 'Logic & Reasoning', 'General Awareness'],
    pattern: [
      { subject: 'Nursing Subjects', questions: 70, marks: 280 },
      { subject: 'General Areas', questions: 30, marks: 120 }
    ],
    importantDates: []
  },
  {
    id: 'up-staff-nurse',
    title: 'UPPSC Staff Nurse',
    category: 'State',
    description: 'Staff nurses for UP state medical colleges.',
    conductingBody: 'UPPSC',
    vacancies: '2240',
    eligibility: 'GNM / B.Sc Nursing + UP Nursing Council Registration.',
    salary: 'Grade Pay 4600',
    syllabus: ['Nursing Subjects', 'General Hindi', 'General Knowledge'],
    pattern: [
      { subject: 'Nursing', questions: 120, marks: 60 },
      { subject: 'General Knowledge', questions: 30, marks: 15 },
      { subject: 'General Hindi', questions: 20, marks: 10 }
    ],
    importantDates: [
      { event: 'Exam Date', date: 'August 2025' }
    ]
  }
];

// New Data for Upcoming Exams Table
export const upcomingExams = [
  {
    name: 'AIIMS NORCET 10',
    body: 'AIIMS New Delhi',
    date: 'April 11, 2026',
    link: 'https://www.aiimsexams.ac.in/',
    actionLabel: 'Official Site'
  },
  {
    name: 'RRB Nursing Superintendent 2026',
    body: 'Railway Recruitment Board',
    date: '10-13th March',
    link: 'https://indianrailways.gov.in/',
    actionLabel: 'Official Site'
  },
  {
    name: 'ESIC Nursing Officer',
    body: 'UPSC / ESIC',
    date: 'To be announced',
    link: 'https://www.esic.gov.in/',
    actionLabel: 'Official Site'
  },
  {
    name: 'DSSSB Nursing Officer',
    body: 'DSSSB Delhi',
    date: 'To be announced',
    link: 'https://dsssb.delhi.gov.in/',
    actionLabel: 'Official Site'
  },
  {
    name: 'UPPSC Staff Nurse',
    body: 'UPPSC',
    date: 'To be announced',
    link: 'https://uppsc.up.nic.in/',
    actionLabel: 'Official Site'
  },
  {
    name: 'JIPMER Nursing Officer',
    body: 'JIPMER',
    date: 'To be announced',
    link: 'https://jipmer.edu.in/',
    actionLabel: 'Official Site'
  }
];

// Comprehensive list for the Exams Page with detailed SEO descriptions
export const comprehensiveExams = [
  {
    category: "Central Government Exams",
    description: "Recruitment for central government hospitals and ministries.",
    exams: [
      { 
        name: "AIIMS NORCET", 
        link: "https://www.aiimsexams.ac.in/",
        description: "Premier gateway for AIIMS institutes. High salary & job security."
      },
      { 
        name: "RRB Staff Nurse", 
        link: "https://indianrailways.gov.in/",
        description: "Indian Railways medical department recruitment. Excellent perks."
      },
      { 
        name: "ESIC Nursing Officer", 
        link: "https://www.esic.gov.in/",
        description: "Recruitment for ESIC hospitals nationwide. Balanced work-life."
      },
      { 
        name: "DSSSB Nursing Officer", 
        link: "https://dsssb.delhi.gov.in/",
        description: "Delhi Govt hospitals recruitment. High salary package."
      },
      { 
        name: "UPSC Nursing Officer", 
        link: "https://upsc.gov.in/",
        description: "Gazetted/Non-gazetted posts in central ministries."
      },
      { 
        name: "Military Nursing Service", 
        link: "https://joinindianarmy.nic.in/",
        description: "Commissioned officer posts in Indian Armed Forces."
      }
    ]
  },
  {
    category: "Autonomous Institutes",
    description: "Prestigious medical institutes conducting own exams.",
    exams: [
      { 
        name: "JIPMER Nursing Officer", 
        link: "https://jipmer.edu.in/",
        description: "Institute of National Importance in Puducherry."
      },
      { 
        name: "PGIMER Nursing Officer", 
        link: "https://pgimer.edu.in/",
        description: "Premier research institute in Chandigarh."
      },
      { 
        name: "NIMHANS Nursing Officer", 
        link: "https://nimhans.ac.in/",
        description: "Focus on psychiatric and neurological nursing."
      },
      { 
        name: "SGPGI Nursing Officer", 
        link: "https://sgpgims.org.in/",
        description: "Super-specialty hospital in Lucknow."
      },
      { 
        name: "RML Hospital", 
        link: "https://rmlh.nic.in/",
        description: "Central government hospital in New Delhi."
      }
    ]
  },
  {
    category: "State PSC Exams",
    description: "Permanent posts in state medical colleges.",
    exams: [
      { 
        name: "UPPSC Staff Nurse", 
        link: "https://uppsc.up.nic.in/",
        description: "Largest nursing recruitment in Uttar Pradesh."
      },
      { 
        name: "UKMSSB Nursing Officer", 
        link: "https://ukmssb.org/",
        description: "Govt Medical Colleges in Uttarakhand."
      },
      { 
        name: "BTSC Staff Nurse", 
        link: "https://btsc.bih.nic.in/",
        description: "Bihar Technical Service Commission recruitment."
      },
      { 
        name: "OSSSC Nursing Officer", 
        link: "https://www.osssc.gov.in/",
        description: "District cadre posts in Odisha."
      },
      { 
        name: "RPSC Staff Nurse", 
        link: "https://rpsc.rajasthan.gov.in/",
        description: "Rajasthan state nursing recruitment."
      }
    ]
  },
  {
    category: "CHO Exams",
    description: "Contractual posts under National Health Mission.",
    exams: [
      { 
        name: "NHM UP CHO", 
        link: "https://upnrhm.gov.in/",
        description: "Health & Wellness Centers in Uttar Pradesh."
      },
      { 
        name: "NHM MP CHO", 
        link: "https://www.nhmmp.gov.in/",
        description: "Primary healthcare services in Madhya Pradesh."
      },
      { 
        name: "NHM Rajasthan CHO", 
        link: "https://rajswasthya.nic.in/",
        description: "Ayushman Bharat implementation in Rajasthan."
      },
      { 
        name: "SHSB Bihar CHO", 
        link: "http://statehealthsocietybihar.org/",
        description: "Mid-level health providers in Bihar."
      }
    ]
  }
];

export const blogs = [
  {
    id: 'how-to-prepare-norcet',
    title: 'How to Prepare for AIIMS NORCET 2025',
    category: 'Preparation Strategy',
    excerpt: 'Step-by-step guide to cracking the toughest nursing exam.',
    date: 'Oct 15, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/e0f2fe/0284c7?text=NORCET+Strategy'
  },
  {
    id: 'central-vs-state-nursing',
    title: 'Central vs State Govt Nursing Jobs',
    category: 'Career Guidance',
    excerpt: 'Comparison of salary, promotion, and perks.',
    date: 'Oct 10, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/f0fdf4/166534?text=Salary+Comparison'
  },
  {
    id: 'syllabus-breakdown',
    title: 'Nursing Officer Exam Syllabus Breakdown',
    category: 'Syllabus',
    excerpt: 'Core subjects focus for 80% of nursing exams.',
    date: 'Sep 28, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/fff7ed/c2410c?text=Syllabus+Guide'
  },
  {
    id: 'rrb-exam-pattern-2026',
    title: 'RRB Staff Nurse 2026: Expected Pattern',
    category: 'Exam Updates',
    excerpt: 'Analysis of previous trends and new recruitment rules.',
    date: 'Nov 01, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/faf5ff/6b21a8?text=RRB+2026'
  },
  {
    id: 'cho-vs-nursing-officer',
    title: 'CHO vs Nursing Officer: Comparison',
    category: 'Career Guidance',
    excerpt: 'Stability and growth comparison.',
    date: 'Nov 05, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/eff6ff/1e40af?text=CHO+vs+NO'
  },
  {
    id: 'best-books-nursing',
    title: 'Top 10 Books for Nursing Exams',
    category: 'Resources',
    excerpt: 'Ultimate booklist recommended by toppers.',
    date: 'Nov 12, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/fef2f2/991b1b?text=Best+Books'
  }
];

export const resources = {
  pyqs: [
    // RRB
    { title: 'RRB Nursing Officer-2021', link: 'https://links.nprep.in/QNGYhi8GfZb', tag: 'RRB' },
    { title: 'RRB Nursing Officer', link: 'https://links.nprep.in/aU5kPu0bJZb', tag: 'RRB' },
    { title: 'RRB Shift - I (20 JULY )', link: 'https://links.nprep.in/Wm36lpRx0Zb', tag: 'RRB' },
    { title: 'RRB Shift - I (21 July 2019)', link: 'https://links.nprep.in/9PwNw5DuPZb', tag: 'RRB' },
    { title: 'RRB Nursing Superintendent 29 APRIL Shift 3', link: 'https://links.nprep.in/8LR9YaHPEZb', tag: 'RRB' },
    { title: 'RRB Nursing Officer (Set 2)', link: 'https://links.nprep.in/iYJK63NtHZb', tag: 'RRB' },
    
    // CHO
    { title: 'MP CHO', link: 'https://links.nprep.in/OT7EWR5r3Zb', tag: 'CHO' },
    { title: 'MP CHO Paper - 2022', link: 'https://links.nprep.in/EKC5ZE7r3Zb', tag: 'CHO' },
    { title: 'Rajasthan CHO - 2024', link: 'https://links.nprep.in/rocuf2uwYXb', tag: 'CHO' },
    { title: 'Rajasthan CHO-2023', link: 'https://links.nprep.in/J4rAoKv3ZZb', tag: 'CHO' },
    { title: 'UK CHO - 2021', link: 'https://links.nprep.in/3MAAJScs3Zb', tag: 'CHO' },
    { title: 'UP CHO', link: 'https://links.nprep.in/7eNfOtC51Zb', tag: 'CHO' },
    { title: 'NHM Haryana CHO Official Paper (29 Jan 2023)', link: 'https://links.nprep.in/SBr7raqs3Zb', tag: 'CHO' },

    // NORCET
    { title: 'NORCET - 3 (2022) Shift - 1', link: 'https://links.nprep.in/f2X7pvwHMZb', tag: 'NORCET' },
    { title: 'NORCET 3 - 2022 ; Shift-II', link: 'https://links.nprep.in/K7VH496yQZb', tag: 'NORCET' },
    { title: 'NORCET 7 prelims - (Sep) 2024', link: 'https://links.nprep.in/aXOX5oZXPZb', tag: 'NORCET' },
    { title: 'NORCET 3 - June 2023', link: 'https://links.nprep.in/weaumiphIZb', tag: 'NORCET' },
    { title: 'NORCET 20 Nov, Shift 2', link: 'https://links.nprep.in/xkOMXfpAhZb', tag: 'NORCET' }
  ],
  
  // Updated Mock Tests
  tests: [
    { title: 'NORCET Mock Test', link: 'https://links.nprep.in/XMYlOC6F5Zb', tag: 'NORCET', color: 'bg-red-50 text-red-700 border-red-200' },
    { title: 'AIIMS Nursing Officer Exams', link: 'https://links.nprep.in/u34K12Mq6Zb', tag: 'AIIMS', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { title: 'KGMU Nursing Officer', link: 'https://links.nprep.in/NOfgXlxg6Zb', tag: 'KGMU', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { title: 'SGPGI Nursing Officer', link: 'https://links.nprep.in/C0hk9CHg6Zb', tag: 'SGPGI', color: 'bg-green-50 text-green-700 border-green-200' },
    { title: 'PGIMER Mock Test', link: 'https://links.nprep.in/X6m4Q62F6Zb', tag: 'PGIMER', color: 'bg-orange-50 text-orange-700 border-orange-200' },
    { title: 'RRB Nursing Officer', link: 'https://links.nprep.in/pC4gYL3eSZb', tag: 'RRB', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    { title: 'AIIMS CRE Mock Test', link: 'https://links.nprep.in/VpwyAGbG6Zb', tag: 'CRE', color: 'bg-teal-50 text-teal-700 border-teal-200' }
  ],

  // Updated Subject Tests
  subjectTests: [
    { 
      title: 'Fundamentals of Nursing (FON)', 
      link: 'https://links.nprep.in/uiXjRG1TPXb', 
      duration: '45 Mins', 
      questions: 50,
      icon: 'Activity',
      color: 'bg-blue-500'
    },
    { 
      title: 'Medical Surgical Nursing (MSN)', 
      link: 'https://links.nprep.in/hm3aQhddIZb', 
      duration: '45 Mins', 
      questions: 50,
      icon: 'Stethoscope',
      color: 'bg-red-500' 
    },
    { 
      title: 'Obstetrics & Gynecology (OBG)', 
      link: 'https://links.nprep.in/cpRfJAdQPYb', 
      duration: '45 Mins', 
      questions: 50,
      icon: 'HeartHandshake',
      color: 'bg-pink-500' 
    },
    { 
      title: 'Community Health Nursing (CHN)', 
      link: 'https://links.nprep.in/vGYx4MAtWZb', 
      duration: '45 Mins', 
      questions: 50,
      icon: 'Users',
      color: 'bg-green-500' 
    },
    { 
      title: 'Pediatrics', 
      link: 'https://links.nprep.in/NbTlCc02ZZb', 
      duration: '45 Mins', 
      questions: 50,
      icon: 'Baby',
      color: 'bg-orange-500' 
    },
    { 
      title: 'Psychiatry', 
      link: 'https://links.nprep.in/mEhGXn27ZZb', 
      duration: '45 Mins', 
      questions: 50,
      icon: 'Brain',
      color: 'bg-purple-500' 
    },
    { 
      title: 'Nutrition', 
      link: 'https://links.nprep.in/xqzNDqLI1Zb', 
      duration: '45 Mins', 
      questions: 50,
      icon: 'Apple',
      color: 'bg-yellow-500' 
    },
    { 
      title: 'Nursing Research', 
      link: 'https://links.nprep.in/IuYQSDcC6Zb', 
      duration: '45 Mins', 
      questions: 50,
      icon: 'Microscope',
      color: 'bg-indigo-500' 
    },
  ]
};

export const courses = [
  {
    id: 'test-series',
    title: 'Nursing Officer Test Series',
    description: 'Comprehensive QBank and daily tests.',
    features: [
      '30,000+ Questions - QBank(Topic Wise)',
      'Each Question with Explaination',
      'Subject Wise Tests',
      'Daily Test Series',
      'Previous Year Question Papers',
      'IBQs, Clinical Scenario Questions'
    ],
    theme: 'blue',
    link: 'https://qtestseries.nprep.in'
  },
  {
    id: 'rapid-revision',
    title: 'Rapid Revision 2.0',
    description: 'Fast-track preparation for NORCET & CHO.',
    features: [
      'NORCET/ CHO/ BTSC/ KGMU/ GMCH - All Covered',
      'Complete Nursing Syllabus in 100 Hours',
      'Previous Year Papers - with Explainations',
      'Daily Test Series',
      '30,000+ Questions - QBank ( Topic Wise)',
      'Subject Wise Tests'
    ],
    theme: 'green',
    link: 'https://rapid.nprep.in'
  },
  {
    id: 'gold-batch',
    title: 'GOLD Batch (Comprehensive)',
    description: 'Basic to Advanced Theory for all exams.',
    features: [
      'NORCET 10 & 11/ CHO / BTSC/ KGMU/ GMCH - All Covered',
      '900 Hours - Basic to Advanced Theory (with Clinicals)',
      '100 Hrs - Rapid Revision 2.0',
      '30,000 Questions - QBank (Topic Wise)',
      'Daily Test Series',
      'Previous Year Papers',
      'Subject Wise Papers'
    ],
    theme: 'orange',
    link: 'https://gold.nprep.in'
  }
];
