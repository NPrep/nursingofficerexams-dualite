import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, CheckSquare, ArrowRight } from 'lucide-react';
import { exams, blogs, resources } from '../data/mockData';
import { SectionTitle, Card, Badge } from '../components/UIComponents';
import { SEOBlock } from '../components/SEOBlock';
import { SEO } from '../components/SEO';

const Home = () => {
  const centralExams = exams.filter(e => e.category === 'Central');
  const stateExams = exams.filter(e => e.category === 'State');

  // Organization Schema for Home Page
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NursingOfficerExams.com",
    "url": "https://nursingofficerexams.com",
    "logo": "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/512x512/4da3ff/ffffff?text=NOE",
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

  return (
    <div className="space-y-12 pb-0">
      <SEO 
        title="Nursing Officer Exams India - Notifications, Syllabus, PYQs & Free Resources"
        description="The #1 Authority for Nursing Officer Exams in India. Get latest notifications, syllabus, free PYQs, mock tests, and lectures for AIIMS NORCET, RRB, ESIC, and State Staff Nurse exams."
        canonical="/"
        schema={{...orgSchema, ...websiteSchema}}
        keywords={['Nursing Officer Exam', 'AIIMS NORCET', 'RRB Staff Nurse', 'Nursing PYQ', 'Staff Nurse Vacancy']}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 border-b border-brand-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Nursing Officer Exams in India <br />
            <span className="text-brand-600 text-2xl md:text-4xl">Notifications, Syllabus, PYQs & Free Resources</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your one-stop destination for AIIMS NORCET, RRB Staff Nurse, ESIC, and State Nursing Officer exam preparation. 
            Access free mock tests, previous year papers, and expert strategy guides.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/exams" className="bg-brand-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors">
              Explore All Exams
            </Link>
            <Link to="/pyq" className="bg-white text-brand-700 border border-brand-200 px-6 py-3 rounded-lg font-medium hover:bg-brand-50 transition-colors">
              Download PYQs
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Quick Resource Blocks - Updated to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8 mb-16 relative z-10">
          {[
            { title: 'All Nursing Exams', icon: BookOpen, link: '/exams', color: 'bg-blue-50 text-blue-600' },
            { title: 'Previous Papers', icon: FileText, link: '/pyq', color: 'bg-purple-50 text-purple-600' },
            { title: 'Subject Tests', icon: CheckSquare, link: '/subject-tests', color: 'bg-orange-50 text-orange-600' },
          ].map((item, idx) => (
            <Link key={idx} to={item.link} className="block group">
              <Card className="h-full flex flex-col items-center text-center p-6 border-t-4 border-t-transparent hover:border-t-brand-500 transition-all">
                <div className={`p-3 rounded-full mb-4 ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-brand-600">{item.title}</h3>
              </Card>
            </Link>
          ))}
        </div>

        {/* Central Exams */}
        <section className="mb-16">
          <SectionTitle>Central Govt Nursing Exams</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centralExams.map(exam => (
              <Link key={exam.id} to={`/exam/${exam.id}`} className="block group">
                <Card className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <Badge type="brand">{exam.category}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600">{exam.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{exam.description}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <span>{exam.vacancies} Vacancies</span>
                    <span className="flex items-center text-brand-600 font-medium">View Details <ArrowRight size={16} className="ml-1" /></span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* State Exams */}
        <section className="mb-16">
          <SectionTitle>State Govt Nursing Exams</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateExams.map(exam => (
              <Link key={exam.id} to={`/exam/${exam.id}`} className="block group">
                <Card className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <Badge type="warning">{exam.category}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600">{exam.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{exam.description}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <span>{exam.vacancies} Vacancies</span>
                    <span className="flex items-center text-brand-600 font-medium">View Details <ArrowRight size={16} className="ml-1" /></span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Two Column Layout: Latest Resources & Blog */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2">
            <SectionTitle>Latest From Our Blog</SectionTitle>
            <div className="space-y-6">
              {blogs.slice(0, 3).map((blog, idx) => (
                <Card key={idx} className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>{blog.category}</Badge>
                      <span className="text-xs text-gray-500">{blog.date}</span>
                    </div>
                    <Link to={`/blog`} className="block">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-brand-600">{blog.title}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <Link to={`/blog`} className="text-brand-600 font-medium hover:underline inline-flex items-center">
                      Read Article <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle>Free Resources</SectionTitle>
            <Card className="bg-brand-50 border-brand-100 mb-6">
              <h3 className="font-bold text-lg mb-4 text-brand-900">Latest PYQs</h3>
              <ul className="space-y-3">
                {resources.pyqs.slice(0, 5).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FileText size={18} className="text-brand-500 mt-0.5 shrink-0" />
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-brand-700 hover:underline line-clamp-1">{item.title}</a>
                  </li>
                ))}
              </ul>
              <Link to="/pyq" className="block mt-4 text-center text-sm font-medium text-brand-700 hover:text-brand-800">View All PYQs &rarr;</Link>
            </Card>

            <Card className="bg-green-50 border-green-100">
              <h3 className="font-bold text-lg mb-4 text-green-900">Live Mock Tests</h3>
              <ul className="space-y-3">
                {resources.tests.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0"></div>
                    <Link to={item.link} className="text-sm text-gray-700 hover:text-green-700 hover:underline">{item.title}</Link>
                  </li>
                ))}
              </ul>
              <Link to="/mock-tests" className="block mt-4 text-center text-sm font-medium text-green-700 hover:text-green-800">Attempt Tests &rarr;</Link>
            </Card>
          </div>
        </div>
      </div>
      
      {/* SEO Authority Block: Comprehensive Exam List */}
      <SEOBlock />
    </div>
  );
};

export default Home;
