import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { blogs as blogMetaList } from '../data/mockData';
import { SEO } from '../components/SEO';
import { Breadcrumbs, Card, SectionTitle, Badge } from '../components/UIComponents';
import { Calendar, User, Clock, ChevronRight, ArrowRight, Share2 } from 'lucide-react';

export const BlogDetail = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;
  
  // If we have content but need meta from the list
  const meta = blogMetaList.find(b => b.id === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle TOC Click
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Schema Generation
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "NursingOfficerExams.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/512x512/4da3ff/ffffff?text=NOE"
      }
    },
    "datePublished": "2024-10-15", // In real app, parse post.date
    "dateModified": new Date().toISOString().split('T')[0]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <SEO 
        title={post.title}
        description={`Read our comprehensive guide on ${post.title}. Expert tips, syllabus, and strategy.`}
        canonical={`/blog/${post.id}`}
        type="article"
        image={post.image}
        schema={{...articleSchema, ...faqSchema}}
      />

      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200 pt-8 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: 'Blog', path: '/blog' }, { label: 'Strategy Guide' }]} />
          
          <div className="mt-6">
            <Badge type="brand" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>12 Min Read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar: Table of Contents (Sticky) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Table of Contents</h3>
              <nav className="space-y-1">
                {post.toc.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50 px-2 py-1.5 rounded transition-colors truncate"
                  >
                    {idx + 1}. {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 max-w-4xl">
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-10 shadow-sm">
              {/* Featured Image */}
              <img loading="lazy" 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-10"
              />

              {/* Blog Content Engine */}
              <article 
                className="prose prose-lg prose-blue max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* FAQ Section */}
              <section className="mt-16 pt-10 border-t border-gray-200" id="faq">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, idx) => (
                    <details key={idx} className="group bg-gray-50 border border-gray-200 rounded-lg p-5 cursor-pointer">
                      <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                        {faq.question}
                        <span className="transition-transform group-open:rotate-180 text-gray-400">â–¼</span>
                      </summary>
                      <p className="text-gray-700 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Related Articles */}
            <section className="mt-12">
              <SectionTitle>Related Articles</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogMetaList.slice(0, 4).map((blog, idx) => (
                  <Link key={idx} to={`/blog`} className="block group">
                    <Card className="h-full hover:shadow-md transition-all">
                      <Badge className="mb-3">{blog.category}</Badge>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-600 mb-2">
                        {blog.title}
                      </h3>
                      <div className="flex items-center text-brand-600 text-sm font-medium mt-4">
                        Read Guide <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </main>

        </div>
      </div>
    </div>
  );
};
