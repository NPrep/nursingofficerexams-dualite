import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const SectionTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-brand-500 pl-4", className)}>
    {children}
  </h2>
);

export const Card = ({ children, className, hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) => (
  <div className={cn(
    "bg-white rounded-lg border border-gray-200 p-6",
    hover && "hover:shadow-md transition-shadow duration-200",
    className
  )}>
    {children}
  </div>
);

export const Badge = ({ children, type = 'default' }: { children: React.ReactNode; type?: 'default' | 'success' | 'warning' | 'brand' }) => {
  const styles = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-800",
    brand: "bg-brand-50 text-brand-700",
  };
  
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", styles[type])}>
      {children}
    </span>
  );
};

export const InfoTable = ({ data }: { data: { label: string; value: string | React.ReactNode }[] }) => (
  <div className="overflow-hidden border border-gray-200 rounded-lg">
    <table className="min-w-full divide-y divide-gray-200">
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, idx) => (
          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
              {row.label}
            </td>
            <td className="px-6 py-4 text-sm text-gray-700 whitespace-pre-wrap">
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Breadcrumbs = ({ items }: { items: { label: string; path?: string }[] }) => (
  <nav className="flex mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li className="inline-flex items-center">
        <Link to="/" className="hover:text-brand-600">Home</Link>
      </li>
      {items.map((item, index) => (
        <li key={index}>
          <div className="flex items-center">
            <ChevronRight size={16} className="mx-1" />
            {item.path ? (
              <Link to={item.path} className="hover:text-brand-600 ml-1">{item.label}</Link>
            ) : (
              <span className="ml-1 text-gray-700 font-medium">{item.label}</span>
            )}
          </div>
        </li>
      ))}
    </ol>
  </nav>
);
