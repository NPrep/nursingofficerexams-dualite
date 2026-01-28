import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Exams', path: '/exams' },
    { name: 'Courses', path: '/courses' },
    { name: 'PYQs', path: '/pyq' },
    { name: 'Subject Tests', path: '/subject-tests' },
    { name: 'Mock Tests', path: '/mock-tests' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-brand-500 text-white p-1.5 rounded-md">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-gray-900">NursingOfficerExams</span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider">INDIA'S #1 NURSING EXAM PORTAL</span>
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
            className="lg:hidden p-2 text-gray-600"
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
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">NursingOfficerExams</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              The most trusted free resource for Nursing Officer aspirants in India. 
              We provide syllabus, notifications, PYQs, and strategy for AIIMS NORCET, RRB, ESIC, and State exams.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Popular Exams</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/exam/aiims-norcet" className="hover:text-brand-400">AIIMS NORCET</Link></li>
              <li><Link to="/exam/rrb-staff-nurse" className="hover:text-brand-400">RRB Staff Nurse</Link></li>
              <li><Link to="/exam/esic-nursing-officer" className="hover:text-brand-400">ESIC Nursing Officer</Link></li>
              <li><Link to="/exam/dsssb-nursing-officer" className="hover:text-brand-400">DSSSB Nursing Officer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Free Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/pyq" className="hover:text-brand-400">Previous Year Papers</Link></li>
              <li><Link to="/mock-tests" className="hover:text-brand-400">Free Mock Tests</Link></li>
              <li><Link to="/subject-tests" className="hover:text-brand-400">Subject Wise Tests</Link></li>
              <li><Link to="/blog" className="hover:text-brand-400">Exam Strategy Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal & Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400">Contact Us</Link></li>
              <li><Link to="/disclaimer" className="hover:text-brand-400">Disclaimer</Link></li>
              <li><span className="text-gray-500">+91 6377 6391 69</span></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar with NPrep Association */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright & Disclaimer */}
            <div className="text-xs text-gray-500 text-center md:text-left order-2 md:order-1">
              <p className="mb-1">&copy; {new Date().getFullYear()} NursingOfficerExams.com. All rights reserved.</p>
              <p>Not affiliated with any government body.</p>
            </div>

            {/* NPrep Association Badge */}
            <div className="flex flex-col items-center md:items-end order-1 md:order-2">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-semibold">In Association With</span>
              <a 
                href="https://nprep.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2"
                aria-label="Visit NPrep Website"
              >
                <span className="text-2xl font-bold text-white tracking-tight group-hover:text-brand-400 transition-colors">
                  NPrep
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
