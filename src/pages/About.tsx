import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs, SectionTitle, Card } from '../components/UIComponents';
import { GraduationCap, Users, Target, ShieldCheck } from 'lucide-react';

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "NursingOfficerExams.com",
      "url": "https://nursingofficerexams.com",
      "logo": "https://img-wrapper.vercel.app/image?url=https://placehold.co/512x512/4da3ff/ffffff?text=NOE",
      "description": "India's premier free resource portal for Nursing Officer competitive exams.",
      "email": "contact@nursingofficerexams.com"
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="About Us - Nursing Officer Exams India"
        description="Learn about NursingOfficerExams.com, our mission to help Indian nurses secure government jobs through free resources, accurate notifications, and expert guidance."
        canonical="/about"
        schema={schema}
      />
      
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Empowering Nurses, Building Careers</h1>
          <p className="text-xl text-gray-600">
            We are dedicated to providing the most accurate, timely, and high-quality resources for nursing aspirants across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-brand-50 border-brand-100">
            <Target className="text-brand-600 mb-4" size={40} />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-700">
              To democratize access to quality exam preparation materials for every nursing student in India, regardless of their location or economic background. We believe every nurse deserves a fair shot at their dream government job.
            </p>
          </Card>
          <Card className="bg-blue-50 border-blue-100">
            <ShieldCheck className="text-blue-600 mb-4" size={40} />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Trust & Accuracy</h2>
            <p className="text-gray-700">
              In an era of misinformation, we stand as a pillar of trust. All our notifications are verified from official sources (AIIMS, RRB, State PSCs), and our study materials are curated by subject matter experts.
            </p>
          </Card>
        </div>

        <section className="mb-16">
          <SectionTitle>What We Offer</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-gray-700" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Exam Authority</h3>
              <p className="text-sm text-gray-600">Complete details on eligibility, syllabus, and patterns for 50+ exams.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-gray-700" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Community First</h3>
              <p className="text-sm text-gray-600">A student-centric platform focusing on free PYQs and mock tests.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-gray-700" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Zero Spam</h3>
              <p className="text-sm text-gray-600">No misleading ads or fake notifications. Just pure educational content.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
