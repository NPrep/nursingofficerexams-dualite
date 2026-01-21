import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { exams } from '../data/mockData';
import { Breadcrumbs, SectionTitle, InfoTable, Card } from '../components/UIComponents';
import { CheckCircle, Calendar, Book, FileText } from 'lucide-react';
import { SEO } from '../components/SEO';

const ExamDetail = () => {
  const { examId } = useParams();
  const exam = exams.find(e => e.id === examId);

  if (!exam) {
    return <Navigate to="/exams" replace />;
  }

  // Schema for Article/Guide
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${exam.title} 2026 - Notification, Syllabus, Eligibility & Pattern`,
    "image": "https://img-wrapper.vercel.app/image?url=https://placehold.co/1200x630/4da3ff/ffffff?text=Exam+Details",
    "author": {
      "@type": "Organization",
      "name": "NursingOfficerExams.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NursingOfficerExams.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://img-wrapper.vercel.app/image?url=https://placehold.co/512x512/4da3ff/ffffff?text=NOE"
      }
    },
    "datePublished": "2024-12-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  // Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the age limit for ${exam.title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, the age limit is between 21 to 35 years, with age relaxation for reserved categories as per government rules."
        }
      },
      {
        "@type": "Question",
        "name": `Is there negative marking in ${exam.title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, typically there is a negative marking of 1/3rd or 1/4th marks for every wrong answer. Please check the official notification for exact details."
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title={`${exam.title} 2026 - Notification, Syllabus, Eligibility & Pattern`}
        description={`Complete guide for ${exam.title} 2026. Check eligibility, exam pattern, syllabus, salary, and download previous year question papers.`}
        canonical={`/exam/${exam.id}`}
        type="article"
        schema={{...articleSchema, ...faqSchema}}
        keywords={[exam.title, `${exam.title} Syllabus`, `${exam.title} Eligibility`, `${exam.title} PYQ`]}
      />

      <Breadcrumbs items={[{ label: 'Exams', path: '/exams' }, { label: exam.title }]} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{exam.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{exam.description}</p>
          </div>

          {/* Overview Table */}
          <section>
            <SectionTitle className="text-xl">Exam Overview</SectionTitle>
            <InfoTable data={[
              { label: 'Conducting Body', value: exam.conductingBody },
              { label: 'Vacancies', value: exam.vacancies },
              { label: 'Category', value: `${exam.category} Government Job` },
              { label: 'Salary / Pay Scale', value: exam.salary },
              { label: 'Eligibility', value: exam.eligibility },
            ]} />
          </section>

          {/* Exam Pattern */}
          <section>
            <SectionTitle className="text-xl">Exam Pattern</SectionTitle>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject / Section</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. of Questions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {exam.pattern.map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.subject}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{row.questions}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{row.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Syllabus */}
          <section>
            <SectionTitle className="text-xl">Syllabus Overview</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exam.syllabus.map((topic, idx) => (
                <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-md border border-gray-100">
                  <CheckCircle size={18} className="text-brand-500 mr-3" />
                  <span className="text-gray-700 font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section>
            <SectionTitle className="text-xl">Frequently Asked Questions</SectionTitle>
            <div className="space-y-4">
              <details className="group bg-white border border-gray-200 rounded-lg p-4 cursor-pointer">
                <summary className="font-medium text-gray-900 list-none flex justify-between items-center">
                  What is the age limit for {exam.title}?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm">Generally, the age limit is between 21 to 35 years, with age relaxation for reserved categories as per government rules.</p>
              </details>
              <details className="group bg-white border border-gray-200 rounded-lg p-4 cursor-pointer">
                <summary className="font-medium text-gray-900 list-none flex justify-between items-center">
                  Is there negative marking in {exam.title}?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm">Yes, typically there is a negative marking of 1/3rd or 1/4th marks for every wrong answer. Please check the official notification for exact details.</p>
              </details>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="bg-blue-50 border-blue-100">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Calendar className="text-blue-600" size={20} /> Important Dates
            </h3>
            {exam.importantDates.length > 0 ? (
              <ul className="space-y-3">
                {exam.importantDates.map((date, idx) => (
                  <li key={idx} className="text-sm">
                    <span className="block text-gray-500 text-xs">{date.event}</span>
                    <span className="font-medium text-gray-900">{date.date}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Dates to be announced soon.</p>
            )}
          </Card>

          <Card>
            <h3 className="font-bold text-lg mb-4">Study Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pyq" className="flex items-center gap-3 text-sm text-gray-700 hover:text-brand-600 group">
                  <div className="bg-brand-100 p-2 rounded text-brand-600 group-hover:bg-brand-200"><FileText size={16} /></div>
                  Previous Year Papers
                </Link>
              </li>
              <li>
                <Link to="/mock-tests" className="flex items-center gap-3 text-sm text-gray-700 hover:text-brand-600 group">
                  <div className="bg-green-100 p-2 rounded text-green-600 group-hover:bg-green-200"><Book size={16} /></div>
                  Free Mock Tests
                </Link>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExamDetail;
