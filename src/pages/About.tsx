import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs, SectionTitle, Card } from '../components/UIComponents';
import { GraduationCap, ShieldCheck, Users, BookOpen } from 'lucide-react';

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "NursingOfficerExams.com",
      "url": "https://nursingofficerexams.com",
      "description": "The #1 Authority for Nursing Officer Exams in India.",
      "email": "contact@nursingofficerexams.com"
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title="About Us - Nursing Officer Exams"
        description="We are India's leading portal for Nursing Officer Exam notifications, syllabus, and preparation resources. Helping nurses achieve their government job dreams."
        canonical="/about"
        schema={schema}
      />
      
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-brand-50 rounded-full text-brand-600 mb-6">
            <GraduationCap size={48} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About NursingOfficerExams.com</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are dedicated to providing the most accurate, timely, and comprehensive resources for nursing aspirants across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border-gray-200 p-8">
            <ShieldCheck className="text-brand-600 mb-4" size={32} />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To democratize access to high-quality exam information and preparation materials. We believe every nurse deserves a fair chance at securing a prestigious government position, regardless of their location or background.
            </p>
          </Card>
          <Card className="bg-white border-gray-200 p-8">
            <Users className="text-brand-600 mb-4" size={32} />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              A team of experienced educators, nursing officers, and tech professionals working together to build the ultimate one-stop solution for nursing competitive exams.
            </p>
          </Card>
        </div>

        <section className="mb-16">
          <SectionTitle>What We Offer</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <BookOpen className="mx-auto text-gray-700 mb-4" size={28} />
              <h3 className="font-bold text-lg mb-2">Exam Notifications</h3>
              <p className="text-sm text-gray-600">Instant updates on AIIMS, RRB, ESIC, and State vacancies.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <ShieldCheck className="mx-auto text-gray-700 mb-4" size={28} />
              <h3 className="font-bold text-lg mb-2">Verified Resources</h3>
              <p className="text-sm text-gray-600">Authentic previous year papers and syllabus breakdowns.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Users className="mx-auto text-gray-700 mb-4" size={28} />
              <h3 className="font-bold text-lg mb-2">Community Support</h3>
              <p className="text-sm text-gray-600">Guidance on eligibility, document verification, and career path.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
