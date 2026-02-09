import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, Laptop, ArrowRight, ExternalLink } from 'lucide-react';
import { comprehensiveExams } from '../data/mockData';
import { SectionTitle, Card } from '../components/UIComponents';
import { UpcomingExams } from '../components/UpcomingExams';
import { SEO } from '../components/SEO';

const Home = () => {
  // Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NursingOfficerExams.com",
    "url": "https://nursingofficerexams.com",
    "logo": "https://img-wrapper.vercel.app/image?url=https://placehold.co/512x512/4da3ff/ffffff?text=NOE",
    "description": "The #1 Authority for Nursing Officer Exams in India."
  };

  return (
    <div className="space-y-16 pb-12">
      <SEO 
        title="Nursing Officer Exams India - Notifications, Syllabus, PYQs & Free Resources"
        description="The #1 Authority for Nursing Officer Exams in India. Get latest notifications, syllabus, free PYQs, mock tests, and lectures for AIIMS NORCET, RRB, ESIC, and State Staff Nurse exams."
        canonical="/"
        schema={orgSchema}
        keywords={['Nursing Officer Exam', 'AIIMS NORCET', 'RRB Staff Nurse', 'Nursing PYQ']}
      />

      {/* Hero Section - Gateway Style */}
      <section className="bg-white border-b border-gray-200 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-500"></div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            India's #1 Index for <span className="text-brand-600">Nursing Officer Exams</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your single gateway to Official Notifications, Syllabus, Previous Year Papers, and Free Mock Tests for all Central & State Nursing Exams.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/exams" className="bg-brand-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200/50 flex items-center gap-2">
              Browse All Exams <ArrowRight size={18} />
            </Link>
            <Link to="/pyq" className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-sm">
              Download PYQs
            </Link>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-brand-50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
      </section>

      <div className="container mx-auto px-4">
        
        {/* Upcoming Exams Table */}
        <UpcomingExams />

        {/* Quick Resources Grid */}
        <section className="mb-20">
          <SectionTitle>Quick Resources</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/exams" className="block group">
              <Card className="h-full p-6 hover:border-brand-400 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">All Nursing Exams</h3>
                </div>
                <p className="text-sm text-gray-600">Complete directory of Central and State nursing exam notifications.</p>
              </Card>
            </Link>

            <Link to="/pyq" className="block group">
              <Card className="h-full p-6 hover:border-brand-400 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                    <Download size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">PYQ Downloads</h3>
                </div>
                <p className="text-sm text-gray-600">Direct PDF download links for previous year question papers.</p>
              </Card>
            </Link>

            <Link to="/subject-tests" className="block group">
              <Card className="h-full p-6 hover:border-brand-400 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                    <Laptop size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">Subject Tests</h3>
                </div>
                <p className="text-sm text-gray-600">Topic-wise practice tests for Anatomy, MSN, and more.</p>
              </Card>
            </Link>
          </div>
        </section>

        {/* Exam Catalog / Index */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Explore Exams</h2>
            <Link to="/exams" className="text-brand-600 font-semibold hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {comprehensiveExams.flatMap(cat => cat.exams).slice(0, 8).map((exam, idx) => (
              <a 
                key={idx} 
                href={exam.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 group-hover:text-brand-600 mb-1 truncate">{exam.name}</h4>
                <p className="text-xs text-gray-500 mb-3 line-clamp-1">{exam.description.substring(0, 60)}...</p>
                <div className="text-xs font-bold text-brand-600 flex items-center">
                  Visit Official Site <ExternalLink size={10} className="ml-1" />
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
