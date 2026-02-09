import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckSquare, Download, Laptop, ArrowRight, Dna, Microscope, Activity } from 'lucide-react';
import { resources, comprehensiveExams } from '../data/mockData';
import { SectionTitle, Card } from '../components/UIComponents';
import { UpcomingExams } from '../components/UpcomingExams';
import { SEO } from '../components/SEO';

const Home = () => {
  // Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Genomic Medical & Nursing Academy",
    "alternateName": "NursingOfficerExams.com",
    "url": "https://nursingofficerexams.com",
    "logo": "https://img-wrapper.vercel.app/image?url=https://placehold.co/512x512/4da3ff/ffffff?text=GMNA",
    "description": "Independent institution providing genomic nursing education and competitive exam guidance."
  };

  return (
    <div className="space-y-16 pb-12">
      <SEO 
        title="Genomic Medical & Nursing Academy - Independent Nursing Exam Authority"
        description="Advancing nursing careers through genomic education and comprehensive exam preparation. Independent resource for AIIMS NORCET, RRB, and State Nursing exams."
        canonical="/"
        schema={orgSchema}
        keywords={['Genomic Nursing', 'Nursing Academy', 'Nursing Officer Exam', 'Medical Education']}
      />

      {/* Hero Section - Educational Focus */}
      <section className="bg-white border-b border-gray-200 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-500"></div>
        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-brand-100">
            <Dna size={16} /> Genomic Medical & Nursing Academy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Advancing Nursing Careers through <span className="text-brand-600">Genomic Education</span> & Exam Mastery
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            An independent institution dedicated to empowering nurses with future-ready skills in Genomic Medicine and comprehensive preparation for national competitive exams.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/exams" className="bg-brand-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200/50 flex items-center gap-2">
              Explore Exam Schedules <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-sm">
              About The Academy
            </Link>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-brand-50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
      </section>

      <div className="container mx-auto px-4">
        
        {/* Genomic Nursing Section - Informational & Diagrammatic */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Future: Genomic Nursing</h2>
            <p className="text-gray-600 leading-relaxed">
              Genomic medicine is transforming healthcare. As an independent academy, we emphasize the integration of genetics into nursing practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Visual Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>

            <Card className="bg-white border-gray-200 text-center p-8 relative">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm">
                <Dna className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Medicine</h3>
              <p className="text-sm text-gray-600">
                Understanding genetic variations to tailor patient care plans. Nurses play a key role in collecting family history and genetic data.
              </p>
            </Card>

            <Card className="bg-white border-gray-200 text-center p-8 relative">
              <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm">
                <Microscope className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Application</h3>
              <p className="text-sm text-gray-600">
                Interpreting genetic test results and managing therapies for hereditary conditions like cancer and cardiovascular diseases.
              </p>
            </Card>

            <Card className="bg-white border-gray-200 text-center p-8 relative">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm">
                <Activity className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Counseling</h3>
              <p className="text-sm text-gray-600">
                Educating patients about genetic risks and ethical implications. Bridging the gap between complex science and patient understanding.
              </p>
            </Card>
          </div>
        </section>

        {/* Upcoming Exams Table - Renamed to Schedules */}
        <UpcomingExams />

        {/* Academy Resources Grid */}
        <section className="mb-20">
          <SectionTitle>Academy Resources</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/exams" className="block group">
              <Card className="h-full p-6 hover:border-brand-400 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">Exam Schedules</h3>
                </div>
                <p className="text-sm text-gray-600">Comprehensive directory of Central and State nursing exam notifications and dates.</p>
              </Card>
            </Link>

            <Link to="/pyq" className="block group">
              <Card className="h-full p-6 hover:border-brand-400 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                    <Download size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">Paper Archive</h3>
                </div>
                <p className="text-sm text-gray-600">Access our digital library of previous year question papers for analysis.</p>
              </Card>
            </Link>

            <Link to="/subject-tests" className="block group">
              <Card className="h-full p-6 hover:border-brand-400 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                    <Laptop size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">Digital Testing</h3>
                </div>
                <p className="text-sm text-gray-600">Computer-based subject modules to enhance clinical knowledge retention.</p>
              </Card>
            </Link>
          </div>
        </section>

        {/* Exam Catalog - Clean & Informational */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Exam Information Directory</h2>
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
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{exam.description}</p>
                <div className="text-xs font-bold text-brand-600 flex items-center">
                  Official Resource <ExternalLink size={10} className="ml-1" />
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

// Helper for the external link icon since it wasn't imported in the main block
import { ExternalLink } from 'lucide-react';

export default Home;
