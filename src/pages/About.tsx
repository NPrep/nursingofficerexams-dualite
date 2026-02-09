import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs, SectionTitle, Card } from '../components/UIComponents';
import { GraduationCap, ShieldCheck, Dna, BookOpen } from 'lucide-react';

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "Genomic Medical & Nursing Academy",
      "url": "https://nursingofficerexams.com",
      "description": "Independent institution for genomic nursing education.",
      "email": "contact@nursingofficerexams.com"
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title="About Genomic Medical & Nursing Academy"
        description="We are an independent educational institution focused on genomic nursing and competitive exam preparation. Not affiliated with any coaching brand."
        canonical="/about"
        schema={schema}
      />
      
      <Breadcrumbs items={[{ label: 'About The Academy' }]} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-brand-50 rounded-full text-brand-600 mb-6">
            <GraduationCap size={48} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Genomic Medical & Nursing Academy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            An independent institution bridging the gap between traditional nursing education and the future of genomic healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border-gray-200 p-8">
            <ShieldCheck className="text-brand-600 mb-4" size={32} />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Independent Identity</h2>
            <p className="text-gray-700 leading-relaxed">
              We operate as a fully independent educational entity. Our mission is to provide unbiased, high-quality resources for nursing professionals. We are not affiliated with, nor do we endorse, any specific coaching institute or commercial brand.
            </p>
          </Card>
          <Card className="bg-white border-gray-200 p-8">
            <Dna className="text-purple-600 mb-4" size={32} />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Genomic Focus</h2>
            <p className="text-gray-700 leading-relaxed">
              Healthcare is evolving. Our academy emphasizes the role of genetics in modern nursing, preparing students not just for exams, but for the future of precision medicine and patient care.
            </p>
          </Card>
        </div>

        <section className="mb-16">
          <SectionTitle>Our Core Pillars</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <BookOpen className="mx-auto text-gray-700 mb-4" size={28} />
              <h3 className="font-bold text-lg mb-2">Academic Excellence</h3>
              <p className="text-sm text-gray-600">Curated syllabus breakdowns and study materials.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <ShieldCheck className="mx-auto text-gray-700 mb-4" size={28} />
              <h3 className="font-bold text-lg mb-2">Information Integrity</h3>
              <p className="text-sm text-gray-600">Verified notification updates from official sources.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Dna className="mx-auto text-gray-700 mb-4" size={28} />
              <h3 className="font-bold text-lg mb-2">Future Readiness</h3>
              <p className="text-sm text-gray-600">Integrating genomic literacy into nursing education.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
