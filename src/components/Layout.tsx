import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Exams in India', path: '/nursing-officer-exams-in-india' },
  { name: 'Eligibility', path: '/nursing-officer-eligibility' },
  { name: 'Salary', path: '/nursing-officer-salary' },
  { name: 'Application Process', path: '/how-to-apply-for-nursing-officer-exam' },
];

const NPrepCTA = () => (
  <section className="bg-brand-50 border-y border-brand-100">
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Prepare for Nursing Officer Exams with NPrep</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-5">
          <li>nursing MCQ practice</li>
          <li>AIIMS level mock tests</li>
          <li>structured study plans</li>
          <li>previous year papers</li>
        </ul>
        <a
          href="https://nprep.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-brand-700"
        >
          Start preparation <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </section>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand-600 text-white p-2 rounded-lg shadow-sm group-hover:bg-brand-700 transition-colors">
              <GraduationCap size={28} />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">NursingOfficerExams</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors hover:text-brand-600',
                    isActive ? 'text-brand-600 font-semibold' : 'text-gray-600'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 font-medium py-2 border-b border-gray-100 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t-4 border-brand-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4 text-white">
              <GraduationCap size={24} />
              <span className="font-bold text-lg">NursingOfficerExams</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Informational hub for government nursing officer exams, eligibility, application process, and recruitment updates.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Major Exams</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/aiims-norcet-exam" className="hover:text-brand-400">AIIMS NORCET</Link></li>
              <li><Link to="/rrb-nursing-superintendent-exam" className="hover:text-brand-400">RRB Nursing Superintendent</Link></li>
              <li><Link to="/esic-nursing-officer-exam" className="hover:text-brand-400">ESIC Nursing Officer</Link></li>
              <li><Link to="/nhm-nursing-officer-recruitment" className="hover:text-brand-400">NHM Nursing Officer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/nursing-officer-eligibility" className="hover:text-brand-400">Eligibility</Link></li>
              <li><Link to="/nursing-officer-salary" className="hover:text-brand-400">Salary Overview</Link></li>
              <li><Link to="/government-hospitals-nursing-officer-recruitment" className="hover:text-brand-400">Recruiting Hospitals</Link></li>
              <li><Link to="/how-to-apply-for-nursing-officer-exam" className="hover:text-brand-400">Application Process</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-brand-400">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-brand-400">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} NursingOfficerExams.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <Header />
      <main id="main-content" className="flex-grow">{children}</main>
      <NPrepCTA />
      <Footer />
    </div>
  );
};
