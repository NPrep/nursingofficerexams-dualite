import React from 'react';
import { comprehensiveExams } from '../data/mockData';
import { Breadcrumbs, Card, SectionTitle } from '../components/UIComponents';
import { ExternalLink, Building2, MapPin, HeartPulse, GraduationCap } from 'lucide-react';
import { SEO } from '../components/SEO';

const CategoryIcon = ({ category }: { category: string }) => {
  if (category.includes('Central')) return <Building2 className="text-brand-600" size={24} />;
  if (category.includes('State')) return <MapPin className="text-orange-600" size={24} />;
  if (category.includes('CHO')) return <HeartPulse className="text-green-600" size={24} />;
  return <GraduationCap className="text-purple-600" size={24} />;
};

export const ExamsList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="List of All Nursing Exams in India 2026 - Central, State & CHO"
        description="Complete directory of all Nursing Officer exams in India. Find official links for AIIMS NORCET, RRB, ESIC, DSSSB, and State PSC Staff Nurse exams."
        canonical="/exams"
      />

      <Breadcrumbs items={[{ label: 'All Nursing Exams' }]} />
      
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete List of Nursing Exams in India</h1>
        <p className="text-lg text-gray-600">
          A comprehensive directory of all Central, State, and Autonomous Body nursing exams. 
          Find official links and details for AIIMS, RRB, CHO, and Staff Nurse recruitments across all states.
        </p>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {comprehensiveExams.map((section, idx) => (
          <section key={idx} className="scroll-mt-20" id={section.category.toLowerCase().replace(/\s+/g, '-')}>
            <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                <CategoryIcon category={section.category} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{section.category}</h2>
                {section.description && <p className="text-sm text-gray-500 mt-1">{section.description}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.exams.map((exam, examIdx) => (
                <Card key={examIdx} className="hover:shadow-md transition-shadow flex flex-col h-full p-6 border-l-4 border-l-brand-200 hover:border-l-brand-500">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exam.name}</h3>
                    {/* Added Description Block */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                      {exam.description || "Detailed notification, eligibility, and syllabus information for this exam will be updated soon. Please check the official website for the latest announcements."}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <a 
                      href={exam.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-brand-600 hover:text-brand-800 hover:underline"
                    >
                      Official Website <ExternalLink size={14} className="ml-1.5" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
      
      <div className="mt-16 bg-blue-50 border border-blue-100 rounded-xl p-8 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Don't see an exam listed here?</h3>
        <p className="text-blue-700 mb-6">
          We constantly update our database. If you know of a nursing exam notification that isn't listed, 
          please check back soon as we update this page weekly.
        </p>
      </div>
    </div>
  );
};
