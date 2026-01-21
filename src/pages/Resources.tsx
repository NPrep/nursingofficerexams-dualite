import React from 'react';
import { SectionTitle, Card, Breadcrumbs, Badge } from '../components/UIComponents';
import { resources } from '../data/mockData';
import { 
  FileText, 
  Download, 
  CheckCircle, 
  ExternalLink, 
  Activity, 
  Stethoscope, 
  HeartHandshake, 
  Users, 
  Baby, 
  Brain, 
  Apple, 
  Microscope,
  Clock,
  HelpCircle
} from 'lucide-react';
import { cn } from '../lib/utils';
import { SEO } from '../components/SEO';

// Map icon string names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Activity,
  Stethoscope,
  HeartHandshake,
  Users,
  Baby,
  Brain,
  Apple,
  Microscope
};

export const PYQPage = () => {
  // Group PYQs by tag
  const rrbPyqs = resources.pyqs.filter(p => p.tag === 'RRB');
  const choPyqs = resources.pyqs.filter(p => p.tag === 'CHO');
  const norcetPyqs = resources.pyqs.filter(p => p.tag === 'NORCET');

  const renderPyqSection = (title: string, items: typeof resources.pyqs, colorClass: string) => (
    <div className="mb-8">
      <h2 className={`text-xl font-bold mb-4 ${colorClass}`}>{title}</h2>
      <div className="space-y-3">
        {items.map((pyq, idx) => (
          <a 
            key={idx} 
            href={pyq.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <Card className="flex items-center justify-between hover:border-brand-300 group py-4">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-2 rounded text-gray-600">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 text-sm md:text-base">{pyq.title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-brand-600 hover:text-brand-800">
                View Paper <ExternalLink size={14} />
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Download Nursing Officer Previous Year Question Papers (PYQ) - Free PDF"
        description="Free download of previous year question papers for AIIMS NORCET, RRB Staff Nurse, ESIC, and CHO exams. Practice with official papers."
        canonical="/pyq"
      />
      <Breadcrumbs items={[{ label: 'Previous Year Questions' }]} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Nursing Officer Previous Year Question Papers</h1>
        <p className="text-gray-600 mb-8">
          Download free previous year question papers for AIIMS NORCET, RRB, ESIC, and State Staff Nurse exams. 
          Practicing these papers is crucial for understanding the exam pattern and difficulty level.
        </p>

        {renderPyqSection('RRB Staff Nurse PYQs', rrbPyqs, 'text-blue-700')}
        {renderPyqSection('AIIMS NORCET PYQs', norcetPyqs, 'text-red-700')}
        {renderPyqSection('CHO (Community Health Officer) PYQs', choPyqs, 'text-green-700')}
      </div>
    </div>
  );
};

export const MockTestPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Free Nursing Officer Mock Test Series 2026 - Online Practice"
        description="Attempt free online mock tests for AIIMS NORCET, RRB, and State Nursing exams. Real exam interface and latest pattern questions."
        canonical="/mock-tests"
      />
      <Breadcrumbs items={[{ label: 'Free Mock Tests' }]} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Free Nursing Officer Mock Test Series</h1>
        <p className="text-gray-600 mb-8">
          Attempt free online mock tests for nursing exams. Our test series includes subject-wise tests, mini mocks, and full-length papers based on the latest syllabus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.tests.map((test, idx) => (
            <a 
              key={idx} 
              href={test.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className={cn("border-t-4 transition-all hover:shadow-md", test.color)}>
                <div className="flex justify-between items-start mb-4">
                  <span className={cn("text-xs font-bold px-2 py-1 rounded uppercase tracking-wide bg-white/50")}>{test.tag}</span>
                  <ExternalLink size={16} className="opacity-50 group-hover:opacity-100" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{test.title}</h3>
                <p className="text-sm text-gray-600 mb-6">Full Length Mock • Latest Pattern</p>
                <div className="w-full bg-white/80 text-gray-800 py-2 rounded font-medium text-center border border-gray-200 group-hover:bg-white transition-colors">
                  Start Test Now
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SubjectTestsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Subject Wise Nursing Tests - Anatomy, MSN, OBG, Pedia"
        description="Practice subject-wise questions for Nursing Officer exams. Topic tests for Fundamentals of Nursing, Medical Surgical, Pediatrics, and more."
        canonical="/subject-tests"
      />
      <Breadcrumbs items={[{ label: 'Subject Wise Tests' }]} />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Subject Wise Nursing Tests</h1>
        <p className="text-gray-600 mb-8">
          Master each subject individually. Attempt topic-wise questions for Anatomy, MSN, OBG, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {resources.subjectTests.map((test, idx) => {
            const IconComponent = iconMap[test.icon || 'Activity'];
            
            return (
              <a 
                key={idx} 
                href={test.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <Card className="h-full hover:shadow-lg transition-all p-0 overflow-hidden border-0 shadow-sm ring-1 ring-gray-200">
                  {/* Colored Graphic Header */}
                  <div className={cn("h-24 flex items-center justify-center relative", test.color)}>
                    <div className="bg-white/20 p-3 rounded-full text-white backdrop-blur-sm">
                      <IconComponent size={32} />
                    </div>
                    <div className="absolute top-3 right-3 bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                      Free
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-900 mb-4 group-hover:text-brand-600 leading-tight min-h-[3.5rem]">
                      {test.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-1.5">
                        <HelpCircle size={14} className="text-gray-400" />
                        <span className="font-medium">{test.questions} Qs</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-gray-400" />
                        <span className="font-medium">{test.duration}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 w-full py-2 bg-gray-50 text-brand-600 text-sm font-semibold rounded text-center group-hover:bg-brand-50 transition-colors flex items-center justify-center gap-2">
                      Start Test <ExternalLink size={14} />
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
