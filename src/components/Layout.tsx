import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Exams', path: '/exams' },
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
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand-600 text-white p-2 rounded-lg shadow-sm group-hover:bg-brand-700 transition-colors">
              <GraduationCap size={28} />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">NursingOfficerExams</span>
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
        <div className="lg:hidden nprep-mobile-drawer">
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
        <div className="nprep-disclaimer-banner">
          Disclaimer: This is an independent educational portal and not an official government website. In association with NPrep.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 text-white">
              <GraduationCap size={24} />
              <span className="font-bold text-lg">NursingOfficerExams</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              The #1 Authority for Nursing Officer Exams in India. Your gateway to notifications, syllabus, and free preparation resources.
            </p>
            
            {/* NPrep Association Badge */}
            <div className="rounded-xl p-4 border border-brand-500/40 bg-gradient-to-r from-slate-800 to-slate-700 shadow-lg shadow-brand-900/20">
              <p className="text-xs text-brand-200 uppercase tracking-[0.18em] font-bold mb-3">In Association with</p>
              <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group rounded-lg border border-white/20 bg-white/10 px-3 py-2">
                <div className="bg-white text-brand-700 font-extrabold px-3 py-1.5 rounded-md text-base tracking-wide">NPrep</div>
                <span className="text-white font-semibold text-sm group-hover:text-brand-300 transition-colors">Nursing Prep India</span>
                <ExternalLink size={13} className="text-brand-200 group-hover:text-brand-300" />
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <p className="text-xs text-slate-500 tracking-wider font-bold mb-2">In association with NPrep</p>
              <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                <div className="bg-white text-brand-600 font-bold px-2 py-1 rounded text-sm">NPrep</div>
                <span className="text-white font-semibold text-sm group-hover:text-brand-400 transition-colors">Nursing Prep India</span>
                <ExternalLink size={12} className="text-slate-500 group-hover:text-brand-400" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide text-sm uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/exam/aiims-norcet" className="hover:text-brand-400 transition-colors">AIIMS NORCET</Link></li>
              <li><Link to="/exam/rrb-staff-nurse" className="hover:text-brand-400 transition-colors">RRB Staff Nurse</Link></li>
              <li><Link to="/exam/esic-nursing-officer" className="hover:text-brand-400 transition-colors">ESIC Nursing Officer</Link></li>
              <li><Link to="/exams" className="hover:text-brand-400 transition-colors">All Exams List</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide text-sm uppercase">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/pyq" className="hover:text-brand-400 transition-colors">Previous Year Papers</Link></li>
              <li><Link to="/mock-tests" className="hover:text-brand-400 transition-colors">Free Mock Tests</Link></li>
              <li><Link to="/subject-tests" className="hover:text-brand-400 transition-colors">Subject Wise Tests</Link></li>
              <li><Link to="/blog" className="hover:text-brand-400 transition-colors">Preparation Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide text-sm uppercase">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+916377639169" className="hover:text-brand-400 transition-colors">
                  +91 6377 6391 69
                </a>
              </li>
              <li>
                <a href="https://nprep.in/blogs?filter=NORCET+Success+Story" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">
                  Verified success stories
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-xs text-slate-500">
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
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
