import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckSquare, Download, Laptop, ArrowRight } from 'lucide-react';
import { resources, comprehensiveExams } from '../data/mockData';
import { SectionTitle, Card } from '../components/UIComponents';
import { UpcomingExams } from '../components/UpcomingExams';
import { SEO } from '../components/SEO';

const Home = () => {
  // Organization Schema for Home Page
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NursingOfficerExams.com",
    "url": "https://nursingofficerexams.com",
    "logo": "https://img-wrapper.vercel.app/image?url=https://placehold.co/512x512/4da3ff/ffffff?text=NOE",
    "sameAs": [
      "https://facebook.com/nursingofficerexams",
      "https://twitter.com/nursingexams"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@nursingofficerexams.com",
      "contactType": "customer support"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nursing Officer Exams India",
    "url": "https://nursingofficerexams.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nursingofficerexams.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Site Navigation Schema
  const siteNavSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": ["Exams", "PYQs", "Mock Tests", "Blog"],
    "url": [
      "https://nursingofficerexams.com/exams",
      "https://nursingofficerexams.com/pyq",
      "https://nursingofficerexams.com/mock-tests",
      "https://nursingofficerexams.com/blog"
    ]
  };

  // ItemList Schema for Exam Links
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": comprehensiveExams.flatMap(cat => cat.exams).slice(0, 10).map((exam, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": exam.name,
      "url": exam.link
    }))
  };

  return (
    <div className="space-y-12 pb-0">
      <SEO 
        title="Nursing Officer Exams India - Notifications, Syllabus, PYQs & Free Resources"
        description="The #1 Authority for Nursing Officer Exams in India. Get latest notifications, syllabus, free PYQs, mock tests, and lectures for AIIMS NORCET, RRB, ESIC, and State Staff Nurse exams."
        canonical="/"
        schema={{...orgSchema, ...websiteSchema, ...siteNavSchema, ...itemListSchema}}
        keywords={['Nursing Officer Exam', 'AIIMS NORCET', 'RRB Staff Nurse', 'Nursing PYQ', 'Staff Nurse Vacancy']}
      />

      {/* Hero Section - Index Style */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            India's Nursing Exam Catalog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Direct access to official notifications, syllabus, and free study resources for AIIMS, RRB, and State Nursing exams. No clutter, just links.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/exams" className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-sm">
              Browse All Exams
            </Link>
            <Link to="/pyq" className="bg-white text-brand-700 border border-brand-200 px-8 py-3 rounded-lg font-bold hover:bg-brand-50 transition-colors shadow-sm">
              Download PYQs
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Quick Resource Blocks - Renamed & Differentiated */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8 mb-16 relative z-10">
          <Link to="/exams" className="block group">
            <Card className="h-full flex flex-col items-center text-center p-6 border-t-4 border-t-blue-500 hover:shadow-lg transition-all">
              <div className="p-3 rounded-full mb-3 bg-blue-50 text-blue-600">
                <BookOpen size={28} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600">All Nursing Exams</h3>
              <p className="text-sm text-gray-500 mt-2">Official links for Central & State exams.</p>
            </Card>
          </Link>

          <Link to="/pyq" className="block group">
            <Card className="h-full flex flex-col items-center text-center p-6 border-t-4 border-t-purple-500 hover:shadow-lg transition-all">
              <div className="p-3 rounded-full mb-3 bg-purple-50 text-purple-600">
                <Download size={28} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600">PYQ Downloads</h3>
              <p className="text-sm text-gray-500 mt-2">Previous year papers for NORCET, RRB & CHO.</p>
            </Card>
          </Link>

          <Link to="/subject-tests" className="block group">
            <Card className="h-full flex flex-col items-center text-center p-6 border-t-4 border-t-orange-500 hover:shadow-lg transition-all">
              <div className="p-3 rounded-full mb-3 bg-orange-50 text-orange-600">
                <Laptop size={28} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600">Subject Tests</h3>
              <p className="text-sm text-gray-500 mt-2">Topic-wise practice for Anatomy, MSN.</p>
            </Card>
          </Link>
        </div>

        {/* Upcoming Exams Table */}
        <UpcomingExams />

        {/* Exam Discovery Grid - Clickable & Short Descriptions */}
        <section className="mb-16">
          <SectionTitle>Explore Exams by Category</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comprehensiveExams.flatMap(cat => cat.exams).map((exam, idx) => (
              <a 
                key={idx} 
                href={exam.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-gray-200 rounded-lg p-5 hover:border-brand-300 hover:shadow-md transition-all h-full flex flex-col"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900 group-hover:text-brand-600 line-clamp-1">{exam.name}</h4>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-brand-500 flex-shrink-0 ml-2" />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {exam.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Differentiated Resources Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Mock Tests Card */}
          <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded text-green-700"><CheckSquare size={24} /></div>
              <h3 className="font-bold text-xl text-green-900">Full Length Mock Tests</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">Real exam interface simulations for NORCET, RRB, and ESIC. 100-200 Questions.</p>
            <ul className="space-y-3 mb-6">
              {resources.tests.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-center justify-between bg-white p-3 rounded border border-green-100 shadow-sm">
                  <span className="text-sm font-medium text-gray-800">{item.title}</span>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-green-600 hover:underline">Start Test</a>
                </li>
              ))}
            </ul>
            <Link to="/mock-tests" className="block w-full py-2 text-center bg-green-600 text-white rounded font-bold text-sm hover:bg-green-700 transition-colors">
              View All Mock Tests
            </Link>
          </Card>

          {/* Subject Tests Card */}
          <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded text-orange-700"><Laptop size={24} /></div>
              <h3 className="font-bold text-xl text-orange-900">Subject Wise Practice</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">Topic-specific mini tests for Anatomy, MSN, OBG. 50 Questions per test.</p>
            <ul className="space-y-3 mb-6">
              {resources.subjectTests.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-center justify-between bg-white p-3 rounded border border-orange-100 shadow-sm">
                  <span className="text-sm font-medium text-gray-800">{item.title}</span>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-orange-600 hover:underline">Start Test</a>
                </li>
              ))}
            </ul>
            <Link to="/subject-tests" className="block w-full py-2 text-center bg-orange-600 text-white rounded font-bold text-sm hover:bg-orange-700 transition-colors">
              View All Subject Tests
            </Link>
          </Card>
        </div>

        {/* Quick Redirects (Bottom) - Simplified */}
        <section className="border-t border-gray-200 pt-12 pb-8">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Quick Redirects</h3>
          <div className="flex flex-wrap gap-3">
            {comprehensiveExams.flatMap(c => c.exams).map((exam, idx) => (
              <a 
                key={idx} 
                href={exam.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-brand-100 hover:text-brand-700 transition-colors"
              >
                {exam.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
