import React from 'react';
import { upcomingExams } from '../data/mockData';
import { SectionTitle } from './UIComponents';

type UpcomingExamsProps = {
  query?: string;
};

const examBadgeStyles: Record<string, string> = {
  N: 'bg-blue-100 text-blue-700',
  R: 'bg-red-100 text-red-700',
  E: 'bg-green-100 text-green-700',
  D: 'bg-purple-100 text-purple-700',
  U: 'bg-amber-100 text-amber-700',
  J: 'bg-cyan-100 text-cyan-700',
};

export const UpcomingExams = ({ query = '' }: UpcomingExamsProps) => {
  const normalizedQuery = query.toLowerCase().trim();
  const filteredExams = upcomingExams.filter((exam) => {
    if (!normalizedQuery) {
      return true;
    }

    return [exam.name, exam.body, exam.date].some((value) => value.toLowerCase().includes(normalizedQuery));
  });

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
              {filteredExams.map((exam, idx) => {
                const examInitial = exam.name.charAt(0).toUpperCase();
                const isDatePending = exam.date.toLowerCase().includes('to be announced');

                return (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${examBadgeStyles[examInitial] ?? 'bg-gray-100 text-gray-700'}`}
                          aria-hidden="true"
                        >
                          {examInitial}
                        </span>
                        <div className="text-sm font-bold text-gray-900">{exam.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{exam.body}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {isDatePending ? (
                        <button className="text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline transition-colors" type="button">
                          Subscribe for updates
                        </button>
                      ) : (
                        <div className="text-sm text-gray-700 font-medium">{exam.date}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={exam.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-brand-200 text-xs font-bold rounded-md text-brand-700 bg-brand-50 hover:bg-brand-100 transition-colors"
                      >
                        {exam.actionLabel} <span className="ml-2" aria-hidden="true">↗</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-500">Last Updated: 18 February 2026</p>
    </section>
  );
};
