import React from 'react';
import { upcomingExams } from '../data/mockData';
import { ExternalLink, Calendar, Building2 } from 'lucide-react';
import { SectionTitle } from './UIComponents';

export const UpcomingExams = () => {
  return (
    <section className="mb-16">
      <SectionTitle>Upcoming Nursing Exams 2025-26</SectionTitle>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-brand-800 uppercase tracking-wider">Exam Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-brand-800 uppercase tracking-wider">Conducting Body</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-brand-800 uppercase tracking-wider">Exam Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-brand-800 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {upcomingExams.map((exam, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                        {exam.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-gray-900">{exam.name}</div>
                        <div className="text-xs text-gray-500 md:hidden">{exam.body}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                    <div className="text-sm text-gray-700 flex items-center gap-2">
                      <Building2 size={14} className="text-gray-400" />
                      {exam.body}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-700 flex items-center gap-2">
                      <Calendar size={14} className="text-gray-400" />
                      {exam.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a 
                      href={exam.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-brand-700 bg-brand-100 hover:bg-brand-200 transition-colors"
                    >
                      Official Link <ExternalLink size={12} className="ml-1" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
