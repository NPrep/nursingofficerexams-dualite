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
    title: 'AIIMS NORCET Nursing Officer',
    category: 'Central',
    description: 'The Nursing Officer Recruitment Common Eligibility Test (NORCET) is conducted by AIIMS New Delhi for recruitment of Nursing Officers in all AIIMS institutes across India.',
    conductingBody: 'AIIMS New Delhi',
    vacancies: '3000+ (Expected)',
    eligibility: 'B.Sc Nursing / Post Basic B.Sc Nursing OR GNM with 2 years experience in 50 bedded hospital.',
    salary: 'Level 7 (₹44,900 - ₹1,42,400) + Allowances',
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
    description: 'Railway Recruitment Board (RRB) conducts exams for Staff Nurse posts in Indian Railways hospitals. It is one of the most sought-after central government nursing jobs due to perks and railway benefits.',
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
    description: 'Employees State Insurance Corporation (ESIC) recruits Nursing Officers for ESIC hospitals and dispensaries. The job offers excellent work-life balance and central government benefits.',
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
    description: 'Delhi Subordinate Services Selection Board recruits for Delhi Govt hospitals like LNJP, GTB, etc. It is a highly competitive exam offering a central-level salary structure within Delhi.',
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
    description: 'Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER), Puducherry, conducts its own recruitment exam. It is an Institute of National Importance.',
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
    description: 'Uttar Pradesh Public Service Commission recruits staff nurses for state medical colleges and hospitals.',
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

// Comprehensive list for the Exams Page with detailed SEO descriptions
export const comprehensiveExams = [
  {
    category: "Central Government Exams",
    description: "Recruitment for central government hospitals and ministries. These posts offer 7th CPC salary and all central allowances.",
    exams: [
      { 
        name: "AIIMS NORCET", 
        link: "https://www.aiimsexams.ac.in/",
        description: "The AIIMS Nursing Officer Recruitment Common Eligibility Test (NORCET) is the premier gateway for securing a permanent nursing officer position in AIIMS New Delhi and other AIIMS institutes across India. This highly competitive exam assesses candidates on medical-surgical nursing, pediatrics, and clinical skills. It offers a lucrative salary structure under the 7th Pay Commission, making it the top choice for B.Sc and GNM nursing graduates aiming for central government jobs."
      },
      { 
        name: "RRB Staff Nurse (Indian Railways)", 
        link: "https://indianrailways.gov.in/",
        description: "The Railway Recruitment Board (RRB) Staff Nurse exam is a prestigious opportunity to join the Indian Railways medical department. Known for its excellent job security, railway passes, and central government allowances, this exam focuses on professional nursing ability, general science, and arithmetic. It is ideal for candidates seeking a stable career in the largest railway network in the world."
      },
      { 
        name: "ESIC Nursing Officer", 
        link: "https://www.esic.gov.in/",
        description: "The Employees' State Insurance Corporation (ESIC) Nursing Officer exam recruits nursing professionals for ESIC hospitals and dispensaries nationwide. These positions offer a balanced work environment with central government benefits. The exam typically covers technical nursing subjects along with general aptitude, making it a favorite for those seeking a structured 9-to-5 medical career."
      },
      { 
        name: "DSSSB Nursing Officer (Delhi)", 
        link: "https://dsssb.delhi.gov.in/",
        description: "Conducted by the Delhi Subordinate Services Selection Board, this exam recruits nursing officers for Delhi Government hospitals like LNJP and GTB. It is highly popular due to the attractive salary packages (Level 7) and posting within the National Capital Territory. The exam pattern places significant weight on both nursing subjects and general awareness, reasoning, and language skills."
      },
      { 
        name: "UPSC Nursing Officer", 
        link: "https://upsc.gov.in/",
        description: "The Union Public Service Commission (UPSC) occasionally conducts recruitment for Nursing Officer posts in various central ministries and organizations like ESIC (when delegated). These are gazetted or non-gazetted Group B posts offering the highest level of job security and prestige. The selection process is rigorous, often involving a written test followed by an interview."
      },
      { 
        name: "Military Nursing Service (MNS)", 
        link: "https://joinindianarmy.nic.in/",
        description: "The Military Nursing Service (MNS) exam offers a unique opportunity to serve in the Indian Armed Forces as a commissioned officer. It is open to female candidates who wish to combine their passion for nursing with service to the nation. The selection process includes a written exam, interview, and medical examination, leading to a Short Service Commission or Permanent Commission."
      },
      { 
        name: "KVS Staff Nurse", 
        link: "https://kvsangathan.nic.in/",
        description: "Kendriya Vidyalaya Sangathan (KVS) recruits Staff Nurses to provide medical care in central government schools across India. This role is ideal for those who prefer a non-hospital setting with fixed school hours. The exam tests basic nursing knowledge and general competency, offering a relaxed work environment compared to high-load tertiary care hospitals."
      },
      { 
        name: "NVS Staff Nurse", 
        link: "https://navodaya.gov.in/",
        description: "Navodaya Vidyalaya Samiti (NVS) recruits Staff Nurses for its residential schools located in rural areas across India. The job involves taking care of the health of students residing in hostels. It offers central government pay scales and free accommodation within the campus, making it a financially rewarding option for those willing to work in semi-urban areas."
      },
      { 
        name: "CGHS Nursing Officer", 
        link: "https://cghs.nic.in/",
        description: "The Central Government Health Scheme (CGHS) recruits Nursing Officers for its wellness centers and polyclinics in major cities. This role focuses on outpatient care, dispensing medication, and public health programs. It is a highly desirable post for candidates looking for city postings with standard working hours and less emergency workload."
      }
    ]
  },
  {
    category: "Autonomous Institutes & Hospitals",
    description: "Prestigious medical institutes of national importance that conduct their own recruitment exams.",
    exams: [
      { 
        name: "JIPMER Nursing Officer (Puducherry)", 
        link: "https://jipmer.edu.in/",
        description: "JIPMER Puducherry is an Institute of National Importance that conducts its own recruitment for Nursing Officers. The exam is known for its clinical-scenario based questions that test practical knowledge. Working at JIPMER offers exposure to advanced medical facilities, research opportunities, and a central government salary package in a coastal city."
      },
      { 
        name: "PGIMER Nursing Officer (Chandigarh)", 
        link: "https://pgimer.edu.in/",
        description: "PGIMER Chandigarh is one of India's premier medical and research institutes. The Nursing Officer recruitment exam here is highly competitive and focuses deeply on core nursing subjects. A position at PGIMER is considered prestigious due to the institute's high academic standards and the quality of patient care services provided."
      },
      { 
        name: "NIMHANS Nursing Officer (Bengaluru)", 
        link: "https://nimhans.ac.in/",
        description: "The National Institute of Mental Health and Neurosciences (NIMHANS) recruits Nursing Officers with a specific focus on psychiatric and neurological nursing. Candidates with an interest in mental health nursing find this institute ideal. The exam often includes questions specific to neurology and psychiatry alongside general nursing topics."
      },
      { 
        name: "SGPGI Nursing Officer (Lucknow)", 
        link: "https://sgpgims.org.in/",
        description: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGI) in Lucknow conducts recruitment for Nursing Officer (Sister Grade-II) posts. It is a super-specialty hospital offering state government pay scales equivalent to central levels. The exam is computer-based and tests proficiency in medical-surgical nursing and critical care."
      },
      { 
        name: "RML Hospital Nursing Officer (New Delhi)", 
        link: "https://rmlh.nic.in/",
        description: "Dr. Ram Manohar Lohia (RML) Hospital is a central government hospital in New Delhi. While it often recruits through NORCET now, it historically has had separate intakes. It is a prime location for candidates wanting to work in the heart of the capital city with full central government benefits and exposure to VVIP care."
      },
      { 
        name: "SCTIMST Staff Nurse (Trivandrum)", 
        link: "https://www.sctimst.ac.in/",
        description: "Sree Chitra Tirunal Institute for Medical Sciences and Technology (SCTIMST) is an Institute of National Importance in Kerala. It specializes in cardiology and neurology. The recruitment is for Staff Nurses who are skilled in handling advanced medical equipment and critical care patients. It offers a unique academic and clinical environment."
      },
      { 
        name: "GMCH Staff Nurse (Chandigarh)", 
        link: "https://gmch.gov.in/",
        description: "Government Medical College and Hospital (GMCH) Chandigarh recruits Staff Nurses for its teaching hospital. The post offers a central-pattern salary and is highly sought after by candidates from Punjab, Haryana, and Himachal Pradesh. The exam assesses theoretical knowledge and practical application in a teaching hospital setting."
      },
      { 
        name: "ILBS Staff Nurse (New Delhi)", 
        link: "https://www.ilbs.in/",
        description: "The Institute of Liver and Biliary Sciences (ILBS) is an autonomous super-specialty hospital in New Delhi. It recruits Nurse Executives and Junior Nurses. The work environment is corporate-like with high standards of patient care. It is an excellent place for nurses specializing in liver and biliary disorders to gain niche expertise."
      }
    ]
  },
  {
    category: "State Public Service Commission (PSC) Exams",
    description: "Permanent nursing officer posts in state government medical colleges and district hospitals.",
    exams: [
      { 
        name: "UPPSC Staff Nurse (Uttar Pradesh)", 
        link: "https://uppsc.up.nic.in/",
        description: "The Uttar Pradesh Public Service Commission (UPPSC) conducts the Staff Nurse exam for male and female candidates to fill vacancies in the Medical Education and Training Dept. It involves a written exam followed by document verification. It is the largest nursing recruitment in UP, offering permanent state government jobs."
      },
      { 
        name: "UKMSSB Nursing Officer (Uttarakhand)", 
        link: "https://ukmssb.org/",
        description: "Uttarakhand Medical Service Selection Board (UKMSSB) recruits Nursing Officers for Government Medical Colleges and hospitals in the hill state. The selection is often based on year-wise merit (batch-wise) or written exams. It is a great opportunity for locals to serve in their home state with government security."
      },
      { 
        name: "BPSC / BTSC Staff Nurse (Bihar)", 
        link: "https://btsc.bih.nic.in/",
        description: "The Bihar Technical Service Commission (BTSC) recruits Staff Nurses (Grade 'A') and Tutors for the state health department. The selection process may involve merit-based shortlisting on marks or a computer-based test (CBT). It is a massive recruitment drive aimed at strengthening the primary and secondary healthcare infrastructure in Bihar."
      },
      { 
        name: "OSSSC Nursing Officer (Odisha)", 
        link: "https://www.osssc.gov.in/",
        description: "The Odisha Sub-ordinate Staff Selection Commission (OSSSC) conducts recruitment for Nursing Officers in district cadre posts. The exam is OMR-based and tests standard nursing subjects. It is the primary entry route for GNM and B.Sc Nursing graduates in Odisha seeking government employment."
      },
      { 
        name: "HSSC Staff Nurse (Haryana)", 
        link: "https://www.hssc.gov.in/",
        description: "Haryana Staff Selection Commission (HSSC) conducts the Staff Nurse exam for the Health Department of Haryana. The exam pattern includes questions on Nursing, General Awareness, and Haryana GK. It offers a handsome salary package and is very popular among nursing graduates in North India."
      },
      { 
        name: "RPSC Staff Nurse (Rajasthan)", 
        link: "https://rpsc.rajasthan.gov.in/",
        description: "Rajasthan Public Service Commission (RPSC) or sometimes RSMSSB recruits Staff Nurses (Grade II) for the state. The job offers pension benefits (OPS) which is a major attraction. The exam focuses on nursing subjects along with Rajasthan's art, culture, and geography."
      },
      { 
        name: "TN MRB Nurse (Tamil Nadu)", 
        link: "https://www.mrb.tn.gov.in/",
        description: "The Medical Services Recruitment Board (MRB) Tamil Nadu recruits Nurses for government hospitals and primary health centers. Recruitment is often based on marks obtained in the qualifying degree/diploma or a competitive exam. It is the standard route for government nursing jobs in Tamil Nadu."
      },
      { 
        name: "WBHRB Staff Nurse (West Bengal)", 
        link: "https://www.wbhrb.in/",
        description: "West Bengal Health Recruitment Board (WBHRB) recruits Staff Nurses (Grade II) for the cadre of the West Bengal Nursing Service. Selection is primarily based on academic merit and an interview. It offers a secure state government job with postings across West Bengal."
      },
      { 
        name: "KPSC Staff Nurse (Kerala)", 
        link: "https://www.keralapsc.gov.in/",
        description: "Kerala Public Service Commission (KPSC) conducts exams for Staff Nurse Grade II in Health Services and Medical Education departments. Known for its high competition due to Kerala's high literacy and nursing density, the exam is tough and strictly merit-based. It offers a prestigious government job in the state."
      },
      { 
        name: "HPSSC Staff Nurse (Himachal Pradesh)", 
        link: "https://hpsssb.hp.gov.in/",
        description: "Himachal Pradesh Staff Selection Commission (HPSSC) recruits Staff Nurses on a contract or regular basis for the state health department. The written objective type screening test covers nursing subjects and general knowledge of Himachal Pradesh. It is ideal for candidates wishing to work in the Himalayan region."
      },
      { 
        name: "JKSSB Staff Nurse (J&K)", 
        link: "https://jkssb.nic.in/",
        description: "J&K Services Selection Board (JKSSB) recruits Junior Staff Nurses for the Union Territory's health and medical education department. The selection is based on a written test. It provides an opportunity for nursing professionals in J&K to secure government employment."
      },
      { 
        name: "MPPEB Staff Nurse (Madhya Pradesh)", 
        link: "https://esb.mp.gov.in/",
        description: "Madhya Pradesh Employees Selection Board (MPESB/Vyapam) conducts the Group-5 joint recruitment test for Staff Nurses. The exam includes technical nursing questions and general aptitude. It is the main recruitment channel for nursing jobs in MP government hospitals."
      }
    ]
  },
  {
    category: "Community Health Officer (CHO) Exams",
    description: "Contractual and permanent posts under National Health Mission (NHM) for Health & Wellness Centers.",
    exams: [
      { 
        name: "NHM UP CHO", 
        link: "https://upnrhm.gov.in/",
        description: "National Health Mission (NHM) Uttar Pradesh recruits Community Health Officers (CHO) to lead Health & Wellness Centers (HWCs). The role focuses on primary healthcare, maternal and child health, and non-communicable diseases. It is a contractual position with a fixed salary plus performance-based incentives."
      },
      { 
        name: "NHM MP CHO", 
        link: "https://www.nhmmp.gov.in/",
        description: "NHM Madhya Pradesh recruits CHOs through an online entrance exam. Candidates with B.Sc Nursing (Integrated CCH) or GNM/B.Sc with a CCH certificate are eligible. The job involves managing sub-centers and providing preventive healthcare services to rural populations in MP."
      },
      { 
        name: "NHM Rajasthan CHO", 
        link: "https://rajswasthya.nic.in/",
        description: "NHM Rajasthan conducts a written exam for the recruitment of Community Health Officers. It is a massive recruitment drive often filling thousands of posts. The job is crucial for the implementation of Ayushman Bharat schemes in Rajasthan's villages."
      },
      { 
        name: "SHSB Bihar CHO", 
        link: "http://statehealthsocietybihar.org/",
        description: "State Health Society Bihar (SHSB) recruits CHOs to strengthen the primary health grid in Bihar. The selection is usually based on merit or CBT. It offers a great opportunity for nurses to work as mid-level health providers and gain administrative experience at the community level."
      },
      { 
        name: "NHM Haryana CHO", 
        link: "http://www.nrhmharyana.gov.in/",
        description: "NHM Haryana recruits Mid-Level Health Providers-cum-Community Health Officers (MLHP-cum-CHO). The exam tests knowledge of public health, primary care, and general nursing. It is a good option for those looking for a job with a defined scope of practice in Haryana's rural health sector."
      },
      { 
        name: "NHM Maharashtra CHO", 
        link: "https://nrhm.maharashtra.gov.in/",
        description: "NHM Maharashtra recruits CHOs for its sub-centers. The selection process may involve an entrance exam. Proficiency in Marathi is often required. The role is pivotal in delivering comprehensive primary health care services in Maharashtra's diverse districts."
      },
      { 
        name: "NHM Punjab CHO", 
        link: "https://nhm.punjab.gov.in/",
        description: "NHM Punjab recruits Community Health Officers based on a written test. The post is under the Ayushman Bharat mission. It offers a respectable salary and incentives, suitable for nurses who want to serve in Punjab's extensive rural health network."
      },
      { 
        name: "NHM Karnataka CHO", 
        link: "https://karunadu.karnataka.gov.in/hfw/nhm/pages/home.aspx",
        description: "NHM Karnataka recruits CHOs to man the Health and Wellness Centers. The selection is typically through an online exam. The role requires strong community engagement skills and clinical knowledge to manage common ailments and refer complex cases."
      },
      { 
        name: "NHM Gujarat CHO", 
        link: "https://nhm.gujarat.gov.in/",
        description: "NHM Gujarat recruits CHOs for its health centers. Candidates with integrated curriculum or CCH certification are preferred. The job offers a chance to work in Gujarat's well-structured public health system with performance-linked incentives."
      },
      { 
        name: "NHM Assam CHO", 
        link: "https://nhm.assam.gov.in/",
        description: "NHM Assam recruits Community Health Officers to serve in the tea gardens and rural areas of Assam. The selection is merit or exam-based. It is a challenging yet rewarding role for nurses dedicated to improving health indicators in the North East."
      },
      { 
        name: "NHM Uttarakhand CHO", 
        link: "https://ukhfws.org/",
        description: "NHM Uttarakhand recruits CHOs for its hill districts. The role involves providing primary care in difficult terrains. It is a contractual post offering a fixed remuneration and incentives, ideal for those who love the mountains and community service."
      },
      { 
        name: "NHM Jharkhand CHO", 
        link: "http://jrhms.jharkhand.gov.in/",
        description: "Jharkhand Rural Health Mission Society (JRHMS) recruits CHOs to improve health access in tribal and rural areas. The selection is often based on merit in the qualifying exam. It is a key role in the state's strategy to combat malnutrition and maternal mortality."
      }
    ]
  }
];

export const blogs = [
  {
    id: 'how-to-prepare-norcet',
    title: 'How to Prepare for AIIMS NORCET 2025: Complete Strategy',
    category: 'Preparation Strategy',
    excerpt: 'A step-by-step guide to cracking the toughest nursing exam in India. Covers booklist, timetable, and revision tips.',
    date: 'Oct 15, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/e0f2fe/0284c7?text=NORCET+Strategy'
  },
  {
    id: 'central-vs-state-nursing',
    title: 'Central Govt vs State Govt Nursing Jobs: Salary & Perks',
    category: 'Career Guidance',
    excerpt: 'Detailed comparison of salary, promotion, and work-life balance between AIIMS, RRB, and State PSC nursing jobs.',
    date: 'Oct 10, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/f0fdf4/166534?text=Salary+Comparison'
  },
  {
    id: 'syllabus-breakdown',
    title: 'Nursing Officer Exam Syllabus Breakdown for Beginners',
    category: 'Syllabus',
    excerpt: 'Understanding the core subjects you need to focus on for 80% of nursing competitive exams.',
    date: 'Sep 28, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/fff7ed/c2410c?text=Syllabus+Guide'
  },
  {
    id: 'rrb-exam-pattern-2026',
    title: 'RRB Staff Nurse 2026: Expected Pattern Changes',
    category: 'Exam Updates',
    excerpt: 'What to expect in the upcoming Railway Nursing exams. Analysis of previous trends and new recruitment rules.',
    date: 'Nov 01, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/faf5ff/6b21a8?text=RRB+2026'
  },
  {
    id: 'cho-vs-nursing-officer',
    title: 'CHO vs Nursing Officer: Which is Better?',
    category: 'Career Guidance',
    excerpt: 'Comparing the role of a Community Health Officer (CHO) with a regular Nursing Officer in terms of stability and growth.',
    date: 'Nov 05, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/eff6ff/1e40af?text=CHO+vs+NO'
  },
  {
    id: 'best-books-nursing',
    title: 'Top 10 Books for Nursing Competitive Exams',
    category: 'Resources',
    excerpt: 'The ultimate booklist recommended by toppers for Anatomy, MSN, and non-nursing subjects.',
    date: 'Nov 12, 2024',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/fef2f2/991b1b?text=Best+Books'
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
    description: 'Comprehensive QBank and daily tests for all nursing exams.',
    features: [
      '30,000+ Questions - QBank(Topic Wise)',
      'Each Question with Explaination',
      'Subject Wise Tests',
      'Daily Test Series',
      'Previous Year Question Papers',
      'IBQs, Clinical Scenario Questions'
    ],
    // Removed image, added theme color
    theme: 'blue',
    link: '#'
  },
  {
    id: 'rapid-revision',
    title: 'Rapid Revision 2.0',
    description: 'Fast-track your preparation for NORCET, CHO, and State exams.',
    features: [
      'NORCET/ CHO/ BTSC/ KGMU/ GMCH - All Covered',
      'Complete Nursing Syllabus in 100 Hours',
      'Previous Year Papers - with Explainations',
      'Daily Test Series',
      '30,000+ Questions - QBank ( Topic Wise)',
      'Subject Wise Tests'
    ],
    // Removed image, added theme color
    theme: 'green',
    link: '#'
  },
  {
    id: 'gold-batch',
    title: 'GOLD Batch (Comprehensive)',
    description: 'The ultimate foundation to advanced course for all nursing officer exams.',
    features: [
      'NORCET 10 & 11/ CHO / BTSC/ KGMU/ GMCH - All Covered',
      '900 Hours - Basic to Advanced Theory (with Clinicals)',
      '100 Hrs - Rapid Revision 2.0',
      '30,000 Questions - QBank (Topic Wise)',
      'Daily Test Series',
      'Previous Year Papers',
      'Subject Wise Papers'
    ],
    // Removed image, added theme color
    theme: 'orange',
    link: '#'
  }
];
