import React from 'react';
import { cn } from '../lib/utils';

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 bg-brand-200 border-b border-brand-300">
    {children}
  </th>
);

const TableCell = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <td className={cn("px-6 py-4 text-sm text-gray-700 border-b border-gray-100 align-top", className)}>
    {children}
  </td>
);

export const SEOBlock = () => {
  return (
    <section className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* What is Nursing? */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Nursing?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nursing is a healthcare profession focused on the care of individuals, families, and communities to maintain or improve their health and well-being. Nurses are trained to provide medical care, support, and education to patients in various settings, including hospitals, clinics, and community health organizations. Their responsibilities include monitoring patients' health, administering medications, assisting in medical procedures, providing emotional support, and educating patients and their families about health conditions and wellness practices. Nursing requires a combination of clinical knowledge, compassion, and strong communication skills to ensure the possible care for patients.
          </p>
        </div>

        {/* Nursing Exams 2026 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nursing Exams 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nursing Exams 2026 are essential for aspiring nurses aiming to enter dedicated nursing institutions and secure nursing roles in healthcare settings. The exams are conducted for various nursing programs, including BSc Nursing, GNM, ANM, and other specialized nursing posts. Each exam assesses the candidate's knowledge in subjects such as Anatomy, Physiology, Medical-Surgical Nursing, and Obstetrics. Preparing for Nursing Exams 2026 requires a well-organized study plan, a strong grasp of the syllabus, and access to comprehensive study materials. Students can access these resources through free resources offered by NursingOfficerExams.com.
          </p>
        </div>

        {/* Nursing Exam 2026 Details */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nursing Exam 2026 Details</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Nursing Exam 2026 is conducted for aspiring nurses across India, with various exams held by different institutions for recruitment and educational purposes. These exams include BSc Nursing, ANM, GNM, RRB Staff Nurse, AIIMS NORCET, and NHM-CHO. Below are the key details for each exam:
          </p>
          
          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th colSpan={3} className="px-6 py-3 text-center text-sm font-bold text-gray-900 bg-brand-300 border-b border-brand-400">
                    Nursing Exam 2026 Details
                  </th>
                </tr>
                <tr>
                  <TableHeader>Nursing Exam</TableHeader>
                  <TableHeader>Purpose</TableHeader>
                  <TableHeader>Subjects Focus</TableHeader>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <TableCell className="font-medium">BSc Nursing (UG) Exam 2026</TableCell>
                  <TableCell>Admission into BSc Nursing programs in top institutions like AIIMS.</TableCell>
                  <TableCell>Anatomy, Physiology, Nursing Foundation, Medical-Surgical Nursing.</TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">ANM (Auxiliary Nurse Midwife) Exam 2026</TableCell>
                  <TableCell>For candidates pursuing a career as auxiliary nurses.</TableCell>
                  <TableCell>Basic nursing skills, Maternal and Child healthcare.</TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">GNM (General Nursing and Midwifery) Exam 2026</TableCell>
                  <TableCell>For those aiming to become general nurses and midwives.</TableCell>
                  <TableCell>Maternal care, Child health, Community nursing, and a range of healthcare topics.</TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">RRB Staff Nurse Exam 2026</TableCell>
                  <TableCell>Conducted by the Railway Recruitment Board for Indian Railways nursing posts.</TableCell>
                  <TableCell>Nursing theory, Medical-surgical nursing, Healthcare practices.</TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">AIIMS NORCET Exam 2026</TableCell>
                  <TableCell>AIIMS recruitment for nursing posts through the National Online Recruitment Common Eligibility Test (NORCET).</TableCell>
                  <TableCell>Medical-surgical nursing, Pediatric nursing, Obstetrics, Gynecology.</TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">NHM-CHO Exam 2026</TableCell>
                  <TableCell>For Community Health Officer roles under the National Health Mission.</TableCell>
                  <TableCell>Community health practices, Basic healthcare services, Public health management.</TableCell>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Nursing Exams 2026 Eligibility */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nursing Exams 2026 Eligibility</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            NursingOfficerExams.com presents a detailed table for the eligibility criteria for various Nursing Exams in 2026: The following table outlines the age, educational qualifications, and specific requirements for each major nursing exam, helping you stay informed and prepared for your nursing career.
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th colSpan={2} className="px-6 py-3 text-center text-sm font-bold text-gray-900 bg-brand-300 border-b border-brand-400">
                    Nursing Exams 2026 Eligibility
                  </th>
                </tr>
                <tr>
                  <TableHeader>Nursing Exam</TableHeader>
                  <TableHeader>Eligibility Criteria</TableHeader>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <TableCell className="font-medium w-1/3">BSc Nursing (UG) Exam 2026</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Minimum age: 17 years as of 31st December 2026.</li>
                      <li>10+2 with Science (Physics, Chemistry, Biology) or equivalent from a recognized board.</li>
                      <li>Minimum 50% marks in aggregate (varies by institution).</li>
                    </ul>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">ANM (Auxiliary Nurse Midwife) Exam 2026</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Minimum age: 17 years.</li>
                      <li>10+2 in any stream from a recognized board.</li>
                      <li>Some institutions may require a minimum of 40-50% marks in the qualifying exam.</li>
                    </ul>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">GNM (General Nursing and Midwifery) Exam 2026</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Minimum age: 17 years and maximum 35 years.</li>
                      <li>10+2 from a recognized board with at least 40-50% marks in aggregate.</li>
                      <li>Some institutions may have specific health requirements.</li>
                    </ul>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">RRB Staff Nurse Exam 2026</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Age: 20 to 40 years.</li>
                      <li>10+2 with Diploma in General Nursing and Midwifery (GNM) or BSc Nursing.</li>
                      <li>Registered as a Nurse and Midwife with the Indian Nursing Council.</li>
                    </ul>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">AIIMS NORCET Exam 2026</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Age: 18 to 30 years. (35 Years for NITRD)</li>
                      <li>BSc Nursing (4 years) or Diploma in General Nursing and Midwifery (GNM) and registered with the Nursing Council.</li>
                    </ul>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">NHM-CHO Exam 2026</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Age: 21 to 40 years.</li>
                      <li>BSc Nursing, GNM, or Post-Basic BSc Nursing.</li>
                      <li>Some posts may require candidates to have work dedication in rural healthcare settings.</li>
                    </ul>
                  </TableCell>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Nursing Exams 2026 Exam Pattern */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nursing Exams 2026 Exam Pattern</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Nursing Exams 2026 exams pattern for each exam is designed to test the medical and nursing skills of the candidates. Below are the details for each available exams.
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th colSpan={5} className="px-6 py-3 text-center text-sm font-bold text-gray-900 bg-brand-300 border-b border-brand-400">
                    Nursing Exams 2026 Exam Pattern
                  </th>
                </tr>
                <tr>
                  <TableHeader>Nursing Exam</TableHeader>
                  <TableHeader>Mode of Exam</TableHeader>
                  <TableHeader>Duration</TableHeader>
                  <TableHeader>Syllabus</TableHeader>
                  <TableHeader>Marking Scheme</TableHeader>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <TableCell className="font-medium">BSc Nursing (UG) Exam 2026</TableCell>
                  <TableCell>Online/Offline</TableCell>
                  <TableCell>2-3 hours</TableCell>
                  <TableCell>Anatomy, Physiology, Nursing Foundation, Medical-Surgical Nursing</TableCell>
                  <TableCell>1 mark per correct answer, no negative marking</TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">ANM Exam 2026</TableCell>
                  <TableCell>Offline</TableCell>
                  <TableCell>2-3 hours</TableCell>
                  <TableCell>Basic Nursing Skills, Maternal and Child Health, Community Health Nursing</TableCell>
                  <TableCell>1 mark per correct answer, no negative marking</TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">GNM Exam 2026</TableCell>
                  <TableCell>Offline</TableCell>
                  <TableCell>2-3 hours</TableCell>
                  <TableCell>Medical-Surgical Nursing, Maternal Care, Community Health</TableCell>
                  <TableCell>1 mark per correct answer, no negative marking</TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">RRB Staff Nurse Exam 2026</TableCell>
                  <TableCell>Online/Offline</TableCell>
                  <TableCell>2-3 hours</TableCell>
                  <TableCell>Nursing Theory, Medical-Surgical Nursing, Healthcare Practices</TableCell>
                  <TableCell>1 mark per correct answer, no negative marking</TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">AIIMS NORCET Exam 2026</TableCell>
                  <TableCell>Online</TableCell>
                  <TableCell>2-3 hours</TableCell>
                  <TableCell>Medical-Surgical Nursing, Pediatric Nursing, Obstetrics & Gynecology</TableCell>
                  <TableCell>1 mark per correct answer, no negative marking</TableCell>
                </tr>
                <tr>
                  <TableCell className="font-medium">NHM-CHO Exam 2026</TableCell>
                  <TableCell>Online/Offline</TableCell>
                  <TableCell>2-3 hours</TableCell>
                  <TableCell>Community Health Practices, Healthcare Services</TableCell>
                  <TableCell>1 mark per correct answer, no negative marking</TableCell>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Syllabus & Admit Card */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nursing Exams 2026 Syllabus</h2>
            <p className="text-gray-700 leading-relaxed">
              The Nursing Exams 2026 syllabus is comprehensive and tailored for different nursing exams, covering essential subjects required to excel in the field. It includes topics such as Anatomy, Physiology, Medical-Surgical Nursing, Pediatric Nursing, Obstetrical Nursing, and Community Health Nursing, designed to equip candidates with the necessary knowledge and skills. Detailed syllabi for each nursing exam are available on the official websites of respective conducting bodies like AIIMS, RRB, and NHM.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nursing Exams 2026 Admit Card</h2>
            <p className="text-gray-700 leading-relaxed">
              The Nursing Exams 2026 admit card will be available for download on the official websites of respective conducting bodies, such as AIIMS, RRB, and NHM, approximately two weeks before the exam date. This important document must be carried to the examination centre and contains key details like the candidate's name, roll number, exam centre, and the date and time of the exam. Candidates should carefully verify all the information on the admit card and report any discrepancies to the respective authorities immediately.
            </p>
          </div>
        </div>

        {/* List of Upcoming Exams */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">List of Upcoming Nursing Exams in India 2026</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-brand-700 mb-3">RRB Staff Nurse Exam</h3>
              <p className="text-gray-700 leading-relaxed">
                The Railway Recruitment Board is set to release the 200+ RRB Nursing Superintendent (permanent + contractual) posts in 2026 for multiple railway zones and divisions. Candidates should regularly check the official RRB regional websites and trusted nursing portals to stay updated on vacancy details, exam dates, and application schedules for the upcoming cycle. Successful candidates who clear the RRB Staff Nurse Exam are well-prepared to navigate the unique healthcare demands of the railway industry, contributing to the safety and welfare of passengers and railway personnel.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-brand-700 mb-3">AIIMS NORCET Exam 2026</h3>
              <p className="text-gray-700 leading-relaxed">
                The AIIMS Nursing Officer Recruitment Common Eligibility Test (NORCET) is conducted annually to recruit Nursing Officers for various AIIMS institutions across India. For the 2026 cycle, 8,000–12,000+ Nursing Officer posts are anticipated under NORCET 10, so candidates should keep track of official notification updates and exam schedules on the AIIMS website and reputed exam portals. The AIIMS NORCET Exam for Stage 1 will be conducted on April 11, 2026, the exam rigorously assesses candidates' knowledge of nursing practices, healthcare principles, and their readiness to provide exceptional patient care within the renowned AIIMS healthcare settings.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-brand-700 mb-3">DSSSB Staff Nurse Exam 2026</h3>
              <p className="text-gray-700 leading-relaxed">
                The Delhi Subordinate Services Selection Board is expected to release its DSSSB Nursing Officer recruitment 2026 notification around February–March 2026. Aspirants with GNM, BSc Nursing, or higher nursing qualifications should monitor DSSSB notifications for detailed advertisement numbers, online application dates, and exam schedules. The DSSSB Staff Nurse Exam assesses candidates' competency in various medical procedures, nursing techniques, and their ability to work efficiently in diverse healthcare settings within the National Capital Territory.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-brand-700 mb-3">JIPMER Nursing Officer Exam 2026</h3>
              <p className="text-gray-700 leading-relaxed">
                Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER) is expected to release fresh Nursing Officer (Group B) notifications in the 2026 period as part of central government nursing recruitment. Candidates targeting JIPMER should be prepared for a competitive exam pattern focused on advanced nursing care, clinical decision‑making, and patient safety. Success in the JIPMER Nursing Officer Exam positions candidates to contribute to the highest standards of medical care and innovation at JIPMER.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-brand-700 mb-3">ESIC Staff Nurse Exam 2026</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Employees’ State Insurance Corporation (ESIC) is anticipated to publish new Staff Nurse/Nursing Officer vacancies around 1,500–2,500+ Staff Nurse & Paramedical during 2026 for various ESIC hospitals and dispensaries across India. Once notifications are released, eligible nursing graduates can apply online through the ESIC portal, followed by a written examination and document verification stages as per the recruitment rules.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The ESIC Staff Nurse Exam evaluates candidates' proficiency in medical procedures, patient care, and their readiness to serve within the unique healthcare needs of ESIC beneficiaries, who often have specific expectations and requirements due to their employment-based healthcare coverage.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-brand-700 mb-3">OSSSC Nursing Officer Exam 2026</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Odisha Sub‑ordinate Staff Selection Commission (OSSSC) is expected to bring out fresh Nursing Officer recruitment notifications in 2026 for state‑run hospitals and healthcare centers. Aspirants from Odisha should track OSSSC’s official website for vacancy counts, reservation details, and exam timelines once the notification is issued. The OSSSC Nursing Officer Exam is a key assessment for individuals aspiring to work as nursing officers in the state of Odisha.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nursing officers in Odisha play an essential role in healthcare delivery, providing care to a diverse population. The examination evaluates candidates' competency in nursing practices, patient care, and their ability to contribute to healthcare services in Odisha, which has its unique healthcare challenges and demands arising from its geographical and demographic diversity.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-brand-700 mb-3">NHM State CHO Exam 2026</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Several states across India are expected to release Community Health Officer (CHO) vacancies ranging from 15,000 to 20,000 posts. These vacancies will focus on strengthening primary healthcare and Health & Wellness Centres, offering opportunities to nursing graduates and AYUSH professionals depending on state‑specific eligibility norms. Success in the NHM State CHO Exam positions individuals to be key players in improving public health outcomes at the state level.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The examination thoroughly assesses candidates' knowledge, practical skills, and ability to adapt healthcare principles to the unique needs of their respective states. Success in the NHM State CHO Exam positions individuals to be key players in improving public health outcomes at the state level, addressing the healthcare disparities and challenges specific to each region.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-brand-700 mb-3">UPPSC Staff Nurse Exam 2026</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Uttar Pradesh Subordinate Services Selection Commission is expected to release more than 560 Staff Nurse vacancies in UPPSC and UPSSSC for Staff Nurse/Nursing Officer posts in government hospitals. Candidates should follow official UPPSC and UPSSSC websites for separate notifications, which will include details on vacancy numbers, exam stages (Prelims, Mains, or Single‑stage exams), and application timelines. Successful candidates are well‑prepared to serve the healthcare needs of the people of Uttar Pradesh through these Staff Nurse recruitments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Staff nurses are integral to the functioning of healthcare institutions, providing patient care, and assisting in various medical procedures. The UPPSC Staff Nurse Exam evaluates candidates' proficiency in medical practices, nursing techniques, and their readiness to work in diverse healthcare settings. Successful candidates are well-prepared to serve the healthcare needs of the people of Uttar Pradesh.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
