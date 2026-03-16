import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Card } from '../components/UIComponents';

const Home = () => {
  return (
    <div className="pb-10">
      <SEO
        title="Government Nursing Officer Exams in India"
        description="Informational hub for nursing officer exam notifications, eligibility, exam pattern, application process, salary, and recruitment updates."
        canonical="/"
        keywords={[
          'nursing officer exam',
          'government nursing officer exams',
          'AIIMS nursing officer exam',
          'RRB nursing officer exam',
          'nursing officer recruitment',
        ]}
      />

      <section className="bg-white border-b border-gray-200 pt-14 pb-14">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5">Government Nursing Officer Exams in India</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nursing officers are recruited in various government hospitals through national and state level examinations.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 grid gap-8">
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Major Nursing Officer Exams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ['AIIMS NORCET', '/aiims-norcet-exam'],
              ['RRB Nursing Superintendent', '/rrb-nursing-superintendent-exam'],
              ['ESIC Nursing Officer', '/esic-nursing-officer-exam'],
              ['NHM Nursing Officer', '/nhm-nursing-officer-recruitment'],
            ].map(([name, path]) => (
              <Link key={path} to={path}><Card className="hover:border-brand-300"><h3 className="font-semibold text-brand-700">{name}</h3></Card></Link>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Eligibility for Nursing Officer</h2>
          <p className="text-gray-700 mb-4">Review common qualifications, registration requirements, and age criteria.</p>
          <Link to="/nursing-officer-eligibility" className="text-brand-600 font-semibold hover:underline">View Eligibility Guide</Link>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Selection Process</h2>
          <p className="text-gray-700">Most recruitments include written/computer-based assessment and document verification as per official notifications.</p>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Salary Overview</h2>
          <p className="text-gray-700 mb-4">Government nursing officer pay typically starts from Level-7 equivalent ranges with allowances.</p>
          <Link to="/nursing-officer-salary" className="text-brand-600 font-semibold hover:underline">Read Salary Details</Link>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Latest Recruitment Updates</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>AIIMS NORCET</li>
            <li>Railway Nursing Superintendent</li>
            <li>ESIC Nursing Officer</li>
            <li>NHM Nursing Officer</li>
          </ul>
          <p className="text-gray-700 mt-3">These are the major government recruitments for nursing officers in India.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
