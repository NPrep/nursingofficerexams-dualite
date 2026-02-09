import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Academy Exams', path: '/exams' },
    { name: 'Courses', path: '/courses' },
    { name: 'PYQs', path: '/pyq' },
    { name: 'Subject Tests', path: '/subject-tests' },
    { name: 'Mock Tests', path: '/mock-tests' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand-600 text-white p-2 rounded-lg shadow-sm group-hover:bg-brand-700 transition-colors">
              <GraduationCap size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-gray-900 tracking-tight">NursingOfficerExams</span>
              <span className="text-[10px] text-brand-700 font-bold uppercase tracking-wide mt-1">
                Genomic Medical & Nursing Academy – Independent Institution
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-brand-600",
                    isActive ? "text-brand-600 font-semibold" : "text-gray-600"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg absolute w-full z-50">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 font-medium py-2 border-b border-gray-50 last:border-0"
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
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-brand-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 text-white">
              <GraduationCap size={24} />
              <span className="font-bold text-lg">NursingOfficerExams</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Genomic Medical & Nursing Academy is an independent educational institution dedicated to advancing nursing careers through accurate information, syllabus mastery, and genomic healthcare awareness.
            </p>
            <div className="text-xs text-slate-500 font-medium border-l-2 border-slate-700 pl-3">
              Independent Institution.<br/>Not affiliated with any coaching brand.
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide text-sm uppercase">Academy Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/exam/aiims-norcet" className="hover:text-brand-400 transition-colors">AIIMS NORCET Guide</Link></li>
              <li><Link to="/exam/rrb-staff-nurse" className="hover:text-brand-400 transition-colors">RRB Staff Nurse Syllabus</Link></li>
              <li><Link to="/exam/esic-nursing-officer" className="hover:text-brand-400 transition-colors">ESIC Career Path</Link></li>
              <li><Link to="/exams" className="hover:text-brand-400 transition-colors">All Exam Schedules</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide text-sm uppercase">Student Corner</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/pyq" className="hover:text-brand-400 transition-colors">Previous Year Papers</Link></li>
              <li><Link to="/mock-tests" className="hover:text-brand-400 transition-colors">Practice Mock Tests</Link></li>
              <li><Link to="/subject-tests" className="hover:text-brand-400 transition-colors">Subject Wise Modules</Link></li>
              <li><Link to="/blog" className="hover:text-brand-400 transition-colors">Career Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide text-sm uppercase">Institution</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About The Academy</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Administration</Link></li>
              <li><Link to="/disclaimer" className="hover:text-brand-400 transition-colors">Disclaimer</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Genomic Medical & Nursing Academy. All rights reserved.</p>
          <p className="mt-2">We are an independent educational portal. Information provided is for career guidance and educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
