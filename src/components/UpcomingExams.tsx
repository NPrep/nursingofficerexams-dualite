import React from 'react';
import { upcomingExams } from '../data/mockData';
import { ExternalLink } from 'lucide-react';
import { SectionTitle } from './UIComponents';

export const UpcomingExams = () => {
  return (
    <section className="mb-16">
      <SectionTitle>Upcoming Nursing Exams 2025-26</SectionTitle>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/4">Exam Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/4">Conducting Body</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/4">Exam Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/4">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {upcomingExams.map((exam, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">{exam.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-700">{exam.body}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-700 font-medium">{exam.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a 
                      href={exam.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-brand-200 text-xs font-bold rounded-md text-brand-700 bg-brand-50 hover:bg-brand-100 transition-colors"
                    >
                      {exam.actionLabel} <ExternalLink size={12} className="ml-2" />
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
