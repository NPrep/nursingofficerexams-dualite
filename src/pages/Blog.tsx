import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/mockData';
import { Breadcrumbs, Badge } from '../components/UIComponents';
import { SEO } from '../components/SEO';

export const BlogList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Nursing Exam Preparation Blog - Strategy, Salary & Tips"
        description="Read expert articles on AIIMS NORCET preparation strategy, salary comparisons, booklists, and career guidance for nursing officers."
        canonical="/blog"
      />
      <Breadcrumbs items={[{ label: 'Blog' }]} />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Nursing Exam Preparation Blog</h1>
        <p className="text-gray-600 mb-10">Latest strategies, exam updates, and career guidance for nursing officers.</p>
        
        {/* Grid Layout: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <article key={idx} className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Image Section */}
              <div className="h-48 bg-gray-100 relative overflow-hidden group">
                 <img loading="lazy" 
                   src={blog.image} 
                   alt={blog.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute top-4 left-4">
                   <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm shadow-sm">{blog.category}</Badge>
                 </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 font-medium uppercase tracking-wide">
                  <span>{blog.date}</span>
                </div>
                
                {/* Updated Link to use ID as slug */}
                <Link to={`/blog/${blog.id}`} className="block">
                  <h2 className="text-lg font-bold text-gray-900 leading-snug hover:text-brand-600 line-clamp-2">
                    {blog.title}
                  </h2>
                </Link>
                
                <div className="mt-4 pt-4 border-t border-gray-100 mt-auto">
                  <Link to={`/blog/${blog.id}`} className="text-brand-600 text-sm font-semibold hover:underline inline-flex items-center">
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
