import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs, Card } from '../components/UIComponents';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-5 rounded-xl border border-gray-200 bg-white p-5">
    <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
    <div className="text-gray-700 space-y-2 leading-relaxed">{children}</div>
  </section>
);

export const NursingOfficerExamsInIndia = () => (
  <div className="container mx-auto px-4 py-8 max-w-5xl">
    <SEO title="Nursing Officer Exams in India" description="Master list of major government Nursing Officer exams in India with links to exam pages." canonical="/nursing-officer-exams-in-india" />
    <Breadcrumbs items={[{ label: 'Nursing Officer Exams in India' }]} />
    <h1 className="text-4xl font-bold mb-4">Nursing Officer Exams in India</h1>
    <p className="text-gray-700 mb-6">Major government exams include:</p>
    <div className="grid md:grid-cols-2 gap-3">
      {[
        ['AIIMS NORCET', '/aiims-norcet-exam'],
        ['Railway Nursing Superintendent', '/rrb-nursing-superintendent-exam'],
        ['ESIC Nursing Officer', '/esic-nursing-officer-exam'],
        ['NHM Nursing Officer', '/nhm-nursing-officer-recruitment'],
        ['JIPMER Nursing Officer', '/jipmer-nursing-officer-exam'],
      ].map(([name, path]) => (
        <Link to={path} key={path}>
          <Card className="hover:border-brand-300"><h3 className="font-semibold text-brand-700">{name}</h3></Card>
        </Link>
      ))}
    </div>
  </div>
);

const examPage = (props: {
  title: string;
  canonical: string;
  whatIs: string;
  eligibility: string;
  pattern: string;
  selection: string;
  application: string;
  vacancy: string;
}) => (
  <div className="container mx-auto px-4 py-8 max-w-5xl">
    <SEO title={props.title} description={`${props.title} - eligibility, exam pattern, selection process, application process, and vacancy updates.`} canonical={props.canonical} />
    <Breadcrumbs items={[{ label: props.title }]} />
    <h1 className="text-4xl font-bold mb-5">{props.title}</h1>
    <Section title="What is this exam?"><p>{props.whatIs}</p></Section>
    <Section title="Eligibility Criteria"><p>{props.eligibility}</p></Section>
    <Section title="Exam Pattern"><p>{props.pattern}</p></Section>
    <Section title="Selection Process"><p>{props.selection}</p></Section>
    <Section title="Application Process"><p>{props.application}</p></Section>
    <Section title="Expected Vacancy"><p>{props.vacancy}</p></Section>
  </div>
);

export const AIIMSNorcetExam = () => examPage({
  title: 'AIIMS NORCET Nursing Officer Exam',
  canonical: '/aiims-norcet-exam',
  whatIs: 'AIIMS NORCET (Nursing Officer Recruitment Common Eligibility Test) is a national-level recruitment exam conducted for Nursing Officer posts in AIIMS institutes and participating central hospitals.',
  eligibility: 'Candidates generally require BSc Nursing/Post Basic BSc Nursing or GNM with required experience, along with valid nursing council registration and age criteria as per notification.',
  pattern: 'The exam is computer-based with nursing and general aptitude sections as prescribed in the official notice. The exact number of questions and marking scheme can vary by cycle.',
  selection: 'Selection is based on performance in the notified stages of NORCET and document verification according to merit and reservation rules.',
  application: 'Applications are submitted online through the AIIMS exams portal after registration, document upload, fee payment, and final form submission.',
  vacancy: 'Vacancies are announced in the official NORCET notification and can vary across AIIMS and participating institutions.',
});

export const RRBNursingSuperintendentExam = () => examPage({
  title: 'RRB Nursing Superintendent Exam',
  canonical: '/rrb-nursing-superintendent-exam',
  whatIs: 'RRB Nursing Superintendent recruitment is conducted by Railway Recruitment Boards for nursing posts in railway hospitals and health units.',
  eligibility: 'Eligibility usually includes recognized nursing qualification, council registration, and age criteria defined in the railway recruitment notification.',
  pattern: 'The recruitment process typically includes a computer-based test and follow-up verification stages as notified by RRB.',
  selection: 'Selection is based on CBT merit, reservation policy, document verification, and medical fitness requirements.',
  application: 'Candidates apply through RRB regional portals during the recruitment window by completing registration and fee payment.',
  vacancy: 'Zone-wise vacancies are listed in the official RRB recruitment notification.',
});

export const ESICNursingOfficerExam = () => examPage({
  title: 'ESIC Nursing Officer Exam',
  canonical: '/esic-nursing-officer-exam',
  whatIs: 'ESIC Nursing Officer recruitment covers nursing positions in ESIC hospitals and institutions under the Employees’ State Insurance framework.',
  eligibility: 'Candidates should meet required nursing qualification, registration, experience (if prescribed), and age limits mentioned in the ESIC notice.',
  pattern: 'The exam pattern is announced per cycle and includes objective assessment and subsequent verification stages.',
  selection: 'Final selection is based on merit in notified stages, eligibility verification, and category-wise rules.',
  application: 'Applications are submitted online through the notified ESIC/linked recruitment portal.',
  vacancy: 'Vacancy details are published with region and category breakdown in the official notification.',
});

export const JIPMERNursingOfficerExam = () => examPage({
  title: 'JIPMER Nursing Officer Exam',
  canonical: '/jipmer-nursing-officer-exam',
  whatIs: 'JIPMER Nursing Officer recruitment is conducted for nursing vacancies in Jawaharlal Institute of Postgraduate Medical Education and Research.',
  eligibility: 'Typical requirements include recognized nursing qualifications, council registration, and age/experience conditions as notified.',
  pattern: 'The institute publishes exam pattern and stage-wise process in the official recruitment notice.',
  selection: 'Selection generally includes written/CBT assessment followed by document verification.',
  application: 'Candidates apply online via the official JIPMER recruitment system during active recruitment.',
  vacancy: 'Vacancies vary by year and are declared in the institute’s notification.',
});

export const NHMNursingOfficerRecruitment = () => examPage({
  title: 'NHM Nursing Officer Recruitment',
  canonical: '/nhm-nursing-officer-recruitment',
  whatIs: 'NHM Nursing Officer recruitment is issued by state/UT health missions for government health facilities under National Health Mission programs.',
  eligibility: 'Eligibility differs by state but generally includes BSc Nursing or GNM, valid registration, and age criteria mentioned in the state notification.',
  pattern: 'States may use written tests, merit-based shortlisting, interviews, or combined processes as per rules.',
  selection: 'Selection process is state-specific and completed through notified recruitment authority procedures.',
  application: 'Applications are submitted through state NHM portals or designated recruitment websites.',
  vacancy: 'Vacancy counts are state-wise and cycle-specific, announced in each recruitment release.',
});

export const NursingOfficerEligibility = () => (
  <div className="container mx-auto px-4 py-8 max-w-5xl">
    <SEO title="Nursing Officer Eligibility in India" description="Common nursing officer eligibility requirements in India for government recruitments." canonical="/nursing-officer-eligibility" />
    <Breadcrumbs items={[{ label: 'Nursing Officer Eligibility' }]} />
    <h1 className="text-4xl font-bold mb-6">Nursing Officer Eligibility in India</h1>
    <p className="mb-4 text-gray-700">Common requirements include:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-700 bg-white border border-gray-200 rounded-xl p-5">
      <li>BSc Nursing or GNM qualification</li>
      <li>State Nursing Council registration</li>
      <li>Minimum age requirements</li>
      <li>Relevant hospital experience</li>
    </ul>
  </div>
);

export const GovernmentHospitalsRecruiting = () => (
  <div className="container mx-auto px-4 py-8 max-w-5xl">
    <SEO title="Government Hospitals Recruiting Nursing Officers" description="Types of government hospitals and institutions that recruit nursing officers in India." canonical="/government-hospitals-nursing-officer-recruitment" />
    <Breadcrumbs items={[{ label: 'Government Hospitals Recruiting Nursing Officers' }]} />
    <h1 className="text-4xl font-bold mb-6">Government Hospitals Recruiting Nursing Officers</h1>
    <ul className="list-disc pl-6 space-y-1 text-gray-700 bg-white border border-gray-200 rounded-xl p-5">
      <li>AIIMS</li>
      <li>ESIC Hospitals</li>
      <li>Railway Hospitals</li>
      <li>Central Government Hospitals</li>
      <li>State Medical Colleges</li>
    </ul>
  </div>
);

export const NursingOfficerSalary = () => (
  <div className="container mx-auto px-4 py-8 max-w-5xl">
    <SEO title="Nursing Officer Salary in Government Hospitals" description="Nursing Officer salary overview in government hospitals including basic pay and allowances." canonical="/nursing-officer-salary" />
    <Breadcrumbs items={[{ label: 'Nursing Officer Salary' }]} />
    <h1 className="text-4xl font-bold mb-6">Nursing Officer Salary in Government Hospitals</h1>
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <p className="text-gray-700 mb-4">Typical pay scale ranges from <strong>₹44,900 to ₹56,100 basic pay</strong>.</p>
      <p className="text-gray-700 mb-3">Allowances include:</p>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
      <li>Dearness allowance</li>
      <li>House rent allowance</li>
      <li>Transport allowance</li>
      <li>Medical benefits</li>
      </ul>
    </div>
  </div>
);

export const HowToApplyNursingOfficerExam = () => (
  <div className="container mx-auto px-4 py-8 max-w-5xl">
    <SEO title="How to Apply for Nursing Officer Exams" description="Step-by-step application process for nursing officer exam notifications in India." canonical="/how-to-apply-for-nursing-officer-exam" />
    <Breadcrumbs items={[{ label: 'How to Apply for Nursing Officer Exams' }]} />
    <h1 className="text-4xl font-bold mb-6">How to Apply for Nursing Officer Exams</h1>
    <p className="text-gray-700 mb-3">Steps:</p>
    <ol className="list-decimal pl-6 space-y-1 text-gray-700 bg-white border border-gray-200 rounded-xl p-5">
      <li>Check official notification</li>
      <li>Register online</li>
      <li>Upload required documents</li>
      <li>Pay application fee</li>
      <li>Download confirmation page</li>
    </ol>
  </div>
);
